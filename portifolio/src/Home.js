import './index.css';
import Logo from './perfil3.webp';
import {
  AiOutlineMenu,
  AiOutlineClose,
  AiOutlineInstagram,
  AiOutlineLinkedin,
  AiOutlineGithub,
  AiOutlineSkype
} from 'react-icons/ai';
import React, { useState } from "react";

function NavBar() {

    const [menuOpen, setMenuOpen] = useState(false);

    const handleNav = () => {
      setMenuOpen(!menuOpen);
    };
  return (
    <div className="App">
      <header className="App-header">
        <nav className='fixed w-full h-32 shadow-primary-100 bg-primary-200'>
          <div div className='text-white flex justify-between items-center h-full w-full px-4 2xl:px-16'>
            <a href='/'>
              <img
                src={Logo}
                alt="Logo Primary"
                width={80}
                height={75}
                className="cursor-pointer rounded-full transition-all duration-300 transform hover:scale-125"
                priority
              />
            </a>

          
            {
              /* 
                NavBar site
              */
            }
            <div div className='font-mono hidden sm:flex'>
              <ul className='hidden sm:flex'>
                <a href='/'>
                  <li className='ml-10 uppercase hover:text-primary-100 text-xl transition-all duration-300 transform hover:scale-125' >
                    Inicio
                  </li>
                </a>
                <a href='/'>
                  <li className='ml-10 uppercase hover:text-primary-100 text-xl transition-all duration-300 transform hover:scale-125'>
                    Habilidades
                  </li>
                </a>
                <a href='/'>
                  <li className='ml-10 uppercase hover:text-primary-100 text-xl transition-all duration-300 transform hover:scale-125' >
                    Projetos
                  </li>
                </a>
                <a href='/'>
                  <li className='ml-10 uppercase hover:text-primary-100 text-xl transition-all duration-300 transform hover:scale-125' >
                    Sobre
                  </li>
                </a>
                <a href='/'>
                  <li className='ml-10 uppercase hover:text-primary-100 text-xl transition-all duration-300 transform hover:scale-125'>
                    Contato
                  </li>
                </a>
              </ul>
            </div>

            <div onClick={handleNav} className="md:hidden cursor-pointer pl-24">
                <AiOutlineMenu size={25} />
            </div>
          </div>

    <div className="relative">
      {/* Conteúdo do seu aplicativo */}
      <div className="absolute inset-0 top-16 flex items-center justify-center">
        <h1 className="text-black text-4xl font-bold">Inicio do Site!!</h1>
      </div>
    </div>

          {
            /* 
              Abrir e fechar navbar mobile
            */
          }
          <div className = {
            menuOpen ?
            "fixed left-0 top-0 w-[65%] sm:hidden h-screen bg-primary-100 p-12 ease-in duration-700" :
              "fixed left-[-100%] w-[65%] top-0 h-screen p-12 ease-in duration-700"
          }
          >
            <div className="flex w-full items-center justify-end ">
          <div
            onClick={handleNav}
            className="cursor-pointer  hover:text-white transition-all duration-300"
          >
            <AiOutlineClose size={25} />
          </div>
            </div>
            
            
                      {
                        /* 
                          Itens navbar mobile
                        */
                      }
          <div className="flex-col py-4 text-xl uppercase font-mono text-white">
          <ul>
            <a href="/">
              <li
                onClick={() => setMenuOpen(false)}
                className="py-4 cursor-pointer ml-10 hover:text-primary-200 text-xl transition-all duration-300 transform hover:scale-125 hover:underline"
              >
                Inicio
              </li>
            </a>
            <a href="/">
              <li
                onClick={() => setMenuOpen(false)}
                className="py-4 cursor-pointer ml-10 hover:text-primary-200 text-xl transition-all duration-300 transform hover:scale-125 hover:underline"
              >
                Habilidades
              </li>
            </a>
            <a href="/">
              <li
                onClick={() => setMenuOpen(false)}
                className="py-4 cursor-pointer ml-10 hover:text-primary-200 text-xl transition-all duration-300 transform hover:scale-125 hover:underline"
              >
                Projetos
              </li>
            </a>
            <a href="/">
              <li
                onClick={() => setMenuOpen(false)}
                className="py-4 cursor-pointer ml-10 hover:text-primary-200 text-xl transition-all duration-300 transform hover:scale-125 hover:underline"
              >
                Sobre
              </li>
            </a>
            <a href="/">
              <li
                onClick={() => setMenuOpen(false)}
                className="py-4 cursor-pointer ml-10 hover:text-primary-200 text-xl transition-all duration-300 transform hover:scale-125 hover:underline"
              >
                Contato
              </li>
            </a>
          </ul>
            </div>
            <div className="flex flex-row justify-around pt-10 items-center">
          <AiOutlineInstagram
            size={30}
            className="cursor-pointer hover:text-white hover:bg-gray-800 rounded-xl text-xl transition-all duration-300 transform hover:scale-125"
          />
          <AiOutlineLinkedin
            size={30}
            className="cursor-pointer hover:text-white hover:bg-gray-800 rounded-xl text-xl transition-all duration-300 transform hover:scale-125"
          />
          <AiOutlineGithub
            size={30}
            className="cursor-pointer hover:text-white hover:bg-gray-800 rounded-xl text-xl transition-all duration-300 transform hover:scale-125"
          />
          <AiOutlineSkype
            size={30}
            className="cursor-pointer hover:text-white hover:bg-gray-800 rounded-xl text-xl transition-all duration-300 transform hover:scale-125"
              />
            </div>
            
         <a href="/">
          <img
            src={Logo}
            alt="Logo Primary"
            width={80}
            height={75}
            className = "md:hidden cursor-pointer ml-20 mt-10 rounded-full transition-all duration-300 transform hover:scale-125"
            priority
          />
        </a>
            </div>
        </nav>
      </header>
    </div>
  );
}

export default NavBar;