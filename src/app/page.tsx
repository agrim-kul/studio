
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
        <div className="container flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
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
        <section className="w-full py-12 md:py-20 lg:py-24">
          <div className="container px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
                <h1 className="text-3xl md:text-5xl font-bold font-headline text-primary">Invest in Gold, Simply & Securely</h1>
                <p className="mt-4 text-md md:text-lg text-muted-foreground">
                    Buy, sell, and manage 24K digital gold with SKJ Jwellers. Start your investment journey with as little as ₹1.
                </p>
                <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                    <Button size="lg" asChild>
                        <Link href="/auth?tab=signup">Get Started</Link>
                    </Button>
                    <Button size="lg" variant="outline" asChild>
                        <Link href="#learn-more">Learn More</Link>
                    </Button>
                </div>
            </div>
            <div className="relative h-64 sm:h-80 w-full">
                 <Image 
                    src="https://i.ibb.co/NddQq0sv/file-000000004f9061f5b7ecd6e4f76cbdc8-1.png" 
                    alt="Gold coins and jewelry"
                    fill
                    data-ai-hint="gold coins jewelry"
                    style={{ objectFit: 'contain' }}
                    className="rounded-xl shadow-lg"
                  />
            </div>
          </div>
        </section>

        {/* Price Card Section */}
        <section className="container px-4 sm:px-6 lg:px-8">
            <PriceCard />
        </section>

        {/* Features Section */}
        <section id="learn-more" className="container py-12 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
                <h2 className="text-2xl md:text-3xl font-bold font-headline">Why Choose SKJ Jwellers?</h2>
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
        <section className="bg-secondary/50 py-12 md:py-20 lg:py-24">
            <div className="container px-4 sm:px-6 lg:px-8">
                 <div className="text-center mb-12">
                    <h2 className="text-2xl md:text-3xl font-bold font-headline">Exclusive Offers</h2>
                    <p className="mt-2 text-muted-foreground">Take advantage of our special promotions.</p>
                </div>
                <div className="grid md:grid-cols-3 gap-8">
                     {offers.map((offer, index) => (
                        <Card key={index}>
                            <CardHeader>
                                <CardTitle className="font-headline text-lg">{offer.title}</CardTitle>
                            </CardHeader>
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
            <div className="container px-4 sm:px-6 lg:px-8 text-center text-muted-foreground text-sm">
                © {new Date().getFullYear()} SKJ Jwellers. All Rights Reserved.
            </div>
       </footer>
    </div>
  );
}
