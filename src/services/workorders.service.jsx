import { Modal } from "antd";
import axios from "axios";

import i18next from "../idiom/i18n";
const { t } = i18next;

const api = axios.create({
  baseURL: process.env.REACT_APP_API + "/workorders",
});

async function getWorkorders(callback) {
  const response = await api.get("").catch((error) => {
    Modal.error({
      title: t("api.workorders.get.errorTitle"),
      content: t("api.workorders.get.errorBody") + error.message,
    });
  });
  if (callback) callback(response.data);
  return response.data;
}

async function getWorkorder(id, callback) {
  const response = await api.get("/" + id).catch((error) => {
    Modal.error({
      title: t("api.workorders.get.errorTitle"),
      content: t("api.workorders.get.errorBody") + error.message,
    });
  });
  if (callback) callback(response.data);
  return response.data;
}

async function deleteWorkorder(id) {
  const response = await api.delete(api.getUri() + "/" + id).catch((error) => {
    Modal.error({
      title: t("api.workorders.delete.errorTitle"),
      content: t("api.workorders.delete.errorBody") + error.message,
    });
  });
  return response.data;
}

async function postWorkorder(newWorkorder) {
  const response = await api.post("", newWorkorder).catch((error) => {
    Modal.error({
      title: t("api.users.post.errorTitle"),
      content: t("api.users.post.errorBody") + error.message,
    });
  });
  return response.data;
}

// TODO - Discover what the back wants to recive
async function putWorkorder(user) {
  const response = await api.put("", { data: user }).catch((error) => {
    Modal.error({
      title: t("api.users.put.errorTitle"),
      content: t("api.users.put.errorBody") + error.message,
    });
  });
  return response?.data;
}

// TODO - Discover what the back wants to recive
async function patchWorkorder(user) {
  const response = await api.patch("", user).catch((error) => {
    Modal.error({
      title: t("api.users.patch.errorTitle"),
      content: t("api.users.patch.errorBody") + error.message,
    });
  });
  return response?.data;
}

const workordersService = { getWorkorders, getWorkorder, deleteWorkorder, postWorkorder, putWorkorder, patchWorkorder };
export default workordersService;
