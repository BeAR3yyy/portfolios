import { Inter } from 'next/font/google';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

import 'bear-react-carousel/dist/index.css';
import './globals.css';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
    title: "Eddy's portfolio",
    description: 'The portfolio of Eddy Tan.'
}

export default function RootLayout({ children }) {
    return (
        <html data-theme="pastel">
            <body className={inter.className}>
                <Navbar />
                {children}
                <Footer />
            </body>
        </html>
    )
}
