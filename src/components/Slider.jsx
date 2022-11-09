
import preventIcon from '../images/icon-previous.svg'
import nextIcon from '../images/icon-next.svg'

// imagenes grandes
import img1 from '../images/image-product-1.jpg'
import img2 from '../images/image-product-2.jpg'
import img3 from '../images/image-product-3.jpg'
import img4 from '../images/image-product-4.jpg'
import Compra from './Compra'
import { useContext, useState } from 'react'
import BigSlader from './BigSlader'
import SubSlider from './SubSlider'
import { UserContext } from './context/Provider'
const Slider = () => {

  const { setData} = useContext(UserContext);

  const imgSmallArray = [img1,img2,img3,img4];
  
  const [index, setIndex] = useState(0)
  setData(index)
  // const [indexOne, setIndexOne] = useState('')
  const [subSlider, setSubSlider] = useState(false)
  const [open, setOpen] = useState('')

  const handleNext = () => {
    if(index >= 3){
      return setIndex(3)
    }
    setIndex(index + 1)
  }

  const handlePrevent = () => {
    if(index < 1){
      return setIndex(0)
    }
    setIndex(index -1)
  }

  const handleSubSlider = () => {
    setSubSlider(true)
    setOpen('md:block')
  }

  return (
    <div className='grid md:grid-cols-1 lg:grid-cols-2 lg:gap-4'>
        <section className='grid md:block lg:grid-cols-4 lg:ml-40 ml-0'>
        <div className='col-span-4 mt-0 md:w-full md:mt-16 lg:mt-16 ml-0 lg:ml-8'>
            <img onClick={handleSubSlider} className='border-none lg:cursor-pointer lg:rounded-lg h-64 lg:w-96 lg:h-96 w-full aspect-video lg:aspect-video md:rounded-lg md:h-96 md:w-[24rem] md:cursor-default md:mx-auto lg:mx-0' src={imgSmallArray[index]} alt="Estas son imagenes de productos" />
        </div>

        <div className='lg:hidden md:hidden flex justify-between absolute top-[15%] w-[100%]'>
          <button onClick={handlePrevent} className='px-4 py-3 ml-3 rounded-full bg-white'>
            <img src={preventIcon} alt="Icono prevent" />
          </button>
          <button onClick={handleNext} className='px-4 py-3 mr-3 rounded-full bg-white'>
            <img src={nextIcon} alt="icono next" />
          </button>
        </div>

        {
          subSlider ? <SubSlider index={index} setIndex={setIndex} open={open} setOpen={setOpen} subSlider={subSlider} setSubSlider={setSubSlider} /> : ''
        }

        {/* componente */}
        <BigSlader propsIndex={setIndex} />

        </section>
        <Compra />
    </div>
  )
}

export default Slider
