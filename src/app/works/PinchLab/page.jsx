import Image from 'next/image';
import Link from 'next/link';

import Badge from '@/components/Badge';

import Homepage from '@/assets/PinchLab/homepage.png';
import Image1 from '@/assets/PinchLab/homepage_open.png';
import Image2 from '@/assets/PinchLab/session.png';
import Image3 from '@/assets/PinchLab/session1.png';
import Image4 from '@/assets/PinchLab/session1_open.png';
import Image5 from '@/assets/PinchLab/session2.png';
import Image6 from '@/assets/PinchLab/session3.png';
import Image7 from '@/assets/PinchLab/session4.png';
import Image8 from '@/assets/PinchLab/session5.png';
import Image9 from '@/assets/PinchLab/session6.png';
import Image10 from '@/assets/PinchLab/mobile.png';
import Image11 from '@/assets/PinchLab/mobile1.png';
import Image12 from '@/assets/PinchLab/mobile2.png';
import Image13 from '@/assets/PinchLab/mobile3.png';
import Image14 from '@/assets/PinchLab/mobile4.png';
import Image15 from '@/assets/PinchLab/mobile5.png';
import Image16 from '@/assets/PinchLab/mobile6.png';
import Image17 from '@/assets/PinchLab/mobile7.png';
import Image18 from '@/assets/PinchLab/mobile8.png';
import Image19 from '@/assets/PinchLab/mobile9.png';
import Image20 from '@/assets/PinchLab/footer.png';

export default function PinchLab() {
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
                        PinchLab Official Website
                    </li>
                </ul>
            </div>
            <div className='flex flex-col gap-8 mb-8'>
                <div className='flex flex-col gap-2'>
                    <span className='text-xl font-bold'>
                        Tech Stack
                    </span>
                    <div className='flex flex-wrap gap-2'>
                        <Badge title={'Next.js 13 App router'} />
                        <Badge title={'Framer motion'} />
                        <Badge title={'SCSS'} />
                    </div>
                </div>
                <div className='flex flex-col gap-2'>
                    <span className='text-xl font-bold'>
                        Works
                    </span>
                    <div className='flex flex-wrap gap-2'>
                        <Badge title={'Frontend Develop'} />
                        <Badge title={'UI design'} />
                        <Badge title={'Animation design'} />
                        <Badge title={'RWD design'} />
                    </div>
                    <p>
                        Participate in UI design.
                    </p>
                    <p>
                        Enhance website's user experience with smoother transitions and animations using Framer Motion.
                    </p>
                </div>
                <div className='flex flex-col gap-2'>
                    <span className='text-xl font-bold'>
                        Introduce
                    </span>
                    <p>
                        PinchLab is a startup company that provides a platform for users to create their own custom-made products, and this is their corporate website.
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
                        <Image
                            className='w-full md:max-w-xl h-fit rounded-xl shadow-sm'
                            src={Image9}
                            alt={'Image'}
                        />
                        <Image
                            className='w-full md:max-w-xl h-fit rounded-xl shadow-sm'
                            src={Image20}
                            alt={'Image'}
                        />
                        <Image
                            className='w-fit md:max-w-fit max-h-96 rounded-xl shadow-sm'
                            src={Image10}
                            alt={'Image'}
                        />
                        <Image
                            className='w-fit md:max-w-fit max-h-96 rounded-xl shadow-sm'
                            src={Image11}
                            alt={'Image'}
                        />
                        <Image
                            className='w-fit md:max-w-fit max-h-96 rounded-xl shadow-sm'
                            src={Image12}
                            alt={'Image'}
                        />
                        <Image
                            className='w-fit md:max-w-fit max-h-96 rounded-xl shadow-sm'
                            src={Image13}
                            alt={'Image'}
                        />
                        <Image
                            className='w-fit md:max-w-fit max-h-96 rounded-xl shadow-sm'
                            src={Image14}
                            alt={'Image'}
                        />
                        <Image
                            className='w-fit md:max-w-fit max-h-96 rounded-xl shadow-sm'
                            src={Image15}
                            alt={'Image'}
                        />
                        <Image
                            className='w-fit md:max-w-fit max-h-96 rounded-xl shadow-sm'
                            src={Image16}
                            alt={'Image'}
                        />
                        <Image
                            className='w-fit md:max-w-fit max-h-96 rounded-xl shadow-sm'
                            src={Image17}
                            alt={'Image'}
                        />
                        <Image
                            className='w-fit md:max-w-fit max-h-96 rounded-xl shadow-sm'
                            src={Image18}
                            alt={'Image'}
                        />
                        <Image
                            className='w-fit md:max-w-fit max-h-96 rounded-xl shadow-sm'
                            src={Image19}
                            alt={'Image'}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}
