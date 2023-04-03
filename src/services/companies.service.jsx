import { Modal } from "antd";
import axios from "axios";

import i18next from "../idiom/i18n";
const { t } = i18next;

const api = axios.create({
  baseURL: process.env.REACT_APP_API + "/companies",
});

async function getCompanies() {
  const response = await api.get("");
  return response.data;
}

const companiesService = { getCompanies };
export default companiesService;
