import React from 'react';
import {
	Wrap, 
	WrapItem
} from '@chakra-ui/react';
import BARANG_DATA from '../../barang.data';
import BarangCard from '../barang-card/barang-card.component';

class BarangPreview extends React.Component {
	constructor(props) {
        super(props);

        this.state = {
            collections: BARANG_DATA
        }
	}
	
	render() {
        const {collections} = this.state;
        return (
		<Wrap spacing="30px" justify="center">
			{collections.map(({ id, ...otherCollectionProps}) => (
				<WrapItem>
					<BarangCard key={id} {...otherCollectionProps} />
				</WrapItem>
			))}
		</Wrap>
		);
    }
}

export default BarangPreview;