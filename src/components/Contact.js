import { Row, Col } from 'bootstrap-4-react';
import ContactUs from './footer/ContactUs';
import OurLocation from './footer/OurLocation';

export default function Contact() {
	return(
		<Row id="contact-footer">
			<Col col="sm-12 lg-6">
    	       	<ContactUs />    	           		            	   
			</Col>
		    <Col col="sm-12 lg-6">
    	       	<OurLocation />           		            	   
			</Col>	
		</Row>
	);
};