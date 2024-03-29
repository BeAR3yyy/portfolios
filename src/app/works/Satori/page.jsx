import Image from 'next/image';
import Link from 'next/link';

import Badge from '@/components/Badge';

import Homepage from '@/assets/Satori/homepage.png';
import Homepage_Open from '@/assets/Satori/homepage_open.png';
import Login from '@/assets/Satori/login.png';
import Image1 from '@/assets/Satori/image1.png';
import Image2 from '@/assets/Satori/image2.png';
import Image3 from '@/assets/Satori/image3.png';
import Image4 from '@/assets/Satori/image4.png';
import Image5 from '@/assets/Satori/image5.png';
import Image6 from '@/assets/Satori/image6.png';
import Image7 from '@/assets/Satori/image7.png';
import Image8 from '@/assets/Satori/image8.png';

export default function Satori() {
    return (
        <div className='flex flex-col gap-8 px-8 py-8 min-h-screen md:px-16'>
            <div className="text-xl breadcrumbs">
                <ul>
                    <li>
                        <Link href={'/works'}>
                            Works
                        </Link>
                    </li>
                    <li className='text-neutral-focus font-semibold'>
                        Satori
                    </li>
                </ul>
            </div>
            <div className='flex flex-col gap-8 mb-8'>
                <div className='flex flex-col gap-2'>
                    <span className='text-xl font-bold'>
                        Tech Stack
                    </span>
                    <div className='flex flex-wrap gap-2'>
                        <Badge title={'React 18'} />
                        <Badge title={'Mantine'} />
                        <Badge title={'Axios'} />
                        <Badge title={'Redux toolkit'} />
                        <Badge title={'SCSS'} />
                    </div>
                </div>
                <div className='flex flex-col gap-2'>
                    <span className='text-xl font-bold'>
                        Works
                    </span>
                    <div className='flex flex-wrap gap-2'>
                        <Badge title={'Frontend Develop'} />
                    </div>
                    <p>
                        Optimize UI design by simplifying, maintaining consistency, and ensuring clear communication for an enhanced user experience
                    </p>
                </div>
                <div className='flex flex-col gap-2'>
                    <span className='text-xl font-bold'>
                        Introduce
                    </span>
                    <a
                        className='text-blue-500'
                        href='https://www.satoriuw.com/'
                        target='_blank'
                    >
                        Website
                    </a>
                    <p>
                        Satori is a customer service company that provides specialty insurance solutions through the use of cutting-edge technology. There mission is to utilize technology to provide intuitive tools that enhance underwriter risk selection and speed to market.
                    </p>
                </div>
                <div className='flex flex-col gap-4'>
                    <span className='text-xl font-bold'>
                        Previews
                    </span>
                    <div className='flex flex-wrap gap-16 justify-center items-center'>
                        <Image
                            className='w-full md:max-w-xl h-fit rounded-xl shadow-sm'
                            src={Homepage}
                            alt={'Image'}
                        />
                        <Image
                            className='w-full md:max-w-xl h-fit rounded-xl shadow-sm'
                            src={Homepage_Open}
                            alt={'Image'}
                        />
                        <Image
                            className='w-full md:max-w-xl h-fit rounded-xl shadow-sm'
                            src={Login}
                            alt={'Image'}
                        />
                        <Image
                            className='w-full md:max-w-xl h-fit rounded-xl shadow-sm'
                            src={Image1}
                            alt={'Image'}
                        />
                        <Image
                            className='w-full md:max-w-xl h-fit rounded-xl shadow-sm'
                            src={Image2}
                            alt={'Image'}
                        />
                        <Image
                            className='w-full md:max-w-xl h-fit rounded-xl shadow-sm'
                            src={Image3}
                            alt={'Image'}
                        />
                        <Image
                            className='w-full md:max-w-xl h-fit rounded-xl shadow-sm'
                            src={Image4}
                            alt={'Image'}
                        />
                        <Image
                            className='w-full md:max-w-xl h-fit rounded-xl shadow-sm'
                            src={Image5}
                            alt={'Image'}
                        />
                        <Image
                            className='w-full md:max-w-xl h-fit rounded-xl shadow-sm'
                            src={Image6}
                            alt={'Image'}
                        />
                        <Image
                            className='w-full md:max-w-xl h-fit rounded-xl shadow-sm'
                            src={Image7}
                            alt={'Image'}
                        />
                        <Image
                            className='w-full md:max-w-xl h-fit rounded-xl shadow-sm'
                            src={Image8}
                            alt={'Image'}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}
