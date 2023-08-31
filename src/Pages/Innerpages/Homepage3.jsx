import React from 'react'
import bgimage from '../../assets/portfolio-2.jpg';
import {AiOutlinePhone, AiOutlineArrowRight} from 'react-icons/ai'
import {GiWorld} from 'react-icons/gi'
import {TbCircuitCapacitorPolarized} from 'react-icons/tb'

const Homepage3 = () => {
  return (
    <div className='w-full'>
         <div className='w-full h-[700px] bg-slate-900/90 absolute'>
                  <img src={bgimage} alt="" className='w-full h-full object-cover mix-blend-overlay' />
         </div>
         <section className='max-w-[1240px] mx-auto text-white relative'>

            <div className='px-4 py-12'>
                  <h2 className='text-3xl pt-8 text-slate-300 uppercase text-center'>Support</h2>
                  <h3 className='text-5xl font-bold py-6 text-center'>Finding the right team</h3>
                  <p className='py-4 text-3xl text-slate-300'>Developers and marketers use Cloud to quickly and easily create,manage and deliver 
                  their digital experiences across any browser,device and bandwidth.</p>
            </div>
            
            <div className='grid grid-cols-1 lg:grid-cols-3 relative gap-x-8 gap-y-16 px-4 pt-12 sm:pt-20 text-black'>

               <div className='bg-white rounded-xl shadow-2xl'>
                  <div className='p-8'>
                           <h1 className='w-16 p-4 bg-indigo-600 text-white rounded-lg mt-[-4rem]'><AiOutlinePhone/></h1>
                           <h3 className='font-bold text-2xl my-6'>Sales</h3>
                           <p className='text-gray-600 text-xl'>Customer experience is the priority for us. We are nothing if we don't have a 
                           great visuals.And with Cloud we are confident that our Customers are always getting the best experience</p>
                  </div>
                  <div className='bg-slate-100 pl-8 py-4'>
                           <p className='flex items-center text-indigo-600'>Contact <span><AiOutlineArrowRight/></span> </p>
                  </div>
               </div>

               <div className='bg-white rounded-xl shadow-2xl'>
                  <div className='p-8'>
                           <h1 className='w-16 p-4 bg-indigo-600 text-white rounded-lg mt-[-4rem]'><GiWorld/></h1>
                           <h3 className='font-bold text-2xl my-6'>Sales</h3>
                           <p className='text-gray-600 text-xl'>Customer experience is the priority for us. We are nothing if we don't have a 
                           great visuals.And with Cloud we are confident that our Customers are always getting the best experience</p>
                  </div>
                  <div className='bg-slate-100 pl-8 py-4'>
                           <p className='flex items-center text-indigo-600'>Contact <span><AiOutlineArrowRight/></span> </p>
                  </div>
               </div>

               <div className='bg-white rounded-xl shadow-2xl'>
                  <div className='p-8'>
                           <h1 className='w-16 p-4 bg-indigo-600 text-white rounded-lg mt-[-4rem]'><TbCircuitCapacitorPolarized/></h1>
                           <h3 className='font-bold text-2xl my-6'>Sales</h3>
                           <p className='text-gray-600 text-xl'>Customer experience is the priority for us. We are nothing if we don't have a 
                           great visuals.And with Cloud we are confident that our Customers are always getting the best experience</p>
                  </div>
                  <div className='bg-slate-100 pl-8 py-4'>
                           <p className='flex items-center text-indigo-600'>Contact <span><AiOutlineArrowRight/></span> </p>
                  </div>
               </div>
               
            </div>
         </section>
    </div>
  )
}

export default Homepage3
