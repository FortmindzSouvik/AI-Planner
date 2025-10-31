"use client";
import { Button } from '@/components/ui/button';
import { SignInButton } from '@clerk/nextjs';
import Image from 'next/image';
import Link from 'next/link';
import React, { PureComponent } from 'react'

const menuOptions = [
  { name: 'Home', link: '/' },
  { name: 'About', link: '/about' },
  { name: 'Contact', link: '/contact' },
]


export class Header extends PureComponent {
  render() {
    return (
      <div className='flex justify-between items-center p-4'>
        <div className='flex gap-2 items-center'>
          <Image src={'/logo.svg'} alt='logo' width={30} height={30} />
          <h2 className='font-bold text-2xl'>Ai Trip Planner</h2>
        </div>
        <div className='flex gap-8 items-center'>
          {menuOptions.map((options) =>
            <Link href={options.link} key={options.link}>
              <h2 className='text-lg hover:scale-105 transition-all hover:text-primary'>{options.name}</h2>
            </Link>
          )}
        </div>
        <SignInButton mode='modal'>
          <Button>Get Started</Button>
        </SignInButton>
      </div>
    )
  }
}

export default Header