import { Check, Book, Users, PenTool, Brain, Presentation, Code } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export const ProgramKerja = () => (
  <div className="w-full py-20 lg:py-40 px-4">
    <div className="container mx-auto">
      <div className="grid border rounded-lg container py-8 grid-cols-1 gap-8 items-center lg:grid-cols-2 px-4">
        <div className="flex gap-10 flex-col"> 
          <div className="flex gap-4 flex-col">
            <div>
              <Badge variant="outline">Program Kerja</Badge>
            </div>
            <div className="flex gap-2 flex-col">
              <h2 className="text-3xl lg:text-5xl tracking-tighter max-w-xl text-left font-semibold">
                Program Unggulan PENRISTEK
              </h2>
              <p className="text-lg leading-relaxed tracking-tight text-muted-foreground max-w-xl text-left">
                Mengembangkan potensi mahasiswa melalui berbagai kegiatan pembelajaran 
                dan pengembangan di bidang teknologi dan penelitian.
              </p>
            </div>
          </div>
          <div className="grid lg:pl-6 grid-cols-1 items-start gap-6">
            <div className="flex flex-row gap-6 items-start">
              <Book className="w-5 h-5 mt-1 text-primary" />
              <div className="flex flex-col gap-1">
                <p className="font-medium">Sharing Session</p>
                <p className="text-muted-foreground text-sm">
                  Forum diskusi dan berbagi pengalaman antar anggota dalam pengembangan teknologi dan penelitian.
                </p>
              </div>
            </div>
            <div className="flex flex-row gap-6 items-start">
              <Users className="w-5 h-5 mt-1 text-primary" />
              <div className="flex flex-col gap-1">
                <p className="font-medium">Mimbar Mahasiswa</p>
                <p className="text-muted-foreground text-sm">
                  Wadah aspirasi dan diskusi terbuka untuk pengembangan organisasi dan keilmuan.
                </p>
              </div>
            </div>
            <div className="flex flex-row gap-6 items-start">
              <PenTool className="w-5 h-5 mt-1 text-primary" />
              <div className="flex flex-col gap-1">
                <p className="font-medium">Rapat Umum</p>
                <p className="text-muted-foreground text-sm">
                  Koordinasi rutin untuk evaluasi dan perencanaan program kerja organisasi.
                </p>
              </div>
            </div>
            <div className="flex flex-row gap-6 items-start">
              <Brain className="w-5 h-5 mt-1 text-primary" />
              <div className="flex flex-col gap-1">
                <p className="font-medium">Workshop/Diklat</p>
                <p className="text-muted-foreground text-sm">
                  Pelatihan intensif pengembangan skill teknis dan soft skill mahasiswa.
                </p>
              </div>
            </div>
            <div className="flex flex-row gap-6 items-start">
              <Presentation className="w-5 h-5 mt-1 text-primary" />
              <div className="flex flex-col gap-1">
                <p className="font-medium">Seminar Nasional</p>
                <p className="text-muted-foreground text-sm">
                  Event nasional dengan pembicara ahli untuk memperluas wawasan teknologi terkini.
                </p>
              </div>
            </div>
            <div className="flex flex-row gap-6 items-start">
              <Code className="w-5 h-5 mt-1 text-primary" />
              <div className="flex flex-col gap-1">
                <p className="font-medium">Pelatihan TCB</p>
                <p className="text-muted-foreground text-sm">
                  Training Center Building untuk pengembangan kemampuan teknis di bidang IT.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-muted rounded-md aspect-square"></div>
      </div>
    </div>
  </div>
);