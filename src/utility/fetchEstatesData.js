import axios from 'axios';

const fetchEstatesData = async () => {
    try{
        const res = await axios.get('/estatesData.json');
        return res.data
    }catch(error){
        throw new Response('Failed to load data', { status: error.response?.status || 500 });
    }
};

export default fetchEstatesData;
