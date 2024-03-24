import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Logo = () => {
    return (
        <div className="hidden lg:flex">
            <Link href="/">
                <Image src="./logo.svg" alt="Protocol" className="h-6 w-auto" height={24} width={100} priority />
            </Link>
        </div>
    );
};

export default Logo;