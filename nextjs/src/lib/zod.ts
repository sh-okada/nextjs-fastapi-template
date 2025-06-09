import dayjs from "dayjs";
import { z } from "zod";

const message = {
	required: (label: string) => `${label}は必須項目です`,
	isPastOrToday: (label: string) => `${label}は未来の日付を選択できません`,
} as const;

const isPastOrToday = (date: Date) => {
	return (
		dayjs(date).isSame(dayjs(), "day") || dayjs(date).isBefore(dayjs(), "day")
	);
};

export const loginSchema = z.object({
	username: z.string().max(50),
	password: z.string().max(100),
});

export const signUpSchema = z.object({
	username: z
		.string({ message: message.required("ユーザー名") })
		.min(2)
		.max(8),
	password: z
		.string({ message: message.required("パスワード") })
		.min(8)
		.max(100),
});

export const profileSchema = z.object({
	joiningDate: z
		.date({ message: message.required("入社日") })
		.refine(isPastOrToday, {
			message: message.isPastOrToday("入社日"),
		}),
	years: z.string({ message: message.required("入社年数") }),
	department: z.string({ message: message.required("部署") }),
	position: z.string({ message: message.required("役職") }),
});
