import { TeamMember, getInitials } from '@/data/teamMembers';
import { cn } from '@/lib/utils';
import { Badge } from '@/components/ui/badge';
import { Calendar } from 'lucide-react';
interface TeamMemberCardProps {
  member: TeamMember;
  onClick: () => void;
  variant?: 'standard' | 'leadership';
}
export const TeamMemberCard = ({
  member,
  onClick,
  variant = 'standard'
}: TeamMemberCardProps) => {
  const isLeadership = variant === 'leadership';
  const initials = getInitials(member.name);

  // Department colors
  const departmentColors = {
    Leadership: 'from-purple-500/20 to-accent/20 border-accent/30',
    Engineering: 'from-blue-500/20 to-blue-600/20 border-blue-500/30',
    QA: 'from-green-500/20 to-green-600/20 border-green-500/30',
    Operations: 'from-orange-500/20 to-orange-600/20 border-orange-500/30',
    Open: 'from-muted/20 to-muted/30 border-muted/30'
  };
  const hoverColors = {
    Leadership: 'hover:border-accent/60 hover:shadow-accent/20',
    Engineering: 'hover:border-blue-500/60 hover:shadow-blue-500/20',
    QA: 'hover:border-green-500/60 hover:shadow-green-500/20',
    Operations: 'hover:border-orange-500/60 hover:shadow-orange-500/20',
    Open: 'hover:border-muted/60 hover:shadow-muted/20'
  };
  return <div onClick={onClick} className={cn('team-card group relative rounded-xl border backdrop-blur-sm cursor-pointer overflow-hidden', 'transition-all duration-300 ease-out', 'hover:-translate-y-2 hover:scale-[1.02]', departmentColors[member.department], hoverColors[member.department], 'hover:shadow-2xl', isLeadership ? 'p-8' : 'p-6')}>
      {/* Gradient overlay that appears on hover */}
      <div className={cn('absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300', `bg-gradient-to-br ${departmentColors[member.department]}`)} />

      <div className="relative z-10 flex flex-col items-center text-center space-y-4">
        {/* Avatar */}
        <div className="relative">
          <div className={cn('rounded-full flex items-center justify-center font-bold text-foreground border-2', 'transition-all duration-300 ease-out', 'group-hover:scale-110 group-hover:border-accent/60', isLeadership ? 'w-32 h-32 text-3xl' : 'w-24 h-24 text-2xl', departmentColors[member.department])}>
            {initials}
          </div>
          
          {/* Department badge on avatar */}
          <div className={cn('absolute -bottom-2 left-1/2 -translate-x-1/2', 'opacity-0 group-hover:opacity-100 transition-opacity duration-300')}>
            <Badge variant="secondary" className="text-xs whitespace-nowrap">
              {member.department}
            </Badge>
          </div>
        </div>

        {/* Name */}
        <div className="space-y-1">
          <h3 className={cn('font-semibold text-foreground', isLeadership ? 'text-2xl' : 'text-xl')}>
            {member.name}
          </h3>
          
          {/* Title */}
          <p className={cn('text-muted-foreground', isLeadership ? 'text-base' : 'text-sm')}>
            {member.title}
          </p>
        </div>



        {/* Click to view prompt */}
        <div className="pt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <p className="text-xs text-muted-foreground">Click to view full bio</p>
        </div>
      </div>
    </div>;
};