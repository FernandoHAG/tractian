import { Modal } from "antd";
import axios from "axios";

import i18next from "../idiom/i18n";
const { t } = i18next;

const api = axios.create({
  baseURL: process.env.REACT_APP_API + "/companies",
});

function getCompanies() {
  api
    .get("")
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      Modal.error({
        title: t("companyAPI.errorTitle"),
        content: t("companyAPI.errorBody") + error.message,
      });
    });
}

const companiesService = { getCompanies };
export default companiesService;
