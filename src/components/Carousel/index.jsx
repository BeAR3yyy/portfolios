'use client';

import Image from 'next/image';
import dynamic from 'next/dynamic';
const BearCarousel = dynamic(
    () => import("bear-react-carousel").then((mod) => mod), {ssr: false}
);

import SRS from '@/assets/SRS.png';
import SRS1 from '@/assets/SRS1.png';
import IMF from '@/assets/IMF.png';
import IMF1 from '@/assets/IMF1.jpg';
import Encore from '@/assets/Encore.png';
import Encore1 from '@/assets/Encore1.png';
import Showhue from '@/assets/Showhue.png';
import Showhue1 from '@/assets/Showhue1.png';
import PinchLab from '@/assets/PinchLab.png';
import Satori from '@/assets/Satori.png';
import Satori1 from '@/assets/Satori1.png';

const images = [
    {id: 1, image: SRS},
    {id: 2, image: SRS1},
    {id: 3, image: IMF},
    {id: 4, image: IMF1},
    {id: 5, image: Encore},
    {id: 6, image: Encore1},
    {id: 7, image: Showhue},
    {id: 8, image: Showhue1},
    {id: 9, image: PinchLab},
    {id: 10, image: Satori},
    {id: 11, image: Satori1},
];

export const CustomCarousel = () => {
    const bearSlideItemData = images.map(row => {
        return {
            key: row.id,
            children:
                <Image src={row.image} alt='image' style={{ borderRadius: 10 }} />
        };
    });

    return <BearCarousel
        data={bearSlideItemData}
        slidesPerView={1}
        spaceBetween={20}
        isEnableNavButton
        isEnableAutoPlay
        moveTime={400}
        isEnableLoop
    />
}
