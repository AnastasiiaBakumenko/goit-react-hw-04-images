import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';
import { Ul } from './ImageGallery.styled';


export const ImageGallery = ({ images }) => (
  <Ul className='imageGallery'>
    {images.map(({ id, webformatURL, largeImageURL, tags }) => (
      <ImageGalleryItem
        key={id}
        webformatURL={webformatURL}
        largeImageURL={largeImageURL}
        tags={tags} />
    ))}
  </Ul>
);