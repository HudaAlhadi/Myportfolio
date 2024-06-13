import Huda from '../Assests/Huda.jpg'
import { useState,useEffect } from 'react'
import Slider from './Slider'
import { Typewriter } from 'react-simple-typewriter';
const Home = () => {
    const [hide, setHide] = useState(false);
  
    const handle = () => {
      setHide(true);
    };
  
    useEffect(() => {
      console.log('The state has changed');
    }, [hide]);
  
    return (
      <div className=" bg-gradient-to-b from-black to-blue-300">
        <div className='flex flex-col justify-around items-center md:flex-row pb-20 px-4 pt-24'>
          <div className='mb-4 flex flex-col justify-between h-full'>

          <h1 className="text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-900 via-blue-600 to-blue-300">
        <Typewriter
          words={['Hello,', 'Hello, My Name is Huda']}
          loop={1}
          typeSpeed={50}
          deleteSpeed={30}
          delaySpeed={1000}
        />
      </h1>

            <p className="text-white max-w-md">
              
            </p>
            <div>
              <button onClick={handle} className='text-white my-6 bg-gradient-to-r from-cyan-500 to-orange-500 rounded-md flex items-center px-6 py-3'> <a href="/IT MYCV.pdf" download>
             My CV </a>
              </button>
            </div>
          </div>
          <div className='mt-20 '>
            <img className=' shadow-md shadow-gray-200  max-w-xs rounded-[50%/40%_50%_40%_50%]' alt='my profile' src={Huda} />
          </div>
        </div>
        <Slider />
      </div>
    );
  }
  
  export default Home;
  