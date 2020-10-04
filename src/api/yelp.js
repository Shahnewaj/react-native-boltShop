import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.yelp.com/v3/businesses',
  headers: {
    Authorization:
      'Bearer F6TsYi9EzKvux49UvfC_fNekTPGrhqcHC4yDIaW9LGSpPKLJ7ea--3nit7NihuOyTsMQjmyZQIzhfiXFiWEvXmwHwzyLdeLSqmUWTS-d6D3uYboMMZEDiItUu8RyX3Yx',
  },
});
