import { Modal } from "antd";
import axios from "axios";

import i18next from "../idiom/i18n";
const { t } = i18next;

const api = axios.create({
  baseURL: process.env.REACT_APP_API + "/companies",
});

async function getCompanies() {
  const response = await api.get("").catch((error) => {
    Modal.error({
      title: t("companyAPI.get.errorTitle"),
      content: t("companyAPI.get.errorBody") + error.message,
    });
  });
  return response.data;
}

async function deleteCompanies(id) {
  console.log(api.getUri() + "/" + id);
  const response = await api.delete(api.getUri() + "/" + id).catch((error) => {
    Modal.error({
      title: t("companyAPI.delete.errorTitle"),
      content: t("companyAPI.delete.errorBody") + error.message,
    });
  });
  return response.data;
}

const companiesService = { getCompanies, deleteCompanies };
export default companiesService;
