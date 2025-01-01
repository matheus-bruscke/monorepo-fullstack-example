'use client'
import type { ReactNode } from 'react'
import { TRPCProvider } from './trpc.provider'

const AppProvider = ({ children }: { children: ReactNode }) => {
	return <TRPCProvider>{children}</TRPCProvider>
}

export default AppProvider
