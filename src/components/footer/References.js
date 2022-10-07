import { List, Container } from 'bootstrap-4-react';

export default function References() {
	return(
		<div id="footer-references">
			<h5 id="footer-subtitle">references:</h5>
			<Container>
				<List>
			      <List.Item>Font Family:
                       <List> 
                       		<List.Item className="sub-list">
                       		   Open Sans 
                       		</List.Item>
                       		<List.Item className="sub-list">
                       		   Roboto Slab 
                       		</List.Item>
                       </List>
			      </List.Item>
			      <List.Item>
			        Image from https://lottiefiles.com/
			      </List.Item>
			      <List.Item>
			        Google Maps
			      </List.Item>	     
				</List>
			</Container>
		</div>
	);
};