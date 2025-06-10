import dayjs from "dayjs";
import { z } from "zod";

const message = {
	required: (label: string) => `${label}は必須項目です`,
	isPastOrToday: (label: string) => `${label}は未来の日付を選択できません`,
	min: (label: string, min: number) =>
		`${label}は${min}文字以上で入力してください`,
	max: (label: string, max: number) =>
		`${label}は${max}文字以下で入力してください`,
} as const;

const isPastOrToday = (date: Date) => {
	return (
		dayjs(date).isSame(dayjs(), "day") || dayjs(date).isBefore(dayjs(), "day")
	);
};

export const loginSchema = z.object({
	username: z.string({ message: message.required("ユーザー名") }).max(50, {
		message: message.max("ユーザー名", 50),
	}),
	password: z.string({ message: message.required("パスワード") }).max(100, {
		message: message.max("パスワード", 100),
	}),
});

export const signUpSchema = z.object({
	username: z
		.string({ message: message.required("ユーザー名") })
		.min(2, { message: message.min("ユーザー名", 2) })
		.max(8, { message: message.max("ユーザー名", 8) }),
	password: z
		.string({ message: message.required("パスワード") })
		.min(8, { message: message.min("パスワード", 8) })
		.max(100, { message: message.max("パスワード", 100) }),
});

export const profileSchema = z.object({
	joiningDate: z
		.date({ message: message.required("入社日") })
		.refine(isPastOrToday, {
			message: message.isPastOrToday("入社日"),
		}),
	years: z.string({ message: message.required("入社年数") }),
	department: z.string({ message: message.required("部署") }),
	grade: z.string({ message: message.required("グレード") }),
});
