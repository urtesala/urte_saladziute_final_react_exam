import { useState } from 'react';
import { useEffect } from 'react';

function useFetch(url = 'http://localhost:8001/shops', initVal = []) {
  const [data, setData] = useState(initVal);

  useEffect(() => {
    // let url = 'http://localhost:8001/users';
    fetch(url)
      .then((resp) => resp.json())
      .then((gotData) => setData(gotData))
      .catch((err) => console.warn('useFetch klaida', err));
  }, []);

  return [data, setData];
}

export default useFetch;
