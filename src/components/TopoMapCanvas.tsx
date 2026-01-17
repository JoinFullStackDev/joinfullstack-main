import topoMap from '@/assets/topo_bg.png';

interface TopoMapCanvasProps {
  showAnimation?: boolean;
}

export const TopoMapCanvas = ({ showAnimation = false }: TopoMapCanvasProps) => {
  return (
    <div className="fixed inset-0 w-screen h-screen overflow-hidden pointer-events-none" id="mapContainer">
      <div id="mapTrack" className="w-[130vw] h-[140vh] -translate-x-[15vw]">
        {/* Background: Topographic map image */}
        <img 
          src={topoMap} 
          alt="" 
          className="w-full h-full object-cover opacity-40"
        />
        
        {/* SVG Overlay with zig-zag route */}
        {showAnimation && (
          <svg
            className="absolute inset-0 w-full h-full"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Zig-zag path */}
            <path
              id="route"
              d="M 10 5 L 30 15 L 25 30 L 45 40 L 50 55 L 70 65 L 75 85 L 80 92"
              fill="none"
              stroke="hsl(220, 9%, 82%)"
              strokeWidth="0.3"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="drop-shadow-[0_0_8px_hsla(220,9%,82%,0.6)]"
              style={{ opacity: 0 }}
            />
            
            {/* Waypoints */}
            <circle id="wp-idea" cx="30" cy="15" r="1" fill="hsl(220, 9%, 82%)" opacity="0" className="drop-shadow-[0_0_6px_hsla(220,9%,82%,0.8)]" />
            <circle id="wp-strategy" cx="25" cy="30" r="1" fill="hsl(220, 9%, 82%)" opacity="0" className="drop-shadow-[0_0_6px_hsla(220,9%,82%,0.8)]" />
            <circle id="wp-prototype" cx="45" cy="40" r="1" fill="hsl(220, 9%, 82%)" opacity="0" className="drop-shadow-[0_0_6px_hsla(220,9%,82%,0.8)]" />
            <circle id="wp-analysis" cx="50" cy="55" r="1" fill="hsl(220, 9%, 82%)" opacity="0" className="drop-shadow-[0_0_6px_hsla(220,9%,82%,0.8)]" />
            <circle id="wp-build" cx="70" cy="65" r="1" fill="hsl(220, 9%, 82%)" opacity="0" className="drop-shadow-[0_0_6px_hsla(220,9%,82%,0.8)]" />
            <circle id="wp-contact" cx="80" cy="92" r="1" fill="hsl(220, 9%, 82%)" opacity="0" className="drop-shadow-[0_0_6px_hsla(220,9%,82%,0.8)]" />
          </svg>
        )}
      </div>
    </div>
  );
};
