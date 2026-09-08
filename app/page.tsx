import Hero from "@/components/sections/Hero";
import Manifesto from "@/components/sections/Manifesto";
import Signals from "@/components/sections/Signals";
import Pull from "@/components/sections/Pull";
import Approach from "@/components/sections/Approach";
import Services from "@/components/sections/Services";
import InMotion from "@/components/sections/InMotion";
import Team from "@/components/sections/Team";
import Space from "@/components/sections/Space";
import Voices from "@/components/sections/Voices";
import Visit from "@/components/sections/Visit";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Manifesto />
      <Signals />
      <Pull
        lines={["“Músculo é", "sinônimo de", "liberdade.”"]}
        attribution="— O jeito que a Conatus diz"
      />
      <Approach />
      <Services />
      <InMotion />
      <Team />
      <Space />
      <Voices />
      <Visit />
    </>
  );
}
