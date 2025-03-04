import dayjs from "dayjs";

// ใช้ Thailand timezone
export    const toLocalTime = (date: string) => dayjs.utc(date).tz("Asia/Bangkok").toDate();