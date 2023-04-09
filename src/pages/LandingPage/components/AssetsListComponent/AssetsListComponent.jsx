import { useEffect, useState } from "react";
import assetsService from "../../../../services/assets.service";
import CardComponent from "../../../../components/CardComponent/CardComponent";
import MainCard from "../../../../components/MainCard/MainCard";
import "./AssetsListComponent.css";
import Title from "antd/es/typography/Title";
import { useTranslation } from "react-i18next";
import { Button, Space } from "antd";
import { PlusCircleOutlined } from "@ant-design/icons";
import MainCardPagination from "../../../../components/MainCardPagination/MainCardPagination";
import PopupModal from "./components/PopupModal/PopupModal";
import { assetsChange } from "../../../../redux/dataSlice";
import { useDispatch } from "react-redux";

function AssetsListComponent(props) {
  const { t } = useTranslation();
  const [assets, setAssets] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [assetToEdit, setAssetToEdit] = useState(null);
  const [updateData, setUpdateData] = useState(false);
  const dispatch = useDispatch();

  const handleCloseModal = () => {
    setAssetToEdit(null);
    setIsModalVisible(false);
  };

  const handleCreateAsset = async (newAsset) => {
    await assetsService.postAsset(newAsset);
    setAssets(await assetsService.getAssets(updateStore));
    handleCloseModal();
  };

  const handleEditAsset = async (editedAsset) => {
    await assetsService.patchAsset(editedAsset);
    handleCloseModal();
  };

  async function updateStore(newValue) {
    setUpdateData(true);
  }

  useEffect(() => {
    if (updateData) {
      dispatch(assetsChange(assets));
      setUpdateData(false);
    }
  }, [assets, dispatch, updateData]);

  const deleteAsset = async (id) => {
    await assetsService.deleteAsset(id);
    setAssets(await assetsService.getAssets(updateStore));
  };

  useEffect(() => {
    const assetsCallAPI = async () => {
      setAssets(await assetsService.getAssets(updateStore));
    };
    assetsCallAPI();
  }, []);

  const generateCard = () => {
    return assets.map((asset, index) => {
      return (
        <CardComponent
          key={"CardComponent-" + asset?.id}
          title={t("assetsList.defaultTitle")}
          subtitle={"id: " + asset?.id}
          img={<Title style={{ textAlign: "center", textShadow: "#7a7a7a 1px 1px 20px" }}>{asset?.name}</Title>}
          editCallBack={() => {
            setAssetToEdit(asset);
            setIsModalVisible(true);
          }}
          deleteCallBack={() => {
            deleteAsset(asset?.id);
          }}
          id={asset?.id}
        />
      );
    });
  };

  return (
    <MainCard>
      <div className="add-button">
        <Button type="primary" shape="circle" onClick={() => setIsModalVisible(true)} icon={<PlusCircleOutlined />} />
      </div>
      <Title className="title-screen">{t("assetsList.defaultTitle")}</Title>
      <Space direction="horizontal">
        <MainCardPagination cards={generateCard()} />
      </Space>
      <PopupModal
        open={isModalVisible}
        onCancel={handleCloseModal}
        onOk={handleCreateAsset}
        onEdit={handleEditAsset}
        onClose={handleCloseModal}
        asset={assetToEdit}
      />
    </MainCard>
  );
}

export default AssetsListComponent;
