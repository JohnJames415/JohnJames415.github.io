import React from 'react';
import styles from './textbutton.module.css'

type TextButtonProps = {
    text: string;
    onClick: React.MouseEventHandler<HTMLButtonElement>;
};

const TextButton : React.FC<TextButtonProps> = ({ text, onClick }) => {
    return (
        <button className={styles.textbutton} onClick={onClick}>{text}</button>
  );
};

export default TextButton;