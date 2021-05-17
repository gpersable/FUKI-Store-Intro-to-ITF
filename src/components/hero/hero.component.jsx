import {
	Stack,
	Flex,
	Box,
	Heading,
	Text,
	Button,
	Image,
	Icon,
	IconProps,
	Input,
	Link,
	FormControl,
	FormLabel,
	useColorModeValue,
	useDisclosure,
	Modal,
  	ModalOverlay,
  	ModalContent,
	ModalHeader,
	ModalFooter,
	ModalBody,
	ModalCloseButton,
} from '@chakra-ui/react';
import { AddIcon } from '@chakra-ui/icons';
  
function Hero() {
	const { isOpen, onOpen, onClose } = useDisclosure();

	return (
		<>
		<Stack flex="1" spacing={{ base: 5, md: 10 }}>
			<Heading
				lineHeight="1.1">
				<Text
				fontWeight="800"
				fontSize={{ base: '3xl', sm: '4xl', lg: '6xl' }}
				as="span"
				position="relative"
				_after={{
					content: "''",
					width: 'full',
					height: '30%',
					position: 'absolute',
					bottom: 1,
					left: 0,
					bg: 'blue.400',
					zIndex: -1,
				}}>
					40% OFF
				</Text>
				<br />
				<Text 
				fontWeight="600"
				fontSize={{ base: '2xl', sm: '3xl', lg: '4xl' }}
				as="span" 
				color="blue.400">
					Rare Endgame Edition
				</Text>
			</Heading>
			<Text color="gray.500">
				Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
				labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
				nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit 
				esse cillum dolore eu fugiat nulla pariatur.
			</Text>
			<Stack
				spacing={{ base: 4, sm: 6 }}
				direction={{ base: 'column', sm: 'row' }}>
				<Button
				rounded="full"
				size="lg"
				fontWeight="normal"
				px="6"
				colorScheme="blue"
				bg="blue.400"
				_hover={{ bg: 'blue.500' }}>
					<Link href="#barang-preview">
						Shop Now
					</Link>
				</Button>
				<Button
				rounded="full"
				size="full"
				fontWeight="normal"
				px="6"
				leftIcon={<AddIcon />}
				onClick={onOpen}>
					Add an Item
				</Button>

				<Modal isOpen={isOpen} onClose={onClose}>
				<ModalOverlay />
				<ModalContent>
				<ModalHeader>Add an Item</ModalHeader>
				<ModalCloseButton />
				<ModalBody>
					<Stack spacing="4">
						<FormControl id="nama-barang" isRequired>
							<FormLabel>Nama barang</FormLabel>
							<Input placeholder="Betmen" />
						</FormControl>
						<FormControl id="harga-barang" isRequired>
							<FormLabel>Harga barang</FormLabel>
							<Input placeholder="15000" />
						</FormControl>
						<FormControl id="nama-penjual" isRequired>
							<FormLabel>Nama penjual</FormLabel>
							<Input placeholder="Park Seo Joon" />
						</FormControl>
						<FormControl id="gamber-barang" isRequired>
							<FormLabel>Gambar barang</FormLabel>
							<Input placeholder="https://" />
						</FormControl>
					</Stack>
				</ModalBody>

				<ModalFooter>
					<Button colorScheme="blue" mr="3" type="submit">
						Add
					</Button>
				</ModalFooter>
				</ModalContent>
				</Modal>

			</Stack>
		</Stack>
		<Flex
		flex="1"
		justify="center"
		align="center"
		position="relative"
		w="full">
			<Blob
				w="150%"
				h="150%"
				position="absolute"
				top="-20%"
				left="0"
				zIndex="-1"
				color={useColorModeValue('blue.100', 'blue.400')}
			/>
			<Box
				position="relative"
				height="300px"
				rounded="2xl"
				boxShadow="2xl"
				width="full"
				overflow="hidden">
				<Image
					alt="Hero Image"
					fit="cover"
					align="center"
					w="100%"
					h="100%"
					src="https://images.unsplash.com/photo-1604882846805-a6813013c2b5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1322&q=80"
				/>
			</Box>
		</Flex>
		</>
	);
  }

export default Hero;

export const Blob = (props: IconProps) => {
	return (
	  <Icon
		width="100%"
		viewBox="0 0 578 440"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		{...props}>
		<path
			fillRule="evenodd"
			clipRule="evenodd"
			d="M239.184 439.443c-55.13-5.419-110.241-21.365-151.074-58.767C42.307 338.722-7.478 282.729.938 221.217c8.433-61.644 78.896-91.048 126.871-130.712 34.337-28.388 70.198-51.348 112.004-66.78C282.34 8.024 325.382-3.369 370.518.904c54.019 5.115 112.774 10.886 150.881 49.482 39.916 40.427 49.421 100.753 53.385 157.402 4.13 59.015 11.255 128.44-30.444 170.44-41.383 41.683-111.6 19.106-169.213 30.663-46.68 9.364-88.56 35.21-135.943 30.551z"
			fill="currentColor"
		/>
	  </Icon>
	);
};