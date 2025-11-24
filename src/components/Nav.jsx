import Link from 'next/link';
import React from 'react';

const Navbar = () => {
    return (
        <div className='flex justify-center gap-5 cursor-pointer py-5 sticky top-0 z-50 bg-[#1a1818]'>
            <Link href={`/`}>Home</Link>
            <Link href={`/products`}>Products</Link>
            <Link href={`/about`}>About Us</Link>
            <Link href={`/login`}>Login</Link>
            <Link href={`/register`}>Register</Link>
            <Link href={`/dashboard`}>Dashboard</Link>
        </div>
    );
};

export default Navbar;