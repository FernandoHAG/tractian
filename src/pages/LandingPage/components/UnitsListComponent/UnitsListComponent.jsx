import { useEffect, useState } from "react";
import unitsService from "../../../../services/units.service";
import CardComponent from "../../../../components/CardComponent/CardComponent";
import MainCard from "../../../../components/MainCard/MainCard";
import "./UnitsListComponent.css";
import Title from "antd/es/typography/Title";
import { useTranslation } from "react-i18next";
import { Button, Space } from "antd";
import { PlusCircleOutlined } from "@ant-design/icons";
import MainCardPagination from "../../../../components/MainCardPagination/MainCardPagination";
import PopupModal from "./components/PopupModal/PopupModal";
import { useDispatch } from "react-redux";
import { unitsChange } from "../../../../redux/dataSlice";

function UnitsListComponent(props) {
  const { t } = useTranslation();
  const [units, setUnits] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [unitToEdit, setUnitToEdit] = useState(null);
  const [updateData, setUpdateData] = useState(false);
  const dispatch = useDispatch();

  const handleCloseModal = () => {
    setUnitToEdit(null);
    setIsModalVisible(false);
  };

  const handleCreateUnit = async (newUnit) => {
    await unitsService.postUnit(newUnit);
    setUnits(await unitsService.getUnits(updateStore));
    handleCloseModal();
  };

  const handleEditUnit = async (editedUnit) => {
    await unitsService.patchUnit(editedUnit);
    handleCloseModal();
  };

  async function updateStore(newValue) {
    setUpdateData(true);
  }

  useEffect(() => {
    if (updateData) {
      dispatch(unitsChange(units));
      setUpdateData(false);
    }
  }, [units, dispatch, updateData]);

  const unitsCallAPI = async () => {
    setUnits(await unitsService.getUnits(updateStore));
  };

  const deleteUnit = async (id) => {
    await unitsService.deleteUnit(id);
    setUnits(await unitsService.getUnits(updateStore));
  };

  useEffect(() => {
    unitsCallAPI();
  }, []);

  const generateCard = () => {
    return units.map((unit, index) => {
      return (
        <CardComponent
          key={"CardComponent-" + unit?.id}
          title={t("unitsList.defaultTitle")}
          subtitle={"from: " + unit?.id}
          img={<Title style={{ textAlign: "center", textShadow: "#7a7a7a 1px 1px 20px" }}>{unit?.name}</Title>}
          editCallBack={() => {
            setUnitToEdit(unit);
            setIsModalVisible(true);
          }}
          deleteCallBack={() => {
            deleteUnit(unit?.id);
          }}
          id={unit?.id}
        />
      );
    });
  };

  return (
    <MainCard>
      <div className="add-button">
        <Button type="primary" shape="circle" onClick={() => setIsModalVisible(true)} icon={<PlusCircleOutlined />} />
      </div>
      <Title className="title-screen">{t("unitsList.defaultTitle")}</Title>
      <Space direction="horizontal">
        <MainCardPagination cards={generateCard()} />
      </Space>
      <PopupModal
        open={isModalVisible}
        onCancel={handleCloseModal}
        onOk={handleCreateUnit}
        onEdit={handleEditUnit}
        onClose={handleCloseModal}
        unit={unitToEdit}
      />
    </MainCard>
  );
}

export default UnitsListComponent;
