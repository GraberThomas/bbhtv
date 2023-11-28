import { ButtonHTMLAttributes } from 'react'
import clsx from 'clsx'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/20/solid'

export enum buttonDirection {
    RIGHT,
    LEFT,
    NONE,
}

export enum buttonSize {
    SM,
    BASE,
    XL,
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    bgColor: 'lightTransparent' | 'white' | 'blur' | 'link'
    direction: buttonDirection
    size: buttonSize
    double?: boolean
}

const getIcon = (dir: buttonDirection) => {
    if (dir === buttonDirection.NONE) return <></>
    if (dir === buttonDirection.RIGHT)
        return <ChevronRightIcon height={20} width={20} />
    return <ChevronLeftIcon height={20} width={20} />
}

const Button = ({
    bgColor,
    direction,
    double,
    size,
    children,
    ...props
}: ButtonProps) => {
    const { className: ignoredClassName, ...otherProps } = props
    return (
        <button
            className={clsx(
                clsx(
                    `textButtonNav flex items-center justify-center rounded-2xl border border-white border-opacity-0 transition duration-300 ease-in-out ${ignoredClassName}`,
                    {
                        'h-[30px] py-[5px] pl-[12px] pr-[8px]':
                            size === buttonSize.SM,
                        'h-[38px] py-[9px] pl-[16px] pr-[12px] ':
                            size === buttonSize.BASE,
                        'h-[44px] py-[12px] pl-[16px] pr-[12px]':
                            size === buttonSize.XL,
                    }
                ),
                {
                    'bg-white/25 text-white hover:border-opacity-40':
                        bgColor === 'blur',
                    'bg-transparent text-white hover:border-opacity-0':
                        bgColor === 'link',
                    'bg-white text-black hover:border-opacity-40':
                        bgColor === 'white',
                }
            )}
            {...otherProps}
        >
            {double && getIcon(direction)}
            {children}
            {getIcon(direction)}
        </button>
    )
}

export default Button
