import dayjs from "dayjs";

export const isPastOrToday = (date: Date) => {
  return (
    dayjs(date).isSame(dayjs(), "day") || dayjs(date).isBefore(dayjs(), "day")
  );
};

export const postalCodeRegex = /^\d{7}$/;
