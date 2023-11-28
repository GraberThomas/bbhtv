import {ButtonHTMLAttributes, HTMLProps} from "react";
import clsx from "clsx";
import {ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/20/solid";
import {Base} from "next/dist/client/components/react-dev-overlay/internal/styles/Base";
import {ibm_plex_sans_bold} from "@/app/ui/fonts/fonts";


export enum buttonDirection {
    RIGHT,
    LEFT,
    NONE
}

export enum buttonSize {
    SM,
    BASE,
    XL,
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    bgColor: 'lightTransparent' | 'white' | 'blur' | 'link'
    direction: buttonDirection
    size: buttonSize
    double?: boolean
}

const getIcon = (dir: buttonDirection) => {
    if(dir === buttonDirection.NONE) return <></>
    if(dir === buttonDirection.RIGHT) return <ChevronRightIcon height={20} width={20}/>
    return <ChevronLeftIcon height={20} width={20}/>
}

const Button = ({bgColor, direction, double, size, children, ...props}: ButtonProps ) => {
    const { className: ignoredClassName, ...otherProps } = props;
    return (
        <button className={clsx(clsx(`border-opacity-0 border border-white rounded-2xl flex justify-center items-center ${ignoredClassName} transition ease-in-out duration-300 ${ibm_plex_sans_bold.className}`, {
            'h-[30px] py-[5px] pr-[8px] pl-[12px]': size ===  buttonSize.SM,
            'h-[38px] py-[9px] pr-[12px] pl-[16px] ': size === buttonSize.BASE,
            'h-[44px] py-[12px] pr-[12px] pl-[16px]': size === buttonSize.XL
        }), {
            'bg-white/25 hover:border-opacity-40': bgColor ==='blur',
            'bg-transparent hover:border-opacity-0': bgColor === 'link',
            'bg-white hover:border-opacity-40': bgColor === 'white'
        })}
                {...otherProps}
        >
            {double && getIcon(direction)}
            {children}
            {getIcon(direction)}
        </button>
    );
};

export default Button;