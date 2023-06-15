import { FC } from 'react';
import { ContentContainer } from '@/shared/components';
import { unbounded } from '@/app/utils/fonts';
import Link from 'next/link';

interface NotFoundProps {}

export const NotFound: FC<NotFoundProps> = ({}) => {
  return (
    <div className='md:min-h-[100vh] px-6'>
      <ContentContainer className='md:max-w-3xl px-6 md:px-12 py-12 mt-24 rounded-md bg-slate-200'>
        <NotFoundContent />
      </ContentContainer>
    </div>
  );
};

function NotFoundContent() {
  return (
    <div>
      <div className={`flex flex-col gap-6 ${unbounded.variable}`}>
        <h1 className='font-bold text-3xl md:text-4xl font-unbounded'>
          Lost in Cyberspace?
        </h1>

        <p className='tracking-wider mb-6'>
          It seems we can{"'"}t locate the page you{"'"}ve requested.
        </p>

        <div className=''>
          <h2 className='font-unbounded font-semibold'>404</h2>
          <p className='mb-4 tracking-wide'>Not Found</p>

          <Link
            href='/'
            className='bg-orange-600 hover:bg-orange-500 text-white font-semibold py-3 px-4 rounded-md '
          >
            Go back home
          </Link>
        </div>
      </div>
    </div>
  );
}
