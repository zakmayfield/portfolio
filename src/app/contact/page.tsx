import { redirect } from 'next/navigation';
import { Contact } from '@/features/contact';

export const metadata = {
  title: 'Contact | Zachary Mayfield',
};

export default function ContactPage() {
  redirect('/');
  return <Contact />;
}
