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

async function deleteAsset(id) {
  const response = await api.delete(api.getUri() + "/" + id).catch((error) => {
    Modal.error({
      title: t("api.assets.delete.errorTitle"),
      content: t("api.assets.delete.errorBody") + error.message,
    });
  });
  return response.data;
}

async function postAsset(newAsset) {
  const response = await api.post("", newAsset).catch((error) => {
    Modal.error({
      title: t("api.assets.post.errorTitle"),
      content: t("api.assets.post.errorBody") + error.message,
    });
  });
  return response.data;
}

// TODO - Discover what the back wants to recive
async function putAsset(asset) {
  const response = await api.put("", { data: asset }).catch((error) => {
    Modal.error({
      title: t("api.assets.put.errorTitle"),
      content: t("api.assets.put.errorBody") + error.message,
    });
  });
  return response.data;
}

// TODO - Discover what the back wants to recive
async function patchAsset(asset) {
  const response = await api.patch("", asset).catch((error) => {
    Modal.error({
      title: t("api.assets.patch.errorTitle"),
      content: t("api.assets.patch.errorBody") + error.message,
    });
  });
  return response.data;
}

const assetsService = { getAssets, deleteAsset, postAsset, putAsset, patchAsset };
export default assetsService;
