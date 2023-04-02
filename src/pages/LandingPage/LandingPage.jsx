// import { Layout, Space, Typography } from "antd";
import { Layout, Space } from "antd";
import companiesService from "../../services/companies.service";
import { Content, Footer, Header } from "antd/es/layout/layout";
import HeaderComponent from "../../components/HeaderComponent/HeaderComponent";
import "./LandingPage.css";
import { Component } from "react";
import MainCard from "../../components/MainCard/MainCard";
import FooterComponent from "../../components/FooterComponent/FooterComponent";
// const { Text, Link } = Typography;

class LandingPage extends Component {
  render() {
    companiesService.getCompanies();
    return (
      <Space direction="vertical" style={{ width: "100%" }} size={[0, 48]}>
        <Layout>
          <Header className="bg-color-blue header-height">
            <HeaderComponent />
          </Header>
          <Content className="content-style">
            <MainCard></MainCard>
          </Content>
          <Footer className="bg-color-blue">
            <FooterComponent />
          </Footer>
        </Layout>
      </Space>
    );
  }
}

export default LandingPage;
