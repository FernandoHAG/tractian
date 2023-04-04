import { Modal } from "antd";
import axios from "axios";

import i18next from "../idiom/i18n";
const { t } = i18next;

const api = axios.create({
  baseURL: process.env.REACT_APP_API + "/units",
});

async function getUnits() {
  const response = await api.get("").catch((error) => {
    Modal.error({
      title: t("api.units.get.errorTitle"),
      content: t("api.units.get.errorBody") + error.message,
    });
  });
  return response.data;
}

async function deleteUnits(id) {
  const response = await api.delete(api.getUri() + "/" + id).catch((error) => {
    Modal.error({
      title: t("api.units.delete.errorTitle"),
      content: t("api.units.delete.errorBody") + error.message,
    });
  });
  return response.data;
}

const unitsService = { getUnits, deleteUnits };
export default unitsService;
