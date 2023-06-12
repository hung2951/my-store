import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { authAsyncGetAll } from "../../../redux/features/authSlice";
import { SearchOutlined } from "@ant-design/icons";
import { Button, Input, Space, Switch, Table } from "antd";
import { useRef, useState } from "react";
import Highlighter from "react-highlight-words";

const ListUser = () => {
  const { users } = useSelector((state) => state.auth);
  const dataTable = users.map((item) => {
    return {
      id: item._id,
      name: item.name,
      email: item.email,
      status: item.status ? "Đang kích hoạt" : "Vô hiệu hóa",
    };
  });
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(authAsyncGetAll());
  }, [dispatch]);
  const onChange = (checked) => {
    console.log(`${checked}`);
  };
  const [searchText, setSearchText] = useState("");
  const [searchedColumn, setSearchedColumn] = useState("");
  const searchInput = useRef(null);
  const handleSearch = (selectedKeys, confirm, dataIndex) => {
    confirm();
    setSearchText(selectedKeys[0]);
    setSearchedColumn(dataIndex);
  };
  const handleReset = (clearFilters) => {
    clearFilters();
    setSearchText("");
  };
  const getColumnSearchProps = (dataIndex) => ({
    filterDropdown: ({
      setSelectedKeys,
      selectedKeys,
      confirm,
      clearFilters,
      close,
    }) => (
      <div
        style={{
          padding: 8,
        }}
        onKeyDown={(e) => e.stopPropagation()}
      >
        <Input
          ref={searchInput}
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={(e) =>
            setSelectedKeys(e.target.value ? [e.target.value] : [])
          }
          onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
          style={{
            marginBottom: 8,
            display: "block",
          }}
        />
        <Space>
          <Button
            type="primary"
            onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
            icon={<SearchOutlined />}
            size="small"
            style={{
              width: 90,
            }}
          >
            Search
          </Button>
          <Button
            onClick={() => clearFilters && handleReset(clearFilters)}
            size="small"
            style={{
              width: 90,
            }}
          >
            Reset
          </Button>
          <Button
            type="link"
            size="small"
            onClick={() => {
              confirm({
                closeDropdown: false,
              });
              setSearchText(selectedKeys[0]);
              setSearchedColumn(dataIndex);
            }}
          >
            Filter
          </Button>
          <Button
            type="link"
            size="small"
            onClick={() => {
              close();
            }}
          >
            close
          </Button>
        </Space>
      </div>
    ),
    filterIcon: (filtered) => (
      <SearchOutlined
        style={{
          color: filtered ? "#1677ff" : undefined,
        }}
      />
    ),
    onFilter: (value, record) =>
      record[dataIndex].toString().toLowerCase().includes(value.toLowerCase()),
    onFilterDropdownOpenChange: (visible) => {
      if (visible) {
        setTimeout(() => searchInput.current?.select(), 100);
      }
    },
    render: (text) =>
      searchedColumn === dataIndex ? (
        <Highlighter
          highlightStyle={{
            backgroundColor: "#ffc069",
            padding: 0,
          }}
          searchWords={[searchText]}
          autoEscape
          textToHighlight={text ? text.toString() : ""}
        />
      ) : (
        text
      ),
  });
  const columns = [
    {
      title: "Tên",
      dataIndex: "name",
      key: "name",
      width: "30%",
      ...getColumnSearchProps("name"),
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
      width: "20%",
      ...getColumnSearchProps("email"),
    },
    {
      title: "Trạng thái",
      key: "status",
      render: (text) => (
        <div>
          <Switch defaultChecked={text.status} onChange={onChange} style={{marginRight:"10px"}}/>
          {text.status?"Đang hoạt động":"Vô hiệu hóa"}
        </div>
      ),
      sorter: (a, b) => a.status.length - b.status.length,
      sortDirections: ["descend", "ascend"],
    },
  ];
  return <Table columns={columns} dataSource={dataTable} />;
};

export default ListUser;
