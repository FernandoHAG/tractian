import React, { useState, useEffect } from "react";
import { Layout, Space } from "antd";
import companiesService from "../../services/companies.service";
import { Content, Footer, Header } from "antd/es/layout/layout";
import HeaderComponent from "../../components/HeaderComponent/HeaderComponent";
import "./LandingPage.css";
import MainCard from "../../components/MainCard/MainCard";
import FooterComponent from "../../components/FooterComponent/FooterComponent";
import CardComponent from "../../components/CardComponent/CardComponent";

function LandingPage() {
  const [companies, setCompanies] = useState([]);
  const companisCallAPI = async () => {
    setCompanies(await companiesService.getCompanies());
  };

  useEffect(() => {
    companisCallAPI();
  }, []);

  return (
    <Space direction="vertical" style={{ width: "100%" }} size={[0, 48]}>
      <Layout>
        <Header className="bg-color-blue header-height">
          <HeaderComponent />
        </Header>
        <Content className="content-style">
          <MainCard>
            <CardComponent
              title={"titulo"}
              subtitle={"Sub-titulo"}
              img={<p>{companies[0]?.name}</p>}
              editCallBack={() => {
                console.log("editCallBack");
              }}
              deleteCallBack={() => {
                console.log("deleteCallBack");
              }}
            >
              {"Companies: " + companies[0]?.name}
            </CardComponent>
          </MainCard>
        </Content>
        <Footer className="bg-color-blue">
          <FooterComponent />
        </Footer>
      </Layout>
    </Space>
  );
}

export default LandingPage;
