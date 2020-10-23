import React from 'react';
import bisness from "../../assets/img/bisness.svg";

const MainHeader = () => {
    return (
        <div className='MainHeader'>
            <div className='header-content'>
                <div className='first-impression'>
                    <div className='texts'>
                        <h1>
                            Join the New Era of Secure Digital Identities and Business Communications
                        </h1>
                        <p>
                            Our unique platform is developed to facilitate all your business processes
                            with the highest security standards.
                        </p>
                        <div className='btn-journey-start'>
                            journey starts here
                        </div>
                    </div>
                    <div className='gif-box'>
                        <img className='gif' src={bisness} alt='like' />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MainHeader;