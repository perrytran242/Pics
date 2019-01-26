import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 
            'Client-ID 614a64c32440450b250c3873584e28674c754a6c975a3f59e71d0679724833cb'
    },
});


