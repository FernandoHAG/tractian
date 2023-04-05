import { useEffect, useState } from "react";
import usersService from "../../../../services/users.service";
import CardComponent from "../../../../components/CardComponent/CardComponent";
import MainCard from "../../../../components/MainCard/MainCard";
import "./UsersListComponent.css";
import Title from "antd/es/typography/Title";
import { useTranslation } from "react-i18next";
import { Space } from "antd";
import MainCardPagination from "../../../../components/MainCardPagination/MainCardPagination";

function UsersListComponent(porps) {
  const { t } = useTranslation();
  const [users, setUsers] = useState([]);
  const usersCallAPI = async () => {
    setUsers(await usersService.getUsers());
  };

  const deleteUser = async (id) => {
    await usersService.deleteUsers(id);
    setUsers(await usersService.getUsers());
  };

  useEffect(() => {
    usersCallAPI();
  }, []);

  const generateCard = () => {
    return users.map((user, index) => {
      return (
        <CardComponent
          key={"CardComponent-" + user?.id}
          title={t("usersList.defaultTitle")}
          subtitle={"id: " + user?.id}
          img={<Title style={{ textAlign: "center", textShadow: "#7a7a7a 1px 1px 20px" }}>{user?.name}</Title>}
          editCallBack={() => {
            console.log("editCallBack: ");
          }}
          deleteCallBack={() => {
            deleteUser(user?.id);
          }}
        />
      );
    });
  };

  return (
    <MainCard>
      <Title className="title-screen">{t("usersList.defaultTitle")}</Title>
      <Space direction="horizontal">
        <MainCardPagination cards={generateCard()} />
      </Space>
    </MainCard>
  );
}

export default UsersListComponent;
