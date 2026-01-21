import { useState, useEffect } from 'react';
import { Palette, Check } from 'lucide-react';

// Preset colors with HSL values
const presets = [
  { name: 'Ruby', hsl: '351 58% 50%', hex: '#C9354A' },
  { name: 'Emerald', hsl: '160 60% 32%', hex: '#218358' },
  { name: 'Sapphire', hsl: '217 91% 60%', hex: '#3B82F6' },
  { name: 'Amber', hsl: '38 92% 50%', hex: '#F59E0B' },
  { name: 'Violet', hsl: '271 76% 53%', hex: '#8B5CF6' },
  { name: 'Rose', hsl: '330 81% 60%', hex: '#EC4899' },
];

const STORAGE_KEY = 'fullstack-accent-color';
const DEFAULT_HSL = '351 58% 50%';

// Convert hex to HSL
function hexToHsl(hex: string): string {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  if (!result) return DEFAULT_HSL;

  let r = parseInt(result[1], 16) / 255;
  let g = parseInt(result[2], 16) / 255;
  let b = parseInt(result[3], 16) / 255;

  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  let h = 0;
  let s = 0;
  const l = (max + min) / 2;

  if (max !== min) {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);

    switch (max) {
      case r:
        h = ((g - b) / d + (g < b ? 6 : 0)) / 6;
        break;
      case g:
        h = ((b - r) / d + 2) / 6;
        break;
      case b:
        h = ((r - g) / d + 4) / 6;
        break;
    }
  }

  return `${Math.round(h * 360)} ${Math.round(s * 100)}% ${Math.round(l * 100)}%`;
}

// Apply color to CSS variables
export function applyAccentColor(hsl: string) {
  const root = document.documentElement;
  root.style.setProperty('--accent', hsl);
  root.style.setProperty('--ring', hsl);
  root.style.setProperty('--glow-accent', hsl);
}

// Load saved color from localStorage
export function loadSavedColor(): string {
  if (typeof window === 'undefined') return DEFAULT_HSL;
  return localStorage.getItem(STORAGE_KEY) || DEFAULT_HSL;
}

// Save color to localStorage
function saveColor(hsl: string) {
  localStorage.setItem(STORAGE_KEY, hsl);
}

export const ColorPicker = () => {
  const [currentHsl, setCurrentHsl] = useState(DEFAULT_HSL);
  const [isExpanded, setIsExpanded] = useState(false);

  // Load saved color on mount
  useEffect(() => {
    const saved = loadSavedColor();
    setCurrentHsl(saved);
  }, []);

  const handlePresetClick = (hsl: string) => {
    setCurrentHsl(hsl);
    applyAccentColor(hsl);
    saveColor(hsl);
  };

  const handleCustomColorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const hex = e.target.value;
    const hsl = hexToHsl(hex);
    setCurrentHsl(hsl);
    applyAccentColor(hsl);
    saveColor(hsl);
  };

  return (
    <div className="mt-8 pt-8 border-t border-border/30">
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors"
      >
        <Palette className="w-5 h-5" />
        <span className="text-sm font-medium">Customize Theme</span>
        <div 
          className="w-4 h-4 rounded-full border border-border/50"
          style={{ backgroundColor: `hsl(${currentHsl})` }}
        />
      </button>

      {isExpanded && (
        <div className="mt-4 space-y-4 animate-fade-in-up">
          {/* Preset Colors */}
          <div className="flex flex-wrap gap-3">
            {presets.map((preset) => {
              const isSelected = currentHsl === preset.hsl;
              return (
                <button
                  key={preset.name}
                  onClick={() => handlePresetClick(preset.hsl)}
                  className={`group relative w-10 h-10 rounded-full transition-all duration-200 ${
                    isSelected 
                      ? 'ring-2 ring-foreground ring-offset-2 ring-offset-background scale-110' 
                      : 'hover:scale-110'
                  }`}
                  style={{ backgroundColor: preset.hex }}
                  title={preset.name}
                >
                  {isSelected && (
                    <Check className="absolute inset-0 m-auto w-5 h-5 text-white drop-shadow-md" />
                  )}
                </button>
              );
            })}

            {/* Custom Color Picker */}
            <label 
              className="relative w-10 h-10 rounded-full border-2 border-dashed border-border/50 hover:border-accent/50 cursor-pointer transition-colors overflow-hidden group"
              title="Custom color"
            >
              <input
                type="color"
                onChange={handleCustomColorChange}
                className="absolute inset-0 opacity-0 cursor-pointer"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-xs text-muted-foreground group-hover:text-foreground">+</span>
              </div>
            </label>
          </div>

          {/* Color Info */}
          <p className="text-xs text-muted-foreground">
            Your choice is saved automatically
          </p>
        </div>
      )}
    </div>
  );
};
