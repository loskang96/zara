import React from 'react';
import { Box, Text, HStack, Link } from '@chakra-ui/react';

export default function Footer() {
    return (
        <Box as="footer" py={10} textAlign="center" bg="gray.100" mt={10}>
            <Text fontSize="lg" mb={4}>
                뉴스레터에 가입하세요
            </Text>
            <HStack spacing={4} justifyContent="center" mb={4}>
                <Link href="#" isExternal>
                    TIKTOK
                </Link>
                <Link href="#" isExternal>
                    INSTAGRAM
                </Link>
                <Link href="#" isExternal>
                    FACEBOOK
                </Link>
                <Link href="#" isExternal>
                    X
                </Link>
                <Link href="#" isExternal>
                    PINTEREST
                </Link>
                <Link href="#" isExternal>
                    KAKAO
                </Link>
                <Link href="#" isExternal>
                    YOUTUBE
                </Link>
                <Link href="#" isExternal>
                    SPOTIFY
                </Link>
            </HStack>
            <Text fontSize="sm" color="gray.500">
                © 2024 KANGHANSOL. All rights reserved.
            </Text>
        </Box>
    );
}
