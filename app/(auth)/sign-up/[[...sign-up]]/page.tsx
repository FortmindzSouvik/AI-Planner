
"use client";
import { SignUp, useUser } from '@clerk/nextjs'
import { currentUser } from '@clerk/nextjs/server';
import axios from 'axios';
import { useEffect } from 'react';

export default async function Page() {

  const user = await currentUser();

  useEffect(() => {
    try {
      console.log("User signed in: ", user);
      const saveUser = async () => {
        const result = await axios.post(`api/sign-up`, {
          "id": 1,
          "email": "ds",
          "name": "sd",
          "password": "password"

        });
        console.log("resssssss", result);

      }
      saveUser();
    } catch (error) {
      console.log(error);
    }
  }, [true]);
  return (
    <div className='flex justify-center h-screen items-center'>
      <SignUp />
    </div>

  )
}