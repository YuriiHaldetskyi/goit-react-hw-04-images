import { useState } from 'react';
import { Modal } from 'components/Modal/modal';
import { ModalImage, Image, Item } from './ImageGalleryItem.styled';
// import PropTypes from 'prop-types';

export const ImageGalleryItem = ({
  item: { webformatURL, largeImageURL, tags },
}) => {
  const [modalOpen, setModalOpen] = useState(false);
  const toggleModal = () => setModalOpen(!modalOpen);

  return (
    <Item onClick={toggleModal}>
      <Image src={webformatURL} alt={tags} />
      {modalOpen && (
        <Modal onClose={toggleModal}>
          <ModalImage src={largeImageURL} alt={tags} />
        </Modal>
      )}
    </Item>
  );
};
