import React, {useEffect, useState} from 'react';
import yelp from '../api/yelp';

export default () => {
  const [results, setResults] = useState([]);
  const [errormsg, setErrorMsg] = useState('');

  const handleSearchApi = async (searchTerm) => {
    try {
      const response = await yelp.get('/search', {
        params: {
          limit: 50,
          term: searchTerm,
          location: 'New York',
        },
      });
      setResults(response.data.businesses);
    } catch (err) {
      setErrorMsg('something went wrong ');
    }
  };
  useEffect(() => {
    handleSearchApi('pasta');
  }, []);

  return [results, handleSearchApi, errormsg];
};
