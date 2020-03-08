
import React,{ useState, useEffect } from 'react';
import Home from './pages/Home';
import Search from './pages/Search';
function btn(e) {
  console.dir(e.target);
}
function App(porps) {
  const [date, setDate] = useState(new Date());
  useEffect(() => {
    const timeId = setInterval(() => {
      setDate(new Date());
    }, 1000);
    return () => clearInterval(timeId);
  });
  


   return (
    <div>
      <Home></Home>
       <Search click={btn}/>
      <div>{date.toLocaleTimeString()}</div>
    </div>
  );
}
export default App;