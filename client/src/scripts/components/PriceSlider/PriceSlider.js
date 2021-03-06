import React, { useContext, useEffect, useState } from "react";
import { TranslationContext } from "../../context/TranslationContext";

export default function PriceSlider(props) {

    const [prices] = useState([10000, 50000, 100000, 200000, 500000, 1000000]);
    const [startBar, setStartBar] = useState(0);
    const [endBar, setEndBar] = useState(1);
    const [translation] = useContext(TranslationContext);

    useEffect(() => {
        prices.forEach((item, i) => {
            if (props.start >= item) { setStartBar(i) }
        });
    });

    useEffect(() => {
        prices.forEach((item, i) => {
            if (props.end >= item) { setEndBar(i) }
        });
    });

    const formatter = new Intl.NumberFormat(translation.locales, {
        style: 'currency',
        currency: translation.currency,
    });

    return (
        <div data-testid="price-slider">
            <div className="slider">
                <div className="slider--background">
                    {prices.map((item, i) => ((i < (prices.length - 1)) && <span key={i} className="slider__line"></span>))}
                    {/* OK prices.map((item, i) => ((i < (prices.length - 1)) && ((i >= startBar && i < endBar) ? <span key={i} className="slider__line slider--active"></span> : <span key={i} className="slider__line"></span>)))*/}
                </div>
                <div className="slider__active-bar" style={{ left: startBar > 0 ? `${startBar * 20}%` : '0' }}>
                    {prices.map((item, i) => ((i < (prices.length - 1)) && ((i >= startBar && i < endBar) && <span key={i} className="slider__line--active"></span>)))}
                </div>
            </div>
            <div className="slider__label">
                {prices.map((item, i) => (
                    (i >= startBar && i <= endBar) ?
                        <span className="slider__label--active" key={i} >{formatter.format(item).replace(/\D00$/, '')}{i === prices.length - 1 && "+"}</span> :
                        <span key={i} >{formatter.format(item).replace(/\D00$/, '')}{i === prices.length - 1 && "+"}</span>
                )
                )}
            </div>
        </div>
    )
}