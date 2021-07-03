import "./styles/styles.css";
import IMAGE from "./assets/react.png";
import LOGO from "./assets/react.svg";
import ClickCounter from "./ClickCounter";

export const App = () => {
  return (
    <>
      <h1>
        React TS Webpack Starter Template - {process.env.NODE_ENV}{" "}
        {process.env.name}
      </h1>
      <img src={IMAGE} alt="React Logo" width="300" height="300" />
      <img src={LOGO} alt="React Logo" width="300" />
      <ClickCounter />
    </>
  );
};
