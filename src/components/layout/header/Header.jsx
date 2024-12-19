'use client';

import React from 'react';
import { Box, Flex, Image, HStack, Text, Input, Button, Icon } from '@chakra-ui/react';

function TwoLineMenuIcon(props) {
    return (
        <Icon viewBox="0 0 24 24" {...props}>
            <rect x="3" y="6" width="18" height="2" fill="currentColor" />
            <rect x="3" y="12" width="18" height="2" fill="currentColor" />
        </Icon>
    );
}

export default function Header() {
    return (
        <Box as="header" position="fixed" top={0} left={0} width="100%" zIndex={999} color="white" px={10} py={12}>
            <Flex alignItems="center" justifyContent="space-between">
                <HStack spacing={4}>
                    <Box cursor="pointer">
                        <TwoLineMenuIcon boxSize={6} />
                    </Box>
                    <Image
                        src="/images/pattern/main/zaralogoblack.svg"
                        alt="ZARA Logo"
                        height="40px"
                        objectFit="contain"
                    />
                </HStack>
                <HStack spacing={4} fontSize="sm">
                    <Text cursor="pointer">로그인</Text>
                    <Text cursor="pointer">도움말</Text>
                    <Text cursor="pointer">바스켓백(0)</Text>
                </HStack>
            </Flex>
            <Flex alignItems="center" justifyContent="space-between" mt={4}>
                <HStack spacing={6} fontSize="sm">
                    <Text cursor="pointer">여성</Text>
                    <Text cursor="pointer">남성</Text>
                    <Text cursor="pointer">아동</Text>
                    <Text cursor="pointer">HOME</Text>
                    <Text cursor="pointer">BEAUTY</Text>
                </HStack>
                <HStack spacing={2}>
                    <Input
                        placeholder="검색"
                        bg="white"
                        color="black"
                        size="sm"
                        width="200px"
                        borderRadius="md"
                        border="1px solid black"
                    />
                    <Button size="sm" color="black" bg="white" border="1px solid black" borderRadius="md">
                        검색
                    </Button>
                </HStack>
            </Flex>
        </Box>
    );
}
