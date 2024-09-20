import React from "react";
import Header from "./Header";
import Footer from "./Footer";

function Traning(){
    return(
        <div>
        <Header />
        <h1 style={{textAlign:'center', marginTop:'90px'}}>Welcome to Our Training Program</h1>
        <div className="training">
            <div >
                <h2>Overview of Our Training</h2>
                <p>Welcome to our comprehensive training program, 
                where we aim to equip you with the skills and knowledge necessary to excel in the food industry. 
                Whether you’re looking to advance your career, switch fields, or gain new expertise, our training offers hands-on 
                experience and in-depth insights.
                </p>
            </div>
            <hr></hr>
            <div>
                <h2>Why Choose Us?</h2>
                <p>
                We provide:
                <ul>
                    <li>Expert Instructors: Learn from industry leaders and professionals who bring real-world experience into the classroom.</li>
                    <li>Flexible Learning: Access the training materials at your own pace, with options for live sessions or self-paced learning.</li>
                    <li>Practical Projects: Work on real-life projects and case studies to ensure you are fully prepared for the field.</li>
                    <li>Certification: Upon successful completion, you will receive a certificate that demonstrates your new skill set and competencies.</li>
                </ul>
                </p>
            </div>
            <hr></hr>
        </div>
        <div>
            <h1 style={{textAlign:'center',margin:"10px"}}>Apply for Internship/Training</h1>
            <div className="formDiv">
            <form>
            <div className="training">
            <label style={{gap:'10px'}} htmlFor="Fullname">Fullname:</label>
                <input
                    className="input-style"
                    id="name-input"
                    type="text"
                    value=""
                />
            <label htmlFor="Email">Email:</label>
                <input
                    className="input-style"
                    id="name-input"
                    type="text"
                    value=""
                />
            <label htmlFor="PhoneNumber">Phone Number:</label>
                <input
                    className="input-style"
                    id="name-input"
                    type="text"
                />
            <label htmlFor="Email">Upload Letter/CV:</label>
                <input
                    className="input-style"
                    id="name-input"
                    type="text"
                    value=""
                />
                <button  style={{marginTop:'30px', width:"100%"}}className="form-btn" type="submit">Enroll Now</button>
                </div>   
                 
            </form>
            </div>
        </div>
        <div className="training">
        <hr></hr>
            <div>
                <h2>Frequently Asked Questions</h2>
                <p>
                    <b>Q: Do I need prior experience?</b><br/>
                    A: No, our courses cater to both beginners and experienced professionals.</p>
                <p>
                    <b>Q: Will I receive a certificate?</b><br/>
                    A: Yes, upon successful completion of the course, you will receive a certificate.
                </p>
            </div>
            <hr></hr>
            <div>
                <h2>Contact Us</h2>
                <p>If you have any questions or need more information, feel free to contact our support team at <a style={{textDecoration:'none'}} href="#"> @trainingfoodordersupport.com</a> or contact via our contact page</p>
            </div>
            
        </div>
            <Footer />
        </div>
    )
}
export default Traning;