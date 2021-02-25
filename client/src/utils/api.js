import axios from 'axios';
// get data from our api endpoint
export const getData = async () => {
  try {
    const backend_response = await axios({
      method: 'get',
      url: 'http://localhost:5000/api/data',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return backend_response.data.data;
  } catch (error) {
    return 'error';
  }
};
