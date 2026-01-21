
import "./index.css"
import './App.css'
import Header from "./Components/Header.jsx"
import ButtonSection from "./Components/ButtonSection.jsx"
import languages from "./assets/languages.js"
import { useState } from "react"

function App() {
  const [activeLang, setActiveLang] = useState(languages[0])
 

  return (
    <>
      <Header />
     

     <div>
       {languages.map(lang =>(
        <button key={lang.id} onClick={() => setActiveLang(lang)}>{lang.title}</button>
       ))}
     </div>

     <div>
      <h2>{activeLang.title}</h2>
      <p>{activeLang.description}</p>
     </div>
    </>
  )
}

export default App
