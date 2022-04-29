import React, {useState} from 'react'
import Navbar from '../../Components/Navbar'

function Createnew() {

	const [docData, setDocData] = useState({
		name: '',
		description: "",
		docId: "",
		docType: '',
		docFile:''
	})

	const handleChange = (e) => {
		console.log(e)
		e.preventDefault()
		setDocData({...docData, [e.target.name]: e.target.value})
	}

    return (
        <div>
            <Navbar logged="true"/>
            <form id="form">
        <h1>NEW DOCUMENT</h1>
		<div class="form-control">
			<label for="name" id="name">Name</label>
			<input type="text" name="name" id="name" placeholder="Enter the document name" />
		</div>

		<div class="form-control">
			<label for="description" id="des">Description</label>
			<textarea type="text" name="description" id="des" placeholder="Enter the description"></textarea>
		</div>

		<div class="form-control">
			<label for="id" id="id" >ID</label>
			<input type="text" id="id" name="docId" placeholder="Enter your Document id" />
		</div>

		<div class="form-control">
			<label for="type" id="type">Document Type</label>
			<select name="docType" id="type">
                <option  value="-1"  selected>Type</option>
				<option value="pdf">pdf</option>
				<option value="word">word</option>
				<option value=" "> </option>
				<option value="other"> </option>
			</select>
		</div>
		<div class="form-control">
			<label for="docFile">Upload</label>
			<input type="file" id="myfile" name="docFile" on/>
		</div>
        <div class="btn">
            <button type="submit" value="submit" class="align" onClick={handleSubmit}>Submit</button>
        </div>
		
	</form>
        </div>
    )
}

export default Createnew
