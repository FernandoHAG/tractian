import randonColorGenerator from "../../utils/randonColorGenerator";
import "./CardComponent.css";
import { EditOutlined, CloseCircleOutlined } from "@ant-design/icons";

function CardComponent(props) {
  const randonColorArray = [randonColorGenerator(), randonColorGenerator()];
  const { title, subtitle, img, editCallBack, deleteCallBack, id } = props;

  return (
    <div className="card" key={"card-" + id}>
      <div
        className="card-img"
        style={{ background: `linear-gradient(to top, ${randonColorArray[0]} 0%, ${randonColorArray[1]} 100%)` }}
        key={"card-img-" + id}
      >
        {img ?? img}
      </div>
      <ul className="social-media" key={"ul-" + id}>
        <li key={"li-edit-" + id}>
          <EditOutlined onClick={() => editCallBack(id)} />
        </li>
        <li key={"li-delete-" + id}>
          <CloseCircleOutlined onClick={() => deleteCallBack(id)} />
        </li>
      </ul>
      <div className="card-info" key={"card-info-" + id}>
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
