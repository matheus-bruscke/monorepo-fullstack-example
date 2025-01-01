import { z } from "zod";
import { procedure, router } from "../trpc";
import { userSchema } from "./schemas";
import { UserService } from "./services";

const userService = new UserService();

const userProcedures = router({
	getAll: procedure.query(() => userService.getAllUsers()),

	create: procedure
		.input(
			userSchema.pick({
				name: true,
				email: true,
				password: true,
				provider: true,
				providerId: true,
			}),
		)
		.mutation(({ input }) =>
			userService.createUser({
				...input,
				password: input.password ?? null,
				providerId: input.providerId ?? null,
				provider: input.provider ?? null,
			}),
		),

	getUser: procedure
		.input(z.object({ id: z.string() }))
		.query(({ input, ctx }) => userService.getUser(input.id)),

	getByEmail: procedure
		.input(z.object({ email: z.string() }))
		.query(({ input, ctx }) => userService.getUserByEmail(input.email)),

	update: procedure
		.input(
			userSchema.pick({
				id: true,
				name: true,
				email: true,
				password: true,
			}),
		)
		.mutation(({ input: { id, ...data } }) => userService.updateUser(id, data)),

	authenticate: procedure
		.input(z.object({ email: z.string(), password: z.string() }))
		.query(({ input: { email, password } }) =>
			userService.authenticateUser(email, password),
		),
});

export { userProcedures };
