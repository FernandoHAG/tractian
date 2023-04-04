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
      title: t("api.companies.get.errorTitle"),
      content: t("api.companies.get.errorBody") + error.message,
    });
  });
  return response.data;
}

async function deleteCompanies(id) {
  const response = await api.delete(api.getUri() + "/" + id).catch((error) => {
    Modal.error({
      title: t("api.companies.delete.errorTitle"),
      content: t("api.companies.delete.errorBody") + error.message,
    });
  });
  return response.data;
}

const companiesService = { getCompanies, deleteCompanies };
export default companiesService;
