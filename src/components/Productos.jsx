
import { useContext, useEffect, useRef, useState } from 'react'
// imagenes pequeñas
import imgSmall1 from '../images/image-product-1-thumbnail.jpg'
import imgSmall2 from '../images/image-product-2-thumbnail.jpg'
import imgSmall3 from '../images/image-product-3-thumbnail.jpg'
import imgSmall4 from '../images/image-product-4-thumbnail.jpg'
import iconoDelete from '../images/icon-delete.svg'
import { UserContext } from './context/Provider'
const Productos = () => {

  const { maxValor, setCantidadStatic } = useContext(UserContext);

  let val = false;
  const imgSmallArray = [imgSmall1,imgSmall2,imgSmall3,imgSmall4];

  const handleDelete = () => {
    val = false
    localStorage.clear();
  }

  if(maxValor == null){
    return maxValor
  }

  let [nuevoValor] = maxValor

  nuevoValor == undefined ? nuevoValor = 0 : [nuevoValor] = maxValor;
  nuevoValor == 0 ? val = false : val = true;
  setCantidadStatic(nuevoValor)

  return (
    <>
    {
      val ? <>
      <section className='w-full mt-5'>
          <div className='flex w-full justify-center'>
            <div className='ml-2'>
              <img className='w-16 rounded-md' src={imgSmallArray[nuevoValor.datosIndex]} alt="Esta es la imagen del producto" />
            </div>
              <div className='grid grid-cols-4 w-full mx-3'>
                <p className='col-span-4 text-Dark-grayish-blue'>Fall Limited Edition Sneakers</p>
                <a href='' onClick={handleDelete} className='col-end-6 mt-5'>
                  <img src={iconoDelete} alt="Este es el icono de eliminar" />
                </a>
                <div className='flex gap-1 -mt-3'>
                  <p className='text-Dark-grayish-blue'>125.00</p>
                  <p className='text-Dark-grayish-blue'>x</p>
                  <p className='text-Dark-grayish-blue'>{nuevoValor.datosCatidad}</p>
                  <p className='font-bold'>${nuevoValor.datosProdu}</p>
                </div>
              </div>
          </div>
      </section>
      <button className='bg-orange-primary w-[90%] grid text-white font-bold justify-items-center items-center text-center mx-auto mt-5 py-4 rounded-lg'>Checkout</button>
      </> : <p className="w-6/12 mx-auto mt-14 bg-black text-gray-500">Your cart is empety</p>
    }
    
    </>
  )
}

export default Productos
