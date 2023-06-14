import { FC } from 'react';
import { ContentContainer } from '@/shared/components';
import { unbounded } from '@/app/utils/fonts';

interface NotFoundProps {}

export const NotFound: FC<NotFoundProps> = ({}) => {
  return (
    <ContentContainer className='border md:max-w-3xl p-6'>
      <NotFoundContent />
    </ContentContainer>
  );
};

function NotFoundContent() {
  return (
    <div>
      <div className='flex flex-col gap-6'>
        <h1 className='font-bold text-4xl' style={unbounded.style}>
          Lost in Cyberspace?
        </h1>

        <p>
          It seems we can{"'"}t locate the page you{"'"}ve requested.
        </p>

        <div>
          <h2>404</h2>
          <p>Not Found</p>
        </div>
      </div>
    </div>
  );
}
