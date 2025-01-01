import type { User } from "@prisma/client";
import bcrypt from "bcrypt";
import { error } from "elysia";
import { prisma } from "../../lib/prisma";

class UserService {
	async createUser(
		user: Pick<User, "name" | "email" | "password" | "provider" | "providerId">,
	) {
		let hashedPassword: string | undefined = undefined;

		if (user.password) {
			const saltRounds = 10;
			hashedPassword = await bcrypt.hash(user.password, saltRounds);
		}

		return await prisma.user.create({
			data: { ...user, password: hashedPassword },
		});
	}

	async getAllUsers() {
		return await prisma.user.findMany();
	}

	async getUser(id: string) {
		return await prisma.user.findUnique({
			where: { id },
		});
	}

	async getUserByEmail(email: string) {
		return await prisma.user.findUnique({
			where: { email },
		});
	}

	async updateUser(
		id: string,
		user: Partial<Pick<User, "name" | "email" | "password">>,
	) {
		let hashedPassword: string | undefined = undefined;

		if (user.password) {
			const saltRounds = 10;
			hashedPassword = await bcrypt.hash(user.password, saltRounds);
		}

		return await prisma.user.update({
			where: { id },
			data: { ...user, password: hashedPassword },
		});
	}

	async authenticateUser(email: string, password: string) {
		const user = await prisma.user.findUnique({
			where: { email },
		});

		if (!user) {
			return error(404, {
				message: "User not found",
			});
		}

		const isPasswordCorrect = await bcrypt.compare(
			password,
			user.password ?? "",
		);

		if (!isPasswordCorrect) {
			return error(401, {
				message: "Incorrect password",
			});
		}

		return user;
	}
}

export { UserService };
