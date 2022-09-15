import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID r97eofRrqEn8E3bkmDpAYiXJcSHyEOvjqkixYK6qNYs',
  },
});
