import { useEffect, useState } from "react";
import companiesService from "../../../../services/companies.service";
import CardComponent from "../../../../components/CardComponent/CardComponent";
import MainCard from "../../../../components/MainCard/MainCard";
import "./CompaniesListComponent.css";
import Title from "antd/es/typography/Title";
import { useTranslation } from "react-i18next";
import { Button, Space } from "antd";
import { PlusCircleOutlined } from "@ant-design/icons";
import MainCardPagination from "../../../../components/MainCardPagination/MainCardPagination";
import PopupModal from "./components/PopupModal/PopupModal";

function CompaniesListComponent(porps) {
  const { t } = useTranslation();
  const [companies, setCompanies] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [companyToEdit, setCompanyToEdit] = useState(null);

  const handleCloseModal = () => {
    setCompanyToEdit(null);
    setIsModalVisible(false);
  };

  const handleCreateCompany = async (newCompany) => {
    await companiesService.postCompanies(newCompany);
    setCompanies(await companiesService.getCompanies());
    handleCloseModal();
  };

  const handleEditCompany = async (editedCompany) => {
    await companiesService.putCompany(editedCompany);
    handleCloseModal();
  };

  const companiesCallAPI = async () => {
    setCompanies(await companiesService.getCompanies());
  };

  const deleteCompany = async (id) => {
    await companiesService.deleteCompany(id);
    setCompanies(await companiesService.getCompanies());
  };

  useEffect(() => {
    companiesCallAPI();
  }, []);

  const generateCard = () => {
    return companies.map((company, index) => {
      return (
        <CardComponent
          key={"CardComponent-" + company?.id}
          title={t("companiesList.defaultTitle")}
          subtitle={"id: " + company?.id}
          img={<Title style={{ textAlign: "center", textShadow: "#7a7a7a 1px 1px 20px" }}>{company?.name}</Title>}
          editCallBack={() => {
            setCompanyToEdit(company);
            setIsModalVisible(true);
          }}
          deleteCallBack={() => {
            deleteCompany(company?.id);
          }}
          id={company?.id}
        />
      );
    });
  };

  return (
    <MainCard>
      <div className="add-button">
        <Button type="primary" shape="circle" onClick={() => setIsModalVisible(true)} icon={<PlusCircleOutlined />} />
      </div>
      <Title className="title-screen">{t("companiesList.defaultTitle")}</Title>
      <Space direction="horizontal">
        <MainCardPagination cards={generateCard()} />
      </Space>
      <PopupModal
        open={isModalVisible}
        onCancel={handleCloseModal}
        onOk={handleCreateCompany}
        onEdit={handleEditCompany}
        onClose={handleCloseModal}
        company={companyToEdit}
      />
    </MainCard>
  );
}

export default CompaniesListComponent;
