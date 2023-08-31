import { useState } from 'react'
import { AiFillLinkedin,AiFillGithub,AiFillFacebook } from 'react-icons/ai';
import {BsInstagram} from 'react-icons/bs';
import { FaTwitter } from 'react-icons/fa';

const Footer = () => {
         const year = new Date().getFullYear();
         const [Suscribe, setSuscribe] =useState("");

         const submit=(e) => {
                  e.preventDefault()
         };


  return (
    <div className='pt-[120vh]'>
      <div className='w-full mt-24 bg-slate-900  text-gray-300 py-2 px-[60vh]'>
         <div className='max-w-[1240px] max-auto grid grid-cols-2 md:grid-cols-5 border-b-2 border-gray-600 py-8'>

                  <div>
                           <h6 className='font-bold uppercase pt-2'>Solution</h6>
                           <ul>
                                    <li className='py-1'>Marketing</li>
                                    <li className='py-1'>Analytics</li>
                                    <li className='py-1'>Commerce</li>
                                    <li className='py-1'>Data</li>
                                    <li className='py-1'>Cloud</li>
                           </ul>
                            </div>

                            <div>
                           <h6 className='font-bold uppercase pt-2'>Commuinty</h6>
                           <ul>
                                    <li className='py-1'>Marketing</li>
                                    <li className='py-1'>Analytics</li>
                                    <li className='py-1'>Commerce</li>
                                    <li className='py-1'>Data</li>
                                    <li className='py-1'>Cloud</li>
                           </ul>
                            </div>

                            <div>
                           <h6 className='font-bold uppercase pt-2'>Support</h6>
                           <ul>
                                    <li className='py-1'>Pricing</li>
                                    <li className='py-1'>Analytics</li>
                                    <li className='py-1'>Commerce</li>
                                    <li className='py-1'>Data</li>
                                    <li className='py-1'>Cloud</li>
                           </ul>
                            </div>

                            <div>
                           <h6 className='font-bold uppercase pt-2'>Company</h6>
                           <ul>
                                    <li className='py-1'>Marketing</li>
                                    <li className='py-1'>Analytics</li>
                                    <li className='py-1'>Commerce</li>
                                    <li className='py-1'>Data</li>
                                    <li className='py-1'>Cloud</li>
                           </ul>
                            </div>

                            <div>
                           <h6 className='font-bold uppercase pt-2'>Legal</h6>
                           <ul>
                                    <li className='py-1'>Marketing</li>
                                    <li className='py-1'>Analytics</li>
                                    <li className='py-1'>Commerce</li>
                                    <li className='py-1'>Data</li>
                                    <li className='py-1'>Cloud</li>
                           </ul>
                            </div>

                            <div className='col-span-2 pt-8 mt-8 md:pt-2'>
                                    <p className='font-bold uppercase'>Suscribe to our newsletter</p>
                                    <p className='py-4'>The latest news, articles and resources sent to your inbox weekly</p>

                                    <form className='flex flex-col sm:flex-row' onSubmit={submit}>
                                             <input type="email"
                                             placeholder='Enter email'
                                             className='w-full p-2 mr-4 rounded-md mb-4 text-black font-bold'
                                             value={Suscribe}
                                             onChange={(e) => setSuscribe(e.target.value)}
                                              />
                                              <button className='p-2 mb-4 bg-[#090f1f] rounded-2xl py-4' type='Submit'>Suscribe</button>
                                    </form>
                            </div>
         </div>
         <div className='flex flex-col max-w-[1240px] px-2 py-8 mx-auto justify-between sm:flex-row text-center text-gray-500'>
          <p className='py-4'>@{year} Workflowt, CLL. All rights reserved</p>
          <div className='flex justify-between sm:w[300px] pt-4 text-2xl'>
                  <a href="https://linkedin.com/in/nancyvic" target='_blank' rel='nooperner noreferrer'> <AiFillLinkedin/> </a>
                  <a href="https://twitter.com/oyibo_Nancy" target='_blank' rel='nooperner noreferrer'> <FaTwitter/> </a>
                  <a href="https://github.com/NancyBabe" target='_blank' rel='nooperner noreferrer'> <AiFillGithub/> </a>
                  <a href="https://web.facebook.com/SatoshiBabe" target='_blank' rel='nooperner noreferrer'> <AiFillFacebook/> </a>
                  <a href="https://www.instagram.com/satoshi_babe/" target='_blank' rel='nooperner noreferrer'> <BsInstagram/> </a>
          </div>
      </div>

      </div>



    </div>
  )
}

export default Footer
