import axios from 'axios';

const getData = () => {
  const { data: response } = axios.get(API_URL);

  return response;
};

export default getData;
