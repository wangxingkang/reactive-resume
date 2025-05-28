import dayjs from 'dayjs';
import { z } from 'zod';

export const dateSchema = z
  .union([z.date(), z.string().datetime()])
  .transform((value) => {
    if (typeof value === "string") return dayjs(value).toDate();
    return value;
  });
