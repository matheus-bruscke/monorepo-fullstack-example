'use client'
import { signIn, signOut, useSession } from 'next-auth/react'

function UserInfo() {
	const { data } = useSession()

	return (
		<div>
			<button
				className="p-2 bg-green-400 rounded-full text-black"
				onClick={() => signIn('google')}
			>
				Sign in with Google
			</button>
			<button
				className="p-2 bg-red-400 rounded-full text-black"
				onClick={() => signOut()}
			>
				Sign out
			</button>
			<div>Logged in as: {JSON.stringify(data)}</div>
		</div>
	)
}

export default UserInfo
