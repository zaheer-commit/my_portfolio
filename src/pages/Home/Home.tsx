import './Home.scss';
import myself from '../../assets/images/myself.png'
import arrow from '../../assets/icons/arrow.svg'
import { useForm } from '@formspree/react';


const Home = () => {
    const [state, handleSubmit] = useForm("moejbjgz"); 

    return(
        <section className="Home" id="home">

            <div className="Home_Container">
                <div className="Above">
                    <img src={myself} alt="Zaheer Nazari" className="Home_profile"/>
                    <div className="Profile_Card">
                        <p>Trust yourself and keep going.</p>
                    </div>
                </div>
                
                <div className="Buttom">
                    <p> I build clean, responsive websites with a focus on usability, performance, and thoughtful design. </p>
                    <div>
                        <button className="Button_cta"> view my CV </button>
                    </div>
                </div>
            </div>

            <div className="Home_About" id="about">
                <div className="sides">
                    <div className="Leftside">
                        <h1> Hi There, This is Zaheer </h1>
                    </div>
                    <div className="Rightside">
                        <p> 
                            I'm a Frontend Developer passionate about crafting modern, responsive, and visually refined web experiences. My technical toolkit includes HTML, CSS, JavaScript, TypeScript, React, Sass, Tailwind CSS, and Ant Design, supported by a solid foundation in general computing and digital tools.<br/>
                            <br/>Beyond aesthetics, I value usability, maintainable code, thoughtful architecture, and meticulous attention to detail. I enjoy tackling challenges, exploring emerging technologies, and transforming ideas into practical, well-structured solutions.<br/>
                            <br/>Committed to continuous learning and professional growth, I strive to refine my technical expertise, strengthen my problem-solving abilities, and contribute to meaningful projects that deliver intuitive, reliable, and engaging digital experiences.
                        </p>
                        <button> Let's Talk </button>
                    </div>
                </div>
            </div>

            <div className="Home_Skills">
                <div className="Skills">
                    <div>
                        <span> 01 </span>
                        <h1> Web Design </h1>
                        <p> Modern, responsive and user-friendly design that best represents your brand identity and captivates your audience. </p>
                        <a href="#" target="_blank"> <img src={arrow} alt="point"/> Learn more about it </a>
                    </div>
                    <div>
                        <span> 02 </span>
                        <h1> Seo & Performance </h1>
                        <p> Modern, responsive and user-friendly design that best represents your brand identity and captivates your audience. </p>
                        <a href="#" target="_blank"> <img src={arrow} alt="point"/> Learn more about it </a>
                    </div>
                    <div>
                        <span> 03 </span>
                        <h1> Consulting </h1>
                        <p> Modern, responsive and user-friendly design that best represents your brand identity and captivates your audience. </p>
                        <a href="#" target="_blank"> <img src={arrow} alt="point"/> Learn more about it </a>
                    </div>
                </div>
                <div className="more_skills">
                     <ul>
                        <li>
                            <a href="#about" className="hover-underline"> Find more about me </a>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="Home_testimonial">

                <div className="testimonial">
                    <div className="testimonial_icon">❝</div>
                    <p className="testimonial_text">
                        I have had the pleasure of teaching and mentoring Zaheer, and I have been impressed by his intelligence, sharp thinking, and natural talent. He is a quick learner who understands new concepts efficiently and approaches challenges with a thoughtful and analytical minset.
                        <br/>
                        Zaheer has strong potential and a genuine ability to grow. His combination of intelligence, talent, and sharp problem-solving skills makes him a promising student and a pleasure to teach. 
                        <br/>
                        I am confident that Zaheer will continue to develop his skills and achive great things in his future career.
                    </p>
                    <div className="testimonial_author">
                        <div className="author_profile">
                            <div className="initial_avatar">PD</div>
                            <div className="testimonial_info">
                                <h4>Pedram Dehghanpour</h4>
                                <p>Software Engineer | IT & Management Consultant</p>
                                <span>Mentor</span>
                            </div>
                        </div>
                        <div className="testimonial_links">
                            <a href="https://pedramcode.github.io" target="_blank" rel="noopener noreferrer">Portfolio</a>
                            <span className="divider">|</span>
                            <a href="https://www.linkedin.com/in/pedram-dehghanpour/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="Home_GetinTouch" id="getintouch">
                <div className="Sides">
                    <div className="LeftSide">
                        <h1> Get in touch! </h1>
                        <div>
                            <p>Have a project in mind or just want to say hi? <br/> Feel free to reach out. I'd love to hear from you</p>
                            <b> : ) </b>
                        </div>
                    </div>

                    {state.succeeded ? (
                        <div className="RightSide success-message">
                            <h2>Thank you! : )</h2>
                            <p>Your message has been sent successfully. I'll get back to you soon.</p>
                        </div>
                        ) : (
                            <form className="RightSide" onSubmit={handleSubmit}>
                                <div className="form_group">
                                    <label> Name* </label>
                                    <input type="text" name="name" placeholder="your full name" required/>
                                </div>
                                <div className="form_group">
                                    <label> Email* </label>
                                    <input type="email" name="email" placeholder="name@email.com" required/>
                                </div>
                                <div className="form_group">
                                    <label> Message* </label>
                                    <textarea name="message" rows={7} placeholder="start typing your message here..." required></textarea>
                                </div>

                                <button type="submit" disabled={state.submitting}>
                                    {state.submitting ? 'Sending...' : 'Send Mail'}
                                </button>
                            </form>
                        )
                    }
                </div>
            </div>

        </section>
    );
};
export default Home;
