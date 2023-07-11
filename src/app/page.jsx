import Image from 'next/image';
import Link from 'next/link';

import MyTypewriter from '@/components/Typewriter';
import { CustomCarousel } from '@/components/Carousel';

import ProfileIcon from '@/assets/ProfileIcon.jpeg';
import { RxGithubLogo, RxLinkedinLogo } from 'react-icons/rx';

const Highlight = ({ children }) => (
    <span className='text-blue-500 md:font-medium'>
        {children}
    </span>
);

const Paragraph = ({ children }) => (
    <p className='inline-block md:text-xl'>
        {children}
    </p>
);
export default function Home() {
    const TYPEWRITER_CONTENTS = [
        "Frontend Developer ",
        "Open Source Contributor ",
        "Indie Music Lover ",
        "FPS / MOBA Gamer ",
    ];

    return (
        <div className='flex flex-col px-8 py-16 gap-16'>
            <div className='flex flex-col-reverse gap-16 h-[calc(100vh-128px)] md:items-center md:flex-row md:px-16'>
                <div className='flex flex-col flex-1 gap-8 w-full'>
                    <p className='text-2xl md:text-4xl'>
                        Hi, I'm <span className='text-blue-500 font-semibold'>Eddy</span> <span className='wave'>👋🏻</span>
                    </p>
                    <MyTypewriter contents={TYPEWRITER_CONTENTS} />
                </div>
                <div className='flex justify-center'>
                    <Image
                        className='rounded-full w-64 h-64'
                        src={ProfileIcon}
                        alt={'icon'}
                        style={{ pointerEvents: 'none'}}
                    />
                </div>
            </div>
            <div className='flex flex-col py-16 gap-8'>
                <div className='flex flex-col gap-2 text-2xl font-semibold md:flex-row md:text-4xl md:mb-4'>
                    Let Me <div className='text-blue-500'>Introduce</div> Myself
                </div>
                <Paragraph>
                    I am a <Highlight>Front-end Developer</Highlight> who likes to craft solid and scalable frontend products with great user experience.
                    In addition, I also have experience in <Highlight>developing backend</Highlight>, such as <Highlight>Restful API, JWT Authentication, and performing CRUD operations on databases</Highlight>.
                </Paragraph>
                <Paragraph>
                    Like a Jedi with a lightsaber, I wield the power of <Highlight>React, Redux, SCSS, FastAPI</Highlight> and more with ease. Though I may not be fully fluent, I approach my work with a relaxed and natural style, always striving for excellence.
                </Paragraph>
                <Paragraph>
                    When I'm not coding, you can find me at the special performance of <Highlight>Indie Band</Highlight>. Or, if the weather isn't cooperating, you might find me curled up on the couch with a <Highlight>Good book</Highlight> or <Highlight>Online games</Highlight>.
                </Paragraph>
                <Paragraph>
                    I am a contributor to <Highlight>Open Source</Highlight> projects on GitHub one of them have become <Highlight>trending globally repository</Highlight>. I participate in the development and maintenance of these projects by submitting code, fixing bugs, and suggesting improvements.
                </Paragraph>
            </div>
            <div className='flex flex-col py-16 gap-8'>
                <div className='flex gap-2 text-2xl font-semibold md:text-4xl md:mb-4'>
                    My <div className='text-blue-500'>Recent</div> Works
                </div>
                <div className="w-full mt-8">
                    <CustomCarousel />
                </div>
                <Link href={'/project'} className='self-center'>
                    <button className="btn w-48 bg-blue-400 text-base-100 md:w-64">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
                        See more
                    </button>
                </Link>
            </div>
            <div className='flex flex-col py-16 gap-8'>
                <div className='flex gap-2 text-2xl font-semibold md:text-4xl md:mb-4'>
                    You can <div className='text-blue-600'>Find Me</div> on
                </div>
                <div className="flex flex-col gap-8 w-full px-8">
                    <Link
                        className='flex gap-4 md:text-xl items-center'
                        href={'https://github.com/BeAR3yyy'}
                        target='_blank'
                    >
                        <RxGithubLogo className='text-xl md:text-3xl' />
                        <div className='text-blue-600'>
                            Github / BeAR3yyy
                        </div>
                    </Link>
                    <Link
                        className='flex gap-4 md:text-xl items-center'
                        href={'https://www.linkedin.com/in/eddy-tan-57874619a/'}
                        target='_blank'
                    >
                        <RxLinkedinLogo className='text-xl md:text-3xl' />
                        <div className='text-blue-600'>
                            LinkedIn / Eddy Tan
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    )
}
