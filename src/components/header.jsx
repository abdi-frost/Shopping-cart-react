import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import iconCart from '../assets/images/iconCart.png'
import { useSelector, useDispatch } from 'react-redux'
import { toggleStatusTab } from '../stores/cart'
import lightdark from '../assets/images/darklight.png'

export default function Header(props) {
    const { toggleTheme } = props
    const [totalQuantity, setTotalQuantity] = useState(0)
    const carts = useSelector(store => store.cart.items)
    const dispatch = useDispatch()

    useEffect(() => {
        let total = 0
        carts.forEach(item => total += item.quantity);
        setTotalQuantity(total);
    }, [carts])

    const handleOpenTabCart = () => {
        dispatch(toggleStatusTab());
    }

    return (
        <header className='flex justify-between items-center mb-5'>
            <Link to="/" className='text-xl font-semibold'>ChairShop</Link>
            <div className="flex gap-3">
                <div className='w-10 h-10 bg-gray-100 rounded-full
            flex justify-center items-center relative' onClick={handleOpenTabCart}>
                    <img src={iconCart} alt="" className='w-6' />
                    <span className='absolute top-2/3 right-1/2 bg-red-500 text-white text-sm
                w-5 h-5 rounded-full flex justify-center items-center'>{totalQuantity}</span>
                </div>
                <div>
                    {/* button to toggle light and dark and light mode */}
                    <button 
                    onClick={toggleTheme}
                    className='bg-gray-100 rounded-full p-2 text-sm font-semibold flex'>
                        <img src={lightdark} className='w-6'/>
                    </button>
                </div>
            </div>
        </header>
    )
}