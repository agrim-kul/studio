import Link from 'next/link';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { PriceCard } from '@/components/dashboard/price-card';
import { Logo } from '@/components/logo';
import { Medal, ShieldCheck, Zap } from 'lucide-react';
import Image from 'next/image';

const features = [
  {
    icon: <Medal className="h-10 w-10 text-primary" />,
    title: "99.99% Pure Gold",
    description: "Invest in 24K gold, certified for its purity and quality, ensuring the best value for your investment."
  },
  {
    icon: <ShieldCheck className="h-10 w-10 text-primary" />,
    title: "Fully Secure",
    description: "Your digital gold is stored in insured, world-class vaults. Your security is our top priority."
  },
  {
    icon: <Zap className="h-10 w-10 text-primary" />,
    title: "Instant Transactions",
    description: "Buy and sell gold anytime, anywhere, with just a few clicks. Your transactions are processed instantly."
  }
];

const offers = [
    {
        title: "5% Extra Gold on First Purchase",
        description: "Get 5% additional gold on your first purchase above ₹10,000. Use code: GOLDENSTART.",
        cta: "Buy Now"
    },
    {
        title: "Zero Making Charges",
        description: "For a limited time, enjoy zero making charges when you convert your digital gold to physical jewelry.",
        cta: "Explore Designs"
    },
    {
        title: "Refer & Earn 1g Gold",
        description: "Invite your friends to SKJ Jwellers and earn 1 gram of gold for every successful referral.",
        cta: "Refer Now"
    }
];

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <Logo />
          <div className="flex items-center gap-2">
            <Button variant="ghost" asChild>
                <Link href="/auth">Login</Link>
            </Button>
            <Button asChild>
                <Link href="/auth?tab=signup">Sign Up</Link>
            </Button>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-20">
          <div className="container grid lg:grid-cols-2 gap-12 items-center text-center lg:text-left">
            <div>
                <h1 className="text-4xl md:text-5xl font-bold font-headline text-primary">Invest in Gold, Simply & Securely</h1>
                <p className="mt-4 text-lg text-muted-foreground">
                    Buy, sell, and manage 24K digital gold with SKJ Jwellers. Start your investment journey with as little as ₹1.
                </p>
                <div className="mt-8 flex gap-4 justify-center lg:justify-start">
                    <Button size="lg" asChild>
                        <Link href="/auth?tab=signup">Get Started</Link>
                    </Button>
                    <Button size="lg" variant="outline" asChild>
                        <Link href="#learn-more">Learn More</Link>
                    </Button>
                </div>
            </div>
            <div className="relative h-80 w-full">
                 <Image 
                    src="https://placehold.co/600x400.png" 
                    alt="Gold coins and bars"
                    fill
                    data-ai-hint="gold coins bars"
                    style={{ objectFit: 'cover' }}
                    className="rounded-xl shadow-lg"
                  />
            </div>
          </div>
        </section>

        {/* Price Card Section */}
        <section className="container">
            <PriceCard />
        </section>

        {/* Features Section */}
        <section id="learn-more" className="container py-20">
            <div className="text-center mb-12">
                <h2 className="text-3xl font-bold font-headline">Why Choose SKJ Jwellers?</h2>
                <p className="mt-2 text-muted-foreground">The most trusted platform for digital gold investment.</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
                {features.map((feature, index) => (
                    <Card key={index} className="text-center p-6">
                        <div className="flex justify-center mb-4">{feature.icon}</div>
                        <CardTitle className="text-xl font-headline mb-2">{feature.title}</CardTitle>
                        <CardDescription>{feature.description}</CardDescription>
                    </Card>
                ))}
            </div>
        </section>
        
        {/* Offers Section */}
        <section className="bg-secondary/50 py-20">
            <div className="container">
                 <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold font-headline">Exclusive Offers</h2>
                    <p className="mt-2 text-muted-foreground">Take advantage of our special promotions.</p>
                </div>
                <div className="grid md:grid-cols-3 gap-8">
                     {offers.map((offer, index) => (
                        <Card key={index}>
                            <CardHeader>
                                <CardTitle className="font-headline">{offer.title}</CardTitle>
                            </Header>
                            <CardContent>
                                <p className="text-muted-foreground">{offer.description}</p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
      </main>

       <footer className="border-t py-6">
            <div className="container text-center text-muted-foreground text-sm">
                © {new Date().getFullYear()} SKJ Jwellers. All Rights Reserved.
            </div>
       </footer>
    </div>
  );
}
