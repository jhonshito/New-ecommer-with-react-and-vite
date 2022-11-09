
import preventIcon from '../images/icon-previous.svg'
import nextIcon from '../images/icon-next.svg'
import close from "../images/icon-close.svg"

import img1 from '../images/image-product-1.jpg'
import img2 from '../images/image-product-2.jpg'
import img3 from '../images/image-product-3.jpg'
import img4 from '../images/image-product-4.jpg'

import BigSlader from './BigSlader'
import { useState } from 'react'

const SubSlider = ({index, setIndex, open, setOpen, subSlider, setSubSlider}) => {

    const imgSmallArray = [img1,img2,img3,img4];

    const [newIndex, setNewIndex] = useState(index)

    const handleNext = () => {
        if(newIndex >= 3){
          return setNewIndex(3)
        }
        setNewIndex(newIndex + 1)
      }
    
      const handlePrevent = () => {
        if(newIndex < 1){
          return setNewIndex(0)
        }
        setNewIndex(newIndex -1)
      }

      const handleClose = () => {
        setOpen('md:hidden')
        setSubSlider(false)
        setIndex(newIndex)
      }

  return (
    <>
    <div className={`hidden md:hidden lg:block absolute top-1/2 -translate-y-1/2 left-1/2 z-20 -translate-x-1/2 ${open}`}>
        <button onClick={handleClose} className="absolute top-10 left-[83%] -translate-x-1/2">
            <img src={close} alt="Este es el icono se cerrar" />
        </button>
        <section className='grid md:grid-cols-4 md:ml-40 ml-0'>
        <div className='col-span-4 mt-0 md:mt-16 ml-0 md:ml-8'>
            <img className='border-none cursor-pointer md:rounded-lg h-64 md:w-96 md:h-96 w-full aspect-video' src={imgSmallArray[newIndex]} alt="Estas son imagenes de productos" />
        </div>

        <div className='flex justify-between absolute top-[45%] w-[65%]'>
          <button onClick={handlePrevent} className='px-4 py-3 ml-3 rounded-full bg-white'>
            <img src={preventIcon} alt="Icono prevent" />
          </button>
          <button onClick={handleNext} className='px-4 py-3 mr-3 rounded-full bg-white'>
            <img src={nextIcon} alt="icono next" />
          </button>
        </div>

        {/* componente */}
        <BigSlader propsIndex={setNewIndex} />

        </section>
    </div>

    {
      subSlider ?  <span className='bg-black/70 md:hidden lg:block w-full h-full absolute top-0 left-0 hidden z-10'></span>: ''
    }
    </>
  )
}

export default SubSlider