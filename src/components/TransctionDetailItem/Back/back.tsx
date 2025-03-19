import { Link } from "react-router-dom";
import "./style.css";

export const Back = () => {
  return (
    <Link className="link-to-list" to="/list">
      ❮
    </Link>
  );
};
