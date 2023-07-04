'use client';

import { Button } from '@/shared/components';
import { X } from 'lucide-react';
import { useRouter } from 'next/navigation';

export const CloseModal = () => {
  const router = useRouter();
  return (
    <Button
      onClick={() => router.back()}
      variant='outline'
      aria-label='close modal'
      className='h-6 w-6 p-0 rounded-md'
    >
      <X className='h-4 w-4' />
    </Button>
  );
};
