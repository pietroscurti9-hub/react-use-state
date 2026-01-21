
import "./index.css"
import './App.css'
import Header from "./Components/Header.jsx"
// import ButtonSection from "./Components/ButtonSection.jsx"
import languages from "./assets/languages.js"
import { useState } from "react"
import Text from "./Components/Text.jsx"
import AppButton from "./Components/AppButton.jsx"

function App() {
  const [activeLang, setActiveLang] = useState(languages[0])

  // console.log("RENDER APP.JSX")

  return (
    <>
      <Header />
     

     <div>
       {languages.map(lang =>(
        <AppButton key={lang.id} lang={lang} onSelect={() => setActiveLang(lang)} />
       ))}
     </div>

     <Text titolo={activeLang.title} testo={activeLang.description}/>
     
    </>
  )
}

export default App
