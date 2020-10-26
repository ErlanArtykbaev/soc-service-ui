import React from 'react'

import Project from '../components/Projects/Project'

import market from '../assets/img/startup-market-desktop.png'
import mobil from '../assets/img/mobil-avans.png'
import xbox from '../assets/img/oyunsa-xbox-desktop.png'
import o2 from '../assets/img/o2v2-desktop.png'
import voscreen from '../assets/img/voscreen-desktop.png'

const Projects = () => {
    return (
        <div className="projects-page">
            <h1>Projects</h1>
            <div className="projects">
                <Project
                    img={market}
                    left={true}
                    title="Startup Market"
                    subtitle="A platform that gives the chance to entrepreneurs and investors to collaborate and successfully brings their projects to life and a SaaS tool for investors to keep up with their applications at the same time."
                    servicesTitle="Services"
                    services="UX Research, UI Design, Wireframing & Prototyping, Responsive Layout, RESTFul API Development, Database Architecture, PHP (Symfony) Development, Modular CSS, Custom CMS Development"
                />
                <Project
                    img={mobil}
                    left={false}
                    title="Mobil Avans"
                    subtitle="This is a platform we have designed and developed to provide users with the opportunity to receive loans of small amounts, according to their needs. Mobil Avans with its sleek design and functionality lets the user get a loan and make customizable installments for its reimbursement in a convenient way."
                    servicesTitle="Services"
                    services="UX Research, UI Design, Wireframing & Prototyping, Mobile Development, GraphQL Development"
                />
                <Project
                    img={xbox}
                    left={true}
                    title="Oyunsa Xbox"
                    subtitle="A landing page project for Xbox which is made to be the biggest advertising campaign page in Turkey; where the users can reach the newest information about sales and campaigns and they are directed to all retail stores for their purchases."
                    servicesTitle="Services"
                    services="UX Research, UI Design, Wireframing & Prototyping, Responsive Layout, Modular CSS, Custom CMS Development"
                />
                <Project
                    img={o2}
                    left={false}
                    title="O2V2"
                    subtitle="The website of Amsterdam based global scale hosting company O2V2; which basically can be defined as the niche competitor of DigitalOcean, providing tailor-made solutions utilizing more than 20+ data centers around the world in partnership with industry leaders."
                    servicesTitle="Services"
                    services="UX Research, UI Design, Wireframing & Prototyping, Material Design, Responsive Layout, RESTFul API Development, Modular CSS, WHMCS Integration, Angular.JS Development"
                />
                <Project
                    img={voscreen}
                    left={true}
                    title="Voscreen"
                    subtitle="Voscreen is a highly innovative web & mobile application project that enables its users to improve their English language skills through short video clips which makes learning and improving English more enjoyable than ever."
                    servicesTitle="Services"
                    services="UX Research, UI Design, Wireframing & Prototyping, Responsive Layout, React.JS & Redux Development, Modular CSS, Test-driven Development"
                />
            </div>
        </div>

    )
}

export default Projects
