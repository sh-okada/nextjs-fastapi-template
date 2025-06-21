import { z } from "zod";
import { message } from "@/lib/zod/message";
import { isPastOrToday, postalCodeRegex } from "@/lib/zod/validator";

const username = z
	.string({ message: message.required("ユーザー名") })
	.min(2, { message: message.min("ユーザー名", 2) })
	.max(8, { message: message.max("ユーザー名", 8) });

const password = z
	.string({ message: message.required("パスワード") })
	.max(100, {
		message: message.max("パスワード", 100),
	});

const joiningDate = z
	.date({ message: message.required("入社日") })
	.refine(isPastOrToday, {
		message: message.isPastOrToday("入社日"),
	});

const years = z
	.number({ message: message.required("入社年数") })
	.min(1, { message: message.required("入社年数") });

const department = z.string({ message: message.required("部署") });

const grade = z.string({ message: message.required("グレード") });

const name = z
	.string({ message: message.required("氏名") })
	.max(100, { message: message.max("氏名", 100) });

const zipcode = z
	.string({ message: message.required("郵便番号") })
	.regex(postalCodeRegex, {
		message: "郵便番号の形式が正しくありません（例: 1234567）",
	});

const address = z.string({ message: message.required("住所") }).max(200, {
	message: message.max("住所", 200),
});

export const loginSchema = z.object({
	username: username,
	password: password,
});

export const signUpSchema = z.object({
	username: username,
	password: password,
});

export const profileSchema = z.object({
	joiningDate: joiningDate,
	years: years,
	department: department,
	grade: grade,
});

export const zipcodeSchema = z.object({
	zipcode: zipcode,
});

export const personalInfoSchema = zipcodeSchema.merge(
	z.object({
		name: name,
		address: address,
	}),
);

export const searchAddressQueryParams = z.object({
	zipcode: zipcode.optional(),
});
