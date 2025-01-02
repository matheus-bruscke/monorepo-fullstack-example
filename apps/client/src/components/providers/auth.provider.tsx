'use client'

import { SessionProvider } from 'next-auth/react'
import type React from 'react'

type sessionProps = {
	children: React.ReactNode
}
function NextAuthSessionProvider({ children }: sessionProps) {
	return <SessionProvider>{children as JSX.Element}</SessionProvider>
}

export default NextAuthSessionProvider
