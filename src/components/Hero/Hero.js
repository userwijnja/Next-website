import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
 <Section row nopadding>
<LeftSection>
  <SectionTitle main center>
    Welcome to <br />
    My personal portfolio
  </SectionTitle>
  <SectionText>
    I am Myrthe. Here is some information about myself.
  </SectionText>
  <Button onClick={() => window.location = "https://google.com"}>Click me</Button>
</LeftSection>
 </Section>
);

export default Hero;
