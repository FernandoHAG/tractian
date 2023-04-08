import { useEffect, useState } from "react";
import usersService from "../../../../services/users.service";
import CardComponent from "../../../../components/CardComponent/CardComponent";
import MainCard from "../../../../components/MainCard/MainCard";
import "./UsersListComponent.css";
import Title from "antd/es/typography/Title";
import { useTranslation } from "react-i18next";
import { Button, Space } from "antd";
import { PlusCircleOutlined } from "@ant-design/icons";
import MainCardPagination from "../../../../components/MainCardPagination/MainCardPagination";
import PopupModal from "./components/PopupModal/PopupModal";

function UsersListComponent(porps) {
  const { t } = useTranslation();
  const [users, setUsers] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [userToEdit, setUserToEdit] = useState(null);

  const handleCloseModal = () => {
    setUserToEdit(null);
    setIsModalVisible(false);
  };

  const handleCreateUser = async (newUser) => {
    await usersService.postUser(newUser);
    setUsers(await usersService.getUsers());
    handleCloseModal();
  };

  const handleEditUser = async (editedUser) => {
    await usersService.patchUser(editedUser);
    handleCloseModal();
  };

  const usersCallAPI = async () => {
    setUsers(await usersService.getUsers());
  };

  const deleteUser = async (id) => {
    await usersService.deleteUser(id);
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
            setUserToEdit(user);
            setIsModalVisible(true);
          }}
          deleteCallBack={() => {
            deleteUser(user?.id);
          }}
          id={user?.id}
        />
      );
    });
  };

  return (
    <MainCard>
      <div className="add-button">
        <Button type="primary" shape="circle" onClick={() => setIsModalVisible(true)} icon={<PlusCircleOutlined />} />
      </div>
      <Title className="title-screen">{t("usersList.defaultTitle")}</Title>
      <Space direction="horizontal">
        <MainCardPagination cards={generateCard()} />
      </Space>
      <PopupModal
        open={isModalVisible}
        onCancel={handleCloseModal}
        onOk={handleCreateUser}
        onEdit={handleEditUser}
        onClose={handleCloseModal}
        user={userToEdit}
      />
    </MainCard>
  );
}

export default UsersListComponent;
