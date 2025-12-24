'use client';
import { Button } from '@/components/ui/button'
import { HeroVideoDialog } from '@/components/ui/hero-video-dialog'
import { Textarea } from '@/components/ui/textarea'
import { useUser } from '@clerk/nextjs'
import { ArrowDown, Globe2, Landmark, Plane, Send } from 'lucide-react'
import { useRouter } from 'next/navigation'

const suggestions = [
  {
    title: 'Get Started',
    icon: <Globe2 className='text-blue-400 h-5 w-5' />
  },
  {
    title: 'Inspire me where we go',
    icon: <Plane className='text-green-400 h-5 w-5' />
  },
  {
    title: 'Discover hidden gems',
    icon: <Landmark className='text-orange-400 h-5 w-5' />
  },
  {
    title: 'Adventure Destinations',
    icon: <Globe2 className='text-yellow-400 h-5 w-5' />
  }
]

function Hero() {
  const { user } = useUser();
  const router = useRouter();

  const onSend = () => {
    console.log('aaa', user);

    if (!user) {
      router.push('/sign-in');
      return;
    }
    router.push('/');
    return;
  }
  return (
    <div className='mt-24 w-full flex justify-center'>
      <div className='max-w-3xl w-full text-center space-y-6'>
        <h2 className='text-xl md:text-5xl font-bold'>Hey , I'm your personal <span className='text-primary'>Trip Planner</span></h2>
        <p className='text-lg'>Tell me what you want , and I'll handle flight, hotels , trip planning </p>
        <div>
          <div className='border rounded-2xl p-4 relative'>
            <Textarea placeholder='create a trip for paris' className='w-full h-28 bg-transparent border-none focus-visible:ring-0 shadow-none resize-none' />
            <Button size={'icon'} className='absolute bottom-6 right-6' onClick={onSend}>
              <Send className='h-4 w-4' />
            </Button>
          </div>
        </div>
        <div className='flex  gap-5'>
          {suggestions.map(suggestion => (
            <div className='flex items-center gap-2 border rounded-full p-2 cursor-pointer hover:bg-primary hover:text-white' key={suggestion.title}>
              {suggestion.icon}
              <h2 className='text-sm'>{suggestion.title}</h2>
            </div>
          ))}
        </div>
        <div className='flex justify-center mt-20 gap-2'>
          <h2>Not Sure where to start? <strong> See How its works</strong></h2><ArrowDown />
        </div>
        <HeroVideoDialog
          className="block dark:hidden"
          animationStyle="from-center"
          videoSrc="https://www.example.com/dummy-video"
          thumbnailSrc="https://mma.prnewswire.com/media/2401528/1_MindtriProduct.jpg?p=facebook"
          thumbnailAlt="Dummy Video Thumbnail"
        />
      </div>
    </div>
  )
}

export default Hero