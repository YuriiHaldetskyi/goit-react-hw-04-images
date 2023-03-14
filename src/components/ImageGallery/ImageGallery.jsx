import { Loader } from 'components/Loader/loader';
import { useEffect, useState } from 'react';
import { Gallery } from './ImageGallery.styled';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { Button } from 'components/Button/Button';

import fetchTopic from 'SearchServies/Api';
// import PropTypes from 'prop-types';

export const ImageGallery = ({ topic }) => {
  const [stateTopic, setTopic] = useState([]);
  const [error, setError] = useState(null);
  const [status, setStatus] = useState('idle');
  const [page, setPage] = useState(1);

  useEffect(() => {
    if (topic === '') {
      return;
    }
    if (stateTopic !== topic) {
      setStatus('pending');
      fetchTopic(topic, page)
        .then(topic => {
          if (topic.hits.length === 0) {
            setStatus('rejected');
            return;
          }
          setTopic([...stateTopic, ...topic.hits]);
          setStatus('resolved');
        })
        .catch(error => {
          setError(error);
          setStatus('rejected');
        });
    }
  }, [topic, page]);

  const loadMore = () => {
    setPage(prevState => prevState + 1);
  };

  if (status === 'idle') {
    return <h1>Input topic please</h1>;
  }
  if (status === 'pending') {
    return <Loader />;
  }
  if (status === 'rejected') {
    return <h2>{error ? error.message : `Sorry i dont find ${topic}`}</h2>;
  }
  if (status === 'resolved') {
    return (
      <>
        <Gallery>
          {stateTopic.length !== 0 &&
            stateTopic.map(item => {
              return <ImageGalleryItem key={item.id} item={item} />;
            })}
        </Gallery>
        {stateTopic.length < 12 ? '' : <Button onClick={() => loadMore()} />}
      </>
    );
  }
};
