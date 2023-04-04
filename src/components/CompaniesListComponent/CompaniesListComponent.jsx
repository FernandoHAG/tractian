import { useEffect, useState } from "react";
import companiesService from "../../services/companies.service";
import CardComponent from "../CardComponent/CardComponent";
import MainCard from "../MainCard/MainCard";
import "./CompaniesListComponent.css";
import Title from "antd/es/typography/Title";
import { Space } from "antd";

function CompaniesListComponent(porps) {
  const [companies, setCompanies] = useState([]);
  const companisCallAPI = async () => {
    // setCompanies(await companiesService.getCompanies());
    setCompanies([
      {
        id: 1,
        name: "The Test Company",
      },
      {
        id: 2,
        name: "The other Test Company",
      },
    ]);
  };

  useEffect(() => {
    companisCallAPI();
  }, []);

  return (
    <MainCard>
      <Space direction="vertical">
        <Space direction="horizontal">
          {companies.map((company, index) => {
            return (
              <CardComponent
                key={"CardComponent-" + company?.id}
                title={"Company"}
                subtitle={"id: " + company?.id}
                img={<Title style={{ textAlign: "center", textShadow: "#7a7a7a 1px 1px 20px" }}>{company?.name}</Title>}
                editCallBack={(id) => {
                  console.log("editCallBack: ");
                }}
                deleteCallBack={(id) => {
                  console.log("deleteCallBack");
                }}
              />
            );
          })}
        </Space>
      </Space>
    </MainCard>
  );
}

export default CompaniesListComponent;
