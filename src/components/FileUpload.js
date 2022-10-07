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

	       		<Progress id="progress-file-upload" mb="3">
          			<Progress.Bar id="progress-file-upload-bar" min="0" max="100" now="55" />
        		</Progress>
	       		<Button id="file-upload-button">Start Upload</Button>
	       </Form>
	    </div>
    );
};