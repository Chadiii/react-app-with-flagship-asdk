import logo from "./logo.svg";
import "./App.css";
import { FlagshipProvider } from "@flagship.io/react-sdk";
import SubApp from "./SubApp";

function App() {
  return (
    <FlagshipProvider
      envId="envid"
      apiKey="apikey"
      visitorData={{
        id: "noId",
        context: {
          browser: navigator.userAgent.match(/chrome|chromium|crios/i)
            ? "Chrome"
            : "Firefox",
        },
        isAuthenticated: false,
      }}
      enableConsoleLogs={true}
    >
      <SubApp />
    </FlagshipProvider>
  );
}

export default App;
