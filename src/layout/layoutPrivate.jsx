
import { Breadcrumb,  Layout, theme } from "antd";
import { useState } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import SideBarAdmin from "../components/admin/sidebar";
const { Header, Content, Footer, Sider } = Layout;

const LayoutPrivate = () => {
  const {pathname} = useLocation();
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <Layout
      style={{
        minHeight: "100vh",
      }}
    >
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
      >
        <Link to="/">
          <div className="demo-logo-vertical"></div>
        </Link>
        <SideBarAdmin />
      </Sider>
      <Layout>
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
          }}
        />
        <Content
          style={{
            margin: "0 16px",
          }}
        >
          <Breadcrumb
            style={{
              margin: "16px 0",
            }}
          >
            <Breadcrumb.Item>{pathname}</Breadcrumb.Item>
          </Breadcrumb>
          <div
            style={{
              padding: 24,
              minHeight: 360,
              background: colorBgContainer,
            }}
          >
            <Outlet />
          </div>
        </Content>
        <Footer
          style={{
            textAlign: "center",
          }}
        >
          ©2023 hungtv2951
        </Footer>
      </Layout>
    </Layout>
  );
};
export default LayoutPrivate;
