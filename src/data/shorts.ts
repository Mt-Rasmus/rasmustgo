import { type Video } from '../types/video';

// 🔁 Imports for English shorts
import cs1Thumb from '@/assets/thumbnails/shorts/CustomerSupport-thumbnail.png';
import cs1Gif from '@/assets/gifs/shorts/CustomerSupport1.gif';

import cs2Thumb from '@/assets/thumbnails/shorts/CustomerSupport2-thumbnail.png';
import cs2Gif from '@/assets/gifs/shorts/CustomerSupport2.gif';

// 🔁 Imports for Swedish shorts
import astroThumb from '@/assets/thumbnails/shorts/astronauterna.png';
import astroGif from '@/assets/gifs/shorts/swe/astronauterna.gif';

import boomerThumb from '@/assets/thumbnails/shorts/boomer.png';
import boomerGif from '@/assets/gifs/shorts/swe/boomer.gif';

import minerThumb from '@/assets/thumbnails/shorts/guldgravare.png';
import minerGif from '@/assets/gifs/shorts/swe/goldminer.gif';

import rapThumb from '@/assets/thumbnails/shorts/rapbattle.png';
import rapGif from '@/assets/gifs/shorts/swe/battle.gif';

import medThumb from '@/assets/thumbnails/shorts/meditation.png';
import medGif from '@/assets/gifs/shorts/swe/meditation.gif';

import friendlyThumb from '@/assets/thumbnails/shorts/penger.png';
import friendlyGif from '@/assets/gifs/shorts/swe/pengar.gif';

const shorts: Video[] = [
  {
    id: 'customer-support-1',
    title: 'Customer Support 1',
    url: 'https://www.youtube.com/shorts/2v2eQlT_SBA',
    embedUrl: 'https://www.youtube.com/embed/2v2eQlT_SBA',
    thumbnail: cs1Thumb,
    gifPreview: cs1Gif,
    description: `The first in a series of parodies of life as a Customer Support agent. \n
    Inspiration comes from working for a few years at a Telecom company.`,
    role: 'Everything, from script, voices, artwork, animation and sound editing.',
    year: 2025,
  },
  {
    id: 'customer-support-2',
    title: 'Customer Support 2',
    url: 'https://www.youtube.com/shorts/ECb9w2iBe-A',
    embedUrl: 'https://www.youtube.com/embed/ECb9w2iBe-A',
    thumbnail: cs2Thumb,
    gifPreview: cs2Gif,
    description: `Second entry in my small series of parodies of life as a Customer Support agent.`,
    role: 'Everything, from script, voices, artwork, animation and sound editing.',
    year: 2025,
  },
];

const sweShorts: Video[] = [
  {
    id: 'astronauterna',
    title: 'The Astronauts',
    url: 'https://youtube.com/shorts/xdckuYPH60M?feature=share',
    embedUrl: 'https://www.youtube.com/embed/xdckuYPH60M',
    thumbnail: astroThumb,
    gifPreview: astroGif,
    description: `Two austronauts investigate an unknown planet.`,
    role: 'Everything, from script, voices, artwork, animation and sound editing.',
    year: 2024,
  },
  {
    id: 'boomer',
    title: 'Boomer',
    url: 'https://youtube.com/shorts/fUIjuMCx1-c?feature=share',
    embedUrl: 'https://www.youtube.com/embed/fUIjuMCx1-c',
    thumbnail: boomerThumb,
    gifPreview: boomerGif,
    description: `A terrible thing has befallen a young girl. Luckliy, elderly wisdom can make us reevalute our perspective.`,
    role: 'Everything, from script, voices, artwork, animation and sound editing.',
    year: 2024,
  },
  {
    id: 'goldminer',
    title: 'Gold Miner',
    url: 'https://youtube.com/shorts/VrpX-5cov40?feature=share',
    embedUrl: 'https://www.youtube.com/embed/VrpX-5cov40',
    thumbnail: minerThumb,
    gifPreview: minerGif,
    description: `Gold mining can be a blessing and a curse.`,
    role: 'Everything, from script, voices, artwork, animation and sound editing.',
    year: 2024,
  },
  {
    id: 'rapbattle',
    title: 'Rap Battle',
    url: 'https://youtube.com/shorts/5QIc16tpI_s?feature=share',
    embedUrl: 'https://www.youtube.com/embed/5QIc16tpI_s',
    thumbnail: rapThumb,
    gifPreview: rapGif,
    description: `Don't judge a book by it's cover. Especially in rap.`,
    role: 'Everything, from script, voices, artwork, animation, sound editing and music.',
    year: 2024,
  },
  {
    id: 'meditation',
    title: 'Meditation',
    url: 'https://youtube.com/shorts/ZFtQ6BNjR4Y?feature=share',
    embedUrl: 'https://www.youtube.com/embed/ZFtQ6BNjR4Y',
    thumbnail: medThumb,
    gifPreview: medGif,
    description: `Guided meditation is so calming and soothing, isn't it?`,
    role: 'Everything, from script, voices, artwork, animation and sound editing.',
    year: 2024,
  },
  {
    id: 'friendlyRequest',
    title: 'Friendly Request',
    url: 'https://youtube.com/shorts/YyJnljDKZzA?feature=share',
    embedUrl: 'https://www.youtube.com/embed/YyJnljDKZzA',
    thumbnail: friendlyThumb,
    gifPreview: friendlyGif,
    description: `Gold mining can be a blessing and a curse.`,
    role: 'Everything, from script, voices, artwork, animation and sound editing.',
    year: 2024,
  },
];

export { shorts, sweShorts };
