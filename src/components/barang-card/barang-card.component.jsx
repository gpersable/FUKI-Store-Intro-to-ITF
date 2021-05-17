import {
	Flex,
	Box,
	Image,
	useColorModeValue,
	Icon,
	chakra,
	Text,
	Tooltip,
} from '@chakra-ui/react';
import { FiShoppingCart } from 'react-icons/fi';
  
const BarangCard = ({ id, imageURL, nama, harga, namaPenjual }) => {
	return (
		<Box
			bg={useColorModeValue('white', 'gray.800')}
			w="300px"
			borderWidth="1px"
			rounded="lg"
			shadow="lg"
			position="relative">
		
			<Image
				src={imageURL}
				alt={`Picture of ${nama}`}
				roundedTop="lg"
			/>
	
			<Box p="6">
				<Flex mt="1" justifyContent="space-between" alignContent="center">
					<Box
						fontSize="xl"
						fontWeight="semibold"
						as="h4"
						lineHeight="tight"
						isTruncated="false">
						{nama}
					</Box>
					<Tooltip
						label="Add to cart"
						bg="white"
						placement="top"
						color="gray.800"
						fontSize="1.2em">
						<chakra.a href="#" display="flex">
						<Icon as={FiShoppingCart} h="6" w="6" alignSelf="center" />
						</chakra.a>
					</Tooltip>
				</Flex>
		
				<Flex justifyContent="space-between" alignContent="center">
					<Box fontSize="xl" color={useColorModeValue('gray.800', 'white')}>
						<Box as="span" color="gray.600" fontSize="lg">
						Rp
						</Box>
						{harga}
						<Text fontSize="lg">Dijual oleh {namaPenjual}</Text>
					</Box>
				</Flex>
			</Box>
		</Box>

	);
  }
  
  export default BarangCard;