import React, { useState } from 'react';
import axios from 'axios';

const url = 'http://localhost:5005/users';

const Form = () => {

    const [userInfo, setUserInfo] = useState(
        { username: '', filters: '', userId: '' }
    );

    // submit the form
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const { data : { id = 'NOT_EXIST' } } = await axios.get(`${url}/${userInfo.username}`);

            setUserInfo({ ...userInfo, userId: id });

        } catch (error) {
            console.log(error);
        }
    }

    // clear the form
    const clear = () => {
        setUserInfo({ username: '', filters: '', userId: '' });
    }

    return (
        <div class="container-fluid bg-light rounded">
            <form onSubmit={handleSubmit}>
                <h5 align="center" class="pt-3">
                    Search
                </h5>
                <div class="form-group m-3">
                    <label>Search Users</label>
                    <input 
                        type="text" 
                        class="form-control" 
                        placeholder="Username" 
                        value={userInfo.username}
                        onChange={(e) => setUserInfo({ ...userInfo, username: e.target.value, userId: '' })}
                    />
                </div>
                <div class="form-group m-3">
                    <label>Filters</label>
                    <input 
                        type="text" 
                        class="form-control" 
                        placeholder="In 3 months, Tweet Only, etc" 
                        value={userInfo.filters}
                        onChange={(e) => setUserInfo({ ...userInfo, filters: e.target.value, userId: '' })}
                    />
                </div>
                <div class="row mx-3 mb-2">
                    <button class="btn btn-primary btn-block" type="submit" >
                        SUBMIT
                    </button>
                </div>
                <div class="row mx-3 pb-3">
                    <button class="btn btn-danger btn-sm btn-block" onClick={clear}>
                        CLEAR
                    </button>
                </div>
            </form>

            { userInfo.userId !== '' && (
                userInfo.userId === 'NOT_EXIST' ? (
                    <h4 align="center" class="bg-warning text-white rounded">
                        The user @{userInfo.username} doesn't exist.
                    </h4>
                    ) : (
                    <h4 align="center" class="bg-info text-white rounded">
                        The user @{userInfo.username} exists with id = {userInfo.userId}.
                    </h4>
                )
            )}

        </div>
    );
}

export default Form;