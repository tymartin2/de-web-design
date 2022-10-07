import { Navbar, Nav } from 'bootstrap-4-react';

export default function NavBar() {
   return(
   		<Navbar id="navigation" expand="lg" light bg="light">
   			<Navbar.Toggler target="#navbar-content" />
   			<Navbar.Collapse id="navbar-content">
	   		    <Navbar.Nav ml="auto">
		            <Nav.Item>
		              <Nav.Link href="#">Home</Nav.Link>
		            </Nav.Item>
		            <Nav.Item>
		              <Nav.Link href="#">About Us</Nav.Link>
		            </Nav.Item>
		            <Nav.Item>
		              <Nav.Link href="#contact-footer">Contact</Nav.Link>
		            </Nav.Item>
	            </Navbar.Nav>
	        </Navbar.Collapse>
   		</Navbar>
   );
};