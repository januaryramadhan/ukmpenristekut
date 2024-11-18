import { Users } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export const StrukturOrganisasi = () => {
  const strukturData = [
    {
      title: "Ketua & Wakil Ketua",
      items: [
        { position: "Ketua Umum", name: "Dian Nurjanah" },
        { position: "Wakil Ketua Umum", name: "Syahril Gunawan" },
      ]
    },
    {
      title: "Sekretaris",
      items: [
        { position: "Sekretaris Jenderal", name: "Sohibul Wafa" },
        { position: "Wakil Sekretaris Jenderal", name: "Nisa Pujia" },
      ]
    },
    {
      title: "Bendahara",
      items: [
        { position: "Bendahara Umum", name: "Erika Nasya" },
        { position: "Wakil Bendahara Umum", name: "Jihan N" },
      ]
    },
    {
      title: "Divisi Hubungan Masyarakat",
      items: [
        { position: "Humas Internal", name: "Elsa Syarifah" },
        { position: "Humas Eksternal", name: "Halimatusadiyah" },
        { position: "Community Manager", name: "Cantika" },
      ]
    },
    {
      title: "Divisi PPRK",
      items: [
        { position: "Project Manager", name: "Agustin Radian" },
        { position: "PSDM", name: "Fadlan Sodikin" },
        { position: "Riset", name: "M. Hapid" },
        { position: "Kajian", name: "Hemi Anggraeni" },
      ]
    },
    {
      title: "Divisi Kreatif",
      items: [
        { position: "Content Strategist", name: "Mamin" },
        { position: "Content Creator", name: "Riza Apriansyah" },
        { position: "Graphic Designer", name: "Putri Dewantari" },
        { position: "Graphic Designer", name: "Sekar" },
      ]
    },
    {
      title: "Divisi IT",
      items: [
        { position: "Web Developer", name: "Siti Arwiyah" },
        { position: "IT Support", name: "Risky" },
      ]
    },
  ];

  return (
    <div className="w-full py-20 px-4 lg:py-40">
      <div className="container mx-auto">
        <div className="flex gap-4 flex-col items-start">
          <div>
            <Badge>Struktur Organisasi</Badge>
          </div>
          <div className="flex gap-2 flex-col mb-8">
            <h2 className="text-3xl md:text-5xl tracking-tighter lg:max-w-xl font-semibold">
              Pengurus UKM PENRISTEK
            </h2>
            <p className="text-lg max-w-xl lg:max-w-2xl leading-relaxed tracking-tight text-muted-foreground">
              Struktur kepengurusan UKM PENRISTEK Universitas Terbuka periode 2024.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
            {strukturData.map((divisi) => (
              <div key={divisi.title} className="flex flex-col gap-4 p-6 border rounded-lg">
                <div className="flex gap-3 items-center">
                  <Users className="w-5 h-5 text-primary" />
                  <h3 className="font-medium text-lg">{divisi.title}</h3>
                </div>
                <div className="flex flex-col gap-3">
                  {divisi.items.map((item) => (
                    <div key={item.position} className="flex flex-col gap-1">
                      <p className="font-medium text-sm">{item.position}</p>
                      <p className="text-sm text-muted-foreground">{item.name}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};