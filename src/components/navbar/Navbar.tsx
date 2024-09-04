import { User, ShoppingCart } from "@phosphor-icons/react"
import { Link } from "react-router-dom"

function Navbar() {

    return (

        <div className='flex justify-center bg-blue-400 py-4 w-full text-white'>
            <div className="flex justify-between text-lg container items-center">


                <Link to='/home' className=" font-bold text-2xl">Farmácia MRGS</Link>



                <div className='flex gap-4 py-4'>
                        {/* <Link to='/produtos' className="hover: underline">Produtos</Link> */}
                        <Link to='/categorias' className='hover:underline'>Categorias</Link>
                        <Link to='/cadcategoria' className='hover:underline'>Cadastrar Categoria</Link>
                        <ShoppingCart size={32} weight='bold' />
                </div>
            </div>
        </div>
    )
}

export default Navbar