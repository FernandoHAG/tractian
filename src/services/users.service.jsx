import { Modal } from "antd";
import axios from "axios";

import i18next from "../idiom/i18n";
const { t } = i18next;

const api = axios.create({
  baseURL: process.env.REACT_APP_API + "/users",
});

async function getUsers() {
  const response = await api.get("").catch((error) => {
    Modal.error({
      title: t("api.users.get.errorTitle"),
      content: t("api.users.get.errorBody") + error.message,
    });
  });
  return response.data;
}

async function deleteUsers(id) {
  const response = await api.delete(api.getUri() + "/" + id).catch((error) => {
    Modal.error({
      title: t("api.users.delete.errorTitle"),
      content: t("api.users.delete.errorBody") + error.message,
    });
  });
  return response.data;
}

const usersService = { getUsers, deleteUsers };
export default usersService;
