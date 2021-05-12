import React, { useState } from "react";

export default function PriceSlider(props) {

    const [prices] = useState([10000,50000,100000,200000,500000,1000000]);

    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
    });

    return (
        <div>
            <div className="slider slider--background">
                <div className="slider slider--active" style={{ left: 0, width: "75%" }}>
                    <span style={{ position: "absolute", left: "0%" }}>
                        <div className="slider__pointer"></div>
                    </span>
                    <span style={{ position: "absolute", left: "75%" }}>
                        <div className="slider__pointer"></div>
                    </span>
                </div>
            </div>
            <div className="slider__label flex flex-row">
            {
                prices.map((el,i) => (
                    <span key={i} >{formatter.format(el)}{i === prices.length-1 ? '+' : ''}</span>
                )
                )
            }
            </div>
        </div>
    )
}