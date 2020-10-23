import React from 'react';

const WeUseCard = (props) => {
    return (
        <div className="u-gap-top-auto">
            <h5
                className="c-secondary-title c-secondary-title--small u-clear-gap-top u-color-aluminium"
            >
                We Use
            </h5>
            <div className="row row--xsmall-gutter u-gap-bottom-medium@md-up u-gap-bottom-small@sm-down">
                <div className="col col--xl-10">
                    <ul className="row list-unstyled u-clear-gap-bottom u-font-size-xs">
                        {props.stacks.map((id,key)=>{
                            return <li key={key} className="col col-xs-6 col-md-3 u-gap-bottom-small"><span
                                className="u-color-tundora">{id}</span></li>
                        })}
                    </ul>
                </div>
            </div>
            <a
                className="c-link-underlined c-link-underlined--primary"
                href="backend-development"
                title="Expertise in backend development"
            >
                Learn More
            </a>
        </div>
    );
};

export default WeUseCard;