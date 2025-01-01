import { initTRPC } from "@trpc/server";
import type { FetchCreateContextFnOptions } from "@trpc/server/adapters/fetch";

export const createContext = async (opts: FetchCreateContextFnOptions) => {
	return {};
};

export const t = initTRPC
	.context<Awaited<ReturnType<typeof createContext>>>()
	.create();

export const procedure = t.procedure;
export const router = t.router;
