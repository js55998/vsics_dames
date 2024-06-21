import {Button1,Button2,Button3,Button4} from "./Components/FunctionComponent/Button"

import "./App.css";

// Function to display time in Mon date, year format eg Oct 4, 2020
const showDate = (time) => {
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ]

  const month = months[time.getMonth()].slice(0, 3)
  const year = time.getFullYear()
  const date = time.getDate()
  return ` ${month} ${date}, ${year}`
}

function App() {
  const sayHi = () => {
    alert("Hi form Button One");
  };

  const greetPeople = () => {
    alert('Welcome to World Of React Challenge, 2024')
  }

  const handleTime = () => {
    alert(showDate(new Date()))
  }

  return (
    <div className="app">
      <Button1 text="Say Hi1" onClick={sayHi} />
      <Button2 text='Say Hi1' onClick={() => alert('Hi form Button Two')} />
      <Button3 text='Greet People' onClick={greetPeople} />
      <Button3 text='Show Time' onClick={() => alert(new Date())} />
    </div>
  );
}

export default App;
