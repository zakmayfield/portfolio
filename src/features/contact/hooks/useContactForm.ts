import { ChangeEvent, FormEvent, useState } from 'react';
import * as yup from 'yup';

interface ContactFormValues {
  name: string;
  company: string;
  email: string;
  message: string;
}
type Errors = { [key: string]: string };

export const useContactForm = () => {
  const defaultValues: ContactFormValues = {
    name: '',
    company: '',
    email: '',
    message: '',
  };

  const [formValues, setFormValues] =
    useState<ContactFormValues>(defaultValues);
  const [errors, setErrors] = useState<Errors>({});
  const [formError, setFormError] = useState<string | undefined>(undefined);
  const [isLoading, setIsLoading] = useState(false);

  const resetData = () => {
    setFormValues(defaultValues);
    setErrors({});
    setFormError(undefined);
  };

  const onChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setFormValues((prevData) => ({ ...prevData, [name]: value }));
  };

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);
    // validation
    console.log('form submitted', formValues);
    setIsLoading(false);
  };

  return {
    formValues,
    errors,
    formError,
    isLoading,
    onChange,
    onSubmit,
  };
};
