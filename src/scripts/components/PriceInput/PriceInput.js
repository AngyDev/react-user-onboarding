import React, { useContext, useState } from 'react';
import { TranslationContext } from '../../context/TranslationContext';


export default function PriceInput(props) {

    const [isEditing, setIsEditing] = useState(false);
    const [translation] = useContext(TranslationContext);

    const formatter = new Intl.NumberFormat(translation.locales, {
        style: 'currency',
        currency: translation.currency,
    });

    const toggleEditing = () => {
        setIsEditing(!isEditing);
    }

    return (
        <label data-testid="price-input" htmlFor={props.name} className="form__label flex flex-col">{props.label}
            {isEditing ? (
                <input
                    className="form__element form__input"
                    type="number"
                    name={props.name}
                    min={props.min}
                    max={props.max}
                    onBlur={toggleEditing}
                    value={props.value}
                    placeholder="$0,00"
                    onChange={props.onChange}
                />
            ) : (
                <input
                    data-testid="price-input-input"
                    className="form__element form__input"
                    type="text"
                    value={formatter.format(props.value)}
                    placeholder="$0,00"
                    onFocus={toggleEditing}
                    readOnly
                />
            )}
        </label>
    )
}