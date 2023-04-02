import React, { Component } from "react";
import "./FooterComponent.css";
import { Select, Space } from "antd";
import Flag from "react-world-flags";
import i18next from "../../idiom/i18n";
const { t } = i18next;

class FooterComponent extends Component {
  idiomOptions = [
    {
      value: "br",
      label: (
        <Space direction="horizontal">
          <Flag code="BRA" height="13" />
          br
        </Space>
      ),
    },
    {
      value: "en",
      label: (
        <Space direction="horizontal">
          <Flag code="USA" height="9" />
          en
        </Space>
      ),
    },
  ];

  render() {
    return (
      <Space direction="horizontal">
        <Select
          className="idiom-selector"
          options={this.idiomOptions}
          placeholder={t("footer.languageSelector.placeholder")}
          placement={"topRight"}
        />
      </Space>
    );
  }
}
export default FooterComponent;
