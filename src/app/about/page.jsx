import { IoLogoReact } from 'react-icons/io5';
import { BsFiletypeScss, BsTools } from 'react-icons/bs';
import { BiLogoTailwindCss, BiLogoVuejs, BiLogoPython, BiLogoNodejs, BiLogoGoogleCloud } from 'react-icons/bi';
import { VscBlank } from 'react-icons/vsc';

export default function Home() {
    return (
        <div className='flex flex-col px-8 py-16 gap-16 min-h-[100vh]'>
            <div className='flex flex-col gap-4 md:px-8 md:gap-8'>
                <span className='font-semibold text-xl text-primary-focus md:text-3xl'>
                    Name
                </span>
                <div className='md:text-xl md:flex md:justify-between'>
                    Eddy Tan
                </div>
            </div>

            <div className='flex flex-col gap-4 md:px-8 md:gap-8'>
                <span className='font-semibold text-xl text-primary-focus md:text-3xl'>
                    Location
                </span>
                <div className='md:text-xl md:flex md:justify-between'>
                    Taipei, Taiwan
                </div>
            </div>

            <div className='flex flex-col gap-4 md:px-8 md:gap-8'>
                <span className='font-semibold text-xl text-primary-focus md:text-3xl'>
                    Education
                </span>
                <div className='md:text-xl md:flex md:justify-between'>
                    <div>National Chung Hsing University (NCHU)</div>
                    <div>Bachelor of Science in Computer Science</div>
                </div>
                <div className='flex text-sm -mt-2 justify-end md:-mt-6'>
                    Sep. 2018 - Jun. 2022
                </div>
            </div>

            <div className='flex flex-col gap-4 md:px-8 md:gap-8'>
                <span className='font-semibold text-xl text-primary-focus md:text-3xl'>
                    Work Experience
                </span>
                <div className='md:text-xl md:flex md:justify-between'>
                    <div>Brilltek （博睿科技）</div>
                    <div>Software Engineer Internship</div>
                </div>
                <div className='flex text-sm -mt-2 justify-end md:-mt-6'>
                    Mar. 2022 - Sep. 2022
                </div>

                <div className='md:text-xl md:flex md:justify-between'>
                    <div>ideaXpress （艾創點數位有限公司）</div>
                    <div>Software Engineer</div>
                </div>
                <div className='flex text-sm -mt-2 justify-end md:-mt-6'>
                    Sep. 2022 - Mar. 2023
                </div>

                <div className='md:text-xl md:flex md:justify-between'>
                    <div>PinchLab （品崎製造所）</div>
                    <div>Frontend Developer</div>
                </div>
                <div className='flex text-sm -mt-2 justify-end md:-mt-6'>
                    May. 2023 -
                </div>
            </div>

            <div className='flex flex-col gap-4 md:px-8 md:gap-8'>
                <span className='font-semibold text-xl text-primary-focus md:text-3xl'>
                    Professional Skill Set
                </span>
                <div className='flex md:text-xl items-center'>
                    <IoLogoReact className='mr-2' size={25} /> React (Next.js, React Hooks, Redux, React Router, Jest)
                </div>
                <div className='flex md:text-xl items-center'>
                    <VscBlank className='mr-2' size={25} /> UI Framework: Material UI, Ant Design, Mantine UI
                </div>
                <div className='flex md:text-xl items-center'>
                    <BiLogoVuejs className='mr-2' size={25} /> Vue 3 (Vue Router, Pinia)
                </div>
                <div className='flex md:text-xl items-center'>
                    <VscBlank className='mr-2' size={25} /> UI Framework: Element UI, Vue Admin Template
                </div>
                <div className='flex md:text-xl items-center'>
                    <BsFiletypeScss className='mr-2' size={25} /> CSS, CSS Preprocessor: SCSS / LESS
                </div>
                <div className='flex md:text-xl items-center'>
                    <BiLogoTailwindCss className='mr-2' size={25} /> Tailwind CSS
                </div>
                <div className='flex md:text-xl items-center'>
                    <BiLogoPython className='mr-2' size={25} /> Python (Flask, FastAPI)
                </div>
                <div className='flex md:text-xl items-center'>
                    <BiLogoNodejs className='mr-2' size={25} /> Node.js (Express, NestJS)
                </div>
                <div className='flex md:text-xl items-center'>
                    <BiLogoGoogleCloud className='mr-2' size={25} /> Cloud (Google Cloud, Vercel, Heroku)
                </div>
                <div className='flex md:text-xl items-center'>
                    <BsTools className='mr-2' size={25} /> Tools (Git, Docker, Github Actions)
                </div>
            </div>

            <div className='flex flex-col gap-4 md:px-8 md:gap-8'>
                <span className='font-semibold text-xl text-primary-focus md:text-3xl'>
                    Awards
                </span>
                <div className='md:text-xl md:flex md:justify-between'>
                    Special Award, 2020 LegalTech Hackathon: Search Algorithm for Knowledge Graphed Verdict
                </div>
            </div>
        </div>
    )
}
