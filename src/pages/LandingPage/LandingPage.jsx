import { Layout, Space } from "antd";
import companiesService from "../../services/companies.service";
import { Content, Footer, Header } from "antd/es/layout/layout";
import HeaderComponent from "../../components/HeaderComponent/HeaderComponent";
import "./LandingPage.css";
import ReactMainScreen from "../../components/ReactMainScreen/ReactMainScreen";
import { Component } from "react";

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
            <ReactMainScreen />
          </Content>
          <Footer className="bg-color-blue">.</Footer>
        </Layout>
      </Space>
    );
  }
}

export default LandingPage;
