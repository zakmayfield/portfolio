import { FC } from 'react';

interface ContactContentProps {}

export const ContactContent: FC<ContactContentProps> = ({}) => {
  return (
    <div className='flex flex-col gap-6'>
      <h1 className='text-2xl'>Want to get in touch?</h1>

      <p className='opacity-70'>
        I would love to hear from you regarding new opportunities. Feel free to
        drop me a quick message!
      </p>

      <p>
        Please note that the contact form is currently a work in progress, in
        the meantime, you can email me here:{' '}
        <a
          href='mailto:zakmayfield@gmail.com'
          className='text-orange-600 hover:opacity-80 transition-opacity'
        >
          zakmayfield@gmail.com
        </a>
      </p>
    </div>
  );
};
