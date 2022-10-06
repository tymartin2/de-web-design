import { Form, Button, Progress } from 'bootstrap-4-react';

export default function FileUpload() {
    return (
       <div id="file-upload-section">
	       <Form id="form-file-upload">
	       		<label id="label-file-upload" htmlFor="input-file-upload">
	       		    <div>
	       		        <p>Drag and Drop to upload files</p>
	       		    </div> 
	       		</label>

	       		<Progress mb="2">
          			<Progress.Bar min="0" max="100" now="0" />
        		</Progress>
	       		<Button id="file-upload-button">Start Upload</Button>
	       </Form>
	    </div>
    );
};