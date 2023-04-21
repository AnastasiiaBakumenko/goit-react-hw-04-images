import { Modal } from 'components/Modal/Modal';
import { useState } from 'react';
import { Li, Img } from './ImageGalleryItem.styled';

export const ImageGalleryItem =({webformatURL, tags, largeImageURL})=> {
  
  const [isModalOpen, setIsModalOpen] = useState(false)

  const toggleModal = () => {
    setIsModalOpen(prevState => !prevState);
  };

  return (
    <Li>
      <Img
        src={webformatURL}
        alt={tags}
        width="430"
        height="210"
        loading="lazy"
        onClick={toggleModal}
      />

      {isModalOpen && (
        <Modal
          modalImg={largeImageURL}
          tags={tags}
          closeModal={toggleModal}
        />
      )}
    </Li>
  );
}

   
