import Header from './Components/ObjectComponent/Header'
import "./App.css";
function App() {
  const data = {
    welcome: 'Welcome to World Of React',
    title: 'Getting Started React',
    subtitle: 'JavaScript Library',
    author: {
      firstName: 'Debasish',
      lastName: 'Sahoo',
    },
    date: new Date(),
  }

  return (
    <div className='app'>
    <Header data={data} />
  </div>
  );
}

export default App;
