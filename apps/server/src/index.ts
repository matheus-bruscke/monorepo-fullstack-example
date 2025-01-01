import { cors } from "@elysiajs/cors";
import { trpc } from "@elysiajs/trpc";
import { Elysia } from "elysia";

import { env } from "./lib/env";
import { router } from "./routes/trpc";
import { userProcedures } from "./routes/users";

const trpcRouter = router({
	users: userProcedures,
});

export type Router = typeof trpcRouter;

const app = new Elysia()
	.use(cors())
	.use(trpc(trpcRouter, { endpoint: "/v2/trpc" }))
	.listen(env.PORT);

export type App = typeof app;

console.log(
	`🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`,
);
