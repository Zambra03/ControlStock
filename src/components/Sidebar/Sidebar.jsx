import React, { useContext } from 'react'
import styled from "styled-components";
import logo from "../../assets/img/Logo.svg";
import {v} from "../../styles/Variables";
import {RiMenuAddLine} from "react-icons/ri";
import {HiOutlineHome,HiOutlineUserGroup} from "react-icons/hi";
import {ImStatsBars} from "react-icons/im";
import {FiCpu} from "react-icons/fi";
import {RxExit, RxGear} from "react-icons/rx";
import { NavLink, useLocation } from 'react-router-dom';
import { ThemeContext } from '../../App';

export function Sidebar({sidebarOpen,setSidebarOpen}) {
  const ModiSidebaropen = () =>{
    setSidebarOpen(!sidebarOpen);
  }
  const {setTheme,theme} = useContext(ThemeContext);
  const CambiarTheme =()=> {
    setTheme((theme)=>(theme === "light"?"dark":"light"));}
  return (
    <Container isOpen ={sidebarOpen} themeUse={theme}>
      <button className='Sidebarbutton'
      onClick={ModiSidebaropen}>
      <RiMenuAddLine/>
      </button>
      <div className='Logocontent'>
        <div className='imgcontent'>
          <img src={logo}/>
        </div>
        
      </div>
      {linksArray.map(({icon,label,to})=>(
        <div className='LinkContainer' key={label}>
          <NavLink to={to}  className={({isActive})=>`Links${isActive?` active `:``}`}>
            <div className='Linkicon'>
              {icon}
            </div>
            {sidebarOpen && <span>{label}</span>}
          </NavLink>
        </div>
      ))}
      <Divider/>
      {secondarylinksArray.map(({icon,label,to})=>(
        <div className='LinkContainer' key={label}>
          <NavLink to={to}  className={({isActive})=>`Links${isActive?` active `:``}`}>
            <div className='Linkicon'>
              {icon}
            </div>
            {sidebarOpen && <span>{label}</span>}
          </NavLink>
        </div>
      ))}
      <Divider/>
      <div className='Themecontent'>
        {sidebarOpen && <span className='titletheme'>Dark Mode</span>}
        <div className='Togglecontent'>
          <div className='grid theme-container'>
              <div className='content'>
                <div className='demo'>
                  <label className='switch'>
                    <input type="checkbox" 
                    className='theme-swither' 
                    onClick={CambiarTheme}>
                    </input>
                    <span className='slider round'></span>
                  </label>
                </div>
              </div>
          </div>
        </div>
      </div>
    </Container>
  );
}

//#Array
const linksArray=[
{
  label:"Home",
  icon:<HiOutlineHome/>,
  to:"/"
},
{
  label:"Statistics",
  icon:<ImStatsBars/>,
  to:"/statistics"
},
{
  label:"Products",
  icon:<FiCpu/>,
  to:"/products"
},
{
  label:"Users",
  icon:<HiOutlineUserGroup/>,
  to:"/users"
},
]
//#endArray

const secondarylinksArray=[
  {
    label:"Configuration",
    icon:<RxGear/>,
    to:"/configuration"
  },
  {
    label:"Logout",
    icon:<RxExit/>,
    to:"/logout"
  },
]

const Container = styled.div`
  color:${(props)=>props.theme.text};
  background:${(props)=>props.theme.bg};
  position:sticky ;
  padding-top:20px;
  .Sidebarbutton{
    position:absolute;
    top: ${v.xxlSpacing};
    right: -18px;
    width: 32px;
    height: 32px;
    border-radius:50%;
    background:${(props)=>props.theme.bgtderecha};
    box-shadow: 0 0 4px ${(props)=>props.
    theme.bg3}, 0 0 7px ${(props)=>props.theme.bg};
    disaplay:flex;
    align-items:center:
    justify-content: center;
    cursor: pointer;
    transition: all 0.3s;
    transform: ${({isOpen})=>(isOpen?'initial':'rotate(180deg)')};
    border:none;
    letter-spacing: inherit;
    font-size: inherit;
    padding: 0;
    font-family: inherit;
    outline: none;
  }
  .Logocontent{
    display: flex;
    justify-content: center;
    align-items: center;
    padding-bottom: ${v.lgSpacing};
    text-align: center;  
    margin: 8px 0px;
    padding: 0px 15px;
      img{
        max-width: 40%;
        height: auto;
        margin: auto;
        padding: 0;
        justify-content: center;
      }
      cursor:pointer;
      transition: all 0.3s;
      transform: ${({isOpen})=>(isOpen?'scale(0.3)':'scale(0.9)')}
    h2{
      display: ${({isOpen})=>(!isOpen?
        'none':'block')};
    }
  }
  .LinkContainer{
    margin: 8px 0;
    padding: 0 15px;
    :hover{
      background: ${(props)=>props.theme.bg3};
      
    }
    .Links{
      display: flex;
      align-items: center;
      text-decoration: none;
      padding: calc(${v.smSpacing}-2px) 0;
      color: ${(props)=>props.theme.text};

      .Linkicon{
        padding: ${v.smSpacing} ${v.mdSpacing};
        display:flex;
        svg{
          font-size: 25px;
        }
      }
      &.active{
        .Linkicon{
          svg{
            color: ${(props)=>props.theme.bg4};
          }
        }
      }
    }
  }
  .Themecontent {
    display: flex;
    align-items: center;
    justify-content: space-between;
    .titletheme {
      display: block;
      padding: 10px;
      font-weight: 700;
      opacity: ${({isOpen})=>(isOpen?`1`:`0`)};
      transition: all 0.3s;
      white-space: nowrap;
      overflow:hidden;
    }
    .Togglecontent {
      margin:${({isOpen})=>(isOpen?`auto 40px`:`auto 15px`)};
      width: 36px;
      height: 20px;
      border-radius: 10px;
      transition: all 0.3s;
      position: relative;
    }
    .theme-container{
      background-blend-mode: multiply, multiply;
      transition: 0.4s;
      .grid {
        display: grid;
        justify-items: center;
        align-items: center;
        width: 100vh;
        height: 100vw;
        font-family: "Lato", sans-serif;
      }
      .demo {
        font-size: 32px;
        .switch {
          position: relative;
          display: inline-block;
          width: 60px;
          height: 34px;
          .theme-swither {
            opacity: 0;
            width: 0;
            height: 0;
            &:checked +.slider:before {
              left: 4px;
              content: "🌑";
              transform: translateX(26px);
            }
          }
          .slider {
            position: absolute;
            cursor: pointer;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: ${({themeUse})=>(themeUse === "light"? v.lightcheckbox:v.checkbox)};
            transition: 0.4s;
            &::before{
              position: absolute;
              content: "☀️";
              height: 0px;
              width: 0px;
              left: -10px;
              top: 16px;
              line-height: 0px;
              transition: 0.4s;
            }
            &.round {
              border-radius: 34px;
              &::before {
                border-radius: 50px;
              }
            }
          }
        }
      }
    }
  }

`;

const Divider = styled.div`
  height: 1px;
  width: 100%;
  background: ${(props)=>props.theme.bg3};
  margin: ${v.lgSpacing} 0;
`;