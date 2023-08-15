import { START_YEAR } from 'data/general';
import dayjs from 'dayjs';

export const calculateYears = () => {
  const today = new Date();
  const yyyy = today.getFullYear();
  return yyyy - START_YEAR;
};

export const formatDate = (date: Date | string) => {
  if (typeof date === 'string') return date;

  try {
    return dayjs(date).format('DD-MM-YYYY');
  } catch (e) {
    console.log(e);
    return date;
  }
};
