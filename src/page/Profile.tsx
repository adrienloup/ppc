import { Link } from "react-router-dom";
import { useTitle } from "@/src/shared/hook/useTitle.ts";

export const Profile = () => {
  useTitle("profile");

  return (
    <>
      profile
      <Link to="/factory">factory</Link>
      <div style={{ height: "2000px" }}></div>
    </>
  );
};
