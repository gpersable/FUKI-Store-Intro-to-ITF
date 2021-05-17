import {
	Flex,
	Box,
	Icon,
	useColorModeValue,
	Text,
} from '@chakra-ui/react';
import { FaHeart } from 'react-icons/fa';

function Footer() {
	return (
		<Box
			bg={useColorModeValue('gray.50', 'gray.900')}
			color={useColorModeValue('gray.700', 'gray.200')}>
			<Box py="10">
				<Flex
					align="center"
					_before={{
					content: '""',
					borderBottom: '1px solid',
					borderColor: useColorModeValue('gray.200', 'gray.700'),
					flexGrow: 1,
					mr: 8,
					}}
					_after={{
					content: '""',
					borderBottom: '1px solid',
					borderColor: useColorModeValue('gray.200', 'gray.700'),
					flexGrow: 1,
					ml: 8,
					}}>
					<Text fontWeight="600">FUKI Store</Text>
				</Flex>
				<Text fontSize="sm" textAlign="center">
					© 2021 FUKI. Made with <Icon as={FaHeart} /> by IT Force. All rights reserved
				</Text>
			</Box>
		</Box>
	);
};

export default Footer;