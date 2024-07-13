import { products } from '../products'
import ProductCart from '../components/productCart'
import { useSelector } from 'react-redux'

export default function Home() {

  const theme = useSelector(state => state.theme.theme)

  return (
    <div>
        <h1>
          List Products
        </h1>
        <div className='grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-5'>
            {products.map((product, key) => 
                <ProductCart key={key} data={product}/>
            )}
        </div>
    </div>
  )
}
