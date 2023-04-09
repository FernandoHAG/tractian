import { useSelector } from "react-redux";
import randonColorGenerator from "../../utils/randonColorGenerator";
import "./CardComponent.css";
import { EditOutlined, CloseCircleOutlined, InfoCircleOutlined } from "@ant-design/icons";
import { useState } from "react";
import { Popover } from "antd";
import { useTranslation } from "react-i18next";

function CardComponent(props) {
  const { theme } = useSelector((state) => state.config);
  const [randomColor] = useState([randonColorGenerator(), randonColorGenerator()]);
  const { title, subtitle, img, editCallBack, deleteCallBack, id, showExtraDataCallBack } = props;
  const { t } = useTranslation();

  return (
    <div className="card" key={"card-" + id}>
      <div
        className="card-img"
        style={{
          background: `linear-gradient(to top, ${randomColor[0]} 0%, ${randomColor[1]} 100%)`,
          boxShadow:
            theme === "dark"
              ? "rgb(255 255 255 / 11%) 0px 0px 20px 5px, rgb(0, 0, 0) 0px 0px 20px 1px inset"
              : "0px 0px 20px 1px #ffffffff, inset 0px 0px 20px 1px #000",
        }}
        key={"card-img-" + id}
      >
        {img ?? img}
      </div>
      <ul className="action-buttons" key={"ul-" + id} id="icon-component">
        <Popover content={<div>{t("card.edit")}</div>}>
          <li key={"li-edit-" + id} onClick={() => editCallBack(id)}>
            <EditOutlined />
          </li>
        </Popover>
        {showExtraDataCallBack && (
          <Popover content={<div>{t("card.info")}</div>}>
            <li key={"li-info-" + id} onClick={() => showExtraDataCallBack(id)}>
              <InfoCircleOutlined />
            </li>
          </Popover>
        )}
        <Popover content={<div>{t("card.del")}</div>}>
          <li key={"li-delete-" + id} onClick={() => deleteCallBack(id)}>
            <CloseCircleOutlined />
          </li>
        </Popover>
      </ul>
      <div className={"card-info" + (theme === "light" ? " card-info-light" : "")} key={"card-info-" + id}>
        <p className="title" key={"title-" + id}>
          {title}
        </p>
        <p className="subtitle" key={"subtitle-" + id}>
          {subtitle}
        </p>
      </div>
    </div>
  );
}

export default CardComponent;
