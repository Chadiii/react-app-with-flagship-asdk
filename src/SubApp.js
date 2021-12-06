import logo from "./logo.svg";
import firefox from "./firefox.svg";
import google from "./google.svg";
import "./App.css";
import { useFsModifications } from "@flagship.io/react-sdk";

function SubApp() {
  const { IsVIP } = useFsModifications([
    {
      key: "IsVIP",
      defaultValue: "false",
      activate: true,
    },
  ]);
  return (
    <div className="App">
      <header className="App-header">
        {(IsVIP && <img src={firefox} className="App-logo" alt="logo" />) || (
          <img src={google} className="App-logo" alt="logo" />
        )}
        {(IsVIP && <h5>VIP User</h5>) || <h5>Normal User</h5>}
      </header>
    </div>
  );
}

export default SubApp;
