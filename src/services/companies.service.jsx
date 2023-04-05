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

async function deleteCompany(id) {
  const response = await api.delete(api.getUri() + "/" + id).catch((error) => {
    Modal.error({
      title: t("api.companies.delete.errorTitle"),
      content: t("api.companies.delete.errorBody") + error.message,
    });
  });
  return response.data;
}

async function postCompanies(newCompany) {
  const response = await api.post("", newCompany).catch((error) => {
    Modal.error({
      title: t("api.companies.POST.errorTitle"),
      content: t("api.companies.POST.errorBody") + error.message,
    });
  });
  return response.data;
}

// TODO - Discover what the back wants to recive
async function putCompany(newCompany) {
  console.log("PUT-> ", newCompany);
  // const response = await api.put("", { data: newCompany }).catch((error) => {
  //   Modal.error({
  //     title: t("api.companies.put.errorTitle"),
  //     content: t("api.companies.put.errorBody") + error.message,
  //   });
  // });
  // return response.data;
}

const companiesService = { getCompanies, deleteCompany, postCompanies, putCompany };
export default companiesService;
