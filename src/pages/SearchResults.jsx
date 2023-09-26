import React, { useEffect , useState} from "react";
import { useSearchParams } from "react-router-dom";
import { getData } from "../utils/helpers";
import SideNav from "./../components/SideNav";
import Loading from '../components/Loading';
import VideoCard from '../components/VideoCard';

//  arama parametresi ---> use searchparams ile

const SearchResults = () => {
  const [results, setResults] = useState(null);
  const [params, setParams] = useSearchParams();

  // url deki arama terimine ulaşmak iöçin
  const query = params.get("search_query");

  useEffect(() => {
    setResults(null);

    getData(`https://youtube138.p.rapidapi.com/search/?q=${query}`).then(
      (data) => setResults(data)
    );
  }, [query]);
   
//  öneri verirken çalışır
const handleClick = ()=> {
  // url obje olarak güncelle.
  setParams({ search_query: results.didYouMean });
}
  
  return (
    <div className="flex bg-[#0f0f0f] text-white min-h-[100vh]">
      <SideNav />
      {results?.didYouMean && (
      <p className="cursor-pointer" onClick={handleClick}>
        Bunu mu kastetmek istediniz
        <span className="font-bold">
           {results?.didYouMean}
        </span> 
      </p>
      )}

      <div className="flex flex-col gap-20 p-10 w-full">
      {/* cevap yüklenmişse ekrana yaz */}
      {!results ? (
        <Loading />
      ) : (
        results.contents.map((item, i) => {
          if (item.type !== "video") return;
          return <VideoCard key={i} video={item.video} />;
        })
      )}
      </div>
    </div>
  );
};

export default SearchResults;
