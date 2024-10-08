import { useState } from "react";
import "./Form.css";
import axios from "axios";

export default function Form() {
    const [formSubmitted, setFormSubmitted] = useState(false);
    const [firstName, setFirstName] = useState("");
    const [email, setEmail] = useState("");
    const [contactNumber, setContactNumber] = useState("");
    const [companyName, setCompanyName] = useState(""); // Not mandatory

    async function sendData() {
        try {
            const response = await axios.post("http://localhost:5000/api/form/submit", {
                firstName,
                email,
                contactNumber,
                companyName // Can be empty
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

    const validateForm = () => {
        // Name validation: between 3 and 13 characters
        if (firstName.length < 3 || firstName.length > 13) {
            alert("Name must be between 3 and 13 characters.");
            return false;
        }
        
        // Email validation: must contain '@'
        if (!email.includes("@")) {
            alert("Please enter a valid email address with '@'.");
            return false;
        }

        // Contact number validation: must be exactly 10 digits
        if (!/^\d{10}$/.test(contactNumber)) {
            alert("Contact number must be exactly 10 digits.");
            return false;
        }

        return true;
    };

    const onClick = () => {
        if (validateForm()) {
            sendData();
        }
    };

    return (
        <div id="form">
            {formSubmitted ? (
                <div className="formSubmitted">
                    <h1>Thank you for submitting the form</h1>
                </div>
            ) : (
                <div className="formContainer">
                    <h1>Get In Touch</h1>
                    <div className="adjacent">
                        <div>
                            <h6>Your Name</h6>
                            <input 
                                type="text" 
                                placeholder="Enter your name"
                                value={firstName}
                                onChange={(e) => setFirstName(e.target.value)}
                            />
                        </div>
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
                        <div>
                            <h6>Institute Name (Optional)</h6>
                            <input 
                                type="text" 
                                placeholder="Enter your institute name (Optional)"
                                value={companyName}
                                onChange={(e) => setCompanyName(e.target.value)}
                            />
                        </div>
                    </div>
                    <button onClick={onClick}>Submit</button>
                </div>
            )}
        </div>
    );
}
