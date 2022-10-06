import { Form } from 'bootstrap-4-react';

export default function FileUpload() {
    return (
       <Form id="form-file-upload">
       		<label id="label-file-upload" htmlFor="input-file-upload">
       		    <div>
       		        <p>Drag and Drop to upload files</p>
       		    </div> 
       		</label>
       </Form>
    );
};