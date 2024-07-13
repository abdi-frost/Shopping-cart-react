import { Outlet } from 'react-router-dom'
import Header from './header'
import Footer from './footer'
import CartTab from './cartTab'
import { useDispatch, useSelector } from 'react-redux'
import { toggle } from '../stores/theme'

export default function Layout() {

    const dispatch = useDispatch()

    const statusTabCart = useSelector(state => state.cart.statusTab)
    const theme = useSelector((state) => state.theme.theme)
    const toggleTheme = () => {
        console.log("Change the theme")
        dispatch(toggle());
    }

    return (
        // <div className='bg-zinc-200'>
        <div className={theme === 'light' ? 'bg-zinc-200 text-gray-800' : 'bg-slate-700 text-gray-200'}>
            <main className={`w-[1200px] max-w-full m-auto p-5 transform transition-transform duration-500
        ${statusTabCart === false ? "" : "-translate-x-56"}`}>
                <Header toggleTheme={toggleTheme} />
                <Outlet />
            </main>
            <CartTab />
            <Footer />
        </div>
    )
} 