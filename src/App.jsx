import WorldClock from './WorldClock.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

export default function App() {
  const clockData = [
    { city: 'Singapore', timeZone: 'Asia/Singapore' },
    { city: 'London', timeZone: 'Europe/London' },
    { city: 'New York', timeZone: 'America/New_York' },
  ];

  return (
    <>
      <h1>World Clock</h1>
      <WorldClock clockData={clockData} />
    </>
  );
}