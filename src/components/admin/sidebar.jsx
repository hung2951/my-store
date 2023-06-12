import { Menu } from 'antd';
import {
  FileOutlined,
  PieChartOutlined,
  UserOutlined,
  LogoutOutlined
} from "@ant-design/icons";
import { Link } from 'react-router-dom';
import { BiCategoryAlt } from 'react-icons/bi';
function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}
const items = [
  getItem(<Link to={`/admin`}>Thống kê</Link>, "1", <PieChartOutlined />),
  getItem("User", "sub1", <UserOutlined />, [
    getItem(<Link to={`/admin/user`}>Danh sách</Link>, "3"),
    getItem(<Link to={`/admin/user/add`}>Thêm mới</Link>, "4"),
  ]),
  getItem("Danh mục", "sub2", <BiCategoryAlt />, [
    getItem(<Link to={`/admin/categories`}>Danh sách</Link>, ""),
    getItem("Bill", "cate"),
    getItem("Alex"),
  ]),

  getItem("Files", "9", <FileOutlined />),
  getItem("Đăng xuất", "Logout", <LogoutOutlined />),
];

const SideBarAdmin = () => {
  return (
    <Menu
      theme="dark"
      defaultSelectedKeys={["1"]}
      mode="inline"
      items={items}
    />
  );
}

export default SideBarAdmin