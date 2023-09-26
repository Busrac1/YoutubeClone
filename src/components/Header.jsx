import {
  AiFillBell, 
  AiOutlineSearch,
  AiFillYoutube} 
  from "react-icons/ai";
import { Link , useNavigate} from "react-router-dom";

const Header = () => {
  const navigate=useNavigate();
  
  // form gönderildiğinde çalışır.
  const handleSubmit=(e) => {
    e.preventDefault();
    
    navigate('/results?search_query=${e.target[0].value}')
    e.target[0].value= '';
  }
  return (
    <header className="flex justify-between items-center p-4 bg-[#0F0F0F] text-white">
        <Link to={'/'} className="flex items-center gap-3 text-3x1">
            <AiFillYoutube className="text-red-500 text-5xl" />
            <h1>Youtube</h1>
        </Link>
        <form onSubmit={handleSubmit} className="flex items-center bg-white rounded ">
            <input className="rounded px-4 py-1 text-black outline-none" type="text" placeholder="ara..." />
            <button className="mr-2 text-black text-2x1">
                <AiOutlineSearch/>
            </button>
        </form>

        <AiFillBell className="text-2x1"/>
    </header>
  )
}

export default Header