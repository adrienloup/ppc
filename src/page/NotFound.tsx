import { useTitle } from "@/src/shared/hook/useTitle.ts";
import { Case } from "@/src/shared/ui/case/Case.tsx";

export const NotFound = () => {
  useTitle("page not found");

  return (
    <Case
      icon="error"
      title="sorry, page not found. please continue your trip."
      button="profile"
    />
  );
};
