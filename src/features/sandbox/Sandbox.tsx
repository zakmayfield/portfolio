import { getAuthSession } from '@/lib/auth';

export const Sandbox = async ({}) => {
  const session = await getAuthSession();
  return (
    <div>
      <div className='flex justify-center items-center'>
        <div>sandbox.tsx</div>
      </div>
    </div>
  );
};
