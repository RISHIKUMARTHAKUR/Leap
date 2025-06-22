import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  Rocket,
  Briefcase,
  Users,
  Lightbulb,
  BadgeCheck,
  Star,
} from 'lucide-react';
import Logo from '@/components/logo';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <header className="container mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Logo />
        </Link>
        <nav className="flex items-center gap-4">
          <Button variant="ghost" asChild>
            <Link href="/dashboard">For Students</Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="/dashboard">For Companies</Link>
          </Button>
          <Button asChild>
            <Link href="/dashboard">Sign In</Link>
          </Button>
        </nav>
      </header>

      <main className="flex-grow">
        <section className="py-20 md:py-32">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tighter text-primary font-headline">
              Your Career Leap Starts Here.
            </h1>
            <p className="mt-4 max-w-2xl mx-auto text-lg md:text-xl text-muted-foreground">
              Leap Career Catalyst helps Indian students in the US land high-quality jobs and internships, removing the "fresher" tag for good.
            </p>
            <div className="mt-8 flex justify-center gap-4">
              <Button size="lg" asChild>
                <Link href="/dashboard">Get Started Today</Link>
              </Button>
              <Button size="lg" variant="secondary" asChild>
                <Link href="#">Learn More</Link>
              </Button>
            </div>
          </div>
        </section>

        <section id="features" className="py-20 bg-secondary/50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold font-headline">
                A Platform Built for Your Success
              </h2>
              <p className="mt-3 max-w-2xl mx-auto text-muted-foreground">
                Gain verified experience, connect with professionals, and secure your future.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <FeatureCard
                icon={<Briefcase className="w-8 h-8 text-primary" />}
                title="Real-World Experience"
                description="Gain hands-on experience through freelance projects and dual internships that make your resume stand out."
              />
              <FeatureCard
                icon={<Users className="w-8 h-8 text-primary" />}
                title="Global Referral Network"
                description="Connect with Indian professionals and startup founders in the US for mentorship, resume feedback, and referrals."
              />
              <FeatureCard
                icon={<Lightbulb className="w-8 h-8 text-primary" />}
                title="Targeted Career Learning"
                description="Join 6-8 week training programs on specific tech stacks demanded by our partner companies."
              />
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold font-headline">
                Trusted by Ambitious Students
              </h2>
              <p className="mt-3 max-w-2xl mx-auto text-muted-foreground">
                Hear from students who have transformed their careers with us.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <TestimonialCard
                name="Priya Sharma"
                role="Software Engineer Intern @ Meta"
                testimonial="Leap a game-changer. The dual internship program gave me experience at two startups, and my mentor referred me for my dream internship!"
                avatarUrl="https://placehold.co/100x100"
                data-ai-hint="woman portrait"
              />
              <TestimonialCard
                name="Rohan Mehta"
                role="Data Analyst @ a YC startup"
                testimonial="The freelance projects helped me build a portfolio from scratch. I went from zero interviews to multiple offers in three months."
                avatarUrl="https://placehold.co/100x100"
                data-ai-hint="man portrait"
              />
              <TestimonialCard
                name="Anjali Iyer"
                role="Product Management Intern"
                testimonial="The career stack learning was incredibly practical. I learned the exact tools my target company uses, which made me a top candidate."
                avatarUrl="https://placehold.co/100x100"
                data-ai-hint="woman smiling"
              />
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col sm:flex-row items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <Logo />
          </Link>
          <div className="flex gap-4 mt-4 sm:mt-0">
            <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
              Privacy
            </Link>
            <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
              Terms
            </Link>
            <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
              Contact
            </Link>
          </div>
          <p className="text-sm text-muted-foreground mt-4 sm:mt-0">&copy; 2024 Leap Career Catalyst. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <Card className="text-center shadow-lg hover:shadow-xl transition-shadow duration-300">
      <CardHeader className="items-center">
        <div className="p-4 bg-primary/10 rounded-full">{icon}</div>
        <CardTitle className="mt-4 font-headline">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  );
}

function TestimonialCard({ name, role, testimonial, avatarUrl }: { name: string; role: string; testimonial: string; avatarUrl: string; "data-ai-hint": string; }) {
  return (
    <Card className="flex flex-col">
      <CardContent className="pt-6 flex-grow">
        <div className="flex mb-4">
          {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 text-accent fill-current" />)}
        </div>
        <p className="text-muted-foreground italic">"{testimonial}"</p>
      </CardContent>
      <CardHeader className="flex flex-row items-center gap-4 pt-4">
        <Avatar>
          <AvatarImage src={avatarUrl} alt={name} data-ai-hint="woman portrait" />
          <AvatarFallback>{name.charAt(0)}</AvatarFallback>
        </Avatar>
        <div>
          <p className="font-semibold">{name}</p>
          <p className="text-sm text-muted-foreground">{role}</p>
        </div>
      </CardHeader>
    </Card>
  );
}
