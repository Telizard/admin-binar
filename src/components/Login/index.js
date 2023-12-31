import { Link } from "react-router-dom";
import cover from "../../assets/cover-login.png";
import FormLogin from "./FormLogin";
import ErrorLoginCard from "./ErrorLoginCard";
import "./style.css";

const Login = (props) => {
  const { errMsg } = props;

  return (
    <>
      <div className="signin">
        <div className="left">
          <img src={cover} alt="cover-login" />
        </div>
        <div className="right">
          <div className="signin-container">
            <div className="logo">
              <Link to="/">
                <img className="" src={require("../../assets/greybox.png")} alt="" />
              </Link>
            </div>
            <h2>Welcome Admin BCR!</h2>
            {errMsg && <ErrorLoginCard />}
            <FormLogin {...props} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
