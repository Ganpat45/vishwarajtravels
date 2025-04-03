import Image from "next/image";
import HeroSection from "@/components/HeroSection";
import Helping from "@/components/Helping";
import BuseSection from "@/components/BusSection";
import TravelsSection from "@/components/TravelsSection";
import RideSection from "@/components/RideSection";
import RidesJourneysSection from "@/components/RidesJourneysSection";
import FAQ from "@/components/FAQ";

export default function Home() {
  return (
    <div>
      <HeroSection/>
      <Helping/>
      <BuseSection/>
      <TravelsSection/>
      <RideSection/>
      <RidesJourneysSection/>
      <FAQ/>
    </div>
  );
}
