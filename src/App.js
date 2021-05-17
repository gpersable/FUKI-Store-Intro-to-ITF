import React from 'react';
import {
  ChakraProvider,
  theme,
} from '@chakra-ui/react';
import Navbar from './components/navbar/navbar.component';
import Section from './components/section/section.component';
import Hero from './components/hero/hero.component';
import BarangPreview from './components/barang-preview/barang-preview.component';
import Footer from './components/footer/footer.component';

function App() {
	const heroComponent = <Hero />
	const barangPrevComponent = <BarangPreview />
  
	return (
		<ChakraProvider theme={theme}>
			<Navbar />
			<Section section={heroComponent} idSection="hero" />
			<Section section={barangPrevComponent} idSection="barang-preview" />
			<Footer />
		</ChakraProvider>
  	);
}

export default App;
