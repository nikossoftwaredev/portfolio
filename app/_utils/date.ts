import dayjs from "dayjs";

export const formatDate = (date: Date | string) => {
  if (typeof date === "string") return date;

  try {
    return dayjs(date).format("DD-MM-YYYY");
  } catch (e) {
    console.log(e);
    return date;
  }
};
