import Image from 'next/image';
import Link from 'next/link';

import Badge from '@/components/Badge';

import Homepage from '@/assets/Showhue/homepage.png';
import Image1 from '@/assets/Showhue/generate_origin.png';
import Image2 from '@/assets/Showhue/generate.png';
import Image3 from '@/assets/Showhue/loading.png';
import Image4 from '@/assets/Showhue/fail.png';
import Image5 from '@/assets/Showhue/gallery.png';
import Image6 from '@/assets/Showhue/price.png';
import Image7 from '@/assets/Showhue/footer.png';
import Image8 from '@/assets/Showhue/mobile_homepage.png';
import Image9 from '@/assets/Showhue/mobile_gallery.png';
import Image10 from '@/assets/Showhue/mobile_price.png';
import Image11 from '@/assets/Showhue/mobile_footer.png';

export default function Showhue() {
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
                        ShowHue Visinova
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
                        <Badge title={'Ant Design'} />
                        <Badge title={'Axios'} />
                        <Badge title={'Redux'} />
                        <Badge title={'SCSS'} />
                        <Badge title={'Image Carousel'} />
                    </div>
                </div>
                <div className='flex flex-col gap-2'>
                    <span className='text-xl font-bold'>
                        Works
                    </span>
                    <div className='flex flex-wrap gap-2'>
                        <Badge title={'Frontend Develop'} />
                        <Badge title={'RWD optimize'} />
                        <Badge title={'UI optimize'} />
                    </div>
                    <p>
                        Achieve responsive web design (RWD) on any device using SCSS for seamless layout slicing.
                    </p>
                    <p>
                        Optimize UI design by simplifying, maintaining consistency, and ensuring clear communication for an enhanced user experience
                    </p>
                    <p>
                        Improve the shortcomings of the original design draft and the missing scenarios
                    </p>
                </div>
                <div className='flex flex-col gap-2'>
                    <span className='text-xl font-bold'>
                        Introduce
                    </span>
                    <p>
                        Transform your product photos into eye-catching masterpieces with AI-powered automatic enhancement.
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
                            className='w-fit md:max-w-fit max-h-96 rounded-xl shadow-sm'
                            src={Image8}
                            alt={'Image'}
                        />
                        <Image
                            className='w-fit md:max-w-fit max-h-96 rounded-xl shadow-sm'
                            src={Image9}
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
                    </div>
                </div>
            </div>
        </div>
    )
}
