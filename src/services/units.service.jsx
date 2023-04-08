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

async function deleteUnit(id) {
  const response = await api.delete(api.getUri() + "/" + id).catch((error) => {
    Modal.error({
      title: t("api.units.delete.errorTitle"),
      content: t("api.units.delete.errorBody") + error.message,
    });
  });
  return response.data;
}

async function postUnit(newUnit) {
  const response = await api.post("", newUnit).catch((error) => {
    Modal.error({
      title: t("api.units.post.errorTitle"),
      content: t("api.units.post.errorBody") + error.message,
    });
  });
  return response.data;
}

// TODO - Discover what the back wants to recive
async function putUnit(asset) {
  const response = await api.put("", { data: asset }).catch((error) => {
    Modal.error({
      title: t("api.units.put.errorTitle"),
      content: t("api.units.put.errorBody") + error.message,
    });
  });
  return response.data;
}

// TODO - Discover what the back wants to recive
async function patchUnit(asset) {
  const response = await api.patch("", asset).catch((error) => {
    Modal.error({
      title: t("api.units.patch.errorTitle"),
      content: t("api.units.patch.errorBody") + error.message,
    });
  });
  return response.data;
}

const unitsService = { getUnits, deleteUnit, postUnit, putUnit, patchUnit };
export default unitsService;
