import { Outlet } from 'react-router'
import Navber from './components/Navber/Navber'

const App = () => {
  return (
    <div>
      <Navber />
      <Outlet />
      {/* <Footer />  */}
    </div>
  )
}

export default App
