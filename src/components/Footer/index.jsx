import Link from 'next/link';
import { RxGithubLogo, RxLinkedinLogo } from 'react-icons/rx';

export default function Footer() {
    return (
        <footer className="footer items-center p-8 bg-neutral text-neutral-content">
            <div className="items-center grid-flow-col">
                <p>Copyright © 2023 - All right reserved by BeAR3yyy.</p>
            </div>
            <div className="grid-flow-col gap-8 md:place-self-center md:justify-self-end">
                <Link
                    className='flex gap-4 md:text-xl items-center'
                    href={'https://github.com/BeAR3yyy'}
                    target='_blank'
                >
                    <RxGithubLogo size={24} />
                </Link>
                <Link
                    className='flex gap-4 md:text-xl items-center'
                    href={'https://www.linkedin.com/in/eddy-tan-57874619a/'}
                    target='_blank'
                >
                    <RxLinkedinLogo size={24} />
                </Link>
            </div>
        </footer>
    )
}
