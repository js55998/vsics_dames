import PropsBasic from "./Components/PropsBasic";
import {Age} from "./Components/info"
import {Weight,Status} from "./Components/info"
import Skills from './Components/ArrayProps'
import ObjectProps from './Components/ObjectProps'
import "./App.css";
function App() {
  let currentYear = 2024
  let birthYear = 1820
  const age = currentYear - birthYear
  const gravity = 9.81
  const mass = 75


  let cYear = 2020
  let bYear = 2015
  let dAge = cYear - bYear // 15 years
  let status = dAge >= 18

  const data = {
    welcome: 'Welcome to the World Of React',
    title: 'Getting Started React',
    subtitle: 'JavaScript Library',
  }


  return (
    <>
      <PropsBasic firstName = 'Debasish' lastName='Sahoo' country = 'India'/>
      <Age age={age}/>
      <Weight weight={gravity * mass} />
      <Status status={status} />
      <Skills skills={['HTML', 'CSS', 'JavaScript']} />
      <ObjectProps data={data}/>
    </>
  );
}

export default App;
