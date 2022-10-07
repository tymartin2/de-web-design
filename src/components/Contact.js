import { Row, Col, Container } from 'bootstrap-4-react';
import ContactUs from './footer/ContactUs';
import OurLocation from './footer/OurLocation';

export default function Contact() {
	return(
		<div id="contact-footer">
		   <Row>
		       <Col col="sm-12 lg-6">
		            <Container>
	       				<ContactUs />       	           		            	
		            </Container>
		       </Col>
		       <Col col="sm-12 lg-6">
		           <Container>
				   	   <OurLocation />	       		           	
		           </Container>
		       </Col>
		   </Row>
		</div>
	);
};