'use client'

import {
    createContext,
    PropsWithChildren,
    useContext,
    useEffect,
    useState,
} from 'react'

import { fetchIsLive } from '@/app/libs/api/live'

const LiveContext = createContext<boolean>(false)

const LiveContextProvider = ({ children }: PropsWithChildren) => {
    const [isLive, setIsLive] = useState<boolean>(false)

    useEffect(() => {
        const refresh = setInterval(async () => {
            try {
                const live = await fetchIsLive()
                setIsLive(live.is_live)
            } catch (e) {}
        }, 3000)

        return () => {
            clearTimeout(refresh)
        }
    }, [])

    return (
        <LiveContext.Provider value={isLive}>{children}</LiveContext.Provider>
    )
}

export const useLive = () => {
    return useContext(LiveContext)
}

export default LiveContextProvider
