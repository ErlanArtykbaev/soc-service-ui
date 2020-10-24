import React from 'react'
import MainHeader from '../components/Home/MainHeader'
import TechnologiesCard from '../components/TechnologiesCard/TechnologiesCard'
import WeUseCard from '../components/TechnologiesCard/WeUseCard/WeUseCard'
import Slider from '../containers/Slider'

const Home = () => {
  return (
    <div className="home">
      <MainHeader />
      <Slider />

      <section className="container">
        <div className="row row--large-gutter@xl-up u-pad-ends-small@lg-up u-pad-ends-2xsmall@ms-down">
          <TechnologiesCard
            title={'Expertise in'}
            subtitle={'backend development'}
            description={
              'We can provide\n' +
              'language-agnostic development,\n' +
              'SOLID development, test-driven development, RESTFul API, scalable\n' +
              'architecture, third-party\n' +
              'integrations. Our passion is creating solid yet scalable solutions such\n' +
              'as Cloud/Backend Architecture,\n' +
              'API design and DevOps.'
            }
            WeUse={
              <WeUseCard
                stacks={[
                  'PHP',
                  'JS',
                  'NodeJs',
                  'C#',
                  'Rust',
                  'Python',
                  'Django',
                  'Java',
                  '.NET',
                  'React',
                  'VueJS',
                  'AngularJS',
                ]}
              />
            }
          />
          <TechnologiesCard
            title={'Expertise in'}
            subtitle={'backend development'}
            description={
              'We can provide\n' +
              'language-agnostic development,\n' +
              'SOLID development, test-driven development, RESTFul API, scalable\n' +
              'architecture, third-party\n' +
              'integrations. Our passion is creating solid yet scalable solutions such\n' +
              'as Cloud/Backend Architecture,\n' +
              'API design and DevOps.'
            }
            WeUse={
              <WeUseCard
                stacks={[
                  'PHP',
                  'JS',
                  'NodeJs',
                  'C#',
                  'Rust',
                  'Python',
                  'Django',
                  'Java',
                  '.NET',
                  'React',
                  'VueJS',
                  'AngularJS',
                ]}
              />
            }
          />
          <TechnologiesCard
            title={'Expertise in'}
            subtitle={'backend development'}
            description={
              'We can provide\n' +
              'language-agnostic development,\n' +
              'SOLID development, test-driven development, RESTFul API, scalable\n' +
              'architecture, third-party\n' +
              'integrations. Our passion is creating solid yet scalable solutions such\n' +
              'as Cloud/Backend Architecture,\n' +
              'API design and DevOps.'
            }
            WeUse={
              <WeUseCard
                stacks={[
                  'PHP',
                  'JS',
                  'NodeJs',
                  'C#',
                  'Rust',
                  'Python',
                  'Django',
                  'Java',
                  '.NET',
                  'React',
                  'VueJS',
                  'AngularJS',
                ]}
              />
            }
          />
          <TechnologiesCard
            title={'Expertise in'}
            subtitle={'backend development'}
            description={
              'We can provide\n' +
              'language-agnostic development,\n' +
              'SOLID development, test-driven development, RESTFul API, scalable\n' +
              'architecture, third-party\n' +
              'integrations. Our passion is creating solid yet scalable solutions such\n' +
              'as Cloud/Backend Architecture,\n' +
              'API design and DevOps.'
            }
            WeUse={
              <WeUseCard
                stacks={[
                  'PHP',
                  'JS',
                  'NodeJs',
                  'C#',
                  'Rust',
                  'Python',
                  'Django',
                  'Java',
                  '.NET',
                  'React',
                  'VueJS',
                  'AngularJS',
                ]}
              />
            }
          />
        </div>
      </section>
    </div>
  )
}

export default Home
