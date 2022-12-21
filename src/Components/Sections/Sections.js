import React, { useState } from "react";
import "./Sections.scss";
import Food from "../../Asset/Sections/Food.png";
import Beverage from "../../Asset/Sections/Beverage.jpg";
import liquor from "../../Asset/Sections/liquor.png";
import Menu from "../Menu/Menu";

function Sections() {
  const [isShow, setisShow] = useState(false);
  const handleClick = () => {
    setisShow(!isShow);
  };
  if (isShow == true) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "auto";
  }
  return (
    <>
      <div className="Sections-main-container">
        <div className="section-parent-container" id="1">
          <div className="section-sub-container" id="2">
            <div className="section-container" id="3">
              <div className="section-content" onClick={handleClick} id="5">
                <div className="section-tag">Food</div>
                <img src={Food} alt="" />
              </div>
            </div>
          </div>
        </div>

        <div className="section-parent-container">
          <div className="section-sub-container">
            <div className="section-container">
              <div className="section-content">
                <div className="section-tag">Beverages</div>
                <img src={Beverage} alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="section-parent-container">
          <div className="section-sub-container">
            <div className="section-container">
              <div className="section-content">
                <div className="section-tag">Liquor</div>
                <img src={liquor} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      {isShow && <Menu handleClick={handleClick} />}
    </>
  );
}

export default Sections;
