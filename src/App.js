// Filename - App.js

import "./App.css";
import Sidebar from "./component/sidebar";

import {
	BrowserRouter as Router,
	Routes,
	Route,
} from "react-router-dom";
import {
	AboutUs,
	OurAim,
	OurVision,
} from "./pages/AboutUs";
import {
	Services,
	ServicesOne,
	ServicesTwo,
	ServicesThree,
} from "./pages/Services";
import {
	Events,
	EventsOne,
	EventsTwo,
} from "./pages/Events";

import Contact from "./pages/ContactUs";
import Support from "./pages/Support";

import { MenuItem } from "./component/menu_items";


function App() {
	return (
		<Router>
			<Sidebar  childrens={
				[
					<MenuItem
                        to="/about-us"
                        title="About Us"
						icon= "bx bx-search icon"
                    />,
                    <MenuItem
                        to="/about-us/aim"
                        title="Our Aim"
						icon= 'bx bx-search icon'
                    />,
                    <MenuItem
                        to="/about-us/vision"
                        title="Our Vision"
						icon= 'bx bx-search icon'
                    />,
                    <MenuItem
                        to="/services"
                        title="Services"
						icon= 'bx bx-search icon'
                    />,
                    <MenuItem
                        to="/services/services1"
                        title="Services1"
						icon= 'bx bx-search icon'
                    />,
                    <MenuItem
                        to="/services/services2"
                        title="Services2"
						icon= 'bx bx-search icon'
                    />,
                    <MenuItem
                        to="/services/services3"
                        title="Services3"
						icon= 'bx bx-search icon'
                    />,
                    <MenuItem
                        to="/contact"
                        title="Contact Us"
						icon= 'bx bx-search icon'
                    />
                   
				]
			}/>
				<Routes>
					<Route
						path="/about-us"
						element={<AboutUs />}
					/>
					<Route
						path="/about-us/aim"
						element={<OurAim />}
					/>
					<Route
						path="/about-us/vision"
						element={<OurVision />}
					/>
					<Route
						path="/services"
						element={<Services />}
					/>
					<Route
						path="/services/services1"
						element={<ServicesOne />}
					/>
					<Route
						path="/services/services2"
						element={<ServicesTwo />}
					/>
					<Route
						path="/services/services3"
						element={<ServicesThree />}
					/>
					<Route
						path="/contact"
						element={<Contact />}
					/>
					<Route
						path="/events"
						element={<Events />}
					/>
					<Route
						path="/events/events1"
						element={<EventsOne />}
					/>
					<Route
						path="/events/events2"
						element={<EventsTwo />}
					/>
					<Route
						path="/support"
						element={<Support />}
					/>
				</Routes>
		
		</Router>
	);
}

export default App;
