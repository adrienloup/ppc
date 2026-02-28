import { Link } from "react-router-dom";
import {
  useSettings,
  useSettingsDispatch,
} from "@/src/domain/settings/useSettings.ts";
import { useTitle } from "@/src/shared/hook/useTitle.ts";
import { Article } from "@/src/shared/ui/article/Article.tsx";

export const Profile = () => {
  const { date, lang, mode } = useSettings();
  const SettingsDispatch = useSettingsDispatch();

  useTitle("profile");

  return (
    <Article>
      profile
      <div>date: {date}</div>
      <div>lang: {lang}</div>
      <div>mode: {mode}</div>
      <div>
        <button
          onClick={() =>
            SettingsDispatch({ type: "SET_MODE", mode: "contrast" })
          }
        >
          contrast
        </button>
        <button
          onClick={() => SettingsDispatch({ type: "SET_MODE", mode: "dark" })}
        >
          dark
        </button>
        <button
          onClick={() => SettingsDispatch({ type: "SET_MODE", mode: "light" })}
        >
          light
        </button>
      </div>
      <Link to="/factory">factory</Link>
      <div style={{ height: "2000px" }}></div>
    </Article>
  );
};
