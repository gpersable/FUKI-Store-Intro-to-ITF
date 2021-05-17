import React from 'react';
import {
	Box,
	MenuList,
	MenuDivider,
} from '@chakra-ui/react';
import BARANG_DATA from '../../barang.data';
import CartItems from '../cart/cart-items.component';


class Cart extends React.Component {
	constructor(props) {
        super(props);

        this.state = {
            collections: BARANG_DATA
        }
    }

    render() {
        const {collections} = this.state;
        return (
			<MenuList>
			<Box textAlign="center">Cart</Box>
			<MenuDivider />
            {
                collections
				.filter((item) => item.isCarted)
				.map(({ id, ...otherCollectionProps}) => (
                    <CartItems key={id} {...otherCollectionProps} />
                ))
            }
        	</MenuList>
		);
    }
}

export default Cart;