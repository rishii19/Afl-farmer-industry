import React from 'react';
import farmer from '../images/farmer.jpg';
import industry from '../images/industry.jpg';

const Card1 = () => {
    return (
        <div className='ficard' id='ficard' >
            <div className="container-fluid mt-3">
                <div className="row justify-content-evenly">
                    <div className="col-md-5 shadow p-3 mb-5 bg-body rounded text-center">
                        <h4 className="mt-2 text-center"><a href='/login'>Farmer</a></h4>
                        <p className='mt-3'>Paddy stubble whose disposal happens to be a concern for farmers and environment, is now turning into a worthwhile resource. The demand of paddy stubble has increased in recent times and this is helpful in combating pollution caused by their disposal methods.</p>
                        <div>
                            <img className='img-fluid' src={farmer} alt="farmer"/>
                            <a href="/login" className="link-secondary d-block mt-3"> Get Started</a>
                        </div>
                    </div>
                    <div className="col-md-5 shadow p-3 mb-5 bg-body rounded text-center">
                        <h4 className='mt-2 text-center'><a href='/login'>Industry</a></h4>
                        <p className='mt-3'>Paddy stubble whose disposal happens to be a concern for farmers and environment, is now turning into a worthwhile resource. The demand of paddy stubble has increased in recent times and this is helpful in combating pollution caused by their disposal methods.</p>
                        <img className='img-fluid' src={industry} alt="farmer"/>
                        <a href="/login" className="link-secondary d-block mt-3"> Get Started</a>                       
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card1
