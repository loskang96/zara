import { Img } from '@chakra-ui/react';
import React from 'react';

export default function Header() {
    return (
        <header className="fixed top-0 left-0 w-full to-transparent/70">
            <div className="max-w-7xl mx-auto flex justify-between items-center py-4 px-6">
                {/* Logo */}
                <div className="flex items-center space-x-4">
                    <button className="text-lg font-bold">=</button>
                    <Img src="/images/pattern/main/zaralogoblack.svg" alt="Logo" className="h-16" />
                </div>

                {/* Navigation Links */}
                <nav className="flex space-x-6 text-sm">
                    <a href="#" className="hover:underline">
                        여성
                    </a>
                    <a href="#" className="hover:underline">
                        남성
                    </a>
                    <a href="#" className="hover:underline">
                        아동
                    </a>
                    <a href="#" className="hover:underline">
                        HOME
                    </a>
                    <a href="#" className="hover:underline">
                        BEAUTY
                    </a>
                </nav>

                {/* Right Links */}
                <div className="flex space-x-4 text-sm">
                    <a href="#" className="hover:underline">
                        로그인
                    </a>
                    <a href="#" className="hover:underline">
                        도움말
                    </a>
                    <a href="#" className="hover:underline">
                        바스켓백(0)
                    </a>
                </div>
            </div>
        </header>
    );
}
