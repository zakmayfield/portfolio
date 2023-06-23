import { ContentContainer } from '@/shared/components';
import { FC } from 'react';
import { ContactContent, ContactForm } from '@/features/contact/components';

interface ContactProps {}

export const Contact: FC<ContactProps> = ({}) => {
  return (
    <div className='my-6 mt-12 flex flex-col md:flex-row justify-center gap-6'>
      <ContentContainer className='max-w-lg px-6 pb-12 md:p-6 md:bg-slate-100 mx-auto rounded-lg'>
        <ContactContent />
      </ContentContainer>

      <ContentContainer className='max-w-lg px-6 mx-auto'>
        <ContactForm />
      </ContentContainer>
    </div>
  );
};
