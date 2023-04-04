import { useSelector } from "react-redux";
import randonColorGenerator from "../../utils/randonColorGenerator";
import "./CardComponent.css";
import { EditOutlined, CloseCircleOutlined } from "@ant-design/icons";

function CardComponent(props) {
  const { theme } = useSelector((state) => state.config);
  const randonColorArray = [randonColorGenerator(), randonColorGenerator()];
  const { title, subtitle, img, editCallBack, deleteCallBack, id } = props;

  return (
    <div className="card" key={"card-" + id}>
      <div
        className="card-img"
        style={{
          background: `linear-gradient(to top, ${randonColorArray[0]} 0%, ${randonColorArray[1]} 100%)`,
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
        <li key={"li-edit-" + id}>
          <EditOutlined onClick={() => editCallBack(id)} />
        </li>
        <li key={"li-delete-" + id}>
          <CloseCircleOutlined onClick={() => deleteCallBack(id)} />
        </li>
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
