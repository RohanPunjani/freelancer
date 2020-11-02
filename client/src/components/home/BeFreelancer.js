import React, {useEffect} from 'react'
import {Link } from 'react-router-dom'
import Freelancer from '../../assets/images/freelancer.svg'
import AOS from 'aos';

function BeFreelancer() {
    
    useEffect(() => {
        AOS.init({
          duration : 2000,
          once: true
        });
      }, []);
    return (
        <div className="be-freelancer">
            <div className="container d-flex flex-column justify-content-center">
                    <h1 className="text-white wannabe" data-aos="fade-up">Wanna be a Freelancer?</h1>
                    <div className="line bg-purple" data-aos="fade-up"></div>
                    <div className="row row-equal">
                        <div className="col-md-6 col-equal" data-aos="fade-up" data-aos-delay="200">
                            <img src={Freelancer} alt="" style={{marginTop: '20px'}}/>
                        </div>
                        <div className="col-md-6 col-equal" data-aos="fade-up" data-aos-delay="400">
                            <h1 class="text-white lead">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                Lorem Ipsum has been the industry's standard dummy text ever since the
                                1500s, when an unknown printer took a galley of type and scrambled it to
                                make a type specimen book. It has survived not only five centuries, but
                                also the leap into electronic typesetting, remaining essentially
                                unchanged. It was popularised in the 1960s with the release of Letraset
                                sheets containing Lorem Ipsum passages, and more recently with desktop
                                publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                            </h1>
                            <br/>
                            <Link to="/freelancer/signUp" className="btn lead text-white register-btn">Register Now</Link>
                        </div>
                    </div>
                </div>
        </div>
    )
}

export default BeFreelancer
