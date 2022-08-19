import React from 'react'


const Header = ({ verForm, mostrar, cerrar }) => {

    return (
        <header className='bg-red-700 justify-center p-2'>
            <ul className='flex justify-center items-center'>
                {verForm ? (
                    <li onClick={cerrar} className="py-2 px-4 rounded-xl transition duration-700 hover:translate-y-[4px] text-neutral-100 hover:cursor-pointer hover:shadow-[0_-2px_1px_1px_white]">Inicio</li>
                ) : (
                    <li onClick={mostrar} className="py-2 px-4 rounded-xl transition duration-700 hover:translate-y-[4px] text-neutral-100 hover:cursor-pointer hover:shadow-[0_-2px_1px_1px_white]" >Formulario</li>
                )
                }
            </ul>
        </header>
    )
}

export default Header