import Image from 'next/image';

import SRS_Image from '@/assets/SRS/supplier.png';
import Encore_Image from '@/assets/Encore/index.png';
import Showhue_Image from '@/assets/Showhue/homepage.png';
import PinchLab_Image from '@/assets/PinchLab/homepage.png';
import Satori_Image from '@/assets/Satori/homepage.png';

const Canvas = ({ title, image, href }) => (
        <div className='flex flex-col gap-3 max-w-xl items-center'>
                <span className='text-lg font-semibold'>
                    { title }
                </span>
            <Image
                className='rounded-xl shadow-md'
                src={image}
                alt={'IMAGE'}
            />
        </div>
)

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
                />
                <Canvas
                    title={'安可網紅數位行銷內容庫'}
                    image={Encore_Image}
                />
                <Canvas
                    title={'ShowHue Visinova'}
                    image={Showhue_Image}
                />
                <Canvas
                    title={'PinchLab Official Website'}
                    image={PinchLab_Image}
                />
                <Canvas
                    title={'Satori'}
                    image={Satori_Image}
                />
            </div>
        </div>
    )
}
