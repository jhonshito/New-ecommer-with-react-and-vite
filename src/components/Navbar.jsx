import menu from "../images/icon-menu.svg"
import logo from "../images/logo.svg"
import carrito from "../images/icon-cart.svg"
import avatar from "../images/image-avatar.png"
import close from "../images/icon-close.svg"
import { useContext, useRef } from "react"
import Productos from "./Productos"
import { useState } from "react"
import { UserContext } from "./context/Provider"
const Navbar = () => {

  const { cantidadStatic } = useContext(UserContext);

  const [iconOpen, setIconOpen] = useState('hidden md:ml-12 md:pt-0 md:block md:static')

  const handleOpen = () => {
    setIconOpen('flex flex-col bg-orange-600 z-20 md:z-0 top-0 w-4/5 h-full gap-8 pl-10 absolute left-0 ');
  }


  const handleClose = () => {
    setIconOpen('hidden  md:ml-12 md:pt-0 md:block md:static')
  }

  const ocultar = useRef(null)

  const handleOcultar = () => {
    ocultar.current.classList.toggle('hidden')
  }


  return (
    <>
    <header className="container px-4  mx-auto flex items-center mt-5">
        <div className="flex items-center">
          <button onClick={handleOpen}>
            <img className="md:hidden" src={menu} alt="Este es el menu de abrir y cerrar" />
          </button>
          <img className="h-5 ml-5 w-20" src={logo} alt="Este es el logo de la empresa" />
        </div>
        <nav className={`md:text-gray-500 ${iconOpen}`}>
          <button onClick={handleClose} className="pt-10 pb-12 md:hidden">
            <img src={close} alt="" />
          </button>
          <a className="md:hover:border-b-4 hover:text-black md:hover:border-b-orange-500 md:hover:pb-7 transition-all duration-700" href="">Collections</a>
          <a className="mx-0 md:mx-5 md:hover:border-b-4 transition-all duration-700 hover:text-black md:hover:border-b-orange-500 md:hover:pb-7" href="">Men</a>
          <a className="md:hover:border-b-4 transition-all duration-700 hover:text-black md:hover:border-b-orange-500 md:hover:pb-7" href="">Women</a>
          <a className="mx-0 md:mx-5 md:hover:border-b-4 transition-all duration-700 hover:text-black md:hover:border-b-orange-500 md:hover:pb-7" href="">About</a>
          <a className="md:hover:border-b-4 transition-all duration-700 hover:text-black md:hover:border-b-orange-500 md:hover:pb-7" href="">Contact</a>
        </nav>
        <div className="flex gap-4 ml-auto">
          <button onClick={handleOcultar}>
              <img className="w-7 h-5" src={carrito} alt="" />
          </button>
          {
            cantidadStatic == 0 ? <span className="hidden min-w-[29px] max-w-sm min-h-[20px] max-h-14  bg-orange-primary rounded-2xl absolute ml-3">
            <p className="text-center flex text-xs items-center justify-center font-bold text-white px-2">{
              cantidadStatic == undefined ? 0 : cantidadStatic.datosCatidad
            }</p>
          </span> : <span className="min-w-[29px] max-w-sm min-h-[20px] max-h-14  bg-orange-primary rounded-2xl absolute ml-3">
            <p className="text-center flex text-xs items-center justify-center font-bold text-white px-2">{
              cantidadStatic == undefined ? 0 : cantidadStatic.datosCatidad
            }</p>
          </span>
          }
          
          <img onClick={handleOcultar} className="h-10 hover:border-2 rounded-full border-orange-500" src={avatar} alt="" />
        </div>
    </header>

    {/* card */}
    <div ref={ocultar} className="hidden w-full h-60 mt-7 md:rounded-none md:w-80 border-solid border-1 border-black md:h-56 bg-white shadow-sm md:shadow-2xl absolute md:right-0 md:mr-20 md:mx-auto md:mt-3 z-10">
      <h3 className="md:ml-6 mb-5 ml-7 mt-6 font-bold md:mb-5">Cart</h3>
      <hr />
      <Productos />
    </div>
    <hr className="mt-5 container mx-auto" />
    </>
  )
}

export default Navbar