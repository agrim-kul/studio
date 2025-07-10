import { AppShell } from "@/components/app-shell";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Image from "next/image";

const teamMembers = [
  { name: "Suresh Kumar Jain", role: "Founder & CEO", avatar: "SJ", image: "https://i.ibb.co/NddQq0sv/file-000000004f9061f5b7ecd6e4f76cbdc8-1.png", hint: "male portrait" },
  { name: "Priya Jain", role: "Head of Design", avatar: "PJ", image: "https://placehold.co/100x100.png", hint: "female portrait" },
  { name: "Amit Singh", role: "Chief Financial Officer", avatar: "AS", image: "https://placehold.co/100x100.png", hint: "male portrait" },
];

export default function AboutPage() {
  return (
    <AppShell>
      <div className="w-full space-y-12">
        <header className="text-center">
          <h1 className="text-4xl font-bold font-headline text-primary">About SKJ Jwellers</h1>
          <p className="mt-2 text-lg text-muted-foreground">Crafting trust, one gram at a time.</p>
        </header>

        <section>
          <Card className="overflow-hidden">
            <div className="grid md:grid-cols-2">
              <div className="relative h-64 md:h-auto">
                <Image 
                  src="https://placehold.co/800x600.png"
                  alt="SKJ Jwellers Storefront"
                  data-ai-hint="jewelry store"
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <div className="p-8">
                <h2 className="text-2xl font-bold font-headline mb-4">Our Story</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Founded in 1995, SKJ Jwellers started as a small family-owned business with a passion for pure, timeless gold. Our mission has always been to make gold investment accessible, secure, and transparent for everyone. Over the decades, we have grown into a trusted name, known for our commitment to quality and customer satisfaction. We blend traditional values with modern technology to offer you a seamless and secure platform to buy and sell digital gold.
                </p>
              </div>
            </div>
          </Card>
        </section>

        <section className="text-center">
          <h2 className="text-3xl font-bold font-headline mb-8">Meet Our Team</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member) => (
              <Card key={member.name} className="pt-6">
                <CardContent className="flex flex-col items-center">
                  <Avatar className="w-24 h-24 mb-4">
                    <AvatarImage src={member.image} alt={member.name} data-ai-hint={member.hint} />
                    <AvatarFallback>{member.avatar}</AvatarFallback>
                  </Avatar>
                  <h3 className="text-xl font-semibold font-headline">{member.name}</h3>
                  <p className="text-primary">{member.role}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </AppShell>
  );
}
