import project1 from '../Assests/Project1.png'
import project3 from '../Assests/Project3.png'
import OIP from '../Assests/Project2.png'
import gg from '../Assests/gg.jpg'


const Portfolio = () => {
    return (
      <>
        <div id='portfolio' className='bg-black pb-20 pt-20'>
          <h2 className='ml-5 bg-black inline border-b-4 border-gray-500 text-bold text-3xl text-white'>My Projects</h2>
        </div>
        <div className="bg-black px-5 gap-5 grid md:grid-cols-3 sm:grid-cols-2">
         
          <div className='grid rounded-lg hover:scale-105 duration-200 text-white shadow-md shadow-gray-600 py-5'>
            <div className='flex justify-center'>
              <img src={OIP} alt="Project 2" />
            </div>
            <div className='flex justify-around text-white'>
            <button><a href='https://github.com/HudaAlhadi/Gym-App'> Code </a></button>
            <button><a href='https://travel-app-sandy-mu.vercel.app/'> Demo </a></button>
            </div>
          </div>
          <div className='grid rounded-lg hover:scale-105 duration-200 text-white shadow-md shadow-gray-600 py-5'>
            <div className='flex justify-center'>
              <img src={project3} alt="Project 3" />
            </div>
            <div className='flex justify-around text-white'>
              <button > <a href='https://github.com/HudaAlhadi/TrustEtronics'>Code</a></button>
              <button> <a href='https://trustabc.carservice.management'> Demo</a></button>
            </div>
          </div>
          <div className='grid rounded-lg hover:scale-105 duration-200 text-white shadow-md shadow-gray-600 py-5'>
            <div className='flex justify-center'>
              <img src={project1} alt="Project 4" />
            </div>
            <div className='flex justify-around text-white'>
            <button><a href='https://github.com/HudaAlhadi/ABCElctonics'> Code </a></button>
              <button><a href='https://abc-elctonics.vercel.app/'> Demo</a></button>
            </div>
          </div>
        </div>
      </>
    );
  };
  
  export default Portfolio;
  