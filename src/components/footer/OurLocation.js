
export default function OurLocation() {
	return(
		<div id="contact-section">
		    <h2 id="contact-label">Our Location</h2>
		    <div className="mapouter">
		        <div className="gmap_canvas">
		             <iframe width="600" height="500" id="gmap_canvas" src="https://maps.google.com/maps?q=Level%201,%201%20Ulster%20Lane%20Brisbane%20QLD%204000%20Australia&t=k&z=19&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0">
		             </iframe> 
		        </div>
		    </div>
		</div>
	);
};

