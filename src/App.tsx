
import { BrowserRouter } from "react-router-dom"
import { CharacterProvider } from "./contexts/character"
import { Router } from "./routes"
function App() {
  
  return (
   <BrowserRouter>
    <CharacterProvider>
      <Router/>
   </CharacterProvider>
   </BrowserRouter>
  )
}

export default App
