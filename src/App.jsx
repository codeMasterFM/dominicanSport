import MlbVideo from "./page/MlbVideo"
import { Home } from "./page/home"
import {Routes,BrowserRouter,Route} from 'react-router-dom'


const App = () => {
  return (
    <BrowserRouter>
    <Routes>
  
      <Route exac path="/" element={<Home/>}/>
      <Route path="Video" element={<MlbVideo/>}/>
    </Routes>
    </BrowserRouter>

  )
}

export default App