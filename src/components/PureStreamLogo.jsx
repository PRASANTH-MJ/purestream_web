import { Waves } from 'lucide-react';

export default function PureStreamLogo({ className = '', iconClassName = '', textClassName = '' }) {
  return (
    <span className={`flex items-center gap-2 ${className}`}>
      <span
        className={`flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-brand-500 to-brand-700 text-white shadow-md shadow-brand-500/30 ${iconClassName}`}
      >
        <Waves className="h-5 w-5" strokeWidth={2.5} />
      </span>
      <span className={`font-display text-xl font-extrabold tracking-tight ${textClassName}`}>
        Pure<span className="text-brand-500">Stream</span>
      </span>
    </span>
  );
}
