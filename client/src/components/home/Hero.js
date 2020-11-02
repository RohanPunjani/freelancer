import React, {useState, useEffect} from 'react'
import AOS from 'aos';

function Hero() {
    const [search, setSearch] = useState('');
    useEffect(() => {
        AOS.init({
          duration : 2000,
          once: true
        });
      }, []);
    return (
        <div className="container d-flex flex-column justify-content-center h-100" data-aos="fade-up">
            <h1 className="text-white home-heading">Let's hire a freelancer, <br/>What are you looking for?</h1>
            &nbsp;
            <div className="input-group mb-3 z-10">
                <input type="text" className="form-control" placeholder="UX Designer, Accounts Manager . . . " onchange={e=>setSearch(e.target.value)} />
                <div className="input-group-append">
                    <button className="input-group-text btn" id="basic-addon1">Search</button>
                </div>
            </div>
        </div>
    )
}

export default Hero
