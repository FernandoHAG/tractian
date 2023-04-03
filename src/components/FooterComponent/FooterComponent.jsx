import React from "react";
import "./FooterComponent.css";
import { Select, Space } from "antd";
import Flag from "react-world-flags";
import { useDispatch } from "react-redux";
import { changeIdiom } from "../../redux/idiomSlice";
import { useTranslation } from "react-i18next";

function FooterComponent() {
  const { t, i18n } = useTranslation();
  const dispatch = useDispatch();

  function updateIdiom(newIdiom) {
    dispatch(changeIdiom(newIdiom));
  }

  const idiomOptions = [
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
      value: "us",
      label: (
        <Space direction="horizontal">
          <Flag code="USA" height="9" />
          us
        </Space>
      ),
    },
  ];

  return (
    <Space direction="horizontal">
      <Select
        className="idiom-selector"
        options={idiomOptions}
        placeholder={t("footer.languageSelector.placeholder")}
        placement={"topRight"}
        onChange={updateIdiom}
        defaultValue={i18n.language}
      />
    </Space>
  );
}
export default FooterComponent;
