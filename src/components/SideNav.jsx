import { categories } from "../utils/constants";
import { useContext } from "react";
import { YoutubeContext } from "../context/youtubeContext";

const SideNav = () => {
  // context abone olma
   
  const {selectedCategory, setSelectedCategory } =
   useContext(YoutubeContext);
 
  return (
    <nav className="flex flex-col p-4">
      {categories.map((item, i) => (
        <div 
        key={i} 
        // sçilenin contect gönderme
        onClick= {() => setSelectedCategory(item)}>

        <div className={`
        ${selectedCategory === item.name && `bg-[#2d2d2d]`}
        flex items-center gap-3 p-2 py-4 text-lg transition cursor-pointer rounded-md hover:bg-[#2d2d2d]`}>
          {item.icon}
          <span>{item.name}</span>
        </div>
    {/*   diver değeri true ise alta çizgi ekleme */}
        {item.divider && <hr/>}
        </div>
      ))}
   </nav>
  );
};

export default SideNav;
