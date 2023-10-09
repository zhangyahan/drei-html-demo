import { Route, HashRouter as Router, Routes } from 'react-router-dom'
import { SceneView } from './SceneView'
import { Home } from './views/Home'
import { Outlet1 } from './views/Outlet1'
import { Outlet2 } from './views/Outlet2'

function App() {
  return (
    <SceneView>
      <Router>
        <Routes>
          <Route path='/' element={<Home />}>
            <Route index element={<Outlet1 />} />
            <Route path='/outlet1' element={<Outlet1 />} />
            <Route path='/outlet2' element={<Outlet2 />} />
          </Route>
        </Routes>
      </Router>
    </SceneView>
  )
}

export default App
