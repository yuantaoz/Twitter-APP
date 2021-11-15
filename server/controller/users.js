import axios from 'axios';
import dotenv from 'dotenv';

const rootURL = 'https://api.twitter.com/2/users';
dotenv.config();

export const getUsers = async (req, res) => {
    
    const { username } = req.params;

    const url = `${rootURL}/by/username/${username}`;

    try {
        const { data: { data: info } = {} } = await axios.get(
            url, 
            { headers: 
                { Authorization: process.env.TOKEN }
            }
        );

        if (info) {
            res.status(200).json(info);
        } else {
            res.status(200).json({ message: `Cannot find user ${username}` });
        }
    } catch (error) {
        res.status(404).json({ message: error.message });
    }

}