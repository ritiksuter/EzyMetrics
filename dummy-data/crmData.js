import axios from 'axios';

export async function fetchCRMData() {
    try {
        return await axios.get(`https://jsonplaceholder.typicode.com/users`);
    }
    catch (error) {
        console.log("Something went wrong while fetching the data from public api");
        return;
    }
}