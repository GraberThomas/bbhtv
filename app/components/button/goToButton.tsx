'use client'

import React, { useEffect } from 'react'
import Button, { ButtonProps } from '@/app/ui/buttons/Button'
import { useRouter } from 'next/navigation'

interface GoToButtonProps extends ButtonProps {
    href: string
}

const GoToButton = (props: GoToButtonProps) => {
    const [mounted, setMounted] = React.useState(false)
    const router = useRouter()

    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) return null
    return (
        <Button
            onClick={() => {
                router.push(props.href)
            }}
            {...props}
        />
    )
}

export default GoToButton
