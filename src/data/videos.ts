import { type Video } from '../types/video'

// 👇 Import thumbnails and gifs
import fancyThumb from '@/assets/thumbnails/Fancy.png'
import fancyGif from '@/assets/gifs/Fancy.gif'

import perennialThumb from '@/assets/thumbnails/Perennial.png'
import perennialGif from '@/assets/gifs/PerennialPatterns.gif'

import interviewThumb from '@/assets/thumbnails/TheInterview.png'
import interviewGif from '@/assets/gifs/TheInterview.gif'

import iboneThumb from '@/assets/thumbnails/SteveDogsThumbnail9.png'
import iboneGif from '@/assets/gifs/iBone.gif'

import gainsThumb from '@/assets/thumbnails/gains.png'
import gainsGif from '@/assets/gifs/ThemGains.gif'

import gollumThumb from '@/assets/thumbnails/Smeagol-Arnold.png'
import gollumGif from '@/assets/gifs/GollumArnold.gif'

import ghostThumb from '@/assets/thumbnails/TheGhost.png'
import ghostGif from '@/assets/gifs/TheGhost.gif'

import flatEarthThumb from '@/assets/thumbnails/FE1.png'
import flatEarthGif from '@/assets/gifs/FlatEarthWide.gif'

import interrogationThumb from '@/assets/thumbnails/Interrogation1.png'
import interrogationGif from '@/assets/gifs/Interrogation.gif'

const videos: Video[] = [
  {
    id: 'fancy',
    title: 'Fancy',
    url: 'https://www.youtube.com/watch?v=u4tqaNVPuSY',
    embedUrl: 'https://www.youtube.com/embed/u4tqaNVPuSY',
    thumbnail: fancyThumb,
    gifPreview: fancyGif,
    description: `A group of wealthy gentlemen are sitting down to discuss one of their greatest pet peeves. \n
    Music created with FL Studio + Mixcraft.`,
    role: 'Everything, from script, voices, artwork, animation, sound editing, and the music.',
    year: 2020,
  },
  {
    id: 'perennial-patterns',
    title: 'Perennial Patterns',
    url: 'https://www.youtube.com/watch?v=FxZQG52SuWo',
    embedUrl: 'https://www.youtube.com/embed/FxZQG52SuWo',
    thumbnail: perennialThumb,
    gifPreview: perennialGif,
    description: `An American TV presenter has a sudden change in demeanour...`,
    role: 'Everything, from script, voices, artwork, animation and sound editing.',
    year: 2025,
  },
  {
    id: 'the-job-interview',
    title: 'The Job Interview',
    url: 'https://www.youtube.com/watch?v=RSldWKGYfEs',
    embedUrl: 'https://www.youtube.com/embed/RSldWKGYfEs',
    thumbnail: interviewThumb,
    gifPreview: interviewGif,
    description: `Not your standard job interview. \n
    Added stock footage for emotional effect (from videvo.net).`,
    role: 'Everything, from script, voices, artwork, animation and sound editing.',
    year: 2024,
  },
  {
    id: 'ibone-keynote',
    title: 'The iBone Keynote',
    url: 'https://www.youtube.com/watch?v=xJMvZjDDcuo',
    embedUrl: 'https://www.youtube.com/embed/xJMvZjDDcuo',
    thumbnail: iboneThumb,
    gifPreview: iboneGif,
    description: `Parody of Steve Jobs's 2007 iPhone keynote with a canine twist. \n 
    Inspiration came from seeing my friends's dog with a little turtleneck sweater. \n
    I prompted the AI generated dogs from Kling AI.`,
    role: 'Everything, from script, voices, artwork, animation, and sound editing',
    year: 2025,
  },
  {
    id: 'flat-earth',
    title: 'Finding Flat Earth',
    url: 'https://www.youtube.com/watch?v=BmaKFlkFlnk',
    embedUrl: 'https://www.youtube.com/embed/BmaKFlkFlnk',
    thumbnail: flatEarthThumb,
    gifPreview: flatEarthGif,
    description: `A flat earth sceptic decides to take the journey of discovery. He might not find the results he is expecting though...`,
    role: 'Everything, from script, voices, artwork, animation',
    year: 2025,
  },
  {
    id: 'interrogation',
    title: 'Interrogation 101',
    url: 'https://www.youtube.com/watch?v=YEebLlUhjn0',
    embedUrl: 'https://www.youtube.com/embed/YEebLlUhjn0',
    thumbnail: interrogationThumb,
    gifPreview: interrogationGif,
    description: `A detective is interrogating a person, demonstrating his masterful technique.`,
    role: 'Everything, from script, voices, artwork, animation',
    year: 2025,
  },
  {
    id: 'get-them-gains',
    title: 'Get them Gains',
    url: 'https://www.youtube.com/watch?v=OnmXfh_fqkg',
    embedUrl: 'https://www.youtube.com/embed/OnmXfh_fqkg',
    thumbnail: gainsThumb,
    gifPreview: gainsGif,
    description: `A gripping tale of what can happen when you're feeling that pump really hard. \n
    Music created with FL Studio + Mixcraft.`,
    role: 'Everything, from script, voices, artwork, animation, sound editing, and the music.',
    year: 2024,
  },
  {
    id: 'gollum-vs-arnold',
    title: 'Gollum VS Arnold',
    url: 'https://www.youtube.com/watch?v=-WWquHtph5A',
    embedUrl: 'https://www.youtube.com/embed/-WWquHtph5A',
    thumbnail: gollumThumb,
    gifPreview: gollumGif,
    description: `Showcasing two of my best voice impressions, \n 
    and what happens when Smeagol and Arnold Schwarznegger's worlds clash.`,
    role: 'Everything, from script, voices, artwork, animation',
    year: 2025,
  },
  {
    id: 'the-ghost',
    title: 'The Ghost',
    url: 'https://www.youtube.com/watch?v=aRIY36bBk78',
    embedUrl: 'https://www.youtube.com/embed/aRIY36bBk78',
    thumbnail: ghostThumb,
    gifPreview: ghostGif,
    description: `One of my earlier animated short films, in my native tongue of Swedish (with English subtitles). \n 
    Written and voiced together with Erik Hallgren.`,
    role: 'Script, voices, artwork, animation and sound editing.',
    year: 2016,
  },
]

export default videos
