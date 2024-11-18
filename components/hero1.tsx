import { MoveRight, PhoneCall, Github } from "lucide-react";
import { Button } from "./ui/button";
import Link from "next/link";

export const Hero1 = () => (
  <div className="w-full px-4 min-h-screen flex items-center">
    <div className="container mx-auto px-4">
      <div className="flex gap-6 md:gap-8 py-16 md:py-20 lg:py-32 items-center justify-center flex-col">
        {/* Development Notice */}
        <div className="w-full max-w-xl">
          <Link 
            href="https://github.com/januaryramadhan/ukmpenristekut" 
            target="_blank"
            className="w-full block"
          >
            <Button 
              variant="secondary" 
              size="sm" 
              className="gap-2 w-full text-xs sm:text-sm hover:scale-[1.02] transition-transform"
            >
              <Github className="w-3 h-3 sm:w-4 sm:h-4" />
              <span className="line-clamp-1">
                Website ini masih dalam pengembangan, kunjungi GitHub untuk kontribusi
              </span>
              <MoveRight className="w-3 h-3 sm:w-4 sm:h-4 shrink-0" />
            </Button>
          </Link>
        </div>

        {/* Main Content */}
        <div className="flex gap-4 md:gap-6 flex-col">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl max-w-2xl tracking-tighter text-center font-semibold">
            UKM PENRISTEK
          </h1>
          <p className="text-base sm:text-lg md:text-xl leading-relaxed tracking-tight text-muted-foreground max-w-2xl text-center px-2">
            Unit Kegiatan Mahasiswa Pendidikan, Riset, dan Teknologi Universitas Terbuka. 
            Wadah kreativitas dan inovasi mahasiswa dalam mengembangkan potensi di bidang 
            Pendidikan, Penelitian dan Teknologi
          </p>
        </div>

        {/* Call to Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
          <Link 
            href="https://wa.me/6281380608656" 
            target="_blank"
          >
            <Button 
              size="lg" 
              className="gap-2 w-full sm:w-auto hover:scale-[1.02] transition-transform" 
              variant="outline"
            >
              <PhoneCall className="w-4 h-4" /> 
              WhatsApp
            </Button>
          </Link>
          <Link 
            href="https://sl.ut.ac.id/penristekregist" 
            target="_blank"
          >
            <Button 
              size="lg" 
              className="gap-2 w-full sm:w-auto hover:scale-[1.02] transition-transform"
            >
              Daftar <MoveRight className="w-4 h-4" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  </div>
);