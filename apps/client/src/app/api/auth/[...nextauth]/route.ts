import { env } from '@/lib/env'
import { trpc } from '@/lib/trpc/server'
import NextAuth, { type NextAuthOptions } from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'

const authOptions: NextAuthOptions = {
	providers: [
		GoogleProvider({
			clientId: env.GOOGLE_CLIENT_ID,
			clientSecret: env.GOOGLE_CLIENT_SECRET,
		}),
	],
	callbacks: {
		async signIn({ user, account, profile, credentials }) {
			if (!user?.email) {
				return Promise.reject(new Error('No email address provided'))
			}

			const foundUser = await trpc.users.getByEmail.query({ email: user.email })

			if (!foundUser) {
				await trpc.users.create.mutate({
					name: profile?.name ?? 'user',
					email: user.email,
					provider: 'GOOGLE',
					providerId: account?.providerAccountId,
				})

				return true
			}

			return true
		},
	},
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }
