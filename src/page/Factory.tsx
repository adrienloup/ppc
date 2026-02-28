import { Link } from "react-router-dom";
import { useTitle } from "@/src/shared/hook/useTitle.ts";

export const Factory = () => {
  useTitle("factory");

  return (
    <>
      factory
      <Link to="/profile">profile</Link>
    </>
  );
};
