import axios from 'axios';

const baseURL = 'http://localhost:3000'

export const getUsers = async () => {
    try {

        const response = await axios({
            method: 'GET',
            url: `${baseURL}/users`
        });

        return response.data;

    } catch (error) {
        console.log(error.message);
        return false;
    }
}

export const saveUser = async (user) => {
    try {
        const response = await axios({
            method: 'POST',
            url: `${baseURL}/user`,
            data: {
                name: user.name,
                phone: user.phone,
                email: user.email,
                country: user.country,
                from: user.from,
                to: user.to,
                radio: user.radio,
                preferences: user.preferences
            }
        });

        return response.data;
    } catch (error) {
        console.log(error.message)
        return error.message
    }
}