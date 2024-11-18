import { Blog1 } from "@/components/blog";
import { Footer1 } from "@/components/footer1";
import { Header1 } from "@/components/header";
import { Hero1 } from "@/components/hero1";
import { ProgramKerja } from "@/components/programKerja";
import { Stats2 } from "@/components/Stats2";
import { StrukturOrganisasi } from "@/components/strukturOrganisasi";

export default function Home() {
  return (
    <div className="w-full">
      <Header1 />
      <Hero1  />
      <Stats2 />
      <StrukturOrganisasi />
      <ProgramKerja />
      <Blog1 />
      <Footer1  />
    </div>
  );
}
