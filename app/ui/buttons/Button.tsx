import {ButtonHTMLAttributes, HTMLProps} from "react";
import clsx from "clsx";
import {ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/20/solid";


export enum buttonDirection {
    RIGHT,
    LEFT
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    bgColor: 'lightTransparent' | 'white' | 'none'
    direction: buttonDirection
    double?: boolean
}

const getIcon = (dir: buttonDirection) => {
    if(buttonDirection.RIGHT) return <ChevronLeftIcon/>
    return <ChevronRightIcon/>
}

const Button = ({bgColor, direction, double, children, ...props}: ButtonProps ) => {
    return (
        <button className={clsx('', {
            'bg-white/25 ': bgColor ==='lightTransparent',
            'bg-transparent': bgColor === 'none',
            'bg-white': bgColor === 'white'
        })}
                {...props}
        >
            {double && getIcon(direction)}
            {children}
            {getIcon(direction)}
        </button>
    );
};

export default Button;