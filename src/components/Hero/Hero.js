import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Welcome To <br />
          My Personal Portfolio
        </SectionTitle>
        <SectionText>
          Full Stack Developer who focuses on writing clean, elegant and
          efficent code and who provides services for development to deployment
          with more than 20+ real project experience.
        </SectionText>
        <Button
          onClick={() => (window.location = "https://github.com/sudh-202")}
        >
          GitHub
        </Button>
      </LeftSection>
    </Section>
  </>
);

export default Hero;