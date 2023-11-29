'use client'

import React, { useEffect } from 'react'
import Button, { ButtonProps } from '@/app/ui/buttons/Button'
import { useRouter } from 'next/navigation'

const ReturnButton = (props: ButtonProps) => {
    const [mounted, setMounted] = React.useState(false)
    const router = useRouter()

    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) return null
    return (
        <Button
            onClick={() => {
                console.log('router', router)
                router.back()
            }}
            {...props}
        />
    )
}

export default ReturnButton
