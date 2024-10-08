import { useState } from "react";
import "./Form.css";
import axios from "axios";

export default function Form() {
    const [formSubmitted, setFormSubmitted] = useState(false);
    const [firstName, setFirstName] = useState("");
    // const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [contactNumber, setContactNumber] = useState("");
    // const [companyName, setCompanyName] = useState("");

    async function sendData() {
        try {
            const response = await axios.post("http://localhost:5000/api/form/submit", {
                firstName,
                // lastName,
                email,
                contactNumber,
                // companyName
            });
            if (response.data.success === true) {
                setFormSubmitted(true);
            } else {
                alert("Oops, there was an error: " + response.data.message);
            }
        } catch (error) {
            console.error("Error submitting form:", error);
            alert("An error occurred: " + (error.response?.data?.message || error.message));
        }
    }
    const onClick = () => {
        if (!firstName ||!email || !contactNumber) {
            alert("Please enter all the details")
        } else {
            sendData();
        }
    };

    return (
        <div id="form">
            {formSubmitted ?
                <div className="formSubmitted">
                    <h1>Thank you for submitting the form</h1>
                </div>
                :
                <div className="formContainer">
                    <h1>Get In Touch</h1>
                    <div className="adjacent">
                        <div>
                            <h6>Enter your Name</h6>
                            <input 
                                type="text" 
                                placeholder="Enter your first name"
                                value={firstName}
                                onChange={(e) => setFirstName(e.target.value)}
                            />
                        </div>
                        {/* <div>
                            <h6>Last Name</h6>
                            <input 
                                type="text" 
                                placeholder="Enter your last name"
                                value={lastName}
                                onChange={(e) => setLastName(e.target.value)}
                            />
                        </div> */}
                    </div>
                    <div className="complete">
                        <h6>Email</h6>
                        <input 
                            type="text" 
                            placeholder="Enter your email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="adjacent">
                        <div>
                            <h6>Contact Number</h6>
                            <input 
                                type="text" 
                                placeholder="Enter your contact number"
                                value={contactNumber}
                                onChange={(e) => setContactNumber(e.target.value)}
                            />
                        </div>
                        {/* <div>
                            <h6>Company Name</h6>
                            <input 
                                type="text" 
                                placeholder="Enter your company name"
                                value={companyName}
                                onChange={(e) => setCompanyName(e.target.value)}
                            />
                        </div> */}
                    </div>
                    <button onClick={onClick}>Submit</button>
                </div>
            }
        </div>
    );
};
