import dayjs from "dayjs";
import objectSupport from "dayjs/plugin/objectSupport";
import relativeTime from "dayjs/plugin/relativeTime";

dayjs.extend(relativeTime);
dayjs.extend(objectSupport);

export function formatToDisplay(date: Date | string) {
  const input = dayjs(date);
  const thirtyDaysAgo = dayjs().subtract(30, "days");
  return input.isBefore(thirtyDaysAgo)
    ? dayjs(date).format("MMM DD, YYYY")
    : dayjs(date).fromNow();
}

export default dayjs;
