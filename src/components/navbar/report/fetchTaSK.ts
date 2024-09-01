import axios from "axios";



export default async function fetchTask(){
    try {
      const response = await axios.get('/api/task/tasks');
      console.log('Tasks fetched:', response.data);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.error('Axios error:', error.response?.data);
      } else {
        console.error('Unexpected error:', error);
      }
    }
}



