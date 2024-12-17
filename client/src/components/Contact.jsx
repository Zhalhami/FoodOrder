import React from "react";

function Contact(){
    return(

        <div style={{textAlign: 'center'}}>
            <h2>Contact us</h2>
            <p> For reservation or booking you can reach us via any of our social network or by sending us a direct mail</p>
            <div  className='formDiv'>
            <form style={{width:"600px"}}>
            <div className="form">
                <h3>Send Us Message ✉</h3>
                <input className="input-style" type="text" placeholder="Your name"  required />
                <input className="input-style" type="email" placeholder="Your Email"  required />
                <textarea className="input-style" style={{maxHeight:'100px', minHeight:'50px'}} type="text" placeholder="Message"  required />
                <button type="submit" className="form-btn">Send</button>
                </div>
            </form>
            </div>
            <div >

            </div>
        </div>
    )
}

export default Contact;