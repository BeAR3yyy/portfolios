'use client';

import React, { useState, useEffect } from 'react';
import BearCarousel from 'bear-react-carousel';
import Image from 'next/image';

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

function useWindowSize() {
    const [windowSize, setWindowSize] = useState({
        width: undefined,
    });
    useEffect(() => {
        function handleResize() {
            setWindowSize({
                width: window.innerWidth,
            });
        }
        window.addEventListener("resize", handleResize);
        handleResize();
        return () => window.removeEventListener("resize", handleResize);
    }, []);
    return windowSize;
}

export const CustomCarousel = () => {
    const size = useWindowSize();
    const isMobile = size.width < 768;
    const bearSlideItemData = images.map(row => {
        return {
            key: row.id,
            children:
                <div style={{ height: '100%', borderRadius: 8 }}>
                    <Image src={row.image} alt='image' style={{ borderRadius: 10 }}/>
                </div>
        };
    });

    return <BearCarousel
        data={bearSlideItemData}
        slidesPerView={isMobile ? 1 : 2}
        spaceBetween={20}
        isEnableNavButton
        isEnableAutoPlay
        moveTime={400}
        isEnableLoop
    />
}
