import { useEffect, useState } from "react";
import workordersService from "../../../../services/workorders.service";
import CardComponent from "../../../../components/CardComponent/CardComponent";
import MainCard from "../../../../components/MainCard/MainCard";
import "./WorkordersListComponent.css";
import Title from "antd/es/typography/Title";
import { useTranslation } from "react-i18next";
import { Space } from "antd";
import MainCardPagination from "../../../../components/MainCardPagination/MainCardPagination";

function WorkordersListComponent(porps) {
  const { t } = useTranslation();
  const [workorders, setWorkorders] = useState([]);
  const workordersCallAPI = async () => {
    setWorkorders(await workordersService.getWorkorders());
  };

  const deleteWorkorder = async (id) => {
    await workordersService.deleteWorkorders(id);
    setWorkorders(await workordersService.getWorkorders());
  };

  useEffect(() => {
    workordersCallAPI();
  }, []);

  const generateCard = () => {
    return workorders.map((workorder, index) => {
      return (
        <CardComponent
          key={"CardComponent-" + workorder?.id}
          title={t("workordersList.defaultTitle")}
          subtitle={"id: " + workorder?.id}
          img={<Title style={{ textAlign: "center", textShadow: "#7a7a7a 1px 1px 20px" }}>{workorder?.name}</Title>}
          editCallBack={() => {
            console.log("editCallBack: ");
          }}
          deleteCallBack={() => {
            deleteWorkorder(workorder?.id);
          }}
        />
      );
    });
  };

  return (
    <MainCard>
      <Title className="title-screen">{t("workordersList.defaultTitle")}</Title>
      <Space direction="horizontal">
        <MainCardPagination cards={generateCard()} />
      </Space>
    </MainCard>
  );
}

export default WorkordersListComponent;
