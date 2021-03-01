import React from 'react';
import './Contact.css';

const Style = {
    width: '700px'
};

function Contact() {
    return(
        <div className="card" style={Style}>
        <div className="card-body">
        <div>
            <h1>Contact</h1>
            <form>
                <div className="form-group">
                    <label className="form-text" for="Name">Name</label>
                    <input type="name" className="form-control" id="Name" placeholder="Name" required="required"/>
                </div>

                <div className="form-group">
                    <label className="form-text" for="Email">Email</label>
                    <input type="email" className="form-control" id="Email" placeholder="Email" aria-describedby="emailHelp" required="required"/>
                </div>

                <div className="form-group">
                            <label className="form-text" for="Message">Message</label>
                            <textarea className="form-control" id="Message" placeholder="Message" rows="3" required="required"></textarea>
                </div>
                <button type="submit" className="btn btn-primary" id="submitButton">Submit</button>                
            </form>

        </div>
        </div>
        </div>
    )
};

export default Contact;