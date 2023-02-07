import { useState, useEffect } from 'react';
import './app.css';

export const App = () => {
    const [res, setRes] = useState('');

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        setRes(res + e.currentTarget.value);
        console.log(typeof e.currentTarget.value);
    };

    const result = () => {
        setRes(eval(res).toString());
    };
    const clear = () => {
        setRes('');
    };

    return (
        <div>
            <div className="buttons_container">
                <div className="res">
                    <p>{res}</p>
                </div>

                <button className="cal_button c" value="c" onClick={clear}>
                    C
                </button>
                <button className="cal_button" value="7" onClick={handleClick}>
                    7
                </button>
                <button className="cal_button" value="8" onClick={handleClick}>
                    8
                </button>
                <button className="cal_button" value="9" onClick={handleClick}>
                    9
                </button>
                <button className="cal_button" value="/" onClick={handleClick}>
                    /
                </button>
                <button className="cal_button" value="4" onClick={handleClick}>
                    4
                </button>
                <button className="cal_button" value="5" onClick={handleClick}>
                    5
                </button>
                <button className="cal_button" value="6" onClick={handleClick}>
                    6
                </button>
                <button className="cal_button" value="*" onClick={handleClick}>
                    *
                </button>
                <button className="cal_button" value="1" onClick={handleClick}>
                    1
                </button>
                <button className="cal_button" value="2" onClick={handleClick}>
                    2
                </button>
                <button className="cal_button" value="3" onClick={handleClick}>
                    3
                </button>
                <button className="cal_button" value="-" onClick={handleClick}>
                    -
                </button>
                <button className="cal_button" value="," onClick={handleClick}>
                    ,
                </button>
                <button className="cal_button" value="0" onClick={handleClick}>
                    0
                </button>
                <button className="cal_button" value="=" onClick={result}>
                    =
                </button>
                <button className="cal_button" value="+" onClick={handleClick}>
                    +
                </button>
            </div>
        </div>
    );
};
