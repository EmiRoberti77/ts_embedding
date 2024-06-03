import axios from 'axios';
const endpoint =
  'https://0ypn7p2kk1.execute-api.us-east-1.amazonaws.com/prod/upload';

axios
  .get(endpoint)
  .then((success) => console.log(success.data))
  .catch((err) => console.log(err));

const response = console.log('done - 4');
