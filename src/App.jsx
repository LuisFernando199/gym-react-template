
import './App.css'
import { Facilities } from './components/Facilities/Facilities'
import { Footer } from './components/Footer/Footer'
import { Header } from './components/Header/Header'
import { Join } from './components/Join/Join'
import { Plans } from './components/Plans/Plans'
import { Reasons } from './components/Reasons/Reasons'
import { Programs } from './components/programs/Programs'

function App() {
 

  return (
    <>
     <div className="App">
       <Header />
       <Programs />
       <Reasons />
       <Plans />
       <Facilities />
       <Join />
       <Footer />
     </div>
    </>
  )
}

export default App
