import { FC } from 'react';

interface ContactContentProps {}

export const ContactContent: FC<ContactContentProps> = ({}) => {
  return (
    <div className='flex flex-col gap-6'>
      <h1 className='text-2xl'>Want to get in touch?</h1>

      <p>I would love to hear from you regarding new opportunities. Feel free to drop me a quick message!</p>
    </div>
  );
};
