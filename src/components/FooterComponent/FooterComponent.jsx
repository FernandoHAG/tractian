import React from "react";
import "./FooterComponent.css";
import { Select, Space, Switch } from "antd";
import Flag from "react-world-flags";
import { useDispatch, useSelector } from "react-redux";
import { changeIdiom, changeTheme } from "../../redux/configSlice";
import { useTranslation } from "react-i18next";
import { SmileTwoTone, SmileOutlined } from "@ant-design/icons";
import { Typography } from "antd";
const { Text } = Typography;

function FooterComponent() {
  const { theme } = useSelector((state) => state.config);
  const { t, i18n } = useTranslation();
  const dispatch = useDispatch();

  function updateIdiom(newIdiom) {
    dispatch(changeIdiom(newIdiom));
  }

  function updateTheme(isThemeLight) {
    dispatch(changeTheme(isThemeLight ? "light" : "dark"));
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
      <Text>{t("footer.themeSelector.themeLabel")}:</Text>
      <Switch
        className="themeSelector"
        checkedChildren={<SmileTwoTone />}
        unCheckedChildren={<SmileOutlined />}
        defaultChecked={theme === "light"}
        onChange={updateTheme}
      />
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
