'use client'

import React from 'react'
import Button, { ButtonProps } from '@/app/ui/buttons/Button'
import { useRouter } from 'next/navigation'

const ReturnButton = (props: ButtonProps) => {
    const router = useRouter()

    return <Button {...props} onClick={() => router.back()} />
}

export default ReturnButton
