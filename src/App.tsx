import { useState, FC } from 'react';
import './app.css';
import { Button, ButtonC } from './button';

export const App: FC = (): JSX.Element => {
    const [res, setRes] = useState<string>('');

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>): void => {
        setRes(res + event.currentTarget.value);
    };

    const result = (): void => {
        setRes(eval(res).toString());
    };
    const clear = (): void => {
        setRes('');
    };

    return (
        <div className="buttons_container">
            <div className="res">
                <p>{res}</p>
            </div>
            <ButtonC value="C" fun={clear}></ButtonC>
            <Button value="7" fun={handleClick}></Button>
            <Button value="8" fun={handleClick}></Button>
            <Button value="9" fun={handleClick}></Button>
            <Button value="/" fun={handleClick}></Button>
            <Button value="4" fun={handleClick}></Button>
            <Button value="5" fun={handleClick}></Button>
            <Button value="6" fun={handleClick}></Button>
            <Button value="*" fun={handleClick}></Button>
            <Button value="1" fun={handleClick}></Button>
            <Button value="2" fun={handleClick}></Button>
            <Button value="3" fun={handleClick}></Button>
            <Button value="-" fun={handleClick}></Button>
            <Button value="." fun={handleClick}></Button>
            <Button value="0" fun={handleClick}></Button>
            <Button value="=" fun={result}></Button>
            <Button value="+" fun={handleClick}></Button>
        </div>
    );
};
