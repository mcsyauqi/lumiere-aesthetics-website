export interface Doctor {
  id: string;
  slug: string;
  name: string;
  title: string;
  specialization: string;
  credentials: string[];
  bio: string;
  shortBio: string;
  image: string;
  expertise: string[];
  education: string[];
  languages: string[];
  featured?: boolean;
}

export const doctors: Doctor[] = [
  {
    id: "1",
    slug: "dr-sophia-laurent",
    name: "Dr. Sophia Laurent",
    title: "Direktur Medis & Kepala Dermatolog",
    specialization: "Dermatologi Kosmetik & Anti-Aging",
    credentials: [
      "MD, Dermatolog Bersertifikat",
      "Fellow, Academy of Dermatology",
      "Anggota, Society for Dermatologic Surgery",
    ],
    bio: "Dr. Sophia Laurent adalah dermatolog bersertifikat dengan pengalaman lebih dari 15 tahun dalam dermatologi kosmetik dan medis. Sebagai pendiri dan Direktur Medis Lumière Aesthetics, beliau membawa passionnya dalam menggabungkan seni dengan keahlian medis untuk membantu pasien mencapai tujuan estetika mereka. Dr. Laurent menyelesaikan residensi dermatologinya di Stanford University dan telah mengikuti pelatihan ekstensif dalam prosedur kosmetik non-bedah terbaru di Paris dan New York.",
    shortBio:
      "Dermatolog bersertifikat dengan pengalaman 15+ tahun dalam dermatologi kosmetik dan medis.",
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=500&fit=crop&q=80",
    expertise: [
      "Perawatan Injeksi",
      "Terapi Laser",
      "Protokol Anti-Aging",
      "Skrining Kanker Kulit",
    ],
    education: [
      "MD - Harvard Medical School",
      "Residensi Dermatologi - Stanford University",
      "Fellowship - American Academy of Dermatology",
    ],
    languages: ["Indonesia", "Inggris", "Prancis"],
    featured: true,
  },
  {
    id: "2",
    slug: "dr-james-chen",
    name: "Dr. James Chen",
    title: "Spesialis Estetika Wajah",
    specialization: "Kontur Wajah & Injeksi",
    credentials: [
      "MD, Ahli Bedah Plastik Bersertifikat",
      "Fellow, American College of Surgeons",
      "Certified Injector Trainer",
    ],
    bio: "Dr. James Chen adalah ahli bedah plastik bersertifikat ganda yang mengkhususkan diri dalam peremajaan wajah non-bedah. Dikenal karena mata artistiknya dan teknik presisi, Dr. Chen telah melakukan lebih dari 10.000 prosedur injeksi. Beliau secara rutin melatih dokter lain dalam teknik injeksi lanjutan dan berbicara di konferensi kedokteran estetika internasional.",
    shortBio:
      "Ahli bedah plastik bersertifikat ganda yang mengkhususkan diri dalam peremajaan wajah non-bedah.",
    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=500&fit=crop&q=80",
    expertise: [
      "Dermal Filler",
      "Botox & Neuromodulator",
      "Kontur Wajah",
      "Lip Enhancement",
    ],
    education: [
      "MD - Johns Hopkins University",
      "Residensi Bedah Plastik - UCLA",
      "Fellowship Estetika Wajah - Beverly Hills",
    ],
    languages: ["Indonesia", "Inggris", "Mandarin"],
    featured: true,
  },
  {
    id: "3",
    slug: "dr-elena-rodriguez",
    name: "Dr. Elena Rodriguez",
    title: "Spesialis Laser & Kesehatan Kulit",
    specialization: "Kedokteran Laser & Peremajaan Kulit",
    credentials: [
      "MD, Dermatolog Bersertifikat",
      "Certified Laser Safety Officer",
      "Anggota, American Society for Laser Medicine",
    ],
    bio: "Dr. Elena Rodriguez adalah dermatolog bersertifikat dengan keahlian dalam kedokteran laser dan peremajaan kulit. Beliau telah merintis beberapa protokol kombinasi yang memaksimalkan hasil sambil meminimalkan waktu pemulihan. Dr. Rodriguez bersemangat dalam merawat semua jenis kulit dan telah mengembangkan pendekatan khusus untuk pasien dengan berbagai warna kulit.",
    shortBio:
      "Dermatolog bersertifikat dengan keahlian dalam kedokteran laser dan peremajaan kulit.",
    image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=400&h=500&fit=crop&q=80",
    expertise: [
      "Laser Skin Resurfacing",
      "Perawatan Pigmentasi",
      "Perawatan Jerawat & Bekas Luka",
      "Kulit Beragam Warna",
    ],
    education: [
      "MD - Columbia University",
      "Residensi Dermatologi - NYU Langone",
      "Fellowship Kedokteran Laser - Miami Dermatology",
    ],
    languages: ["Indonesia", "Inggris", "Spanyol"],
    featured: true,
  },
  {
    id: "4",
    slug: "dr-michael-brooks",
    name: "Dr. Michael Brooks",
    title: "Spesialis Pembentukan Tubuh",
    specialization: "Pembentukan Tubuh Non-Invasif",
    credentials: [
      "MD, Bersertifikat dalam Penyakit Dalam",
      "Certified CoolSculpting Specialist",
      "Anggota, American Med Spa Association",
    ],
    bio: "Dr. Michael Brooks mengkhususkan diri dalam pembentukan tubuh non-invasif dan manajemen berat badan. Dengan latar belakang penyakit dalam, beliau mengambil pendekatan holistik terhadap estetika tubuh, menggabungkan teknologi mutakhir dengan optimalisasi gaya hidup. Dr. Brooks telah membantu ratusan pasien mencapai tujuan tubuh mereka tanpa operasi.",
    shortBio:
      "Spesialis pembentukan tubuh non-invasif dengan pendekatan holistik terhadap estetika.",
    image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=400&h=500&fit=crop&q=80",
    expertise: [
      "CoolSculpting",
      "EMSculpt",
      "Pembentukan Tubuh",
      "Manajemen Berat Badan",
    ],
    education: [
      "MD - Duke University",
      "Residensi Penyakit Dalam - Mayo Clinic",
      "Sertifikasi Pembentukan Tubuh - CoolSculpting University",
    ],
    languages: ["Indonesia", "Inggris"],
    featured: false,
  },
];

export function getDoctorBySlug(slug: string): Doctor | undefined {
  return doctors.find((d) => d.slug === slug);
}

export function getFeaturedDoctors(): Doctor[] {
  return doctors.filter((d) => d.featured);
}
