import React from "react";
import "./HeaderComponent.css";
import { BankOutlined, DollarOutlined, TeamOutlined, UserOutlined, FileDoneOutlined } from "@ant-design/icons";
import logoImage from "../../files/images/tractian_logo.jpg";
import { Avatar, Segmented, Space } from "antd";
import randonColorGenerator from "../../utils/randonColorGenerator";
import { useTranslation } from "react-i18next";

const randonColorArrayToKeepThisSection = [
  randonColorGenerator(),
  randonColorGenerator(),
  randonColorGenerator(),
  randonColorGenerator(),
  randonColorGenerator(),
];

function HeaderComponent() {
  const { t } = useTranslation();

  const segmentedData = [
    {
      img: <Avatar style={{ backgroundColor: randonColorArrayToKeepThisSection[0] }} icon={<BankOutlined />}></Avatar>,
      name: t("header.Segmented.labelAssets"),
      value: "assets",
    },
    {
      img: (
        <Avatar style={{ backgroundColor: randonColorArrayToKeepThisSection[1] }} icon={<DollarOutlined />}></Avatar>
      ),
      name: t("header.Segmented.labelCompanies"),
      value: "companies",
    },
    {
      img: <Avatar style={{ backgroundColor: randonColorArrayToKeepThisSection[2] }} icon={<TeamOutlined />}></Avatar>,
      name: t("header.Segmented.labelUnits"),
      value: "units",
    },
    {
      img: <Avatar style={{ backgroundColor: randonColorArrayToKeepThisSection[3] }} icon={<UserOutlined />}></Avatar>,
      name: t("header.Segmented.labelUsers"),
      value: "users",
    },
    {
      img: (
        <Avatar style={{ backgroundColor: randonColorArrayToKeepThisSection[4] }} icon={<FileDoneOutlined />}></Avatar>
      ),
      name: t("header.Segmented.labelWorkorders"),
      value: "workordes",
    },
  ];

  function segmentedOptions() {
    const data = segmentedData.map((value, Index) => {
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

  return (
    <Space direction="horizontal">
      <img src={logoImage} className="logo-image box-shadow" alt="Logo" />
      <Space direction="vertical">
        <Segmented className="top-right box-shadow" options={segmentedOptions()} />
      </Space>
    </Space>
  );
}
export default HeaderComponent;
