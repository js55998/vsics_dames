import Card from "./Components/Card";
import DCard from "./Components/DCard";
import BTitle from "./Blog/BTitle";

import "./App.css";

const post=[
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




function App() {
  return (
    <>
      <h1>This is a Sample Component</h1>
      <Card />
      <DCard
        img="https://www.w3schools.com/howto/img_avatar.png"
        name="Debasish"
        job="Developer"
      />

      <BTitle posts={post}/>
    </>
  );
}

export default App;
