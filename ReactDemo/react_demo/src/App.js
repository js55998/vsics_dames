import DCard from "./Components/DCard";
import ToDos from './Components/ToDos/ToDos'
import "./App.css";

function App() {
  
  const ToDoLists=[
    {
      userId: 1,
      id: 1,
      title: "delectus aut autem",
      completed: false,
    },
    {
      userId: 1,
      id: 2,
      title: "quis ut nam facilis et officia qui",
      completed: false,
    },
    {
      userId: 1,
      id: 3,
      title: "fugiat veniam minus",
      completed: false,
    },
    {
      userId: 1,
      id: 4,
      title: "et porro tempora",
      completed: true,
    }
  ]

  return (
    <>
      <DCard
        img="https://www.w3schools.com/howto/img_avatar.png"
        name="Debasish Sahoo"
        job="Developer"
      />

      <br/>
      <ToDos lists={ToDoLists} />
    </>
  );
}

export default App;
