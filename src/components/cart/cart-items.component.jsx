import {
  Text,
  Image,
  MenuItem,
} from '@chakra-ui/react';

const CartItems = ({ id, imageURL, nama, harga }) => (
		<MenuItem minH="48px">
		<Image
			boxSize="3rem"
			borderRadius="5px"
			src={imageURL}
			alt={nama}
			mr="12px"
		/>
		<Text noOfLines={2} fontSize="14px">
			{nama}<br />
			Rp{harga}
		</Text>
		</MenuItem>
);

export default CartItems;
