import { Avatar, AvatarFallback } from '@radix-ui/react-avatar'
import { User } from 'next-auth'
import React from 'react'
import Image from 'next/image'

type Props = {
    user: User
}

const UserAvatar = ({user}: Props) => {
  return (
    <Avatar>
        {user.image ? (
            <div className='relative w-10 h-full aspect-square'>
                
                <Image
                fill
                src={user.image}
                alt='user profile'
                referrerPolicy='no-referrer'
                ></Image>
            </div>
        ) : (
            <AvatarFallback>
                <span className='sr-only'>{user?.name}</span>
            </AvatarFallback>
        )}
    </Avatar>
  )
}

export default UserAvatar