// import componentData from '../data/pc_components.json';

const transformJsonToProducts = (data) => {
  if (!data) return [];
  const products = [];
  const categories = data.pc_components;
/*
  const mapCategory = {
    procesadores: 'procesadores',
    tarjetas_graficas: 'graficas',
    memorias_ram: 'ram',
    placas_madre: 'madres',
    fuentes_de_poder: 'fuentes'
  };

  const getSpecs = (item, cat) => {
    if (cat === 'procesadores') return [`Socket: ${item.socket}`, `Núcleos: ${item.nucleos}`, `Hilos: ${item.hilos}`, `Boost: ${item.frecuencia_boost}`];
    if (cat === 'tarjetas_graficas') return [`VRAM: ${item.vram}`, `Bus: ${item.bus}`, `TDP: ${item.tdp}`, `Resolución: ${item.resolucion_objetivo}`];
    if (cat === 'memorias_ram') return [`Tipo: ${item.tipo}`, `Capacidad: ${item.capacidad}`, `Velocidad: ${item.velocidad}`, `Latencia: ${item.latencia}`];
    if (cat === 'placas_madre') return [`Chipset: ${item.chipset}`, `Socket: ${item.socket}`, `Factor: ${item.form_factor}`, `RAM: ${item.ram_tipo}`];
    if (cat === 'fuentes_de_poder') return [`Potencia: ${item.potencia}`, `Certificación: ${item.certificacion}`, `Modular: ${item.modular}`];
    return [];
  };

  const getCategoryImage = (cat) => {
    const images = {
      procesadores: 'https://placehold.co/600x400/1a1a1a/ffffff?text=CPU',
      tarjetas_graficas: 'https://placehold.co/600x400/1a1a1a/ffffff?text=GPU',
      memorias_ram: 'https://placehold.co/600x400/1a1a1a/ffffff?text=RAM',
      placas_madre: 'https://placehold.co/600x400/1a1a1a/ffffff?text=MOTHERBOARD',
      fuentes_de_poder: 'https://placehold.co/600x400/1a1a1a/ffffff?text=PSU',
      almacenamiento: 'https://placehold.co/600x400/1a1a1a/ffffff?text=STORAGE'
    };
    return images[cat] || 'https://placehold.co/600x400/1a1a1a/ffffff?text=Componente';
  };

  for (const [key, items] of Object.entries(categories)) {
    if (key === 'almacenamiento') {
      for (const [subKey, subItems] of Object.entries(items)) {
         subItems.forEach(item => {
           products.push({
             id: item.id,
             name: item.nombre,
             category: 'almacenamiento',
             description: `Almacenamiento ${item.marca} ${item.capacidad} - ${item.uso || 'High Performance'}`,
             price: item.precio_usd,
             specs: [`Capacidad: ${item.capacidad}`, `Interfaz: ${item.interfaz}`, `Formato: ${item.form_factor || item.rpm + ' RPM'}`],
             image: item.imagen || getCategoryImage('almacenamiento'),
             isComponent: true
           });
         });
      }
    } else if (mapCategory[key]) {
      items.forEach(item => {
        products.push({
          id: item.id,
          name: item.nombre,
          category: mapCategory[key],
          description: `${item.marca} - ${item.generacion || item.arquitectura || item.certificacion || 'Componente Premium'}`,
          price: item.precio_usd,
          specs: getSpecs(item, key),
          image: item.imagen || getCategoryImage(key),
          isComponent: true
        });
      });
    }
  }
*/
  return products;
};

export const COMPONENT_PRODUCTS = []; // transformJsonToProducts(componentData);


