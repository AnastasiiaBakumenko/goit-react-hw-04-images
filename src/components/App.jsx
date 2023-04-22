import { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { fetchImg } from '../apiServise/apiServise';
import { Search } from './Searchbar/Searchbar';
import { Loader } from './Loader/Loader';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Button } from './Button/Button';

export default function App(){
  const [search, setSearch] = useState('');
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [showBtn, setShowBtn] = useState(false);

  useEffect(()=>{
    if (search.trim() === '') {
      return;
    };
    
    fetchImg(search, page).then(
      response => {
        setImages(images => [...images, ...response.hits]);
        setShowBtn(page < Math.ceil(response.totalHits / 12));
        
        if(!response.hits.length) {
          toast.error(`These are no "${search}" images`);
          return;
        };
        
        if(page === 1) {
          toast.success(`We found ${response.totalHits} images`);
        };
      }
    ).catch(
      error => { 
        toast.error(error.message);
        console.log(error); 
      }
    ).finally(
      () => {
        setIsLoading(false);
      }
    );
  },[search, page]);


 const handleSearch = text => {
    setSearch(text);
    setPage(1);
    };
const handleLoadMore = () => {
    setPage(prevState => ({ page: prevState.page + 1 }));
  };

return (
      <>
        <Search onSubmit={handleSearch} />
        {isLoading && <Loader />}
        {images && <ImageGallery images={images} />}
        {showBtn && <Button onLoadMore={handleLoadMore} />}
        <ToastContainer />
      </>
    );

};