import { useEffect, useState } from "react";
import companiesService from "../../../../services/companies.service";
import CardComponent from "../../../../components/CardComponent/CardComponent";
import MainCard from "../../../../components/MainCard/MainCard";
import "./CompaniesListComponent.css";
import Title from "antd/es/typography/Title";
import { useTranslation } from "react-i18next";
import { Space } from "antd";

function CompaniesListComponent(porps) {
  const { t } = useTranslation();
  const [companies, setCompanies] = useState([]);
  const companiesCallAPI = async () => {
    setCompanies(await companiesService.getCompanies());
  };

  const deleteCompany = async (id) => {
    await companiesService.deleteCompanies(id);
    setCompanies(await companiesService.getCompanies());
  };

  useEffect(() => {
    companiesCallAPI();
  }, []);

  return (
    <MainCard>
      <Title className="title-screen">{t("companiesList.defaultTitle")}</Title>
      <Space direction="horizontal">
        {companies.map((company, index) => {
          return (
            <CardComponent
              key={"CardComponent-" + company?.id}
              title={t("companiesList.defaultTitle")}
              subtitle={"id: " + company?.id}
              img={<Title style={{ textAlign: "center", textShadow: "#7a7a7a 1px 1px 20px" }}>{company?.name}</Title>}
              editCallBack={() => {
                console.log("editCallBack: ");
              }}
              deleteCallBack={() => {
                deleteCompany(company?.id);
              }}
            />
          );
        })}
      </Space>
    </MainCard>
  );
}

export default CompaniesListComponent;
