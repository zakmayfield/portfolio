export const Sandbox = () => {
  return (
    <div className='flex items-end h-full gap-6'>
      <div className='border-4 self-start border-slate-200 p-6 bg-slate-100 w-2/3 h-full rounded-md'>
        Welcome to the sandbox dashboard.
      </div>
      <div className='border-4 border-slate-200 bg-slate-100 p-6 flex-grow h-full rounded-md'></div>
    </div>
  );
};
