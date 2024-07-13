import { Link } from 'react-router-dom';
import iconCart from '../assets/images/iconCart.png'
import { useSelector, useDispatch } from 'react-redux';
import { addToCart } from '../stores/cart';

export default function ProductCart(props) {
    const carts = useSelector(store => store.cart.items);
    const {id, name, price, image, slug} = props.data;
    const theme = useSelector((state) => state.theme.theme)
    const dispatch = useDispatch();
    const handleAddToCart = () => {
        dispatch(addToCart({
            productId: id,
            quantity: 1
        }));
    }

    const nameStyle = theme === 'light' ? "text-gray-700" : "text-gray-100";
    const buttonStyle = theme === 'light' ? " bg-gray-300 " : " bg-gray-800 "

    return (
    <div className={'p-5 rounded-xl shadow-sm flex flex-col justify-between border border-gray-500 shadow'}>
        <Link to={slug}>
            <img src={image} alt='' className='w-full h-80 object-cover object-top drop-shadow-[0_80px_30px_#0007]' />
        </Link>
        <h3 className={'text-2xl py-3 text-center font-medium ' + nameStyle}>{name}</h3>
        <div className='flex justify-between items-center'>
            <p>
                $<span className={'text-2xl font-medium ' + nameStyle}>{price}</span>
            </p>
            <button className={'p-2 rounded-md text-sm flex gap-2 ' + nameStyle + buttonStyle} onClick={handleAddToCart}>
                <img src={iconCart} alt="" className='w-5'/>
                Add To Cart
            </button>
        </div>
    </div>
  )
}
