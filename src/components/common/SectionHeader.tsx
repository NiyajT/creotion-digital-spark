
import { cn } from '@/lib/utils';

interface SectionHeaderProps {
  title: string;
  subtitle: string;
  center?: boolean;
  className?: string;
}

const SectionHeader = ({
  title,
  subtitle,
  center = false,
  className,
}: SectionHeaderProps) => {
  return (
    <div className={cn(
      'mb-12',
      center && 'text-center',
      className
    )}>
      <h2 className="text-3xl md:text-4xl font-bold mb-4">
        {title}
      </h2>
      <p className="text-lg text-gray-600 max-w-3xl mx-auto">
        {subtitle}
      </p>
    </div>
  );
};

export default SectionHeader;
