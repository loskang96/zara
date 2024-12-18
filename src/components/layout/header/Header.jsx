'use client';

import { Box, Image, Flex, HStack, Text, Input, Button, Icon } from '@chakra-ui/react';

// 2줄짜리 햄버거 아이콘을 직접 정의
function TwoLineMenuIcon(props) {
    return (
        <Icon viewBox="0 0 24 24" {...props}>
            {/* 첫 번째 라인: y=6, 높이=2 */}
            <rect x="3" y="0" width="18" height="2" fill="currentColor" />
            {/* 두 번째 라인: y=12, 높이=2 */}
            <rect x="3" y="12" width="18" height="2" fill="currentColor" />
        </Icon>
    );
}

export default function Header() {
    return (
        <Box as="header" position="absolute" top={0} left={0} width="100%" zIndex={999} color="white" px={10} py={12}>
            {/* 상단 레벨: 좌측(햄버거 메뉴 + 로고), 우측(로그인, 도움말, 바스켓백) */}
            <Flex alignItems="center" justifyContent="space-between">
                <HStack spacing={4}>
                    {/* 햄버거 메뉴 아이콘 */}
                    <Box cursor="pointer">
                        <TwoLineMenuIcon boxSize={20} />
                    </Box>
                    {/* 로고 */}
                    <Image
                        className="px-14"
                        src="/images/pattern/main/zaralogowhite.svg"
                        alt="ZARA Logo"
                        height="85px"
                        objectFit="contain"
                    />
                </HStack>

                {/* 오른쪽 상단 텍스트 메뉴들 */}
                <HStack spacing={4} fontSize="sm">
                    <Text cursor="pointer">로그인</Text>
                    <Text cursor="pointer">도움말</Text>
                    <Text cursor="pointer">바스켓백(0)</Text>
                </HStack>
            </Flex>

            {/* 하단 레벨: 좌측(카테고리 메뉴들), 우측(검색창) */}
            <Flex alignItems="center" justifyContent="space-between" mt={20}>
                <HStack spacing={10} fontSize="sm">
                    <Text cursor="pointer">여성</Text>
                    <Text cursor="pointer">남성</Text>
                    <Text cursor="pointer">아동</Text>
                    <Text cursor="pointer">HOME</Text>
                    <Text cursor="pointer">BEAUTY</Text>
                </HStack>

                <HStack spacing={15}>
                    <Input
                        placeholder="검색"
                        bg="white"
                        color="black"
                        size="sm"
                        width="200px"
                        borderRadius="0"
                        border="1px solid black"
                    />
                    <Button size="sm" color="black" bg="white" border="1px solid black" borderRadius="0">
                        검색
                    </Button>
                </HStack>
            </Flex>
        </Box>
    );
}
