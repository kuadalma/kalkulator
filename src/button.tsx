import React from 'react';
import './app.css';

interface Props {
    value: string;
    fun(event: React.MouseEvent<HTMLButtonElement>): void;
}
interface PropsC {
    value: string;
    fun(): void;
}

export const Button = ({ value, fun }: Props): JSX.Element => {
    return (
        <button className="cal_button" value={value} onClick={fun}>
            {value}
        </button>
    );
};

export const ButtonC = ({ value, fun }: PropsC): JSX.Element => {
    return (
        <button className="cal_button c" value={value} onClick={fun}>
            {value}``
        </button>
    );
};
