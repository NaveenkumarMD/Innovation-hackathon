import React from 'react'
import Navbar from '../../Components/Navbar'
function Createnew() {
    return (
        <div>
            <Navbar logged="true"/>
            <form id="form">
        <h1>NEW DOCUMENT</h1>
		<div class="form-control">
			<label for="name" id="name">Name</label>
			<input type="text" id="name" placeholder="Enter the document name" />
		</div>

		<div class="form-control">
			<label for="des" id="des">Description</label>
			<textarea type="text"id="des" placeholder="Enter the description"></textarea>
		</div>

		<div class="form-control">
			<label for="id" id="id">ID</label>
			<input type="text"id="id"placeholder="Enter your Document id" />
		</div>

		<div class="form-control">
			<label for="type" id="type">Document Type</label>
			<select name="type" id="type">
                <option  value="-1"  selected>Type</option>
				<option value="pdf">pdf</option>
				<option value="word">word</option>
				<option value=" "> </option>
				<option value="other"> </option>
			</select>
		</div>
		<div class="form-control">
			<label for="myfile">Upload</label>
			<input type="file" id="myfile" name="myfile"/>
		</div>
        <div class="btn">
            <button type="submit" value="submit" class="align">Submit</button>
        </div>
		
	</form>
        </div>
    )
}

export default Createnew
