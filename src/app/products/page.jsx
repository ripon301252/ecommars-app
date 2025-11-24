import Link from 'next/link';
import React from 'react';

const page = async() => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();
    // console.log({data})
    return (
        <div className='flex flex-col'>
          {
            data.map(user=> <Link key={user.id} href={`/products/${user.id}`}>{user.name}</Link>)
          }
        </div>
    );
};

export default page;