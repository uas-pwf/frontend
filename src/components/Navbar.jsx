import '../App.css'
import { AiOutlineHome, AiFillCopy } from 'react-icons/ai'
import { BiMedal } from "react-icons/bi";
import { FaUserGraduate, FaBars } from "react-icons/fa";
import { NavLink } from 'react-router-dom';

const Navbar = ({ children }) => {
    const menuItem = [
        {
            path: "/",
            name: "Dashboard",
            icon: <AiOutlineHome />
        },
        {
            path: "/angkatan",
            name: "Angkatan",
            icon: <AiFillCopy />
        },
        {
            path: "/graduation",
            name: "Graduation",
            icon: <FaUserGraduate />
        },
        {
            path: "/prestasion",
            name: "Prestasion",
            icon: <BiMedal />
        },
    ]
    return (
        <>
            <div className="navbar">
                <div className="fixnav">
                    {
                        menuItem.map((item, index) => (

                            <NavLink to={item.path} key={index} className="link" activeClassname="actived">
                                <div className="icon">{item.icon}</div>
                                <div className='description'>{item.name}</div>
                            </NavLink>

                        ))
                    }
                </div>
               
            </div>
            <div className='container'><main>{children}</main></div>

            
        </>
            
    )

}
export default Navbar;