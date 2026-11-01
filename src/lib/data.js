export const products = [
  {
    id: 'sigma-ip',
    name: 'Bodet Sigma Master Clock (IP)',
    type: 'Base Unit / IP',
    category: 'harmonys',
    price: 6500,
    description: 'Den centrale hjerne i det kablede system. Styrer tid, klokkeslæt og netværkskommunikation til alle Harmonys-enheder.',
    features: ['NTP Tidssynkronisering', 'Netværksstyring', 'Pålidelig Master Clock'],
    image: '/sigma-master-clock.png'
  },
  {
    id: 'sigma-dhf',
    name: 'Bodet Sigma Master Clock + DHF Sender',
    type: 'Base Unit / Trådløs',
    category: 'melodys',
    price: 8200,
    description: 'Obligatorisk kontrolenhed inkl. DHF radiosender, der er nødvendig for at kunne udsende trådløse signaler til Melodys-systemet.',
    features: ['DHF Radiosender inkluderet', 'Lang rækkevidde', 'NTP Tidssynkronisering'],
    image: '/sigma-master-clock.png'
  },
  {
    id: 'h-indoor',
    name: 'Harmonys Indoor Speaker',
    type: 'IP/PoE',
    category: 'harmonys',
    price: 2450,
    description: 'Netværksbaseret indendørs højttaler til klasseværelser og gange. Leverer krystalklar lyd og strømforsynes via det eksisterende netværkskabel (PoE).',
    features: ['IP/PoE tilslutning', 'Indbygget forstærker', 'Multizone support'],
    image: 'https://static-prod.bodet-time.com/assets/styles/medium/public/images/harmonys-150x150.png?VersionId=AAAAAAAAAAPsNBO6V0G2rwBuAAAT1ZtzAAAAAAAAAAIA1gAAADiynQA6AAAAAAACAAAAAAAAADYAZmFzc2V0cy9zdHlsZXMvbWVkaXVtL3B1YmxpYy9pbWFnZXMvaGFybW9ueXMtMTUweDE1MC5wbmc.&itok=Db81CwZJ'
  },
  {
    id: 'h-outdoor',
    name: 'Harmonys Outdoor Speaker',
    type: 'IP/PoE',
    category: 'harmonys',
    price: 3200,
    description: 'Vejrbestandig udendørs højttaler til skolegårde og idrætsanlæg. Tåler vind og vejr og integreres problemfrit i Harmonys-systemet.',
    features: ['IP66 certificeret', 'Høj rækkevidde', 'PoE+ support'],
    image: 'https://static-prod.bodet-time.com/assets/styles/medium/public/images/harmonys-exterieur-150x150.png?VersionId=AAAAAAAAAAPsNBO6V0G2rwCsAAARFxYLAAAAAAAAAAIAWgAAAD7u8wA6AAAAAAACAAAAAAAAADYAZmFzc2V0cy9zdHlsZXMvbWVkaXVtL3B1YmxpYy9pbWFnZXMvaGFybW9ueXMtZXh0ZXJpZXVyLTE1MHgxNTAucG5n&itok=obSCUN4_'
  },
  {
    id: 'h-ceiling',
    name: 'Harmonys Ceiling-mounted',
    type: 'IP/PoE',
    category: 'harmonys',
    price: 2100,
    description: 'Diskret loftmonteret højttaler perfekt til kontorer og kantiner med nedhængte lofter.',
    features: ['Diskret design', 'Planmontage', 'Optimal lydspredning'],
    image: 'https://static-prod.bodet-time.com/assets/styles/medium/public/images/harmonys-encastrable-150x150.png?VersionId=AAAAAAAAAAPsNBO6V0G2rwBSAAARLQEGAAAAAAAAAAIAegAAAD52LAA6AAAAAAACAAAAAAAAADYAZmFzc2V0cy9zdHlsZXMvbWVkaXVtL3B1YmxpYy9pbWFnZXMvaGFybW9ueXMtZW5jYXN0cmFibGUtMTUweDE1MC5wbmc.&itok=wgGfIgW_'
  },
  {
    id: 'h-flash',
    name: 'Harmonys Flash (Visuel alarm)',
    type: 'IP/PoE',
    category: 'harmonys',
    price: 1850,
    description: 'Visuel alarm (strobe flash) der blinker kraftigt ved alarm. Ideel til støjende miljøer eller som supplement for hørehæmmede.',
    features: ['Høj-intensitets LED', 'Synkroniseret blink', 'PoE strømforsynet'],
    image: 'https://static-prod.bodet-time.com/assets/styles/medium/public/images/harmonys-flash-150x150.png?VersionId=AAAAAAAAAAPsNBO6V0G2rwAoAAATiO33AAAAAAAAAAIAYgAAAED_jQA6AAAAAAACAAAAAAAAADYAZmFzc2V0cy9zdHlsZXMvbWVkaXVtL3B1YmxpYy9pbWFnZXMvaGFybW9ueXMtZmxhc2gtMTUweDE1MC5wbmc.&itok=cycPQ7Jx'
  },
  {
    id: 'h-combo-flash',
    name: 'Harmonys Kombi Lyd/Blink',
    type: 'IP/PoE',
    category: 'harmonys',
    price: 3600,
    description: 'Kombineret indendørs højttaler og LED-blitzlys. Garanterer at alarmen både høres og ses i larmende rum som kantiner og idrætshaller.',
    features: ['Indbygget LED-blitz', 'Akustisk & visuel varsling', 'IP/PoE tilslutning'],
    image: 'https://static-prod.bodet-time.com/assets/styles/medium/public/images/harmonys-flash-150x150.png?VersionId=AAAAAAAAAAPsNBO6V0G2rwAoAAATiO33AAAAAAAAAAIAYgAAAED_jQA6AAAAAAACAAAAAAAAADYAZmFzc2V0cy9zdHlsZXMvbWVkaXVtL3B1YmxpYy9pbWFnZXMvaGFybW9ueXMtZmxhc2gtMTUweDE1MC5wbmc.&itok=cycPQ7Jx'
  },
  {
    id: 'h-button',
    name: 'Harmonys Paniktryk (Lockdown)',
    type: 'IP/PoE',
    category: 'harmonys',
    price: 1200,
    description: 'Dedikeret trykknap til øjeblikkelig aktivering af lockdown- eller evakueringsprocedurer i tilfælde af kritisk fare.',
    features: ['Klar farvemarkering', 'Dobbelt-tryk sikring', 'Øjeblikkelig respons'],
    image: 'https://static-prod.bodet-time.com/assets/styles/medium/public/images/harmonys-boitier-boutons-150x150.png?VersionId=AAAAAAAAAAPsNBO6V0G2rwBiAAARG7KLAAAAAAAAAAIAhgAAAEiaVAA6AAAAAAACAAAAAAAAADYAZmFzc2V0cy9zdHlsZXMvbWVkaXVtL3B1YmxpYy9pbWFnZXMvaGFybW9ueXMtYm9pdGllci1ib3V0b25zLTE1MHgxNTAucG5n&itok=x6wrJhiy'
  },
  {
    id: 'h-mic',
    name: 'Harmonys Multizone Mikrofon',
    type: 'IP/PoE',
    category: 'harmonys',
    price: 4500,
    description: 'Avanceret mikrofonkonsol til live-beskeder og aktivering af forudindspillede varsler på tværs af valgte zoner.',
    features: ['8 zonetaster', 'Svanehalsmikrofon', 'Live-broadcast'],
    image: 'https://static-prod.bodet-time.com/assets/styles/medium/public/images/harmonys-microphone-150x150.png?VersionId=AAAAAAAAAAPsNBO6V0G2rwAEAAARC3mAAAAAAAAAAAIAMgAAAEC-WgA6AAAAAAACAAAAAAAAADYAZmFzc2V0cy9zdHlsZXMvbWVkaXVtL3B1YmxpYy9pbWFnZXMvaGFybW9ueXMtbWljcm9waG9uZS0xNTB4MTUwLnBuZw..&itok=-pxbhGx4'
  },
  {
    id: 'm-indoor',
    name: 'Melodys Indoor Speaker',
    type: 'Trådløs Radio',
    category: 'melodys',
    price: 3100,
    description: 'Trådløs højttaler til indendørs brug. Kræver kun en standard 230V stikkontakt. Modtager lyd via dedikeret radiofrekvens.',
    features: ['Ingen netværkskabel', 'Lang rækkevidde', 'Hurtig installation'],
    image: 'https://static-prod.bodet-time.com/assets/styles/medium/public/images/melodys-150x150.png?VersionId=AAAAAAAAAAPsNBO6V0G2rwAiAAAVX6s7AAAAAAAAAAIA6AAAAEcRwgA6AAAAAAACAAAAAAAAADYAZmFzc2V0cy9zdHlsZXMvbWVkaXVtL3B1YmxpYy9pbWFnZXMvbWVsb2R5cy0xNTB4MTUwLnBuZw..&itok=zvdg0f_X'
  },
  {
    id: 'm-outdoor',
    name: 'Melodys Outdoor Speaker',
    type: 'Trådløs Radio',
    category: 'melodys',
    price: 3800,
    description: 'Trådløs udendørs højttaler til områder hvor datakabling er umuligt. Ideel til fredede bygninger eller asfalterede områder.',
    features: ['Vejrbestandig', 'Kraftig RF modtager', 'Letvægtsdesign'],
    image: 'https://static-prod.bodet-time.com/assets/styles/medium/public/images/melodys-exterieur-150x150.png?VersionId=AAAAAAAAAAPsNBO6V0G2rwAWAAARwaygAAAAAAAAAAIA2AAAADmsDAA6AAAAAAACAAAAAAAAADYAZmFzc2V0cy9zdHlsZXMvbWVkaXVtL3B1YmxpYy9pbWFnZXMvbWVsb2R5cy1leHRlcmlldXItMTUweDE1MC5wbmc.&itok=z_IUHYXV'
  },
  {
    id: 'm-high-power',
    name: 'Melodys High Power',
    type: 'Trådløs Radio',
    category: 'melodys',
    price: 5200,
    description: 'Ekstremt kraftig udendørs hornhøjttaler til store arealer og stadioner. Sikrer at alle hører varslingen, selv på stor afstand.',
    features: ['Ekstremt højt lydtryk', 'Retningsbestemt lyd', 'Industriel kvalitet'],
    image: 'https://static-prod.bodet-time.com/assets/styles/medium/public/images/melodys-exterieur-forte-puissance-150x150.png?VersionId=AAAAAAAAAAPsNBO6V0G2rwB-AAARxi3ZAAAAAAAAAAIAqgAAAELb0AA6AAAAAAACAAAAAAAAADYAZmFzc2V0cy9zdHlsZXMvbWVkaXVtL3B1YmxpYy9pbWFnZXMvaGFybW9ueXMtZXh0ZXJpZXVyLWZvcnRlLXB1aXNzYW5jZS0xNTB4MTUwLnBuZw&itok=oZrISw_x'
  },
  {
    id: 'm-flash',
    name: 'Melodys Flash',
    type: 'Trådløs Radio',
    category: 'melodys',
    price: 2200,
    description: 'Trådløs visuel alarm der aktiveres via radiosignal sammen med den lydmæssige varsling.',
    features: ['Trådløs aktivering', 'Høj synlighed', '230V tilslutning'],
    image: 'https://static-prod.bodet-time.com/assets/styles/medium/public/images/melodys-flash-150x150.png?VersionId=AAAAAAAAAAPsNBO6V0G2rwC6AAAUJKBTAAAAAAAAAAIAYgAAAED_iwA6AAAAAAACAAAAAAAAADYAZmFzc2V0cy9zdHlsZXMvbWVkaXVtL3B1YmxpYy9pbWFnZXMvbWVsb2R5cy1mbGFzaC0xNTB4MTUwLnBuZw..&itok=qUFZNKC7'
  },
  {
    id: 'm-combo-flash',
    name: 'Melodys Kombi Lyd/Blink',
    type: 'Trådløs Radio',
    category: 'melodys',
    price: 4500,
    description: 'Kombineret trådløs højttaler og kraftigt LED-blitzlys. Sikrer fuld dækning i kantiner og haller uden behov for datakabler.',
    features: ['Visuel & Akustisk varsling', 'Ingen netværkskabel', 'Ideel til idrætshaller'],
    image: 'https://static-prod.bodet-time.com/assets/styles/medium/public/images/melodys-flash-150x150.png?VersionId=AAAAAAAAAAPsNBO6V0G2rwC6AAAUJKBTAAAAAAAAAAIAYgAAAED_iwA6AAAAAAACAAAAAAAAADYAZmFzc2V0cy9zdHlsZXMvbWVkaXVtL3B1YmxpYy9pbWFnZXMvbWVsb2R5cy1mbGFzaC0xNTB4MTUwLnBuZw..&itok=qUFZNKC7'
  }
];

export const getProductById = (id) => products.find(p => p.id === id);

export const getProductsByCategory = (category) => {
  if (category === 'all') return products;
  return products.filter(p => p.category === category);
};
