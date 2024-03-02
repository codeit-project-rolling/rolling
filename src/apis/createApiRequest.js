import axios from 'axios';

// axios 인스턴스를 생성하는 함수
const createInstance = () => {
  return axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    headers: { 'Content-Type': 'application/json' },
    timeout: 1000,
  });
};

// GET, POST, DELETE 리퀘스트를 생성하는 함수
export default function createApiRequest() {
  const instance = createInstance();

  return {
    // GET
    get: async (apiEndpoint) => {
      const SUCCESS = 200;

      try {
        const response = await instance.get(apiEndpoint);

        if (response.status !== SUCCESS) {
          throw new Error(`Response error with status code: ${response.status}`);
        }

        return response.data;
      } catch (errorData) {
        const errorMessage = errorData.response ? errorData.response.data : errorData.toString();
        throw new Error(errorMessage);
      }
    },
    // POST
    post: async (apiEndpoint = '', postData = {}) => {
      const SUCCESS = 201;

      try {
        const response = await instance.post(apiEndpoint, postData);

        if (response.status !== SUCCESS) {
          throw new Error(`Response error with status code: ${response.status}`);
        }

        return response.data;
      } catch (errorData) {
        const errorMessage = errorData.response ? errorData.response.data : errorData.toString();
        throw new Error(errorMessage);
      }
    },
    // DELETE
    delete: async (apiEndpoint = '') => {
      const SUCCESS = 204;

      try {
        const response = await instance.delete(apiEndpoint);

        if (response.status !== SUCCESS) {
          throw new Error(`Response error with status code: ${response.status}`);
        }
      } catch (errorData) {
        const errorMessage = errorData.response ? errorData.response.data : errorData.toString();
        throw new Error(errorMessage);
      }
    },
  };
}
