import Accessories from './Assets/Desktop-Accessories.jpg';
import ModelS from './Assets/Desktop-ModelS.jpeg';
import Model3 from './Assets/Desktop-Model3.jpeg';
import ModelX from './Assets/Desktop-ModelX.jpeg';
import ModelY from './Assets/Desktop-ModelY.jpeg';
import SolarPanels from './Assets/Desktop-SolarPanels.jpeg';
import SolarRoof from './Assets/Desktop-SolarRoof.jpeg';
import Header from './Components/Header';
import Item from './Components/Item';
import Footer from './Components/Footer';
import './App.css';
import React from 'react';

function App() {
	return (
		<React.Fragment>
			<Header />
			<div className='Container'>
				<Item
					title='Model 3'
					desc='Order Online for Touchless Delivery'
					backgroundImg={Model3}
					leftBtnTxt='CUSTOM ORDER'
					rightBtnTxt='EXISTING INVENTORY'
					twoButtons='true'
					first
				/>
				<Item
					title='Model Y'
					desc='Order Online for Touchless Delivery'
					backgroundImg={ModelY}
					leftBtnTxt='CUSTOM ORDER'
					rightBtnTxt='EXISTING INVENTORY'
					twoButtons='true'
				/>
				<Item
					title='Model S'
					desc='Order Online for Touchless Delivery'
					backgroundImg={ModelS}
					leftBtnTxt='CUSTOM ORDER'
					rightBtnTxt='EXISTING INVENTORY'
					twoButtons='true'
				/>
				<Item
					title='Model X'
					desc='Order Online for Touchless Delivery'
					backgroundImg={ModelX}
					leftBtnTxt='CUSTOM ORDER'
					rightBtnTxt='EXISTING INVENTORY'
					twoButtons='true'
				/>
				<Item
					title='Solar Panels'
					desc='Lowest Cost Solar Panels in America'
					backgroundImg={SolarPanels}
					leftBtnTxt='ORDER NOW'
					rightBtnTxt='LEARN MORE'
					twoButtons='true'
				/>
				<Item
					title='Solar Roof'
					desc='Produce Clean Energy From Your Roof'
					backgroundImg={SolarRoof}
					leftBtnTxt='ORDER NOW'
					rightBtnTxt='LEARN MORE'
					twoButtons='true'
				/>
				<Item
					title='Accessories'
					backgroundImg={Accessories}
					BtnTxt='SHOP NOW'
					acs
				/>
				<Footer />
			</div>
		</React.Fragment>
	);
}

export default App;
