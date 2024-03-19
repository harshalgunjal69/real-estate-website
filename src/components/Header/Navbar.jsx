'use client';
import Link from 'next/link';
import Logo from './logo.js';
import {
    MediumIcon,
    GithubIcon,
    LinkedinIcon,
    MoonIcon,
    SunIcon,
    TwitterIcon,
} from '../Icons';
import siteMetadata from '@/utils/siteMetaData';
import { useThemeSwitch } from '../Hooks/useThemeSwitch';
import { useState } from 'react';
import { cx } from '@/utils';

const Header = () => {
    const [mode, setMode] = useThemeSwitch();
    const [click, setClick] = useState(false);

    const toggle = () => {
        setClick(!click);
    };
    return (
        <header className="h-16 md:h-16 py-4 px-5 sm:px-10 sm:pt-12 flex flex-row items-center justify-between sm:mb-10">
            <Logo />

            <button
                className="inline-block sm:hidden z-50 px-4"
                onClick={toggle}
                aria-label="Hamburger Menu"
            >
                <div className="w-6 cursor-pointer transition-all ease duration-300">
                    <div className="relative">
                        <span
                            className="absolute top-0 inline-block w-full h-0.5 bg-black dark:bg-white rounded transition-all ease duration-200"
                            style={{
                                transform: click
                                    ? 'rotate(-45deg) translateY(0)'
                                    : 'rotate(0deg) translateY(6px)',
                            }}
                        >
                            &nbsp;
                        </span>
                        <span
                            className="absolute top-0 inline-block w-full h-0.5 bg-black dark:bg-white rounded transition-all ease duration-200"
                            style={{
                                opacity: click ? 0 : 1,
                            }}
                        >
                            &nbsp;
                        </span>
                        <span
                            className="absolute top-0 inline-block w-full h-0.5 bg-black dark:bg-white rounded transition-all ease duration-200"
                            style={{
                                transform: click
                                    ? 'rotate(45deg) translateY(0)'
                                    : 'rotate(0deg) translateY(-6px)',
                            }}
                        >
                            &nbsp;
                        </span>
                    </div>
                </div>
            </button>

            <nav
                className=" w-max py-3 px-6 sm:px-8 border border-solid border-black rounded-full font-medium capitalize  items-center flex  sm:hidden fixed top-6 right-1/2 text-black translate-x-1/2 bg-white/80 backdrop-blur-sm z-50 transition-all ease duration-300"
                style={{
                    top: click ? '1rem' : '-5rem',
                }}
            >
                <Link href="/" className="mr-2">
                    Home
                </Link>
                <Link href="/about" className="mx-2">
                    About
                </Link>
                <Link href="/contact" className="mx-2">
                    Contact
                </Link>
                <button
                    onClick={() => setMode(mode === 'light' ? 'dark' : 'light')}
                    className={cx(
                        'w-6 h-6 ease ml-2 flex items-center justify-center rounded-full p-1',
                        mode === 'light'
                            ? 'bg-dark text-light'
                            : 'bg-light text-dark'
                    )}
                    aria-label="theme-switcher"
                >
                    {mode === 'light' ? (
                        <MoonIcon className={'fill-dark'} />
                    ) : (
                        <SunIcon className={'fill-dark'} />
                    )}
                </button>
            </nav>

            <nav className=" w-max py-3 px-8 border border-solid border-dark rounded-full font-medium capitalize  items-center hidden text-black sm:flex fixed top-6 right-1/2 translate-x-1/2 bg-white/80 backdrop-blur-sm border-black z-50">
                <Link href="/" className="mr-2">
                    Home
                </Link>
                <Link href="/about" className="mx-2">
                    About
                </Link>
                <Link href="/contact" className="mx-2">
                    Contact
                </Link>
                <button
                    onClick={() => setMode(mode === 'light' ? 'dark' : 'light')}
                    className={cx(
                        'w-6 h-6 ease ml-2 flex items-center justify-center rounded-full p-0',
                        mode === 'light'
                            ? 'bg-dark text-light'
                            : 'bg-light text-dark'
                    )}
                    aria-label="theme-switcher"
                >
                    {mode === 'light' ? (
                        <MoonIcon className={'fill-dark'} />
                    ) : (
                        <SunIcon className={'fill-dark'} />
                    )}
                </button>
            </nav>

            <div className=" hidden sm:flex items-center justify-normal">
                <a
                    href={siteMetadata.linkedin}
                    rel="noopener noreferrer"
                    className="inline-block w-4 h-4 md:w-6 md:h-6 mr-4"
                    aria-label="Reach out to me via LinkedIn"
                    target="_blank"
                >
                    <LinkedinIcon className="hover:scale-125 transition-all ease duration-200" />
                </a>
                <a
                    href={siteMetadata.twitter}
                    rel="noopener noreferrer"
                    className="inline-block w-4 h-4 md:w-6 md:h-6 mr-4"
                    aria-label="Reach out to me via Twitter"
                    target="_blank"
                >
                    <TwitterIcon className="hover:scale-125 transition-all ease duration-200" />
                </a>
                <a
                    href={siteMetadata.github}
                    rel="noopener noreferrer"
                    className="inline-block w-4 h-4 md:w-6 md:h-6 mr-4"
                    aria-label="Check my profile on Github"
                    target="_blank"
                >
                    <GithubIcon className="  hover:scale-125 transition-all ease duration-200 dark:fill-white" />
                </a>
                <a
                    href={siteMetadata.medium}
                    rel="noopener noreferrer"
                    className="inline-block w-4 h-4 md:w-6 md:h-6 mr-4"
                    aria-label="Check my profile on Medium"
                    target="_blank"
                >
                    <MediumIcon className="hover:scale-125 transition-all ease duration-200" />
                </a>
            </div>
        </header>
    );
};

export default Header;
