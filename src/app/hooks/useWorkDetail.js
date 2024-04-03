import { useMemo } from "react";
import workData from "@/app/data/work";

export const useWorkDetails = (workSlug) => {
  const workItem = useMemo(
    () => workData.find((work) => work.slug === workSlug),
    [workSlug]
  );
  return workItem;
};
