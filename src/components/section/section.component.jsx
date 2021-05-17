import {
	Container,
	Stack,
} from '@chakra-ui/react';
  
const Section = ({ section, idSection }) => (
	<Container maxW="7xl" id={idSection}>
		<Stack
			align="center"
			spacing={{ base: 8, md: 10 }}
			py={{ base: 20, md: 28 }}
			direction={{ base: 'column', md: 'row' }}>
			{section}
		</Stack>
	</Container>
);

export default Section;