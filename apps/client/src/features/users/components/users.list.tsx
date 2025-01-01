'use client'

import { trpc } from '@/lib/trpc/client'

const UsersList = () => {
	const users = trpc.users.getAll.useQuery()

	return (
		<div>
			<h1 className="font-bold my-2">Users from DB</h1>
			{users.data?.map((user) => (
				<div key={user.id}>{user.name}</div>
			))}
		</div>
	)
}

export default UsersList
