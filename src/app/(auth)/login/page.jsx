'use client';
import React from 'react';
import { useRouter } from 'next/navigation';
import { X, MessageSquare, Settings } from 'lucide-react';

const Login = () => {
    const router = useRouter();

    return (
        <div className="flex flex-col items-center justify-center min-h-screen p-6 bg-white">
            <div className="w-full max-w-md">
                {/* Close Icon */}
                <div className="flex justify-between items-center mb-4">
                    <button className="text-gray-500 hover:text-black" onClick={() => router.push('/')}>
                        <X className="w-6 h-6" />
                    </button>
                    <div className="flex items-center space-x-4">
                        <button className="text-gray-500 hover:text-black">
                            <MessageSquare className="w-6 h-6" />
                        </button>
                        <button className="text-gray-500 hover:text-black">
                            <Settings className="w-6 h-6" />
                        </button>
                    </div>
                </div>

                {/* Title */}
                <h1 className="text-lg font-medium mb-6 text-center">고객님의 계정에 액세스하세요</h1>

                {/* Email Input */}
                <input
                    type="email"
                    placeholder="이메일"
                    className="w-full px-4 py-3 mb-4 border-b border-gray-400 focus:outline-none focus:border-black"
                />

                {/* Password Input */}
                <input
                    type="password"
                    placeholder="비밀번호"
                    className="w-full px-4 py-3 mb-6 border-b border-gray-400 focus:outline-none focus:border-black"
                />

                {/* Login Button */}
                <button
                    className="w-full px-4 py-3 mb-4 text-black border border-black rounded hover:bg-gray-100"
                    onClick={() => router.push('/auth/login')}
                >
                    로그인
                </button>

                {/* Forgot Password */}
                <div className="text-center mb-6">
                    <a href="#" className="text-sm text-gray-500 hover:underline">
                        비밀번호를 잊으셨습니까?
                    </a>
                </div>

                {/* Register Section */}
                <div className="text-center">
                    <p className="mb-4">계정이 필요하십니까?</p>
                    <button className="w-full px-4 py-3 border border-black rounded hover:bg-gray-100">등록</button>
                </div>

                {/* Footer Link */}
                <div className="mt-6 text-center">
                    <a href="#" className="text-sm text-gray-500 hover:underline">
                        지원 센터
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Login;
