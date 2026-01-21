import { useState, useRef, useCallback, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';

interface NavItem {
  label: string;
  href?: string;
  children?: {
    label: string;
    href: string;
    description?: string;
  }[];
  viewAllLink?: {
    label: string;
    href: string;
  };
}

const navItems: NavItem[] = [
  {
    label: 'Services',
    children: [
      {
        label: 'Concept Framing',
        href: '/services/concept-framing',
        description: 'Turn ideas into actionable plans',
      },
      {
        label: 'Product Strategy',
        href: '/services/product-strategy',
        description: 'Roadmap & technology planning',
      },
      {
        label: 'Product Validation',
        href: '/services/product-validation',
        description: 'Prototype & user testing',
      },
      {
        label: 'Analysis & User Stories',
        href: '/services/analysis-user-stories',
        description: 'Requirements engineering',
      },
      {
        label: 'Build',
        href: '/services/build',
        description: 'Agile software engineering',
      },
      {
        label: 'QA',
        href: '/services/qa',
        description: 'Comprehensive software testing',
      },
    ],
    viewAllLink: {
      label: 'View All Services',
      href: '/services',
    },
  },
  {
    label: 'Work',
    children: [
      {
        label: 'FinTech Lending Platform',
        href: '/work/fintech-lending-platform',
        description: '10x applications in 30 days',
      },
      {
        label: 'Pharmacy Workflow',
        href: '/work/pharmacy-workflow',
        description: 'Intelligent workflow automation',
      },
    ],
    viewAllLink: {
      label: 'All Case Studies',
      href: '/work',
    },
  },
  {
    label: 'About',
    children: [
      {
        label: 'Our Process',
        href: '/about/process',
        description: 'Proven 6-phase methodology',
      },
      {
        label: 'Team',
        href: '/about/team',
        description: 'Meet the FullStack experts',
      },
    ],
    viewAllLink: {
      label: 'About Us',
      href: '/about',
    },
  },
  {
    label: 'Contact',
    href: '/contact',
  },
];

export const DesktopNav = () => {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [focusedIndex, setFocusedIndex] = useState<number>(-1);
  const navRef = useRef<HTMLElement>(null);
  const triggerRefs = useRef<(HTMLButtonElement | HTMLAnchorElement | null)[]>([]);
  const menuItemRefs = useRef<Map<string, (HTMLAnchorElement | null)[]>>(new Map());
  const navigate = useNavigate();

  // Get all focusable items in the current dropdown
  const getMenuItems = useCallback((label: string): (HTMLAnchorElement | null)[] => {
    return menuItemRefs.current.get(label) || [];
  }, []);

  // Close menu and return focus to trigger
  const closeMenu = useCallback((returnFocus = true) => {
    const currentMenuIndex = navItems.findIndex(item => item.label === activeMenu);
    setActiveMenu(null);
    setFocusedIndex(-1);
    if (returnFocus && currentMenuIndex >= 0) {
      triggerRefs.current[currentMenuIndex]?.focus();
    }
  }, [activeMenu]);

  // Open menu and optionally focus first item
  const openMenu = useCallback((label: string, focusFirst = false) => {
    setActiveMenu(label);
    if (focusFirst) {
      // Delay to allow menu to render
      setTimeout(() => {
        const items = getMenuItems(label);
        if (items[0]) {
          items[0].focus();
          setFocusedIndex(0);
        }
      }, 10);
    }
  }, [getMenuItems]);

  // Handle keyboard navigation on trigger buttons
  const handleTriggerKeyDown = useCallback((e: React.KeyboardEvent, item: NavItem, index: number) => {
    switch (e.key) {
      case 'Enter':
      case ' ':
        if (item.children) {
          e.preventDefault();
          if (activeMenu === item.label) {
            closeMenu();
          } else {
            openMenu(item.label, true);
          }
        }
        break;
      case 'ArrowDown':
        if (item.children) {
          e.preventDefault();
          openMenu(item.label, true);
        }
        break;
      case 'ArrowUp':
        if (item.children && activeMenu === item.label) {
          e.preventDefault();
          const items = getMenuItems(item.label);
          const lastIndex = items.length - 1;
          if (items[lastIndex]) {
            items[lastIndex].focus();
            setFocusedIndex(lastIndex);
          }
        }
        break;
      case 'ArrowLeft':
        e.preventDefault();
        if (index > 0) {
          triggerRefs.current[index - 1]?.focus();
          if (activeMenu) {
            const prevItem = navItems[index - 1];
            if (prevItem.children) {
              openMenu(prevItem.label);
            } else {
              setActiveMenu(null);
            }
          }
        }
        break;
      case 'ArrowRight':
        e.preventDefault();
        if (index < navItems.length - 1) {
          triggerRefs.current[index + 1]?.focus();
          if (activeMenu) {
            const nextItem = navItems[index + 1];
            if (nextItem.children) {
              openMenu(nextItem.label);
            } else {
              setActiveMenu(null);
            }
          }
        }
        break;
      case 'Escape':
        if (activeMenu) {
          e.preventDefault();
          closeMenu();
        }
        break;
    }
  }, [activeMenu, closeMenu, openMenu, getMenuItems]);

  // Handle keyboard navigation within dropdown menu
  const handleMenuKeyDown = useCallback((e: React.KeyboardEvent, itemLabel: string, menuIndex: number, totalItems: number) => {
    const items = getMenuItems(itemLabel);
    
    switch (e.key) {
      case 'ArrowDown':
        e.preventDefault();
        const nextIndex = menuIndex < totalItems - 1 ? menuIndex + 1 : 0;
        items[nextIndex]?.focus();
        setFocusedIndex(nextIndex);
        break;
      case 'ArrowUp':
        e.preventDefault();
        const prevIndex = menuIndex > 0 ? menuIndex - 1 : totalItems - 1;
        items[prevIndex]?.focus();
        setFocusedIndex(prevIndex);
        break;
      case 'ArrowLeft':
      case 'ArrowRight': {
        e.preventDefault();
        const currentNavIndex = navItems.findIndex(nav => nav.label === itemLabel);
        const direction = e.key === 'ArrowLeft' ? -1 : 1;
        const newNavIndex = currentNavIndex + direction;
        
        if (newNavIndex >= 0 && newNavIndex < navItems.length) {
          const newItem = navItems[newNavIndex];
          triggerRefs.current[newNavIndex]?.focus();
          if (newItem.children) {
            openMenu(newItem.label);
          } else {
            setActiveMenu(null);
          }
        }
        break;
      }
      case 'Escape':
        e.preventDefault();
        closeMenu();
        break;
      case 'Tab':
        // Allow natural tab behavior but close menu
        closeMenu(false);
        break;
    }
  }, [getMenuItems, closeMenu, openMenu]);

  // Handle click on menu item (for navigation)
  const handleMenuItemClick = useCallback((href: string) => {
    navigate(href);
    setActiveMenu(null);
  }, [navigate]);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setActiveMenu(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Register menu item refs
  const setMenuItemRef = useCallback((label: string, index: number, el: HTMLAnchorElement | null) => {
    if (!menuItemRefs.current.has(label)) {
      menuItemRefs.current.set(label, []);
    }
    const items = menuItemRefs.current.get(label)!;
    items[index] = el;
  }, []);

  return (
    <nav ref={navRef} className="hidden lg:flex items-center gap-1" role="menubar">
      {navItems.map((item, index) => {
        const isOpen = activeMenu === item.label;
        const allChildren = item.children 
          ? [...item.children, ...(item.viewAllLink ? [item.viewAllLink] : [])]
          : [];

        return (
          <div
            key={item.label}
            className="relative"
            onMouseEnter={() => item.children && setActiveMenu(item.label)}
            onMouseLeave={() => setActiveMenu(null)}
            role="none"
          >
            {/* Main nav item */}
            {item.href ? (
              <Link
                ref={(el) => { triggerRefs.current[index] = el; }}
                to={item.href}
                className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-foreground/90 hover:text-accent focus:text-accent transition-colors rounded-lg hover:bg-white/5 focus:bg-white/5 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                role="menuitem"
                onKeyDown={(e) => handleTriggerKeyDown(e, item, index)}
              >
                {item.label}
              </Link>
            ) : (
              <button
                ref={(el) => { triggerRefs.current[index] = el; }}
                className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-foreground/90 hover:text-accent focus:text-accent transition-colors rounded-lg hover:bg-white/5 focus:bg-white/5 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                aria-expanded={isOpen}
                aria-haspopup="menu"
                role="menuitem"
                onKeyDown={(e) => handleTriggerKeyDown(e, item, index)}
                onClick={() => isOpen ? closeMenu() : openMenu(item.label)}
              >
                {item.label}
                {item.children && (
                  <ChevronDown
                    className={`h-4 w-4 transition-transform duration-200 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                    aria-hidden="true"
                  />
                )}
              </button>
            )}

            {/* Mega menu panel */}
            {item.children && (
              <div
                className={`absolute top-full left-1/2 -translate-x-1/2 pt-2 transition-all duration-200 ${
                  isOpen
                    ? 'opacity-100 visible translate-y-0'
                    : 'opacity-0 invisible -translate-y-2 pointer-events-none'
                }`}
                role="menu"
                aria-label={`${item.label} submenu`}
              >
                <div className="bg-card/95 backdrop-blur-xl border border-border/50 rounded-xl shadow-2xl p-6 min-w-[320px]">
                  <div
                    className={`grid gap-2 ${
                      item.children.length > 3 ? 'grid-cols-2' : 'grid-cols-1'
                    }`}
                  >
                    {item.children.map((child, childIndex) => (
                      <Link
                        key={child.href}
                        ref={(el) => setMenuItemRef(item.label, childIndex, el)}
                        to={child.href}
                        className="group flex flex-col gap-1 p-3 rounded-lg hover:bg-accent/10 focus:bg-accent/10 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-inset"
                        role="menuitem"
                        tabIndex={isOpen ? 0 : -1}
                        onClick={() => handleMenuItemClick(child.href)}
                        onKeyDown={(e) => handleMenuKeyDown(e, item.label, childIndex, allChildren.length)}
                      >
                        <span className="text-sm font-medium text-foreground group-hover:text-accent group-focus:text-accent transition-colors">
                          {child.label}
                        </span>
                        {child.description && (
                          <span className="text-xs text-muted-foreground">
                            {child.description}
                          </span>
                        )}
                      </Link>
                    ))}
                  </div>

                  {/* View all link */}
                  {item.viewAllLink && (
                    <div className="mt-4 pt-4 border-t border-border/50">
                      <Link
                        ref={(el) => setMenuItemRef(item.label, item.children.length, el)}
                        to={item.viewAllLink.href}
                        className="flex items-center gap-2 text-sm font-semibold text-accent hover:text-accent/80 focus:text-accent/80 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-card rounded"
                        role="menuitem"
                        tabIndex={isOpen ? 0 : -1}
                        onClick={() => handleMenuItemClick(item.viewAllLink!.href)}
                        onKeyDown={(e) => handleMenuKeyDown(e, item.label, item.children.length, allChildren.length)}
                      >
                        {item.viewAllLink.label}
                        <span aria-hidden="true">→</span>
                      </Link>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        );
      })}
    </nav>
  );
};
