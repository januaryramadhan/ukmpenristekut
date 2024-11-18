import { MoveRight, PhoneCall } from "lucide-react";
import { Button } from "./ui/button";

export const Hero1 = () => (
  <div className="w-full px-4">
    <div className="container mx-auto">
      <div className="flex gap-8 py-20 lg:py-40 items-center justify-center flex-col">
        <div>
          <Button variant="secondary" size="sm" className="gap-4">
            Lihat pengumuman terbaru
            <MoveRight className="w-4 h-4" />
          </Button>
        </div>
        <div className="flex gap-4 flex-col">
          <h1 className="text-5xl md:text-7xl max-w-2xl tracking-tighter text-center font-semibold">
            UKM PENRISTEK
          </h1>
          <p className="text-lg md:text-xl leading-relaxed tracking-tight text-muted-foreground max-w-2xl text-center">
          Unit Kegiatan Mahasiswa Pendidikan, Riset, dan Teknologi Universitas Terbuka. 
            Wadah kreativitas dan inovasi mahasiswa dalam mengembangkan potensi di bidang Pendidikan, Penelitian dan Teknologi
          </p>
        </div>
        <div className="flex flex-row gap-2">
          <Button size="lg" className="gap-2" variant="outline">
            Whatsapp <PhoneCall className="w-1 h-4" />
          </Button>
          <Button size="lg" className="gap-2">
            Daftar<MoveRight className="w-3 h-4" />
          </Button>
        </div>
      </div>
    </div>
  </div>
);
