import { useGlobalContext } from "../Global Context/Context";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { BsFillSunFill } from "react-icons/bs";

const ThemeToggle = () => {
  const { isDarkMode, toggleDarkMode } = useGlobalContext();
  return (
    <div className="toggle-container">
      <button className="dark-toggle" onClick={toggleDarkMode}>
        {isDarkMode ? (
          <i className="toggle-icon" style={{ color: "white" }}>
            <BsFillMoonStarsFill />
          </i>
        ) : (
          <i className="toggle-icon" style={{ color: "black" }}>
            <BsFillSunFill />
          </i>
        )}
      </button>
    </div>
  );
};
export default ThemeToggle;
