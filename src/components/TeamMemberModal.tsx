import { TeamMember, getInitials } from '@/data/teamMembers';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';
import { Calendar, Linkedin } from 'lucide-react';
import { cn } from '@/lib/utils';

interface TeamMemberModalProps {
  member: TeamMember | null;
  isOpen: boolean;
  onClose: () => void;
}

export const TeamMemberModal = ({ member, isOpen, onClose }: TeamMemberModalProps) => {
  if (!member) return null;

  const initials = getInitials(member.name);

  const departmentColors = {
    Leadership: 'from-purple-500/20 to-accent/20 border-accent/30',
    Engineering: 'from-blue-500/20 to-blue-600/20 border-blue-500/30',
    QA: 'from-green-500/20 to-green-600/20 border-green-500/30',
    Operations: 'from-orange-500/20 to-orange-600/20 border-orange-500/30',
    Open: 'from-muted/20 to-muted/30 border-muted/30'
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <div className="flex flex-col md:flex-row gap-6 items-start">
            {/* Avatar Section */}
            <div className="flex flex-col items-center space-y-3">
              <div
                className={cn(
                  'w-32 h-32 rounded-full flex items-center justify-center font-bold text-3xl',
                  'border-2 bg-gradient-to-br',
                  departmentColors[member.department]
                )}
              >
                {initials}
              </div>
              
              <Badge variant="secondary">{member.department}</Badge>
              
              {member.linkedInUrl && (
                <a
                  href={member.linkedInUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-muted-foreground hover:text-accent transition-colors"
                >
                  <Linkedin className="w-4 h-4" />
                  View LinkedIn
                </a>
              )}
            </div>

            {/* Header Info */}
            <div className="flex-1 space-y-2">
              <DialogTitle className="text-3xl">{member.name}</DialogTitle>
              <DialogDescription className="text-lg text-foreground/80">
                {member.title}
              </DialogDescription>
              
              {member.startDate && (
                <Badge variant="outline" className="flex items-center gap-1 w-fit">
                  <Calendar className="w-3 h-3" />
                  Starts {member.startDate}
                </Badge>
              )}
            </div>
          </div>
        </DialogHeader>

        {/* Bio Section */}
        <div className="space-y-6 mt-6">
          <div>
            <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-3">
              About
            </h4>
            <p className="text-foreground/90 leading-relaxed">
              {member.bio}
            </p>
          </div>

          {/* Specialties */}
          <div>
            <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-3">
              Specialties
            </h4>
            <div className="flex flex-wrap gap-2">
              {member.specialties.map((specialty, index) => (
                <Badge
                  key={index}
                  variant="outline"
                  className="bg-background/50"
                >
                  {specialty}
                </Badge>
              ))}
            </div>
          </div>

          {/* Additional Info for Leadership */}
          {member.isLeadership && (
            <div className="pt-4 border-t border-border/50">
              <p className="text-sm text-muted-foreground italic">
                Member of the Leadership Team
              </p>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};
