import React from 'react';
import { Menu } from 'antd';
import { BiSolidDashboard } from 'react-icons/bi';
import { BsPersonPlusFill } from 'react-icons/bs';
import { FaPowerOff } from 'react-icons/fa';
import { RiPlantFill, RiQuestionAnswerFill } from 'react-icons/ri';
import { FaPuzzlePiece } from 'react-icons/fa';
import { AiOutlineDown } from 'react-icons/ai';

function Sidebar() {
  return (
    <div>
      <div>
        
        <span className="divhead1">
          <img className="divimage"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDBHsIYGdVpdOODBQlUG4_8HapBua_c24Xbg&usqp=CAU"/>
          
          <p className='divcon' style={{fontWeight:'bold'}}>XYZ Enterprises Pvt.Ltd</p>
        </span>
        <span className="divhead2" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
         <p className="ic"><AiOutlineDown /></p>
        </span>




        <div className="divider"></div>
      </div>
      <div>
        <Menu defaultOpenKeys={['1']} defaultSelectedKeys={['1']} className="sidebarmain">
          <div className="sidemain">
            <span>
              <img
                className="img"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHAAdRyMZ8ooPPifo2p3I9L1nZ51-D_7uULw&usqp=CAU"/>
              <h4 style={{ textAlign: 'center', fontSize: '15px', fontWeight: 'bold' }}>
                Ram Mohan &nbsp;<span style={{ color: 'blue' }}>&#10095;</span>
              </h4>
              <p style={{ textAlign: 'center' }}>rammohan2a2gmail.com</p>
            </span>
          </div>
          <Menu.Item
            className="sidemenu"
            key="1"
            style={{ marginTop: '30px', color: 'black', background: 'rgb(53, 191, 215)' }}
          >
            <BiSolidDashboard className="icon" /> &nbsp;Dashboard
          </Menu.Item>
          <Menu.Item className="sidemenu" style={{ marginTop: '10px' }}>
            <RiPlantFill className="icon" /> &nbsp;Perks
          </Menu.Item>
          <Menu.Item className="sidemenu" style={{ marginTop: '10px' }}>
            <FaPuzzlePiece className="icon" /> &nbsp;Addons
          </Menu.Item>
          <Menu.Item className="sidemenu" style={{ marginTop: '10px' }}>
            <RiQuestionAnswerFill className="icon" /> &nbsp;FAQ
          </Menu.Item>
          <Menu.Item className="sidemenu" style={{ marginTop: '10px' }}>
            <BsPersonPlusFill className="icon" /> &nbsp;Support
          </Menu.Item>

          <Menu.Item className="log">
            Logout &nbsp;<FaPowerOff size="12" />
          </Menu.Item>
        </Menu>
      </div>
    </div>
  );
}

export default Sidebar;
