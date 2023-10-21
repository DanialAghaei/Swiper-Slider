import { AiOutlineExclamation } from "react-icons/ai";
import "./Card.css";
const card = () => {
  return (
    <div className="card">
      <div className="img"></div>
      <div className="info">
        <p className="package">دوره مقدماتی افتر افکت</p>
        <div className="teacher">
          <p>مدرس:یاسر نامی</p>
          <span>&#9733;&#9733;&#9733;</span>
        </div>
        <p>3.000.000</p>
        <div className="sign-in">
          <button>ثبت نام</button>
          <div className="parent-exclamation">
            <AiOutlineExclamation className="exclamation" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default card;
