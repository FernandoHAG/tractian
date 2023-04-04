import { useEffect, useState } from "react";
import unitsService from "../../../../services/units.service";
import CardComponent from "../../../../components/CardComponent/CardComponent";
import MainCard from "../../../../components/MainCard/MainCard";
import "./UnitsListComponent.css";
import Title from "antd/es/typography/Title";
import { useTranslation } from "react-i18next";
import { Space } from "antd";

function UnitsListComponent(porps) {
  const { t } = useTranslation();
  const [units, setUnits] = useState([]);
  const unitsCallAPI = async () => {
    setUnits(await unitsService.getUnits());
  };

  const deleteUnit = async (id) => {
    await unitsService.deleteUnits(id);
    setUnits(await unitsService.getUnits());
  };

  useEffect(() => {
    unitsCallAPI();
  }, []);

  return (
    <MainCard>
      <Title className="title-screen">{t("unitsList.defaultTitle")}</Title>
      <Space direction="horizontal">
        {units.map((unit, index) => {
          return (
            <CardComponent
              key={"CardComponent-" + unit?.id}
              title={t("unitsList.defaultTitle")}
              subtitle={"id: " + unit?.id}
              img={<Title style={{ textAlign: "center", textShadow: "#7a7a7a 1px 1px 20px" }}>{unit?.name}</Title>}
              editCallBack={() => {
                console.log("editCallBack: ");
              }}
              deleteCallBack={() => {
                deleteUnit(unit?.id);
              }}
            />
          );
        })}
      </Space>
    </MainCard>
  );
}

export default UnitsListComponent;
