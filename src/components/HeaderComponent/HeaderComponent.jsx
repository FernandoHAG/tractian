import React, { Component } from "react";
import "./HeaderComponent.css";
import { UserOutlined } from "@ant-design/icons";

import logoImage from "../../files/images/tractian_logo.jpg";
import { Avatar, Segmented, Space } from "antd";

class HeaderComponent extends Component {
  segmentedData = [
    {
      img: <Avatar src="https://www.pikpng.com/pngl/m/66-660381_business-icon-company-name-icon-clipart.png" />,
      name: "Data 1",
    },
    { img: <Avatar style={{ backgroundColor: "#87d068" }} icon={<UserOutlined />}></Avatar>, name: "Data 2" },
    { img: <Avatar style={{ backgroundColor: "#f56a00" }}>K</Avatar>, name: "Data 3" },
  ];

  segmentedOptions() {
    const data = this.segmentedData.map((value, Index) => {
      return {
        label: (
          <div style={{ padding: 4 }} key={"main-div-" + Index}>
            {value[Index]?.img}
            <div key={"main-label-" + Index}>{value[Index]?.name}</div>
          </div>
        ),
        value: value[Index]?.name,
      };
    });
    console.log(data);
    return data;
  }

  render() {
    return (
      <Space direction="horizontal">
        <img src={logoImage} className="logo-image" alt="Logo" />
        <Space direction="vertical">
          <Segmented className="top-right" options={this.segmentedOptions()} />
        </Space>
      </Space>
    );
  }
}
export default HeaderComponent;
