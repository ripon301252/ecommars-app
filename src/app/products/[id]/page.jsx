import React from 'react';

const page = async({params}) => {
    const {id} = await params;
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
    const data = await res.json();
    const {name, username, email} = data
    return (
        <div>
            <h1>Products details Name : {name}</h1>
            <h1>Products details username : {username}</h1>
            <h1>Products details email: {email}</h1>
        </div>
    );
};

export default page;