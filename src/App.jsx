import {Routes, Route} from 'react-router-dom'; 

import Home from './routes/Home';
import About from './routes/About';

const App = () => {
  return (
    <>
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='about' element={<About />} />
        </Routes>
    </>
  )
}

export default App