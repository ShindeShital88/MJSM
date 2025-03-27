import Footer from '../../Component/Footer/Footer';
import Navbar from '../../Component/Navbar/Navbar';
import './Home.css';
import pic from './ware mam .jpg'
export default function Home(){
    return(
        <>
     
        <Navbar/>
        <section class="hero">
            <div class="hero-content">
                <h1>Shape Your Future in <br/> Business & Technology</h1>
                <p>Join our BBA(CA) program to develop expertise in business analytics and computer applications.</p>
                <button class="btn"> <a href="#" class="btn">Discover More</a></button>
               
            </div>
        </section>
        
        <section class="why-choose">
            <h2>Why Choose BBA(CA)?</h2>
            <div class="features">
                <div class="feature-box">
                    <h3>Industry-Aligned Curriculum</h3>
                    <p>Stay ahead with a curriculum reflecting industry demands.</p>
                </div>
                <div class="feature-box">
                    <h3>Expert Faculty</h3>
                    <p>Learn from industry experts who bring real-world insights.</p>
                </div>
                <div class="feature-box">
                    <h3>Career Growth</h3>
                    <p>Excellent placement opportunities with career guidance.</p>
                </div>
            </div>
        </section>
        
        <section class="hod-message">
            <h2>Message from HOD</h2>
            <div class="message-container">
                <img src={pic} alt="HOD"/>
                <div class="message-text">
                    <p>“Welcome to the BBA(CA) Department. Our program is designed to shape future leaders...”</p>
                    <h4>Miss. Prajakta Ware</h4>
                    <p>Head of Department, BBA(CA)</p>
                </div>
            </div>
        </section>
        <Footer/>
        </>
    )
}
