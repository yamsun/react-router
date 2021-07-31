import "./styles.css";
import Greeting from "./Greeting";
import { BrowserRouter, Route } from "react-router-dom";
import ScreenA from "./ScreenA";
import ScreenB from "./ScreenB";

export default function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <Greeting name="Shyam" />
      <BrowserRouter>
        <Route exact={true} path={"/a"} component={ScreenA} />
        <Route exact={true} path={"/b"} render={renderB} />
      </BrowserRouter>
    </div>
  );
}

function renderB() {
  return <ScreenB name="Shyam" />;
}
