import { useState } from 'react';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Searchbar } from './Searchbar/Searchbar';

export default function App() {
  const [topic, setTopic] = useState('');

  const handleFormSubmit = topic => {
    setTopic(topic);
  };
  return (
    <>
      <Searchbar onSubmit={handleFormSubmit} />
      <ImageGallery topic={topic}></ImageGallery>
    </>
  );
}
