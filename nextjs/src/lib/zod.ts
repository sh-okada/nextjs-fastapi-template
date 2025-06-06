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
	username: z.string().min(2).max(8),
	password: z.string().min(8).max(100),
});

export const profileSchema = z.object({
	joiningDate: z.date().refine(isPastOrToday, {
		message: message.isPastOrToday("入社日"),
	}),
	years: z.number().min(1, message.required("入社年数")),
	department: z.number().min(1, message.required("部署名")),
	position: z.number().min(1, message.required("役職")),
});
