
import css from '../Assests/css.png'
import momgop from '../Assests/momgop.jpg'
import github from '../Assests/github.png'

import figma from '../Assests/figma.jpg'
import html from '../Assests/html.png'
import Python from '../Assests/Python.jpg'
import javascript from '../Assests/javascript.png'
import react  from '../Assests/react.png'
import tailwind  from '../Assests/tailwind.png'
import nextjs  from '../Assests/nextjs.png'
import mysql from '../Assests/mysql.png'
const Experience = () => {
    return (
      <>
        <div id='experience' className='bg-black pb-20 pt-20'>
          <h2 className='mt-4 ml-5 bg-black inline border-b-4 border-gray-500 text-bold text-3xl text-white'>My Experience</h2>
        </div>
        <div className="bg-black px-5 gap-5 grid md:grid-cols-3 sm:grid-cols-2">
          <div className='grid rounded-lg hover:scale-105 duration-200 text-white shadow-md shadow-orange-600 py-5'>
            <img className='w-20 ml-3' src={html} alt="HTML" />
            <h2 className='ml-5 mt-4'>HTML</h2>
          </div>
          <div className='grid rounded-lg hover:scale-105 duration-200 text-white shadow-md shadow-blue-600 py-5'>
            <img className='w-20 ml-3' src={css} alt="CSS" />
            <h2 className=' mt-4 ml-5'>CSS</h2>
          </div>
          <div className='grid rounded-lg hover:scale-105 duration-200 text-white shadow-md shadow-green-600 py-5'>
            <img className='w-20 ml-3' src={momgop} alt="MongoDB" />
            <h2 className='ml-5 mt-4'>MongoDB</h2>
          </div>
          <div className='grid rounded-lg hover:scale-105 duration-200 text-white shadow-md shadow-blue-600 py-5'>
            <img className='w-20 ml-3' src={tailwind} alt="Tailwind" />
            <h2 className='mt-4 ml-5'>Tailwind</h2>
          </div>
          <div className='grid rounded-lg hover:scale-105 duration-200 text-white shadow-md shadow-yellow-600 py-5'>
            <img className='w-20 ml-3' src={javascript} alt="JavaScript" />
            <h2 className='mt-4 ml-5'>JavaScript</h2>
          </div>
          <div className='grid rounded-lg hover:scale-105 duration-200 text-white shadow-md shadow-gray-600 py-5'>
            <img className='w-20 ml-3' src={github} alt="GitHub" />
            <h2 className='mt-4 ml-5'>GitHub</h2>
          </div>
          <div className='grid rounded-lg hover:scale-105 duration-200 text-white shadow-md shadow-blue-600 py-5'>
            <img className='w-20 ml-3' src={react} alt="React" />
            <h2 className='mt-4 ml-5'>React</h2>
          </div>
          <div className='grid rounded-lg hover:scale-105 duration-200 text-white shadow-md shadow-gray-600 py-5'>
            <img className='w-20 ml-3' src={mysql} alt="MySQL" />
            <h2 className='mt-4 ml-5'>MySQL</h2>
          </div>
          <div className='grid rounded-lg hover:scale-105 duration-200 text-white shadow-md shadow-blue-600 py-5'>
            <img className='w-20 ml-3' src={nextjs} alt="Next.js" />
            <h2 className='mt-4 ml-5'>Next.js</h2>
          </div>
          <div className='grid rounded-lg hover:scale-105 duration-200 text-white shadow-md shadow-purple-600 py-5'>
            <img className='w-20 ml-3' src={figma} alt="Figma" />
            <h2 className='mt-4 ml-5'>Figma</h2>
          </div>
          <div className='grid rounded-lg hover:scale-105 duration-200 text-white shadow-md shadow-yellow-600 py-5'>
            <img className='w-20 ml-3' src={Python} alt="Python" />
            <h2 className='mt-4 ml-5'>Python</h2>
          </div>
        </div>
      </>
    );
  };
  
  export default Experience;
  