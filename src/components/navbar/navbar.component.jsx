import {
	Box,
	Flex,
	Icon,
	IconButton,
	Button,
	Menu,
	MenuButton,
	useDisclosure,
	useColorModeValue,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import { MdShoppingCart } from "react-icons/md"
import { ColorModeSwitcher } from '../../ColorModeSwitcher';
import Cart from '../cart/cart.component';

function Navbar() {
	const { isOpen, onOpen, onClose } = useDisclosure();

	return (
		<Box bg={useColorModeValue('gray.100', 'gray.900')} px="4">
			<Flex h="16" alignItems="center" justifyContent="space-between">
				<IconButton
					size="md"
					icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
					aria-label="Open Menu"
					display={{ md: 'none' }}
					onClick={isOpen ? onClose : onOpen}
				/>
				<Box fontWeight="600" pl="3">FUKI Store</Box>
				<Flex alignItems="center">
					<Menu>
					<MenuButton
						as={Button}
						rounded="full"
						variant="link"
						cursor="pointer">
						<Icon w="6" h="6" as={MdShoppingCart} />
					</MenuButton>
					
					<Cart />

					<Button variant="link"> 
						<ColorModeSwitcher />
					</Button>
					</Menu>
				</Flex>
			</Flex>
		</Box>
  );
}

export default Navbar;