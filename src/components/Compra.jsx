
import { useContext, useState } from "react"
import menos from "../images/icon-minus.svg"
import plus from "../images/icon-plus.svg"
import { UserContext } from "./context/Provider"
// import cart from "../images/cart.svg"

const Compra = () => {

  const {setEstado} = useContext(UserContext);

  const valor = 125000;
  const nuevoValor = valor.toLocaleString('en-US');

  const [produ,  setProdu] = useState(12500);
  const [cantidad, setCantidad] = useState(0);


  const handlePlus = () => {
    setCantidad(cantidad+1)
    setProdu(produ + 12500)
  };

  const handleMenos = () => {
    setCantidad(cantidad-1)
    setProdu(produ - 12500)
    if(cantidad <= 0){
      setCantidad(0)
    }
  }


  const handleAdd = () => {
    setEstado(true)
  }

  console.log(produ)

  return (
    <section className="container mx-auto px-7 lg:w-2/3 lg:mt-20 lg:ml-20 md:mt-20 xl:ml-0 xl:mt-32">
      <h2 className="uupercase text-orange-primary font-bold mb-3">Sneaker Company</h2>
      <h1 className="font-bold text-3xl mb-4">Fall Limited Edition Sneakers</h1>
      <p className="text-Dark-grayish-blue mb-4">
        These low-profile sneakers are your perfect casual wear companion. Featuring a 
        durable rubber outer sole, they’ll withstand everything the weather can offer.
    </p>
    <div className="flex items-center md:grid-cols-3 justify-between mb-10 md:justify-start lg:grid lg:grid-cols-3 xl:grid xl:grid-cols-2">
      <h2 className="text-3xl font-bold">${nuevoValor}</h2>
      <span className="bg-Pale-orange py-0 rounded text-orange-primary font-bold px-2 -ml-20 lg:w-12 md:px-0 md:ml-5 xl:-ml-10">50%</span>
      <span className="text-Grayish-blue line-through text-lg md:ml-[70%] md:mr-20 xl:ml-0">$250.00</span>
    </div>

    <div className="w-full lg:grid lg:grid-cols-1 items-center md:items-center md:flex md:gap-x-4 xl:grid xl:grid-cols-2 xl:items-center xl:w-full">
    <div className="flex justify-between px-3 py-3 rounded-lg items-center mx-auto w-full text-center bg-Light-grayish-blue md:mb-0 mb-4 lg:w-full lg:mb-3 lg:mt-0 xl:w-40">
      <button className="h-5" onClick={handleMenos}>
        <img src={menos} alt="Este es el icono de menos" />
      </button>
      <span className="select-none">{cantidad}</span>
      <button onClick={handlePlus}>
        <img src={plus} alt="Este es el icono de plus" />
      </button>
    </div>
    <button onClick={handleAdd} className="bg-orange-primary w-full py-3 text-white font-bold hover:bg-orange-600 rounded-lg lg:w-full md:w-full md:mt-0 lg:mt-0 xl:-mt-3 xl:w-60">
      Add to cart
    </button>
    </div>
    </section>
  )
}

export default Compra
