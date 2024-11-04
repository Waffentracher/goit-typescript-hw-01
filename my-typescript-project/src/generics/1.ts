import axios from 'axios';

async function fetchData<T>(url: string): Promise<T> {
  try {
    const response = await axios.get<T>(url);
    return response.data;
  } catch (error) {
    throw new Error(`Error fetching from ${url}: ${error}`);
  }
}

fetchData<{ name: string; age: number }>('https://api.example.com/user')
  .then(data => console.log(data))
  .catch(error => console.error(error));
