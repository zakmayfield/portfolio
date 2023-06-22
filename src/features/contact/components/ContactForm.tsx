'use client';
import { FC, useMemo, useState } from 'react';
import { useContactForm } from '../hooks';
import { Button } from '@/shared/components';

interface ContactFormProps {}

export const ContactForm: FC<ContactFormProps> = ({}) => {
  const { formValues, formError, errors, isLoading, onChange, onSubmit } =
    useContactForm();

  const contactFormInputs = useMemo(
    () => [
      { value: formValues.name, label: 'Name', name: 'name' },
      { value: formValues.company, label: 'Company', name: 'company' },
      { value: formValues.email, label: 'Email', name: 'email' },
    ],
    [formValues.name, formValues.company, formValues.email]
  );

  return (
    <form onSubmit={onSubmit} className='w-full'>
      {contactFormInputs.map((input) => (
        <div key={input.name} className='mt-4'>
          <label htmlFor={input.name} className='block mb-1'>
            {input.label}
          </label>
          <input
            disabled
            type='text'
            id={input.name}
            value={input.value}
            name={input.name}
            onChange={onChange}
            className='w-full px-3 py-3 md:py-2 border border-gray-300 rounded-lg'
            required
          />
        </div>
      ))}

      <div className='mt-4'>
        <label htmlFor='message' className='block mb-1'>
          Message
        </label>
        <textarea
          disabled
          id='message'
          className='w-full px-3 py-2 border border-gray-300 rounded-lg'
          value={formValues.message}
          onChange={onChange}
          name='message'
          required
        />
      </div>

      <div className='mt-10 md:mt-6'>
        <Button
          disabled
          type='submit'
          variant='outline'
          className='w-full p-6 md:p-4 text-white bg-orange-600 rounded-lg hover:bg-orange-500 hover:text-white focus:outline-none focus:bg-orange-400'
        >
          Submit
        </Button>
      </div>
    </form>
  );
};
