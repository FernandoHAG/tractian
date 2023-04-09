import { Modal } from "antd";
import axios from "axios";

import i18next from "../idiom/i18n";
const { t } = i18next;

const api = axios.create({
  baseURL: process.env.REACT_APP_API + "/users",
});

async function getUsers(callback) {
  const response = await api.get("").catch((error) => {
    Modal.error({
      title: t("api.users.get.errorTitle"),
      content: t("api.users.get.errorBody") + error.message,
    });
  });
  if (callback) callback(response.data);
  return response.data;
}

async function getUser(id, callback) {
  const response = await api.get("/" + id).catch((error) => {
    Modal.error({
      title: t("api.users.get.errorTitle"),
      content: t("api.users.get.errorBody") + error.message,
    });
  });
  if (callback) callback(response.data);
  return response.data;
}

async function deleteUser(id) {
  const response = await api.delete(api.getUri() + "/" + id).catch((error) => {
    Modal.error({
      title: t("api.users.delete.errorTitle"),
      content: t("api.users.delete.errorBody") + error.message,
    });
  });
  return response.data;
}

async function postUser(newUser) {
  const response = await api.post("", newUser).catch((error) => {
    Modal.error({
      title: t("api.users.post.errorTitle"),
      content: t("api.users.post.errorBody") + error.message,
    });
  });
  return response.data;
}

// TODO - Discover what the back wants to recive
async function putUser(user) {
  const response = await api.put("", { data: user }).catch((error) => {
    Modal.error({
      title: t("api.users.put.errorTitle"),
      content: t("api.users.put.errorBody") + error.message,
    });
  });
  return response?.data;
}

// TODO - Discover what the back wants to recive
async function patchUser(user) {
  const response = await api.patch("", user).catch((error) => {
    Modal.error({
      title: t("api.users.patch.errorTitle"),
      content: t("api.users.patch.errorBody") + error.message,
    });
  });
  return response?.data;
}

const usersService = { getUsers, getUser, deleteUser, postUser, putUser, patchUser };
export default usersService;
