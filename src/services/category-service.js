import axios from 'axios';

const BASE_URL = 'https://dummyjson.com';

class CategoryService {
  async getCategories() {
    const response = await axios.get(BASE_URL + '/products/categories');
    return response;
  }
}

export default new CategoryService();
