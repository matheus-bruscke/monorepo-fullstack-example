import UserInfo from '@/features/users/components/user.info'
import UsersList from '@/features/users/components/users.list'
import { trpc } from '@/lib/trpc/server'

export default async function Home() {
	const users = await trpc.users.getAll.query()

	return (
		<main>
			<div className="text-ds-brand-primary text-2xl">Hello world!</div>
			<UserInfo />
			<UsersList />
			{JSON.stringify(users)}
		</main>
	)
}