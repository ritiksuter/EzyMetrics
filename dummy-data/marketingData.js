import axios from 'axios';

export async function fetchMarketingData() {
    try {
        return await axios.get(`https://jsonplaceholder.typicode.com/posts`);
    }
    catch (error) {
        console.log("Something went wrong while fetching the data from public api");
        return;
    }
}