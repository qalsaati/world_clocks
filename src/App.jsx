
import Clock from "./Clock.jsx";
import "./App.css";

export default function App() {
  return (
    <>
      <h1>World Clock</h1>
      <div className="card">
        <p>Singapore: <Clock timeZone="Asia/Singapore" /></p>
        <p>London: <Clock timeZone="Europe/London"/></p>
        <p>New York: <Clock timeZone="America/New_York" /></p>
      </div>
    </>
  );
};