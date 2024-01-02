import { useGlobalContext } from "./Global Context/Context";

const App = () => {
  const { isDarkMode, setIsDarkMode } = useGlobalContext();
  return (
    <div>
      <h1>Unsplash Images Starter {console.log(isDarkMode)}</h1>;
      <button onClick={() => setIsDarkMode(!isDarkMode)}>
        dark mode toggle
      </button>
    </div>
  );
};
export default App;
