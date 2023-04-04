import { Modal } from "antd";
import axios from "axios";

import i18next from "../idiom/i18n";
const { t } = i18next;

const api = axios.create({
  baseURL: process.env.REACT_APP_API + "/workorders",
});

async function getWorkorders() {
  const response = await api.get("").catch((error) => {
    Modal.error({
      title: t("api.workorders.get.errorTitle"),
      content: t("api.workorders.get.errorBody") + error.message,
    });
  });
  return response.data;
}

async function deleteWorkorders(id) {
  const response = await api.delete(api.getUri() + "/" + id).catch((error) => {
    Modal.error({
      title: t("api.workorders.delete.errorTitle"),
      content: t("api.workorders.delete.errorBody") + error.message,
    });
  });
  return response.data;
}

const workordersService = { getWorkorders, deleteWorkorders };
export default workordersService;
