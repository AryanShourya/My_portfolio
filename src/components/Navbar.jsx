import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import PropTypes from "prop-types"
import { Link } from "react-scroll";


export default function Navbar(props) {

    
  return (
    <nav className={`fixed block bg-${props.mode} text-${props.textColor}
                     md:justify-items-center 
                     content-center min-h-15 w-screen top-1 sm:min-w-[500px] 
                     border-neutral-300 border-b-[0.3px]`}> 
      <div className="flex md:hidden justify-between">
        <ul className=" p-2 flex w-screen">
            <li >
                <a href="/" className="text-xl font-bold">{props.name}</a> 
            </li>
        </ul>
        <ul className="flex p-2 space-x-4">
            <li >
                <button onClick={props.changeTheme} 
                    className={`${props.mode =='white'?"hidden":"block"}`}>
                    <DarkModeIcon />
                </button>
                <button onClick={props.changeTheme} 
                    className={`${props.mode=="black"?"hidden":"block"}`}>
                    <LightModeIcon/>
                </button>
            </li>

            <li >
                <button >
                <span className="material-symbols-outlined dark:fill-neutral-200">menu</span>
                </button>
            </li>
        </ul>
      </div>
      <div className="lg:max-w-5xl hidden md:flex bg-green  items-center
                      justify-between sm:w-screen ">
        <ul className="p-2 md:flex space-x-4 font-medium">
            <li>
               <Link to="home" smooth="true" duration={600} offset={-80}
               className="text-xl font-bold">{props.name}</Link> 
            </li>
            <li>
                <Link to="tech" smooth="true" duration={600} offset={-40}
                className="hover:text-slate-500">Technologies</Link>
            </li>
            <li>
                <Link to='project' className="hover:text-slate-500" >Projects</Link>
            </li>
            <li>
                <Link to='contact' className="hover:text-slate-500" >Contact</Link>
            </li>
            <li>
                <a href='' className="hover:text-slate-500" >Profile</a>
            </li>
        </ul>

        <ul className="p-2 hidden md:flex space-x-4">
            <li>
                <button onClick={props.changeTheme} 
                    className={`${props.mode=='white'?"hidden":"block"}`}>
                    <DarkModeIcon/>
                </button>
                <button onClick={props.changeTheme} 
                    className={`${props.mode=='black'?"hidden":"block"}`}>
                    <LightModeIcon/>
                </button>
            </li>
            <li>
                <a href="">
                    <GitHubIcon />
                </a>
            </li>
            <li>
                <a href="">
                    <LinkedInIcon />
                </a>
            </li>
            
        </ul>
      </div>
    </nav>
  );
}

Navbar.propTypes = {
    mode : PropTypes.string,
    textColor : PropTypes.string,
    firstelement :PropTypes.string,
    name: PropTypes.string,
    changeTheme:PropTypes.func
}
