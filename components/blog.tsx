import { MoveRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Blog1 = () => (
  <div className="w-full py-20 lg:py-40 px-4">
    <div className="container mx-auto flex flex-col gap-14">
      <div className="flex w-full flex-col sm:flex-row sm:justify-between sm:items-center gap-8">
        <h4 className="text-3xl md:text-5xl tracking-tighter max-w-xl font-regular">
          Artikel Terbaru
        </h4>
        <Button className="gap-2">
          Lihat Semua Artikel <MoveRight className="w-4 h-4" />
        </Button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        <div className="flex flex-col gap-2 hover:opacity-90 cursor-pointer transition-all">
          <div className="bg-muted rounded-md aspect-video mb-4"></div>
          <h3 className="text-xl tracking-tight font-medium">
            Workshop Data Science 2024
          </h3>
          <p className="text-muted-foreground text-base">
            Pembelajaran intensif tentang pengolahan data dan machine learning 
            bersama praktisi Data Science.
          </p>
        </div>
        <div className="flex flex-col gap-2 hover:opacity-90 cursor-pointer transition-all">
          <div className="bg-muted rounded-md aspect-video mb-4"></div>
          <h3 className="text-xl tracking-tight font-medium">
            Webinar Artificial Intelligence
          </h3>
          <p className="text-muted-foreground text-base">
            Membahas perkembangan AI terkini dan implementasinya dalam 
            kehidupan sehari-hari.
          </p>
        </div>
        <div className="flex flex-col gap-2 hover:opacity-90 cursor-pointer transition-all">
          <div className="bg-muted rounded-md aspect-video mb-4"></div>
          <h3 className="text-xl tracking-tight font-medium">
            Kompetisi Web Development
          </h3>
          <p className="text-muted-foreground text-base">
            Ajang unjuk kreativitas mahasiswa dalam mengembangkan 
            website inovatif dan responsif.
          </p>
        </div>
        <div className="flex flex-col gap-2 hover:opacity-90 cursor-pointer transition-all">
          <div className="bg-muted rounded-md aspect-video mb-4"></div>
          <h3 className="text-xl tracking-tight font-medium">
            Pelatihan Mobile Apps
          </h3>
          <p className="text-muted-foreground text-base">
            Belajar mengembangkan aplikasi mobile dengan React Native 
            bersama developer berpengalaman.
          </p>
        </div>
      </div>
    </div>
  </div>
);