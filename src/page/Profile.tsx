import { Link } from "react-router-dom";
import { Page } from "@/src/shared/ui/page/Page.tsx";

export const Profile = () => {
  return (
    <Page>
      profile
      <Link to="/factory">factory</Link>
      <div style={{ height: "2000px" }}></div>
    </Page>
  );
};
