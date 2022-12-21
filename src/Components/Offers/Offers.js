import React from "react";
import "./Offers.scss";
import boffer from '../../Asset/boffer.jpg';
import soffer1 from '../../Asset/soffer1.png';
import soffer2 from '../../Asset/soffer2.png';

function Offers() {
    return <>
        <div className="offer-container">
            <div className="offer-sub-container">
                <img src={boffer} alt="" />
            </div>
            <div className="offer-sub-container">
                <div className="offer-child-container">
                    <img src={soffer1} alt="" />
                </div>
                <div className="offer-child-container">
                    <img src={soffer2} alt="" />
                </div>
            </div>
        </div>
    </>
}

export default Offers;
