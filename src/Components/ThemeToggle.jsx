import { useGlobalContext } from "../Global Context/Context";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { BsFillSunFill } from "react-icons/bs";

const ThemeToggle = () => {
  const { isDarkMode, toggleDarkMode } = useGlobalContext();
  return (
    <div>
      <button onClick={toggleDarkMode}>
        {isDarkMode ? (
          <i style={{ color: "white" }}>
            <BsFillMoonStarsFill />
          </i>
        ) : (
          <i style={{ color: "black" }}>
            <BsFillSunFill />
          </i>
        )}
        Mode Switcher
      </button>
    </div>
  );
};
export default ThemeToggle;
