import axios from 'axios';

const BASE_URL = 'https://dummyjson.com';

class ProductService {
  async getProducts(category = '') {
    const response = await axios.get(
      BASE_URL + '/products/category/' + category,
    );
    return response;

  }
  async getProductDetail(id = 0) {
    const response = await axios.get(BASE_URL + '/products/' + id);
    return response;
  }
}

export default new ProductService();
