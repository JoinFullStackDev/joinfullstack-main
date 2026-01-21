import { useState } from 'react';

// Dynamically import all images from client-logos folder
// This automatically picks up any new images added to the folder
const logoModules = import.meta.glob<{ default: string }>(
  '/src/assets/client-logos/*.{png,jpg,jpeg,svg,webp,avif}',
  { eager: true }
);

interface Client {
  name: string;
  logo: string;
  alt: string;
}

// Convert imported modules to array of logo objects
const clients: Client[] = Object.entries(logoModules).map(([path, module]) => {
  // Extract filename without extension for the name
  const filename = path.split('/').pop()?.replace(/\.[^.]+$/, '') || '';
  
  // Convert filename to display name
  // e.g., "BigOcean" -> "Big Ocean", "customfence_logo" -> "customfence logo"
  const displayName = filename
    .replace(/[-_]/g, ' ')                    // Replace dashes/underscores with spaces
    .replace(/([a-z])([A-Z])/g, '$1 $2')      // Add space before capitals (camelCase)
    .replace(/\s+logo$/i, '')                 // Remove trailing "logo" if present
    .trim();
  
  return {
    name: displayName,
    logo: module.default,
    alt: `${displayName} company logo`,
  };
});

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
