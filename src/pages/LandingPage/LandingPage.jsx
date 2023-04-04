import React, { useEffect } from "react";
import { Layout, Space, Carousel } from "antd";
import { Content, Footer, Header } from "antd/es/layout/layout";
import HeaderComponent from "../../components/HeaderComponent/HeaderComponent";
import "./LandingPage.css";
import FooterComponent from "../../components/FooterComponent/FooterComponent";
import CompaniesListComponent from "../../components/CompaniesListComponent/CompaniesListComponent";
import { useSelector } from "react-redux";
import MainCard from "../../components/MainCard/MainCard";

function LandingPage() {
  const { theme, selectedTab } = useSelector((state) => state.config);
  let crouselRef;

  useEffect(() => {
    console.log(crouselRef);
  }, [crouselRef]);

  useEffect(() => {
    const dontAnimate = false;
    switch (selectedTab) {
      case "assets":
        crouselRef.goTo(0, dontAnimate);
        break;
      case "companies":
        crouselRef.goTo(1, dontAnimate);
        break;
      case "units":
        crouselRef.goTo(2, dontAnimate);
        break;
      case "users":
        crouselRef.goTo(3, dontAnimate);
        break;
      case "workordes":
        crouselRef.goTo(4, dontAnimate);
        break;
      default:
        break;
    }
  }, [selectedTab, crouselRef]);

  return (
    <Space direction="vertical" style={{ width: "100%" }} size={[0, 48]}>
      <Layout>
        <Header className="bg-color-blue header-height">
          <HeaderComponent />
        </Header>
        <Content className="content-style">
          <div className={theme === "dark" ? " dark-background" : "background"}>
            <Carousel
              dots={false}
              ref={(node) => {
                crouselRef = node;
              }}
            >
              {/* Assets */}
              <MainCard />
              {/* Companies */}
              <CompaniesListComponent />
              {/* Units */}
              <MainCard />
              {/* Users */}
              <MainCard />
              {/* Workorders */}
              <MainCard />
            </Carousel>
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
