import Link from 'next/link';
import Image from 'next/image';

import SRS_Image from '@/assets/SRS/supplier.png';
import Encore_Image from '@/assets/Encore/homepage.png';
import Showhue_Image from '@/assets/Showhue/homepage.png';
import PinchLab_Image from '@/assets/PinchLab/homepage.png';
import Satori_Image from '@/assets/Satori/homepage.png';

const Canvas = ({ title, image, href }) => (
    <Link
        className='flex flex-col gap-3 max-w-xl items-center hover:scale-105 transform-gpu cursor-pointer'
        href={href}
    >
            <span className='text-lg font-semibold'>
                { title }
            </span>
        <Image
            className='rounded-xl shadow-md'
            src={image}
            alt={'IMAGE'}
        />
    </Link>
);

export default function Home() {
    return (
        <div className='flex flex-col gap-16 p-16 min-h-screen'>
            <span className='font-bold text-3xl self-center text-neutral-focus md:text-4xl'>
                Recent works
            </span>
            <div className='flex flex-wrap gap-16 justify-center'>
                <Canvas
                    title={'雙龍興供應鏈管理系統'}
                    image={SRS_Image}
                    href='/works/SRS'
                />
                <Canvas
                    title={'安可網紅數位行銷內容庫'}
                    image={Encore_Image}
                    href={'/works/Encore'}
                />
                <Canvas
                    title={'ShowHue Visinova'}
                    image={Showhue_Image}
                    href={'/works/Showhue'}
                />
                <Canvas
                    title={'PinchLab Official Website'}
                    image={PinchLab_Image}
                    href={'/works/PinchLab'}
                />
                <Canvas
                    title={'Satori'}
                    image={Satori_Image}
                    href={'/works/Satori'}
                />
            </div>
        </div>
    )
}
