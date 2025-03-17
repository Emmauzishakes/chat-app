import React, { useState, useEffect, useMemo } from 'react'
import defaultAvater from '../../public/assets/default.jpg'
import { RiMore2Fill } from 'react-icons/ri'
import SearchModal from './SearchModal'
import { formatTimestamp } from '../utils/formatTimestamp';

import chatData from "../data/chats";
const ChatList = () => {
  const [chats, setChats] = useState([]);

  useEffect(() => {
    setChats(chatData);
  }, []);

  const sortedChats = useMemo(() => {
    return [...chats].sort((a, b) => {
      const aTimestamp = a.lastMessageTimestamp.seconds + a.lastMessageTimestamp.nanoseconds / 1000000000;
      const bTimestamp = b.lastMessageTimestamp.seconds + b.lastMessageTimestamp.nanoseconds / 1000000000;

      return bTimestamp - aTimestamp;
    });
  }, [chats]);

  return (
    <section className='relative hidden lg:flex flex-col items-start justify-start bg-white h-[100vh] w-[100%] md:w-[600px]'>
      <header className='flex items-center justify-between w-[100%] p-4 border-b-1 lg:border-b border-[#898989b9] h-[81px] sticky md:static top-0 z-[100]'>
        <main className='flex items-center gap-3'>
          <img src={defaultAvater} alt="" className='w-[44px] h-[44px] object-cover rounded-full' />
          <span>
            <h3 className='p-0 font-semibold text-[#2a3d39] md;text-[17px]'>{"Chatfrik User"}</h3>
            <p className='p-0 font-light text-[#2a3d39] text-[15px]'>@chatfrik</p>
          </span>
        </main>
        <button className='bg-[#d9f2ed] w-[35px] h-[35px] p-2 flex items-center justify-center rounded-lg'>
          <RiMore2Fill color='#01aa85' className='w-[28px] h-[28px]'/>
        </button>
      </header>

      <div className='w-[100%] mt-[10px] px-5'>
        <header className='flex items-center justify-between'>
          <h3 className='text-[16px]'>Messages ({chats?.length || 0})</h3>
          <SearchModal />
        </header>
      </div>

      <main className='flex flex-col items-start mt-[1.5rem] pb-3 w-[100%]'>
        {sortedChats?.map((chat) => (
        <>
          <button key={chat?.uid} className='flex items-start justify-between w-[100%]  border-b border-[#9090902c] px-5 pb-3 pt-3'>
            {chat?.users?.filter((user) => user?.email !== "baxo@mailinator.com")?.map((user) => (
              <>
              <div className='flex items-start gap-3'>
                <img src={user?.image} className='h-[40px] w-[40px] rounded-full object-cover' alt="" />
                <span>
                  <h2 className='p-0 font-semibold text-[#2a3d39] text-left text-[17px]'>{user?.fullName || "ChatFrik User"}</h2>
                  <p className='p-0 font-light text-[#2a3d39] text-left text-[14px]'>{chat?.lastMessage}</p>
                </span>
              </div>
              <p className='p-0 font-regular text-gray-400 text-left text-[11px]'>{formatTimestamp(chat?.lastMessageTimestamp)}</p>
              </>
          ))}
          </button>
        </>
        ))}
      </main>
    </section>
  )
}

export default ChatList
