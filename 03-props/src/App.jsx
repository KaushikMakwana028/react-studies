import React from 'react'
import Card from './components/Card'

import luffyImg from "./assets/luffy3.jpeg";
import zoroImg from "./assets/zoro.jpeg";
import sanjiImg from "./assets/sanji.jpeg";

function App() {
  return (
    <div className="parent">
     <Card user='Luffy' age={21} img={luffyImg}/>
     <Card user='Zoro' age={24} img={zoroImg}/>
     <Card user='Sanji' age={22} img={sanjiImg}/>
    </div>
  )
}

export default App