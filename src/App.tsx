import "./styles/styles.css";
import IMAGE from "./assets/react.png";
import LOGO from "./assets/react.svg";

export const App = () => {
  return (
    <>
      <h1>React TS Webpack Starter Template</h1>;
      <img src={IMAGE} alt="React Logo" width="300" height="300" />
      <img src={LOGO} alt="React Logo" width="300" />
    </>
  );
};
