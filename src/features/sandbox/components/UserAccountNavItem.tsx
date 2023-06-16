import { FC } from 'react';
import { UserAvatar } from './UserAvatar';
import { User } from 'next-auth/';

interface UserAccountNavItemProps {
  user: Pick<User, 'name' | 'image' | 'email'>;
}

export const UserAccountNavItem: FC<UserAccountNavItemProps> = ({ user }) => {
  return (
    <div>
      <UserAvatar user={user} />
    </div>
  );
};
