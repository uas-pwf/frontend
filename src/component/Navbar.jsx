import '../App.css'
import {AiOutlineHome} from 'react-icons/ai'

const Navbar = () =>{
    return(
        <>
            <div className="fixnav">
                <div className="container">
                    <a href="./">
                        <AiOutlineHome className='icon'/>
                        <span className='description'>HOME</span>
                    </a>
                </div>
                <div className="container">
                    <a href="./">
                        <AiOutlineHome className='icon'/>
                        <span className='description'>ANGKATAN</span>
                    </a>
                </div>
                <div className="container">
                    <a href="./">
                        <AiOutlineHome className='icon'/>
                        <span className='description'>GRADUATE</span>
                    </a>
                </div>
                <div className="container">
                    <a href="./">
                        <AiOutlineHome className='icon'/>
                        <span className='description'>PRESTATION</span>
                    </a>
                </div>
            </div>
        </>
    )
}
export default Navbar;