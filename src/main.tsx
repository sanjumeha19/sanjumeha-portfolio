import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
function SafeApp() {
  try {
    return <App />;
  } catch (e) {
    return (
      <div style={{ color: "white", padding: "20px" }}>
        <h1>App crashed 💥</h1>
        <pre>{String(e)}</pre>
      </div>
    );
  }
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <SafeApp />
  </React.StrictMode>
);