export interface ContactLocation {
  slug: string;
  name: string;
  address: string;
  phone: string | null;
  phoneTel: string | null;
  emergencyPhone: string;
  emergencyTel: string;
  whatsappUrl: string;
  mapsUrl: string;
}

export const CONTACT = {
  primaryWhatsApp: {
    display: '098 636 3000',
    url: 'https://wa.me/593986363000',
  },
} as const;

export const EMERGENCY_CONTACTS = [
  { label: 'Urdesa', display: '098 636 3000', tel: '+593986363000' },
  { label: 'El Dorado', display: '096 252 3743', tel: '+593962523743' },
  { label: 'Vía a la Costa', display: '098 775 3422', tel: '+593987753422' },
] as const;

export const LOCATIONS: ContactLocation[] = [
  {
    slug: 'urdesa',
    name: 'Urdesa',
    address: 'Circunvalación Sur 216 entre Todos los Santos y Calle Única',
    phone: '098 636 3000',
    phoneTel: '+593986363000',
    emergencyPhone: '098 636 3000',
    emergencyTel: '+593986363000',
    whatsappUrl: 'https://wa.me/593986363000',
    mapsUrl:
      'https://www.google.com/maps/search/?api=1&query=Dr.+Pet+Urdesa+Circunvalacion+Sur+216+Guayaquil',
  },
  {
    slug: 'el-dorado',
    name: 'El Dorado',
    address: 'Km 10.5 vía La Aurora, Ciudad Comercial El Dorado',
    phone: '099 276 2265',
    phoneTel: '+593992762265',
    emergencyPhone: '096 252 3743',
    emergencyTel: '+593962523743',
    whatsappUrl: 'https://wa.me/593992762265',
    mapsUrl:
      'https://www.google.com/maps/search/?api=1&query=Dr.+Pet+El+Dorado+Ciudad+Comercial+Guayaquil',
  },
  {
    slug: 'via-a-la-costa',
    name: 'Vía a la Costa',
    address: 'Km 9.8 vía a la Costa, frente a Puerto Azul, plaza comercial junto al Portal',
    phone: null,
    phoneTel: null,
    emergencyPhone: '098 775 3422',
    emergencyTel: '+593987753422',
    whatsappUrl: 'https://wa.me/593987753422',
    mapsUrl:
      'https://www.google.com/maps/search/?api=1&query=Dr.+Pet+Via+a+la+Costa+Puerto+Azul+Guayaquil',
  },
];