export const INITIAL_PRODUCTS = [
  {
    id: 1,
    name: 'Nova Pro RTX Edition',
    category: 'desktops',
    description: 'La bestia definitiva armada con la nueva generación de gráficos.',
    price: 3499,
    specs: ['NVIDIA GeForce RTX 5090', 'Intel Core i9-14900K', '64GB DDR5 6000MHz', '2TB NVMe M.2 SSD'],
    image: '/images/rtx_5090.png',
    tags: ['NUEVO', 'ULTRA 4K'],
  },
  {
    id: 2,
    name: 'Nova Elite Ice',
    category: 'desktops',
    description: 'Diseño blanco inmaculado con enfriamiento líquido RGB y potencia gaming extrema.',
    price: 1999,
    specs: ['NVIDIA GeForce RTX 4070 Ti', 'AMD Ryzen 7 7800X3D', '32GB DDR5 6000MHz RGB', '1TB NVMe M.2 SSD'],
    image: '/images/pc_2_1779304486929.png',
    tags: ['RECOMENDADO', 'ESTÉTICA BLANCA'],
  },
  {
    id: 3,
    name: 'Nova Starter Series',
    category: 'desktops',
    description: 'Perfecto para empezar en el mundo del gaming de alto nivel a 1080p/1440p.',
    price: 999,
    specs: ['NVIDIA GeForce RTX 4060', 'Intel Core i5-13400F', '16GB DDR5 5200MHz', '1TB NVMe M.2 SSD'],
    image: '/images/pc_1_1779304111464.png',
    tags: ['MEJOR PRECIO'],
  },
  {
    id: 4,
    name: 'Nova Laptop Aero 16',
    category: 'laptops',
    description: 'Ultra delgada, pantalla OLED 240Hz, diseñada para creadores y gamers exigentes.',
    price: 1699,
    specs: ['NVIDIA GeForce RTX 4070', 'Intel Core i7-14700H', '16GB DDR5 5600MHz', '1TB NVMe M.2 SSD'],
    image: '/images/laptops_gaming.png',
    tags: ['PANTALLA OLED', 'PORTÁTIL'],
  },
  {
    id: 5,
    name: 'Nova Laptop Beast 18',
    category: 'laptops',
    description: 'El reemplazo definitivo de escritorio. Potencia sin concesiones en cualquier lugar.',
    price: 2999,
    specs: ['NVIDIA GeForce RTX 4090', 'Intel Core i9-14900HX', '32GB DDR5 5600MHz', '2TB NVMe M.2 SSD'],
    image: '/images/laptops_gaming.png',
    tags: ['NUEVO', 'RENDIMIENTO MÁXIMO'],
  },
  {
    id: 6,
    name: 'Nova Curve 34" UltraWide',
    category: 'monitores',
    description: 'Pantalla curva QD-OLED de 34 pulgadas. Colores vibrantes y negros perfectos.',
    price: 799,
    specs: ['Resolución 3440 x 1440', 'Tasa de Refresco 240Hz', 'Tiempo de Respuesta 0.03ms', 'HDR 1000'],
    image: '/images/media__1779303787682.png',
    tags: ['OLED', 'CURVO'],
  },
  {
    id: 7,
    name: 'Nova Swift 27" Pro',
    category: 'monitores',
    description: 'Diseñado para eSports. Máxima velocidad de refresco para no perder ningún detalle.',
    price: 399,
    specs: ['Resolución 1920 x 1080', 'Tasa de Refresco 360Hz', 'Panel Fast IPS', 'NVIDIA G-Sync'],
    image: '/images/media__1779303787682.png',
    tags: ['ESPORTS', '360HZ'],
  },
  {
    id: 8,
    name: 'Nova Strike Keyboard',
    category: 'accesorios',
    description: 'Teclado mecánico con switches magnéticos de efecto Hall y latencia ultra baja.',
    price: 149,
    specs: ['Switches Magnéticos', 'Iluminación RGB por tecla', 'Estructura de Aluminio', 'Hot-swappable'],
    image: '/images/media__1779303851616.png',
    tags: ['EFECTO HALL', 'RGB'],
  },
  {
    id: 9,
    name: 'Nova Ghost Wireless Mouse',
    category: 'accesorios',
    description: 'Mouse ultraligero de 49 gramos con sensor óptico de 32,000 DPI y polling rate de 8000Hz.',
    price: 89,
    specs: ['Peso 49g', 'Sensor Óptico 32k DPI', 'Conexión 8000Hz Wireless', 'Batería hasta 80h'],
    image: '/images/media__1779303851616.png',
    tags: ['ULTRALIGERO', '8000HZ'],
  },
  {
    id: 10,
    name: 'Nova Sound 7.1 Wireless',
    category: 'accesorios',
    description: 'Audio espacial de alta fidelidad con cancelación activa de ruido y micrófono premium.',
    price: 129,
    specs: ['Sonido Envolvente 7.1', 'Cancelación Activa de Ruido', 'Conexión 2.4GHz + BT', 'Drivers de 50mm'],
    image: '/images/media__1779303851616.png',
    tags: ['AUDIO ESPACIAL'],
  }
];

export const BUILDER_OPTIONS = {
  cpu: [
    { id: 'ryzen7', name: 'AMD Ryzen 7 7800X3D (8 Cores / 16 Threads)', price: 400 },
    { id: 'corei7', name: 'Intel Core i7-14700K (20 Cores / 28 Threads)', price: 420 },
    { id: 'corei9', name: 'Intel Core i9-14900K (24 Cores / 32 Threads)', price: 580 },
  ],
  gpu: [
    { id: 'rtx4060', name: 'NVIDIA GeForce RTX 4060 8GB', price: 300 },
    { id: 'rtx4070ti', name: 'NVIDIA GeForce RTX 4070 Ti Super 16GB', price: 850 },
    { id: 'rtx5090', name: 'NVIDIA GeForce RTX 5090 32GB (Nueva Generación)', price: 1999 },
  ],
  ram: [
    { id: '16gb', name: '16GB DDR5 5200MHz Corsair Vengeance (2x8GB)', price: 80 },
    { id: '32gb', name: '32GB DDR5 6000MHz G.Skill Trident Z5 RGB (2x16GB)', price: 150 },
    { id: '64gb', name: '64GB DDR5 6000MHz G.Skill Trident Z5 RGB (2x32GB)', price: 290 },
  ],
  ssd: [
    { id: '1tb', name: '1TB NVMe M.2 SSD WD Black SN850X (7300MB/s)', price: 90 },
    { id: '2tb', name: '2TB NVMe M.2 SSD WD Black SN850X (7300MB/s)', price: 160 },
  ],
  gabinete: [
    { id: 'showcase', name: 'Nova Glass Showcase Black (Vidrio Templado Panorámico)', price: 130 },
    { id: 'ice', name: 'Nova Crystal Ice White Edition (Estética de Cristal Blanca)', price: 150 },
  ]
};
