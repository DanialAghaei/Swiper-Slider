import "./Sidebar.css";
import {
  AiOutlineArrowLeft,
  AiOutlineCaretLeft,
  AiOutlineCaretRight,
} from "react-icons/ai";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h1>
        دوره‌های
        <br />
        آموزشی
      </h1>
      <p>
        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده
        از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و
        سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی
      </p>
      <div className="show-all">
        <h4>مشاهده همه</h4>
        <AiOutlineArrowLeft className="ArrowLeft"/>
      </div>
      <div className="swiper-navigation">
        <AiOutlineCaretRight className="caret swiper-btn-next"  />
        <AiOutlineCaretLeft className="caret swiper-btn-prev"   />
      </div>
    </div>
  );
};

export default Sidebar;
