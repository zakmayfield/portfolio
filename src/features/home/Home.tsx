import { FC } from 'react';
import { Hero, Intro, RecentProjects } from './components';
import { ContentContainer } from '@/shared/components';

interface HomeProps {}

export const Home: FC<HomeProps> = ({}) => {
  return (
    <main>
      <Hero />
      <ContentContainer className='px-6 mt-6 md:mt-12 border md:max-w-4xl'>
        <Intro />
      </ContentContainer>

      {/* 
        this px-6, or ContentContainer placement, is causing an issue, 
        when i render the two project images underneath the heading,
        i will want them to be full-width on mobile - currently the ContentContainer padding is
        not allowing the children to expand fully.

        i will probably need to nest two content containers within <RecentProjects /> 
        in order to control the padding separately from each other. 
        
        default ContentContainer utility classes: className='px-6 my-6 md:my-12 md:max-w-6xl'
        */}
      <RecentProjects />
    </main>
  );
};
