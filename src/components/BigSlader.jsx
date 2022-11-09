
// imagenes pequeñas
import { useRef, useState } from 'react'
import imgSmall1 from '../images/image-product-1-thumbnail.jpg'
import imgSmall2 from '../images/image-product-2-thumbnail.jpg'
import imgSmall3 from '../images/image-product-3-thumbnail.jpg'
import imgSmall4 from '../images/image-product-4-thumbnail.jpg'


const BigSlader = ({propsIndex}) => {

    const [colorBtn1, setColorBtn1] = useState('')
    const [colorBtn2, setColorBtn2] = useState('')
    const [colorBtn3, setColorBtn3] = useState('')
    const [colorBtn4, setColorBtn4] = useState('')

    const handleBigOne = (num) => {
        propsIndex(num)

        
        switch(num){
            case 0:
                setColorBtn1('border-2 border-black rounded-xl')
            break;
            case 1:
                setColorBtn2('border-2 border-black rounded')
            break;
            case 2:
                setColorBtn3('border-2 border-black rounded')
            break;
            case 3:
                setColorBtn4('border-2 border-black rounded')
            break;
               
        }
      }
  return (
    <div className='hidden md:flex md:mr-0 lg:flex md:w-full md:justify-center md:items-center lg:w-96 w-96 justify-center gap-6 mt-5 ml-8 lg:ml-8 md:ml-0'>
          <button className={'focus:border-2 focus:border-orange-500 focus:opacity-50 focus:rounded-xl'} onClick={() => handleBigOne(0)}>
            <img className='rounded-lg w-20 transition duration-700 hover:opacity-50' src={imgSmall1} alt="Esta es una imagen de los productos" />
          </button>
          <button className='focus:border-2 focus:border-orange-500 focus:opacity-50 focus:rounded-xl' onClick={() => handleBigOne(1)}>
            <img className={`rounded-lg w-20 hover:opacity-50 transition duration-700`} src={imgSmall2} alt="Esta es una imagen de los productos" />
          </button>
          <button className='focus:border-2 focus:border-orange-500 focus:opacity-50 focus:rounded-xl' onClick={() => handleBigOne(2)}>
            <img className='rounded-lg w-20 hover:opacity-50 transition duration-700' src={imgSmall3} alt="Esta es una imagen de los productos" />
          </button>
          <button className='focus:border-2 focus:border-orange-700 focus:opacity-50 focus:rounded-xl' onClick={() => handleBigOne(3)}>
            <img className='rounded-lg w-20 hover:opacity-50 transition duration-700' src={imgSmall4} alt="Esta es una imagen de los productos" />
          </button>
    </div>
  )
}

export default BigSlader