import { User } from 'next-auth/';
import { FC } from 'react';

interface UserAvatarProps {
  user: Pick<User, 'name' | 'image'>;
}

export const UserAvatar: FC<UserAvatarProps> = ({ user }) => {
  console.log(user);
  return <div>UserAvatar</div>;
};
