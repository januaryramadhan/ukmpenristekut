import { Users, Award, BookOpen, Target } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export const Stats2 = () => (
  <div className="w-full py-20 px-4 lg:py-40">
    <div className="container mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        <div className="flex gap-4 flex-col items-start">
          <div>
            <Badge>Statistik UKM</Badge>
          </div>
          <div className="flex gap-2 flex-col">
            <h2 className="text-xl md:text-3xl md:text-5xl tracking-tighter lg:max-w-xl font-regular text-left">
              Pencapaian dan Pertumbuhan UKM PENRISTEK
            </h2>
            <p className="text-lg lg:max-w-sm leading-relaxed tracking-tight text-muted-foreground text-left">
              Sejak didirikan, UKM PENRISTEK telah berkembang menjadi wadah yang aktif 
              dalam mengembangkan potensi mahasiswa di bidang teknologi, penelitian, 
              dan pengembangan inovasi digital.
            </p>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <div className="grid text-left grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 w-full gap-2">
            <div className="flex gap-0 flex-col justify-between p-6 border rounded-md">
              <Users className="w-4 h-4 mb-10 text-primary" />
              <h2 className="text-4xl tracking-tighter max-w-xl text-left font-regular flex flex-row gap-4 items-end">
                250
                <span className="text-muted-foreground text-sm tracking-normal">
                  +25%
                </span>
              </h2>
              <p className="text-base leading-relaxed tracking-tight text-muted-foreground max-w-xl text-left">
                Anggota Aktif
              </p>
            </div>
            <div className="flex gap-0 flex-col justify-between p-6 border rounded-md">
              <Award className="w-4 h-4 mb-10 text-primary" />
              <h2 className="text-4xl tracking-tighter max-w-xl text-left font-regular flex flex-row gap-4 items-end">
                15
                <span className="text-muted-foreground text-sm tracking-normal">
                  +40%
                </span>
              </h2>
              <p className="text-base leading-relaxed tracking-tight text-muted-foreground max-w-xl text-left">
                Prestasi Nasional
              </p>
            </div>
            <div className="flex gap-0 flex-col justify-between p-6 border rounded-md">
              <BookOpen className="w-4 h-4 mb-10 text-primary" />
              <h2 className="text-4xl tracking-tighter max-w-xl text-left font-regular flex flex-row gap-4 items-end">
                24
                <span className="text-muted-foreground text-sm tracking-normal">
                  +50%
                </span>
              </h2>
              <p className="text-base leading-relaxed tracking-tight text-muted-foreground max-w-xl text-left">
                Program Pelatihan
              </p>
            </div>
            <div className="flex gap-0 flex-col justify-between p-6 border rounded-md">
              <Target className="w-4 h-4 mb-10 text-primary" />
              <h2 className="text-4xl tracking-tighter max-w-xl text-left font-regular flex flex-row gap-4 items-end">
                12
                <span className="text-muted-foreground text-sm tracking-normal">
                  +33%
                </span>
              </h2>
              <p className="text-base leading-relaxed tracking-tight text-muted-foreground max-w-xl text-left">
                Proyek Penelitian
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);