'use client';

import classNames from 'classnames';
import { useState, useEffect } from 'react';
import { MdHome, MdPerson, MdWork } from 'react-icons/md';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const DropdownItem = ({ icon, title, href, pathname }) => (
    <li>
        <Link
            className={classNames('text-md px-4 py-2', pathname === href  ? 'active' : '')}
            href={href}
        >
            {icon}
            {title}
        </Link>
    </li>
);

const MenuItem = ({ icon, title, href, pathname }) => (
    <li>
        <Link
            className={pathname === href ? 'active' : ''}
            href={href}
        >
            {icon}
            {title}
        </Link>
    </li>
);

export default function Navbar() {
    const pathname = usePathname();
    const [isTop, setIsTop] = useState(true);

    useEffect(() => {
        const scrollHandler = () => {
            window.scrollY > 0 ? setIsTop(false) : setIsTop(true)
        };
        window.addEventListener('scroll', scrollHandler);
        return () => window.removeEventListener('scroll', scrollHandler);
    }, [isTop]);

    return (
        <div className={classNames('navbar sticky top-0 z-[12] backdrop-filter backdrop-blur-lg', isTop ? '' : 'shadow-xl border-b-2 border-base-100/20')}>
            <div className="navbar-start px-2">
                <div className="btn btn-ghost normal-case text-xl">
                    <Link href={'/'}>🐻 Eddy's Portfolio</Link>
                </div>
            </div>
            <div className="navbar-end hidden md:flex">
                <ul className="menu menu-horizontal px-2 gap-2">
                    <MenuItem icon={<MdHome />} title='Home' href='/' pathname={pathname} />
                    <MenuItem icon={<MdPerson />} title='About' href='/about' pathname={pathname} />
                    <MenuItem icon={<MdWork />} title='Project' href='/project' pathname={pathname} />
                </ul>
            </div>
            <div className="navbar-end flex md:hidden dropdown dropdown-bottom">
                <label className="btn btn-ghost md:hidden" tabIndex={0}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>
                <ul className="menu menu-sm dropdown-content mt-4 z-[1] p-2 gap-2 shadow-lg rounded-box w-52 bg-base-100/70" tabIndex={0}>
                    <DropdownItem icon={<MdHome />} title={'Home'} href='/' pathname={pathname} />
                    <DropdownItem icon={<MdPerson />} title={'About'} href='/about' pathname={pathname} />
                    <DropdownItem icon={<MdWork />} title={'Project'} href='/project' pathname={pathname} />
                </ul>
            </div>
        </div>
    );
};
