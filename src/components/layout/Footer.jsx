'use client';
import { Box, Text, Flex, HStack, Link } from '@chakra-ui/react';

export default function Footer() {
    return (
        <Box
            bg="white"
            height="100vh"
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            color="black"
            textAlign="center"
            px={4} // 좌우 여백 추가
        >
            {/* 뉴스레터 문구 */}
            <Text fontSize={['lg', '2xl']} mb={6}>
                뉴스레터에 가입하세요
            </Text>

            {/* 소셜 미디어 링크 */}
            <HStack
                spacing={[3, 6]} // 모바일: 좁게, 데스크탑: 넓게
                fontSize={['sm', 'md']} // 모바일: 작게, 데스크탑: 기본 크기
                mb={6}
                wrap="wrap" // 링크가 길어질 경우 줄바꿈
                justify="center"
            >
                <Link href="#" _hover={{ textDecoration: 'underline' }}>
                    TIKTOK
                </Link>
                <Link href="#" _hover={{ textDecoration: 'underline' }}>
                    INSTAGRAM
                </Link>
                <Link href="#" _hover={{ textDecoration: 'underline' }}>
                    FACEBOOK
                </Link>
                <Link href="#" _hover={{ textDecoration: 'underline' }}>
                    X
                </Link>
                <Link href="#" _hover={{ textDecoration: 'underline' }}>
                    PINTEREST
                </Link>
                <Link href="#" _hover={{ textDecoration: 'underline' }}>
                    KAKAO
                </Link>
                <Link href="#" _hover={{ textDecoration: 'underline' }}>
                    YOUTUBE
                </Link>
                <Link href="#" _hover={{ textDecoration: 'underline' }}>
                    SPOTIFY
                </Link>
            </HStack>

            {/* 추가 문구 */}
            <Text fontSize="sm" color="gray.500">
                © 2024 Your Company. All rights reserved.
            </Text>
        </Box>
    );
}
