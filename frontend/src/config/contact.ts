export interface ContactLocation {
  slug: string;
  name: string;
  address: string;
  phone: string | null;
  phoneTel: string | null;
  emergencyPhone: string;
  emergencyTel: string;
  mapsUrl: string;
}

const WHATSAPP_DEMO_NUMBER = '593995203741';
const WHATSAPP_DEMO_MESSAGE = 'Hola Dr Pet';

export const CONTACT = {
  mainPhone: {
    display: '(04) 288-6519',
    tel: '+59342886519',
  },
  primaryWhatsApp: {
    display: '+593 99 520 3741',
    internationalDisplay: '+593 99 520 3741',
    message: WHATSAPP_DEMO_MESSAGE,
    url: `https://wa.me/${WHATSAPP_DEMO_NUMBER}?text=${encodeURIComponent(WHATSAPP_DEMO_MESSAGE)}`,
  },
  planBrochureUrl: 'https://drpet.com.ec/wp-content/uploads/2020/08/DrPet_Final.pdf',
} as const;

export const EMERGENCY_CONTACTS = [
  { label: 'Urdesa', display: '098 636 3000', tel: '+593986363000' },
  { label: 'El Dorado', display: '096 252 3743', tel: '+593962523743' },
  { label: 'Vía a la Costa', display: '099 841 7725', tel: '+593998417725' },
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
    mapsUrl:
      'https://www.google.com/maps/search/?api=1&query=Dr.+Pet+El+Dorado+Ciudad+Comercial+Guayaquil',
  },
  {
    slug: 'via-a-la-costa',
    name: 'Vía a la Costa',
    address: 'Km 9.8 vía a la Costa, frente a Puerto Azul, plaza comercial junto al Portal',
    phone: '099 504 8598',
    phoneTel: '+593995048598',
    emergencyPhone: '099 841 7725',
    emergencyTel: '+593998417725',
    mapsUrl:
      'https://www.google.com/maps/search/?api=1&query=Dr.+Pet+Via+a+la+Costa+Puerto+Azul+Guayaquil',
  },
];
