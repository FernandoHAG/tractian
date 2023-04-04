import { Modal } from "antd";
import axios from "axios";

import i18next from "../idiom/i18n";
const { t } = i18next;

const api = axios.create({
  baseURL: process.env.REACT_APP_API + "/assets",
});

async function getAssets() {
  const response = await api.get("").catch((error) => {
    Modal.error({
      title: t("api.assets.get.errorTitle"),
      content: t("api.assets.get.errorBody") + error.message,
    });
  });
  return response.data;
}

async function deleteAssets(id) {
  const response = await api.delete(api.getUri() + "/" + id).catch((error) => {
    Modal.error({
      title: t("api.assets.delete.errorTitle"),
      content: t("api.assets.delete.errorBody") + error.message,
    });
  });
  return response.data;
}

const assetsService = { getAssets, deleteAssets };
export default assetsService;
