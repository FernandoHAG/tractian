import { Modal } from "antd";
import axios from "axios";

import i18next from "../idiom/i18n";
const { t } = i18next;

const api = axios.create({
  baseURL: process.env.REACT_APP_API + "/companies",
});

async function getCompanies(callback) {
  const response = await api.get("").catch((error) => {
    Modal.error({
      title: t("api.companies.get.errorTitle"),
      content: t("api.companies.get.errorBody") + error.message,
    });
  });
  if (callback) callback(response.data);
  return response.data;
}

async function deleteCompany(id) {
  const response = await api.delete(api.getUri() + "/" + id).catch((error) => {
    Modal.error({
      title: t("api.companies.delete.errorTitle"),
      content: t("api.companies.delete.errorBody") + error.message,
    });
  });
  return response.data;
}

async function postCompany(newCompany) {
  const response = await api.post("", newCompany).catch((error) => {
    Modal.error({
      title: t("api.companies.post.errorTitle"),
      content: t("api.companies.post.errorBody") + error.message,
    });
  });
  return response.data;
}

// TODO - Discover what the back wants to recive
async function putCompany(company) {
  const response = await api.put("", { data: company }).catch((error) => {
    Modal.error({
      title: t("api.companies.put.errorTitle"),
      content: t("api.companies.put.errorBody") + error.message,
    });
  });
  return response.data;
}

// TODO - Discover what the back wants to recive
async function patchCompany(company) {
  const response = await api.patch("", company).catch((error) => {
    Modal.error({
      title: t("api.companies.patch.errorTitle"),
      content: t("api.companies.patch.errorBody") + error.message,
    });
  });
  return response.data;
}

const companiesService = { getCompanies, deleteCompany, postCompany, putCompany, patchCompany };
export default companiesService;
