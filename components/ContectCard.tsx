// components/HomeInteriorsBanner.tsx
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function HomeInteriorsBanner() {
  return (
    <section className="w-full rounded-xl bg-[#f4eef4] flex items-center justify-between p-8 md:p-16">
      {/* Left Illustration */}
      <div className="hidden md:block">
        <Image
          src="/illustrations/lamp.png"
          alt="Lamp Illustration"
          width={120}
          height={120}
        />
      </div>

      {/* Center Content */}
      <div className="flex-1 text-center">
        <h2 className="text-2xl md:text-3xl font-semibold text-black mb-6">
          Start Planning Your Home Interiors Now
        </h2>
        <Button className="bg-purple-700 hover:bg-purple-800 text-white px-6 py-2 rounded-md">
          Book a Consultation
        </Button>
      </div>

      {/* Right Illustration */}
      <div className="hidden md:block relative w-[250px] h-[200px]">
        <Image
          src="/illustrations/sofa.png"
          alt="Sofa Illustration"
          fill
          className="object-contain"
        />
      </div>
    </section>
  );
}
