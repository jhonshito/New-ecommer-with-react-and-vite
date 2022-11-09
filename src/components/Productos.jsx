
import { useContext, useState } from 'react'
// imagenes pequeñas
import imgSmall1 from '../images/image-product-1-thumbnail.jpg'
import imgSmall2 from '../images/image-product-2-thumbnail.jpg'
import imgSmall3 from '../images/image-product-3-thumbnail.jpg'
import imgSmall4 from '../images/image-product-4-thumbnail.jpg'
import iconoDelete from '../images/icon-delete.svg'
import { UserContext } from './context/Provider'
const Productos = () => {

  const { data, estado } = useContext(UserContext);

  const imgSmallArray = [imgSmall1,imgSmall2,imgSmall3,imgSmall4];

  console.log(estado)
  return (
    <>
    {
      estado ? <>
      <section className='w-full mt-5'>
          <div className='flex w-full justify-center'>
            <div className='ml-2'>
              <img className='w-16 rounded-md' src={imgSmallArray[data]} alt="Esta es la imagen del producto" />
            </div>
              <div className='grid grid-cols-4 w-full mx-3'>
                <p className='col-span-4 text-Dark-grayish-blue'>Fall Limited Edition Sneakers</p>
                <button className='col-end-6 mt-5'>
                  <img src={iconoDelete} alt="Este es el icono de eliminar" />
                </button>
                <div className='flex gap-1 -mt-3'>
                  <p className='text-Dark-grayish-blue'>125.00</p>
                  <p className='text-Dark-grayish-blue'>x</p>
                  <p className='text-Dark-grayish-blue'>0</p>
                  <p className='font-bold'>$375.00</p>
                </div>
              </div>
          </div>
      </section>
      <button className='bg-orange-primary w-[90%] grid text-white font-bold justify-items-center items-center text-center mx-auto mt-5 py-4 rounded-lg'>Checkout</button>
      </> : <p className=" w-6/12 mx-auto mt-14 text-gray-500">Your cart is empety</p>
    }
    
    </>
  )
}

export default Productos
