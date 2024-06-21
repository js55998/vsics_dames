import MultipleProp from "./Components/MultipleProp";
import PropsSpread from "./Components/PropsSpread";
import Parent from "./Components/ChildrenProps";
import OtherProps from './Components/OtherTypes';
import InValidProps from './Components/InValidProps'
function App() {
  const x = { a: "REACT", b: "ANGULAR" };
  return (
    <>
      <MultipleProp x="Debasish" y="Sahoo" />
      <PropsSpread a={x.a} b={x.b} />
      <PropsSpread {...x} />
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

      <OtherProps />

      <InValidProps/>
    </>
  );
}

export default App;
