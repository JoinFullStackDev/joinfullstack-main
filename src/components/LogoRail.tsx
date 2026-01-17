import { useState } from 'react';

// Import all client logos
import BigOceanLogo from '@/assets/client-logos/BigOcean.webp';
import CapfitLogo from '@/assets/client-logos/capfit.svg';
import HillcrestLogo from '@/assets/client-logos/Hillcrest.avif';
import IgnyteLogo from '@/assets/client-logos/ignyte.png';
import InspiredVibeLogo from '@/assets/client-logos/inspiredVibe.svg';
import InvessioLogo from '@/assets/client-logos/invessio.svg';
import KingbirdLogo from '@/assets/client-logos/kingbird.webp';
import MtvLogo from '@/assets/client-logos/mtv.svg';
import SpeedoProLogo from '@/assets/client-logos/SpeedoPro.png';
import YrefyLogo from '@/assets/client-logos/yrefy.png';

interface Client {
  name: string;
  logo: string;
  alt: string;
}

const clients: Client[] = [
  { name: 'Big Ocean', logo: BigOceanLogo, alt: 'Big Ocean company logo' },
  { name: 'Capfit', logo: CapfitLogo, alt: 'Capfit company logo' },
  { name: 'Hillcrest', logo: HillcrestLogo, alt: 'Hillcrest company logo' },
  { name: 'Ignyte', logo: IgnyteLogo, alt: 'Ignyte company logo' },
  { name: 'Inspired Vibe', logo: InspiredVibeLogo, alt: 'Inspired Vibe company logo' },
  { name: 'Invessio', logo: InvessioLogo, alt: 'Invessio company logo' },
  { name: 'Kingbird', logo: KingbirdLogo, alt: 'Kingbird company logo' },
  { name: 'MTV', logo: MtvLogo, alt: 'Mountain View Pharmacy company logo' },
  { name: 'Speedo Pro', logo: SpeedoProLogo, alt: 'Speedo Pro company logo' },
  { name: 'Yrefy', logo: YrefyLogo, alt: 'Yrefy company logo' },
];

export const LogoRail = () => {
  const [isPaused, setIsPaused] = useState(false);

  return (
    <section className="relative py-12 md:py-16 overflow-hidden">
      <p className="text-center text-sm text-muted-foreground mb-10">
        Trusted by innovative teams
      </p>
      
      <div 
        className="relative"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div 
          className={`flex items-center gap-12 md:gap-16 ${isPaused ? 'logo-rail-paused' : 'logo-rail-animate'}`}
          style={{ width: 'max-content' }}
        >
          {/* Duplicate the logos for seamless infinite scroll */}
          {[...clients, ...clients].map((client, index) => (
            <div
              key={`${client.name}-${index}`}
              className="flex-shrink-0 flex items-center justify-center h-10 md:h-12 
                         opacity-60 hover:opacity-100
                         transition-all duration-300 ease-out cursor-default"
              title={client.name}
            >
              <img
                src={client.logo}
                alt={client.alt}
                className="h-full w-auto max-w-[140px] md:max-w-[160px] object-contain brightness-0 invert"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
