import { useEffect, useState } from "react";
import workordersService from "../../../../services/workorders.service";
import CardComponent from "../../../../components/CardComponent/CardComponent";
import MainCard from "../../../../components/MainCard/MainCard";
import "./WorkordersListComponent.css";
import Title from "antd/es/typography/Title";
import { useTranslation } from "react-i18next";
import { Button, Space } from "antd";
import { PlusCircleOutlined } from "@ant-design/icons";
import MainCardPagination from "../../../../components/MainCardPagination/MainCardPagination";
import PopupModal from "./components/PopupModal/PopupModal";
import { useDispatch } from "react-redux";
import { workordersChange } from "../../../../redux/dataSlice";

function WorkordersListComponent(props) {
  const { t } = useTranslation();
  const [workorders, setWorkorders] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [workorderToEdit, setWorkorderToEdit] = useState(null);
  const [updateData, setUpdateData] = useState(false);
  const dispatch = useDispatch();

  const handleCloseModal = () => {
    setWorkorderToEdit(null);
    setIsModalVisible(false);
  };

  const handleCreateWorkorder = async (newWorkorder) => {
    await workordersService.postWorkorder(newWorkorder);
    setWorkorders(await workordersService.getWorkorders(updateStore));
    handleCloseModal();
  };

  const handleEditWorkorder = async (editedWorkorder) => {
    await workordersService.patchWorkorder(editedWorkorder);
    handleCloseModal();
  };

  async function updateStore(newValue) {
    setUpdateData(true);
  }

  useEffect(() => {
    if (updateData) {
      dispatch(workordersChange(workorders));
      setUpdateData(false);
    }
  }, [workorders, dispatch, updateData]);

  const deleteWorkorder = async (id) => {
    await workordersService.deleteWorkorder(id);
    setWorkorders(await workordersService.getWorkorders(updateStore));
  };

  useEffect(() => {
    const workordersCallAPI = async () => {
      setWorkorders(await workordersService.getWorkorders(updateStore));
    };
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
            setWorkorderToEdit(workorder);
            setIsModalVisible(true);
          }}
          deleteCallBack={() => {
            deleteWorkorder(workorder?.id);
          }}
          id={workorder?.id}
        />
      );
    });
  };

  return (
    <MainCard>
      <div className="add-button">
        <Button type="primary" shape="circle" onClick={() => setIsModalVisible(true)} icon={<PlusCircleOutlined />} />
      </div>
      <Title className="title-screen">{t("workordersList.defaultTitle")}</Title>
      <Space direction="horizontal">
        <MainCardPagination cards={generateCard()} />
      </Space>
      <PopupModal
        open={isModalVisible}
        onCancel={handleCloseModal}
        onOk={handleCreateWorkorder}
        onEdit={handleEditWorkorder}
        onClose={handleCloseModal}
        workorder={workorderToEdit}
      />
    </MainCard>
  );
}

export default WorkordersListComponent;
