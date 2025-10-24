import { Textarea } from '@/components/ui/textarea'
import React from 'react'

function Hero() {
  return (
    <div className='mt-24 w-full flex justify-center'>
      <div className='max-w-3xl w-full text-center space-y-6'>
        <h2 className='text-xl md:text-5xl font-bold'>Hey , I'm your personal <span className='text-primary'>Trip Planner</span></h2>
        <p className='text-lg'>Tell me what you want , and I'll handle flight, hotels , trip planning </p>
      </div>
      <div>
        <div>
          <Textarea />
        </div>
      </div>
    </div>
  )
}

export default Hero