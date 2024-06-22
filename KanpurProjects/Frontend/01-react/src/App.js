import MultipleProp from "./Components/MultipleProp";
import Parent from "./Components/ChildrenProps";
import PropsSpread from './Components/PropsSpread';
import OptionalProps from './Components/OptionalProps';
import ValidProps from "./Components/PropsValidator"

import PercentageStat from "./Components/ValidProps";

import "./App.css";

function App() {
  const tech = { a: "REACT", b: "ANGULAR" };
  return (
    <>
      <MultipleProp x="Debasish" y="Sahoo" />
      <Parent>
        <span>I'm a child!</span>
      </Parent>
      <Parent>
        <div>
          <h1>When ever we need to pass child</h1>
          <p> We need to create Tag Component Calling Method </p>
        </div>
        <div>
          <h1>Multiple Props</h1>
          <p> We need to Create Open Close Method </p>
        </div>
      </Parent> 

      <PropsSpread a={tech.a} b={tech.b} />
      <PropsSpread {...tech} />

      <OptionalProps/>
      <OptionalProps person="Debasish"/>

      <ValidProps/>

      <h1>Male Population</h1>
      <div>
        <PercentageStat label="Class 1" total={360} score={203} />
        <PercentageStat label="Class 2" total={206} />
        <PercentageStat label="Class 3" score={107} />
        <PercentageStat label="Class 4" />
      </div>
      <div>
        <PercentageStat label="Class 1" total={0} score={203} />
        <PercentageStat label="Class 2" total={0} />
        <PercentageStat label="Class 3" score={(f) => f} />
        <PercentageStat label="Class 4" total={{}} score="0" />
      </div>
    </>
  );
}

export default App;
