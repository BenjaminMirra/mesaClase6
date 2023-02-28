import Head from 'next/head';
import React, { FC } from 'react'
import Image from 'next/image'
import Link from 'next/link';

type LayoutProps = {
    children: React.ReactNode;
};

const Layout: FC<LayoutProps> = ({ children }) => {

    return (
        <>
            <header className="">
                <Link href="/">
                    Inicio
                </Link>
                <br/>
                <br/>
                <Link href="/faqs">
                    Preguntas Frecuentes
                </Link>
            </header>
            <main>
            <br/><br/>
                {children}
            </main>

        </>
    )
}

export default Layout;