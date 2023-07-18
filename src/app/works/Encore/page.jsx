import Image from 'next/image';
import Link from 'next/link';

import Badge from '@/components/Badge';

import Homepage from '@/assets/Encore/homepage.png';
import Image1 from '@/assets/Encore/1.jpg';
import Image2 from '@/assets/Encore/2.jpg';
import Image3 from '@/assets/Encore/3.png';

export default function Encore() {
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
                        安可網紅數位行銷內容庫
                    </li>
                </ul>
            </div>
            <div className='flex flex-col gap-8 mb-8'>
                <div className='flex flex-col gap-2'>
                    <span className='text-xl font-bold'>
                        Tech Stack
                    </span>
                    <div className='flex flex-wrap gap-2'>
                        <Badge title={'Vue 2'} />
                        <Badge title={'Element UI'} />
                        <Badge title={'Vue admin template'} />
                        <Badge title={'Axios'} />
                        <Badge title={'Pinia'} />
                    </div>
                </div>
                <div className='flex flex-col gap-2'>
                    <span className='text-xl font-bold'>
                        Works
                    </span>
                    <div className='flex flex-wrap gap-2'>
                        <Badge title={'SAAS Platform'} />
                        <Badge title={'Frontend Develop'} />
                        <Badge title={'UI Modify'} />
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
                        href='https://encoredays.com/tw/business/encore-saas-content-service/'
                        target='_blank'
                    >
                        Website
                    </a>
                    <p>
                        Book exclusive customized influencer content to instantly obtain the social media content your customers love without any time difference.
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
                    </div>
                </div>
            </div>
        </div>
    )
}
