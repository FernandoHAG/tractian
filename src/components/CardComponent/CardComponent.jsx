import "./CardComponent.css";
import { EditOutlined, CloseCircleOutlined } from "@ant-design/icons";

function CardComponent(props) {
  const {
    title,
    subtitle,
    color1,
    color2,
    img,
    editCallBack,
    deleteCallBack,
    id,
  } = props;

  return (
    <div className="card">
      <div className="card-img">{img ?? <img src={img} />}</div>
      <ul className="social-media">
        <li>
          <EditOutlined onClick={() => editCallBack(id)} />
        </li>
        <li>
          <CloseCircleOutlined onClick={() => deleteCallBack(id)} />
        </li>
      </ul>
      <div className="card-info">
        <p className="title">{title}</p>
        <p className="subtitle">{subtitle}</p>
      </div>
    </div>
  );
}

export default CardComponent;
