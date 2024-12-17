import React from "react";
import Footer from "./Footer";
import Header from "./Header";

function ContactMain(){
    return(
        <div className="wrapper">
        <Header />
        <section style={{marginTop:'90px'}} class="contact-container">
            <h1 style={{textAlign:'center'}}>Contact Us</h1>
            <p>If you have any questions, feel free to contact us using the form below or reach out directly through our contact details. We’re here to help!</p>
            <div class="contact-details">
                <div class="detail-item">
                    <h3>Email Us</h3>
                    <p>📧 <a href="mailto:support@yourwebsitename.com">support@yourwebsitename.com</a></p>
                </div>
                <div class="detail-item">
                    <h3>Call Us</h3>
                    <p>📞 <a href="tel:+18001234567">1-800-123-4567</a></p>
                </div>
                <div class="detail-item">
                    <h3>Visit Us</h3>
                    <p>🏢 123 Food Street, City Name, State, ZIP</p>
                </div>
            </div>
            <div  className='formDiv'>
            <form>
            <div className="form">
                <h3>Send Us Message ✉</h3>
                <input className="input-style" type="text" placeholder="Your name"  required />
                <input className="input-style" type="email" placeholder="Your Email"  required />
                <textarea className="input-style" style={{maxHeight:'100px', minHeight:'50px'}} type="text" placeholder="Message"  required />
                <button type="submit" className="form-btn">Send</button>
                </div>
            </form>
            </div>
        
        </section>
        <Footer/>
        </div>
    )
}

export default ContactMain;