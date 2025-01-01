import { Provider } from "@prisma/client";
import { z } from "zod";

const userSchema = z.object({
	id: z.string(),
	name: z.string(),
	email: z.string(),
	password: z.string().nullable().optional(),
	provider: z.enum([Provider.GITHUB, Provider.GOOGLE]).nullable().optional(),
	providerId: z.string().nullable().optional(),
	createdAt: z.date(),
	updatedAt: z.date(),
});

export { userSchema };
