import React from 'react';
import ReactDOM from 'react-dom';
import { SocialIcon } from 'react-social-icons';

const Slider=()=>{


    return(
      
        <div className=' fixed justify-around h-75 py-2 px-1 hidden lg:flex rounded-x 
        left-0 top-[35%]  flex-col  '> 
<ul>
<li className='  hover:ml-[-10px] ml-[-100px] w-40 flex justify-between items-center px-4 duration-300 bg-gray-500 text-white hover:rounded-r-md' >Twitter <SocialIcon className='my-1' url="https://twitter.com/jaketrent" /></li>

<li className='   hover:ml-[-10px] ml-[-100px] w-40 flex justify-between items-center px-4 duration-300 bg-gray-500 text-white hover:rounded-r-md'>Facebook<SocialIcon className='my-1'url="https://facebook.com/jaketrent" /></li>
<li className='   hover:ml-[-10px] ml-[-100px] w-40 flex justify-between items-center px-4 duration-300 bg-gray-500 text-white hover:rounded-r-md'> linkedin
<SocialIcon className='my-1 w-full 'url="https://www.linkedin.com/in/huda-mo-08865a298" />  </li>
<li className='   hover:ml-[-10px] ml-[-100px] w-40 flex justify-between items-center px-4 duration-300 bg-gray-500 text-white hover:rounded-r-md'>Github<SocialIcon className='my-1'url="https://github.com/HudaAlhadi" /></li>
</ul>
        </div>
       
    )
}

export default Slider