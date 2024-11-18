import Link from "next/link";

export const Footer1 = () => {
  const navigationItems = [
    {
      title: "Menu Utama",
      items: [
        {
          title: "Beranda",
          href: "/",
        },
        {
          title: "Tentang Kami",
          href: "/about",
        },
        {
          title: "Program Kerja",
          href: "/program",
        },
        {
          title: "Berita",
          href: "/berita",
        },
      ],
    },
    {
      title: "Program",
      items: [
        {
          title: "Pelatihan IT",
          href: "/pelatihan-it",
        },
        {
          title: "Webinar Teknologi",
          href: "/webinar",
        },
        {
          title: "Kompetisi IT",
          href: "/kompetisi",
        },
        {
          title: "Workshop",
          href: "/workshop",
        },
      ],
    },
    {
      title: "Informasi",
      items: [
        {
          title: "Pendaftaran",
          href: "/daftar",
        },
        {
          title: "FAQ",
          href: "/faq",
        },
        {
          title: "Hubungi Kami",
          href: "/kontak",
        },
        {
          title: "Kerjasama",
          href: "/kerjasama",
        },
      ],
    },
  ];

  return (
    <div className="w-full py-20 lg:py-40 px-4 bg-foreground text-background">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div className="flex gap-8 flex-col items-start">
            <div className="flex gap-2 flex-col">
              <h2 className="text-3xl md:text-5xl tracking-tighter max-w-xl font-regular text-left">
                UKM PENRISTEK UT
              </h2>
              <p className="text-lg max-w-lg leading-relaxed tracking-tight text-background/75 text-left">
                Unit Kegiatan Mahasiswa Pendidikan, Riset, dan Teknologi
                Universitas Terbuka
              </p>
            </div>
            <div className="flex gap-20 flex-row">
              <div className="flex flex-col text-sm max-w-lg leading-relaxed tracking-tight text-background/75 text-left">
                <p>Universitas Terbuka</p>
                <p>Jalan Soleh Iskandar No.234</p>
                <p>Kota Bogor, Jawa Barat 16164</p>
              </div>
              <div className="flex flex-col text-sm max-w-lg leading-relaxed tracking-tight text-background/75 text-left">
                <Link href="/kebijakan-privasi">Kebijakan Privasi</Link>
                <Link href="/syarat-ketentuan">Syarat & Ketentuan</Link>
                <div className="flex gap-4 mt-4">
                  <Link href="https://instagram.com/penristekut" target="_blank">Instagram</Link>
                  <Link href="https://youtube.com/penristekut" target="_blank">YouTube</Link>
                </div>
              </div>
            </div>
          </div>
          <div className="grid lg:grid-cols-3 gap-10 items-start">
            {navigationItems.map((item) => (
              <div
                key={item.title}
                className="flex text-base gap-1 flex-col items-start"
              >
                <div className="flex flex-col gap-2">
                  <p className="text-xl">{item.title}</p>
                  {item.items &&
                    item.items.map((subItem) => (
                      <Link
                        key={subItem.title}
                        href={subItem.href}
                        className="flex justify-between items-center hover:text-primary-foreground transition-colors"
                      >
                        <span className="text-background/75">
                          {subItem.title}
                        </span>
                      </Link>
                    ))}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-20 pt-8 border-t border-background/10 text-center text-background/75 text-sm">
          © {new Date().getFullYear()} UKM PENRISTEK Universitas Terbuka. All rights reserved.
        </div>
      </div>
    </div>
  );
};