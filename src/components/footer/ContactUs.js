import { Form, Button, Container } from 'bootstrap-4-react';

export default function ContactUs() {
	return(
		<div className="contact-section">
		    <Container>
			    <h2 id="contact-label">Contact Us</h2>
				<Form>
	                {/*email address*/}
	                <Form.Group>
		               <Form.Input 
		                   type="email" 
		                   id="email-address-field" 
		                   placeholder="Email Address"
		                   className="contact-input-field"
		                   lg
		                />
				    </Form.Group>

				    {/*text area*/}
				    <Form.Group>
		               <Form.Textarea 
		                   id="description-field" 
		                   className="contact-input-field"
		                   rows="5"
		                />
				    </Form.Group>

	                {/*checkbox*/}
				    <Form.Group>
		              <Form.Check>
		                <Form.Checkbox id="check-agree" />
		                <Form.CheckLabel 
		                    id="check-agree-label" 
		                    htmlFor="check-agree"
		                >
		                    I Agree
		                </Form.CheckLabel>
		              </Form.Check>
				    </Form.Group>
			 		
			 		<Button id="contact-button" type="submit">Submit</Button>
				</Form>  	
		    </Container>
		</div>
	);
};