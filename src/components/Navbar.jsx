import React,{useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'


const Navbar = () => {
    const navigate = useNavigate()
    const [isSelected, setIsSelected] = useState(false);

    const navItems = [
        {
            name: 'Home',
            slug: "/",
            active: true
        },
        {
            name: "Currency convertion",
            slug: "/currency-convertion",
            // active: true

        },
        {
            name: "About",
            slug: "/about",

        },
    ]

    return (
        <header className=' shadow bg-black-500 sticky top-0 z-50'>
            <nav className='flex bg-black py-2'>
                <ul className='flex ml-auto active:text-black'>
                    {navItems.map((item) =>
                      
                            <li key={item.name}>
                                <button
                                    onClick={() => navigate(item.slug)}
                                    className='text-white inline-bock px-6 py-2 duration-200 hover:bg-red-100 rounded-full hover:text-black '
                                
                                >{item.name}</button>
                            </li>
                     
                    )}
                </ul>

            </nav>
        </header>
    )
}

export default Navbar