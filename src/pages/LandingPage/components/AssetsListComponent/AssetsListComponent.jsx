import { useEffect, useState } from "react";
import assetsService from "../../../../services/assets.service";
import CardComponent from "../../../../components/CardComponent/CardComponent";
import MainCard from "../../../../components/MainCard/MainCard";
import "./AssetsListComponent.css";
import Title from "antd/es/typography/Title";
import { useTranslation } from "react-i18next";
import { Space } from "antd";

function AssetsListComponent(porps) {
  const { t } = useTranslation();
  const [assets, setAssets] = useState([]);
  const assetsCallAPI = async () => {
    setAssets(await assetsService.getAssets());
  };

  const deleteCompany = async (id) => {
    await assetsService.deleteAssets(id);
    setAssets(await assetsService.getAssets());
  };

  useEffect(() => {
    assetsCallAPI();
  }, []);

  return (
    <MainCard>
      <Title className="title-screen">{t("assetsList.defaultTitle")}</Title>
      <Space direction="horizontal">
        {assets.map((company, index) => {
          return (
            <CardComponent
              key={"CardComponent-" + company?.id}
              title={t("assetsList.defaultTitle")}
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

export default AssetsListComponent;
