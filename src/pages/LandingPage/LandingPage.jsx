import React from "react";
import { Layout, Space } from "antd";
import { Content, Footer, Header } from "antd/es/layout/layout";
import HeaderComponent from "../../components/HeaderComponent/HeaderComponent";
import "./LandingPage.css";
import FooterComponent from "../../components/FooterComponent/FooterComponent";
import CompaniesListComponent from "../../components/CompaniesListComponent/CompaniesListComponent";
import { useSelector } from "react-redux";

function LandingPage() {
  const { theme } = useSelector((state) => state.config);
  return (
    <Space direction="vertical" style={{ width: "100%" }} size={[0, 48]}>
      <Layout>
        <Header className="bg-color-blue header-height">
          <HeaderComponent />
        </Header>
        <Content className="content-style">
          <div className={theme === "dark" ? " dark-background" : "background"}>
            <CompaniesListComponent />
          </div>
        </Content>
        <Footer className="bg-color-blue">
          <FooterComponent />
        </Footer>
      </Layout>
    </Space>
  );
}

export default LandingPage;
