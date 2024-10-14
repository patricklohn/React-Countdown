import './App.css'
import NewYear from './assets/NewYear.png'
import { Outlet } from 'react-router-dom'

function App() {

  return (
    <div className='App' style={{backgroundImage:`url(${NewYear})`}}>
        <div className='container'>
          <Outlet />
        </div>
    </div>
  )
}

export default App
