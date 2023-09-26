import axios from 'axios';
import { Children, createContext, useEffect, useState } from 'react';
import { options } from '../utils/constants';

export const YoutubeContext = createContext();

// context'te tutlan verileri bütün uygulamaya aktarıcak
export const YoutubeProvider = ({ children }) => {
  const [selectedCategory, setSelectedCategory] = useState({
    name: 'New',
    type: 'category',
  });
  const [videos, setVideos] = useState(null);

  // selected categoy'nin değişimini izleme
  useEffect(() => {
   
    // eğerki seçilen seçeneğin  tipi categpry ise veriler çek
    if (selectedCategory.type === 'category') {
      fetchCategory(selectedCategory.name);
    }
  }, [selectedCategory]);

  // youtube'dan verileri çeker
  const fetchCategory = (category) => {
    axios
      .get(
        `https://youtube138.p.rapidapi.com/search/?q=${category}`,
        options
      )
      .then((res) => setVideos(res.data.contents))
      .catch((err) => console.log(err));
  };

  return (
    <YoutubeContext.Provider
      value={{ selectedCategory, setSelectedCategory, videos }}
    >
      {children}
    </YoutubeContext.Provider>
  );
};