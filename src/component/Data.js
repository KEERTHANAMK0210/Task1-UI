import React from 'react'
import Details from './Details'
import { AiOutlineCloudDownload, AiOutlineMail, AiOutlinePlus, AiOutlineUser } from "react-icons/ai";
import { IoNotifications } from "react-icons/io5";
import { Button } from 'react-bootstrap';

function Data() {


    return (
        <div>
            <div className='datadiv'>
              <span >
              <h2 className='headh2'>Choose a Plan that's just right for you !</h2>
                <ol className='top'>
                 <Button className='topbutton1'>Monthly</Button>&nbsp;&nbsp;
                 <Button className='topbutton2'>Annually <sup className='sub'>-10%</sup></Button>
                </ol>
              </span>
                <div className='d-flex datadivsub'>
                <div className='pricedetail'>
                                <ol className='ol' >
                                    <li className='olstyle ' style={{ fontSize:'23px'}} >Basic</li>

                                    <li className='price' style={{ position: 'relative', color: 'black' }}>
                                      <span>$89.9/mo</span>
                                   <span className='line-through'></span>
                                     </li>



                                    <li className='olstyle' style={{fontSize:'20px'}} >$9.99/mo</li>
                                    <button className='getstrbut' style={{ backgroundColor: 'rgb(244, 213, 156)'}}>Get Started &#10141;</button>
                                    <hr style={{ marginRight: '20px' }} />
                                </ol>
                                <ol className='ol'>
                                    <li className='listpara'>What you'll get :</li>
                                    <li className='listpara'><AiOutlineUser/> &nbsp;Upto 25 Users</li>
                                    <li className='listpara'><AiOutlineCloudDownload/> &nbsp;Upto 25gb Storage</li>
                                    <li className='listpara'><AiOutlineMail/> &nbsp;Email Support</li>
                                    <li className='listpara'>
                                        <a className='explore'>EXPLORE FEATURES <span className='arrow' style={{color:'rgb(244, 213, 156)'}}>&#10151;</span></a>
                                    </li>


                                </ol>
                            </div>

                            <div className='pricedetail'>
                                <ol className='ol' >
                                    <li className='olstyle ' style={{ fontSize:'23px'}} >Standard</li>

                                    <li className='price' style={{ position: 'relative', color: 'black' }}>
                                      <span>$189.99/mo</span>
                                   <span className='line-through'></span>
                                     </li>

                                    <li className='olstyle' style={{fontSize:'20px'}}>$99.99/mo</li>
                                    <button className='getstrbut' style={{backgroundColor: 'rgb(244, 147, 127)'}}>Get Started &#10141;</button>
                                    <hr style={{  marginRight: '20px' }} />
                                </ol>
                                <ol className='ol'>
                                    <li className='listpara'>What you'll get :</li>
                                    <li className='listpara'><AiOutlineUser/> &nbsp;Upto 50 Users</li>
                                    <li className='listpara'><AiOutlineCloudDownload/> &nbsp;Upto 60gb Storage</li>
                                    <li className='listpara'><AiOutlineMail/> &nbsp;Email + Chat Support</li>
                                    <li className='listpara'>
                                        <a className='explore'>EXPLORE FEATURES <span className='arrow' style={{color:'rgb(244, 147, 127)'}}>&#10151;</span></a>
                                    </li>
                                </ol>
                            </div>

                            <div className='pricedetail'>
                                <ol className='ol' >
                                    <li className='olstyle ' style={{ fontSize:'23px'}} >Premium</li>

                                    <li className='price' style={{ position: 'relative', color: 'black' }}>
                                      <span>$389.9/mo</span>
                                   <span className='line-through'></span>
                                     </li>

                                    <li className='olstyle' style={{fontSize:'20px'}}>$199.99/mo</li>
                                    <button className='getstrbut' style={{backgroundColor: 'rgb(213, 108, 245)'}}>Get Started &#10141;</button>
                                    <hr style={{ marginRight: '20px' }} />
                                </ol>
                                <ol className='ol'>
                                    <li className='listpara'>What you'll get :</li>
                                    <li className='listpara'><AiOutlineUser/> &nbsp;Upto 75 Users</li>
                                    <li className='listpara'><AiOutlineCloudDownload/> &nbsp;Upto 100gb Storage</li>
                                    <li className='listpara'><AiOutlineMail/> &nbsp;Email + Chat + Whatsapp Support</li>
                                    
                                    <li className='listpara'><a className='explore'>
                                        </a><a className='explore'>EXPLORE FEATURES <span className='arrow' style={{color:'rgb(213, 108, 245)'}}>&#10151;</span></a>
                                    </li>
                                </ol>
                            </div>
                </div>
                <Details/>
            </div>
            <div className='datadiv2'>
                <span className='notification'>
                <IoNotifications size={30} style={{ color: 'blue' }} />
                           <sup className='sup'>3</sup>
                </span>
                <span >
                    <section className="blankspace"></section>
                </span>
                <span >
                    <section className="addbutton"><AiOutlinePlus style={{position:'absolute',marginTop:'6px',marginLeft:'8px', color:'rgb(145, 8, 133)' }}/></section>
                </span>
            </div>
        </div>
    )
} 

export default Data