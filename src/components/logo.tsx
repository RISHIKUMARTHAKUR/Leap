import { Rocket } from 'lucide-react';

export default function Logo() {
  return (
    <>
      <Rocket className="h-6 w-6 text-primary" />
      <span className="text-xl font-bold tracking-tight text-foreground font-headline">
        Leap
      </span>
    </>
  );
}
