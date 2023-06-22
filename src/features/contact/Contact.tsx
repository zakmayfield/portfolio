import { ContentContainer } from '@/shared/components';
import { FC } from 'react';
import { ContactForm } from '@/features/contact/components';

interface ContactProps {}

export const Contact: FC<ContactProps> = ({}) => {
  return (
    <div>
      <ContentContainer className='max-w-lg'>
        <ContactForm />
      </ContentContainer>
    </div>
  );
};
