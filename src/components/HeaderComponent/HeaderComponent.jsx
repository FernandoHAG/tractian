import React, { Component } from "react";
import "./HeaderComponent.css";
import { BankOutlined, DollarOutlined, TeamOutlined, UserOutlined, FileDoneOutlined } from "@ant-design/icons";

import logoImage from "../../files/images/tractian_logo.jpg";
import { Avatar, Segmented, Space } from "antd";
import i18next from "../../idiom/i18n";
import randonColorGenerator from "../../utils/randonColorGenerator";
const { t } = i18next;

class HeaderComponent extends Component {
  segmentedData = [
    {
      img: <Avatar style={{ backgroundColor: randonColorGenerator() }} icon={<BankOutlined />}></Avatar>,
      name: t("header.Segmented.labelAssets"),
      value: "assets",
    },
    {
      img: <Avatar style={{ backgroundColor: randonColorGenerator() }} icon={<DollarOutlined />}></Avatar>,
      name: t("header.Segmented.labelCompanies"),
      value: "companies",
    },
    {
      img: <Avatar style={{ backgroundColor: randonColorGenerator() }} icon={<TeamOutlined />}></Avatar>,
      name: t("header.Segmented.labelUnits"),
      value: "units",
    },
    {
      img: <Avatar style={{ backgroundColor: randonColorGenerator() }} icon={<UserOutlined />}></Avatar>,
      name: t("header.Segmented.labelUsers"),
      value: "users",
    },
    {
      img: <Avatar style={{ backgroundColor: randonColorGenerator() }} icon={<FileDoneOutlined />}></Avatar>,
      name: t("header.Segmented.labelWorkorders"),
      value: "workordes",
    },
  ];

  segmentedOptions() {
    const data = this.segmentedData.map((value, Index) => {
      return {
        label: (
          <div style={{ padding: 4 }} key={"main-div-" + Index}>
            {value.img}
            <div key={"main-label-" + Index}>{value.name}</div>
          </div>
        ),
        value: value.value,
      };
    });
    return data;
  }

  render() {
    return (
      <Space direction="horizontal">
        <img src={logoImage} className="logo-image box-shadow" alt="Logo" />
        <Space direction="vertical">
          <Segmented className="top-right box-shadow" options={this.segmentedOptions()} />
        </Space>
      </Space>
    );
  }
}
export default HeaderComponent;
