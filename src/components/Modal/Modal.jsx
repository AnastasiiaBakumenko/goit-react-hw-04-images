import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { DivOverlay, DivModal } from './Modal.styled';

export function Modal({modalImg,tags, closeModal})  {
    useEffect(()=>{

        const closeModalByEscape = e => {
            if (e.code === 'Escape') {
                closeModal();
            };
        };

            window.addEventListener('keydown', closeModalByEscape);
        return () => {
            window.removeEventListener('keydown', closeModalByEscape);
        };
    }, [closeModal]);

   const  handleBackdropClick = e => {
    if(e.target === e.currentTarget) {
  
        closeModal();
    };
    // console.log(e.currentTarget);
};

        return (
            <DivOverlay onClick={handleBackdropClick}>
                <DivModal>
                <img src={modalImg} alt={tags}/>
                </DivModal>
            </DivOverlay>
        );
    }
    
    Modal.propTypes = {
        children: PropTypes.node,
    };

     

    

