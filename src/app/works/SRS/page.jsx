import Image from 'next/image';
import Link from 'next/link';

import Badge from '@/components/Badge';

import Login from '@/assets/SRS/login.png';
import Account from '@/assets/SRS/account.png';
import Supplier from '@/assets/SRS/supplier.png';
import Setting from '@/assets/SRS/setting.png';

export default function SRS() {
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
                        雙龍興供應鏈管理系統
                    </li>
                </ul>
            </div>
            <div className='flex flex-col gap-8 mb-8'>
                <div className='flex flex-col gap-2'>
                    <span className='text-xl font-bold'>
                        Tech Stack
                    </span>
                    <div className='flex flex-wrap gap-2'>
                        <Badge title={'Next.js 12'} />
                        <Badge title={'Ant Design'} />
                        <Badge title={'TypeScript'} />
                        <Badge title={'Nest.js'} />
                        <Badge title={'TypeORM'} />
                        <Badge title={'MySQL'} />
                        <Badge title={'MSSQL'} />
                    </div>
                </div>
                <div className='flex flex-col gap-2'>
                    <span className='text-xl font-bold'>
                        Works
                    </span>
                    <div className='flex flex-wrap gap-2'>
                        <Badge title={'Backend Develop'} />
                        <Badge title={'Frontend Develop'} />
                        <Badge title={'UI / UX Design'} />
                    </div>
                </div>
                <div className='flex flex-col gap-2'>
                    <span className='text-xl font-bold'>
                        Introduce
                    </span>
                    <p>
                        Supply Chain Management (SCM) is a management field that involves coordinating and controlling the entire process of product delivery, from raw materials to the end consumer. Its goal is to improve efficiency, reduce costs, and ensure timely product delivery to customers.
                    </p>
                </div>
                <div className='flex flex-col gap-4'>
                    <span className='text-xl font-bold'>
                        Previews
                    </span>
                    <div className='flex flex-wrap gap-16 justify-center items-center'>
                        <Image
                            className='w-full md:max-w-xl h-fit rounded-xl shadow-sm'
                            src={Login}
                            alt={'Login'}
                        />
                        <Image
                            className='w-full md:max-w-xl h-fit rounded-xl shadow-sm'
                            src={Account}
                            alt={'Account'}
                        />
                        <Image
                            className='w-full md:max-w-xl h-fit rounded-xl shadow-sm'
                            src={Supplier}
                            alt={'Supplier'}
                        />
                        <Image
                            className='w-full md:max-w-xl h-fit rounded-xl shadow-sm'
                            src={Setting}
                            alt={'Setting'}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}
