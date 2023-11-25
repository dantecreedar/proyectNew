import { Outlet,Link } from 'react-router-dom'
import Slider from './Dashboard/Slider'

function Layout() {
  return (
    <div>
        <div className='bg-gradient-to-r from-cyan-500 to-blue-500 text-white p-1 text-center sm:text-sm text2xl'>Metaverse: Construyendo un mundo nuevo</div>
        <ul className='flex shadow-lg justify-end'>
        <label className="swap swap-flip text-md">
  
        {/* this hidden checkbox controls the state */}
        <input type="checkbox" />
        
        <div className="swap-on">😈</div>
        <div className="swap-off">😇</div>
        </label>
            {/* code */}
            <li className='hover:bg-slate-50 p-3 text-slate-400'><Link to="/">Home</Link></li>
            <li  className='hover:bg-slate-50 p-3 text-slate-400'><Link to="/dashboard">Dashboad</Link></li>
        </ul>
        <div className='p-5'>
            <Slider/>
        </div>
        <Outlet/>
    </div>
  )
}

export default Layout
