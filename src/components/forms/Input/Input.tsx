import React, { useState, useEffect } from 'react';
import styles from './Input.module.scss';

interface Props {
    /**
    * Text to display
    */
    children?: React.ReactNode,
    /**
    * Size of the text
    */
    name?: string;
    /**
    * Color to of the text
    */
    type?: string;
}

const Input = ({
    type = 'text',
}:Props) => {
    // const combinedStyles = `${styles[fontStyle]} xBig ${styles[color]}`;
    const [focused, setFocused] = useState(false);
    const [inputValue, setInputValue] = useState('');

    const handleFocus = () => {
        setFocused(true);
    };

    const handleBlur = () => {
        if (inputValue === '') {
            setFocused(false);
        }
    };

    useEffect(() => {
        handleBlur();
    }, []); // Se ejecuta solo al montar el componente

    return (
        <div className={`${styles['floating-label-input']} ${focused || inputValue !== '' ? styles.focused : ''}`}>
            <label htmlFor="input">{focused || inputValue === '' ? 'FirstName' : ''}</label>
            <input
                type={type}
                id="input"
                onFocus={handleFocus}
                onBlur={handleBlur}
                onChange={(e) => setInputValue(e.target.value)}
                value={inputValue}
            />
        </div>
    );
};
 
export default Input;