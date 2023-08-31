import {useState} from 'react';
import logo from '../assets/cloudlogo2.png';
import {FaBars} from 'react-icons/fa';
import {FaTimes} from 'react-icons/fa';
import { Link } from 'react-router-dom';

const NavBar = () => {

  const [nav, setNav] = useState(false);

  const toggle =()=>{
    setNav(!nav)
  };


  return (
<div className="w-screen h-[80px] z-10 bg-[hsl(132,8%,88%)] fixed drop-shadow-lg">
    
         <div className="px-2 flex justify-between items-center w-full h-full">
                  <div className="flex items-center">
                           <h1 className="text-4xl font-bold mr-4 sm:text-3xl flex"> 
                           <img src= {logo} alt="logo"  className='w-10 mr-2 h-10'/>Cloud</h1>

                           <ul className='hidden md:flex gap-7 font-bold text-2xl px-40'>
                            <Link to ='/'><li> Home</li> </Link>
                           <Link to ='/about'><li>About</li> </Link>
                           <Link to ='/support'><li>Support</li> </Link>
                           <Link to ='/platform'><li>Platform</li> </Link>
                           <Link to ='/pricing'><li>Pricing</li> </Link>
                           </ul>         
                  </div>

                  <div className='hidden md:flex pr-4'>
                    <button className='border-none bg-black text-white rounded-xl px-5 py-3 mr-4'>Login</button>
                    <button className='border-none bg-black text-white rounded-xl px-5 py-3 mr-43'>Register</button>
                    </div>
                    
                    <div className='md:hidden mr-4' onClick={toggle}> 
                    {!nav ? (<FaBars/>) :(<FaTimes/>)}
                    </div>
         </div>

         <ul className={!nav ? 'hidden' : 'absolute bg-[#fff] w-[100%] px-8'} onClick={toggle}>
         <Link to ='/'> <li className='border-b-2 py-3 border-black-300 w-full'>Home</li></Link>
         <Link to ='/about'><li className='border-b-2 py-3 border-black-300 w-full'>About</li></Link>
          <Link to = '/support'><li className='border-b-2 py-3 border-black-300 w-full'>Support</li></Link>
          <Link to ='/platform'><li className='border-b-2 py-3 border-black-300 w-full'>Platform</li></Link>
          <Link to='/pricing'><li className='border-b-2 py-3 border-black-300 w-full'>Pricing</li></Link>

          <div className='flex flex-col my-4'>
            <Link to ='/login'><button className='bg-black text-white px-8 py-3 mb-4 rounded-2xl'>Login</button></Link>
            <Link to= '/register'><button className='bg-black text-white px-8 py-3 mb-4 rounded-2xl'>Register</button></Link>
          </div>
          </ul>
</div>
  )
}
export default NavBar
