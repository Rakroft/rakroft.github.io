// Todos los textos en español. Para cambiar cualquier texto de la web, edítalo aquí
// (y su equivalente en en.ts).

export type Category = 'sistemas' | 'redes' | 'python' | 'web';

export interface Project {
  title: string;
  description: string;
  tags: string[];
  categories: Category[];
  code?: string;
  site?: string;
}

export const es = {
  lang: 'es',
  meta: {
    title: 'Adrián Ortega Martínez · Sistemas, soporte IT y web',
    description:
      'Portfolio de Adrián Ortega Martínez, estudiante de ASIR en Barcelona: sistemas Windows Server y Linux, redes, virtualización y desarrollo web con IA.',
  },
  nav: {
    about: 'Sobre mí',
    projects: 'Proyectos',
    education: 'Formación',
    stack: 'Stack',
    contact: 'Contacto',
    menu: 'Menú',
    language: 'Idioma',
  },
  theme: { toggle: 'Cambiar entre modo claro y oscuro' },
  hero: {
    status: 'Barcelona · Disponible para prácticas',
    hello: 'Hola, soy',
    role: 'Estudiante de Administración de Sistemas Informáticos en Red. Me muevo entre servidores, redes y soporte IT, y construyo webs con ayuda de la IA.',
    ctaProjects: 'Ver proyectos',
    ctaContact: 'Contactar',
    facts: [
      { label: 'Ahora', value: 'CFGS ASIR · Digitech FP' },
      { label: 'Enfoque', value: 'Sistemas, redes y soporte IT' },
      { label: 'Idiomas', value: 'Español · Català · English B2' },
    ],
  },
  about: {
    title: 'Sobre mí',
    paragraphs: [
      'Soy estudiante de Administración de Sistemas Informáticos en Red (ASIR) en Digitech FP, en Barcelona. Me gusta entender cómo funciona la tecnología por dentro: desde montar y configurar infraestructura física y virtual hasta desplegar servicios y resolver incidencias con método.',
      'Trabajo con Windows Server (Active Directory, DNS, DHCP) y Linux (Debian, Ubuntu Server), monto laboratorios virtualizados y uso Python y Bash para automatizar tareas. También desarrollo aplicaciones web apoyándome en herramientas de IA generativa para prototipar y depurar más rápido.',
      'Busco prácticas formativas (FCT / DUAL) o un primer empleo junior en soporte IT, sistemas o redes, donde aportar desde el primer día y seguir aprendiendo.',
    ],
    skillsTitle: 'Aptitudes',
    skills: [
      'Resolución ágil de incidencias',
      'Pensamiento analítico y lógico',
      'Capacidad de aprendizaje rápido',
      'Trabajo en equipo y colaboración',
      'Comunicación asertiva',
      'Proactividad e iniciativa técnica',
    ],
    languagesTitle: 'Idiomas',
    languages: [
      { name: 'Español', level: 'Nativo' },
      { name: 'Catalán', level: 'Nativo' },
      { name: 'Inglés', level: 'B2 · Intermedio alto' },
    ],
  },
  projects: {
    title: 'Proyectos',
    intro: 'Laboratorios, scripts y webs en los que pongo en práctica lo que aprendo.',
    filters: { all: 'Todo', sistemas: 'Sistemas', redes: 'Redes', python: 'Python', web: 'Web' },
    code: 'Código',
    site: 'Ver web',
    items: [
      {
        title: 'Laboratorio virtual de infraestructura',
        description:
          'Arquitectura cliente-servidor virtualizada: un controlador de dominio Windows Server (Active Directory, DNS, DHCP) conectado a estaciones Windows y Linux, con directivas de grupo y pruebas de conectividad.',
        tags: ['Windows Server', 'Active Directory', 'GPO', 'VMware'],
        categories: ['sistemas', 'redes'],
      },
      {
        title: 'Programas y lógica en Python',
        description:
          'Repositorio de utilidades y algoritmos: calculadora interactiva de 7 operaciones con control de excepciones, cifrado César con desplazamiento configurable y juegos de lógica por consola.',
        tags: ['Python', 'Algoritmos', 'Excepciones'],
        categories: ['python'],
        code: 'https://github.com/Rakroft/proyectos-python',
      },
      {
        title: 'Servidores Linux y homelab',
        description:
          'Debian y Ubuntu Server sin entorno gráfico: SSH con clave pública y sin login de root, permisos POSIX, tareas programadas con cron y redes internas aisladas en Proxmox y VirtualBox.',
        tags: ['Debian', 'Ubuntu Server', 'SSH', 'Proxmox'],
        categories: ['sistemas'],
      },
      {
        title: 'Segmentación de red con VLANs',
        description:
          'Diseño del direccionamiento IP (VLSM / CIDR) y segmentación por departamentos con VLANs y enlaces troncales en Cisco Packet Tracer, verificando la conectividad entre segmentos.',
        tags: ['Packet Tracer', 'VLAN', 'Trunking', 'Subnetting'],
        categories: ['redes'],
      },
      {
        title: 'Este portfolio',
        description:
          'Web bilingüe con modo oscuro construida con Astro, Tailwind CSS y React, y desplegada automáticamente en GitHub Pages con GitHub Actions.',
        tags: ['Astro', 'Tailwind', 'React', 'GitHub Actions'],
        categories: ['web'],
        code: 'https://github.com/Rakroft/rakroft.github.io',
      },
      {
        title: 'Desarrollo web asistido por IA',
        description:
          'Prototipado de webs interactivas en HTML5, CSS3 y JavaScript usando IA generativa para acelerar el código, ajustar la maquetación responsive y depurar errores.',
        tags: ['HTML5', 'CSS3', 'JavaScript', 'IA'],
        categories: ['web'],
        code: 'https://github.com/Rakroft/Rakroft',
        site: 'https://rakroft.github.io/Rakroft/',
      },
    ] as Project[],
  },
  education: {
    title: 'Formación',
    current: 'En curso',
    items: [
      {
        period: '2025 — 2027',
        title: 'CFGS Administración de Sistemas Informáticos en Red (ASIR)',
        place: 'Digitech FP · Barcelona',
        description: 'Sistemas operativos en red, servicios, redes, virtualización, seguridad y bases de datos.',
        current: true,
      },
      {
        period: '2023 — 2025',
        title: 'Bachillerato Científico-Tecnológico',
        place: 'Jesuïtes El Clot · Barcelona',
        description: 'Modalidad científico-tecnológica: matemáticas, física y tecnología.',
        current: false,
      },
    ],
  },
  stack: {
    title: 'Stack',
    intro: 'Herramientas y tecnologías con las que trabajo en clase y en mis laboratorios.',
    groups: [
      {
        name: 'Sistemas',
        items: [
          { name: 'Windows Server', detail: 'AD DS, DNS, DHCP, GPO' },
          { name: 'Debian / Ubuntu Server', detail: 'CLI, SSH, cron, permisos' },
          { name: 'Windows 10 / 11', detail: 'Soporte e incidencias' },
        ],
      },
      {
        name: 'Redes',
        items: [
          { name: 'TCP/IP · OSI', detail: 'VLSM, CIDR' },
          { name: 'VLANs y troncales', detail: 'Segmentación' },
          { name: 'Cisco Packet Tracer', detail: 'Simulación' },
          { name: 'Diagnóstico', detail: 'ping, traceroute, ss, ip' },
        ],
      },
      {
        name: 'Virtualización',
        items: [
          { name: 'VMware Workstation', detail: 'Laboratorios' },
          { name: 'VirtualBox', detail: 'Redes internas' },
          { name: 'Proxmox VE', detail: 'Homelab' },
          { name: 'Snapshots', detail: 'Recuperación rápida' },
        ],
      },
      {
        name: 'Programación',
        items: [
          { name: 'Python', detail: 'Lógica y scripts' },
          { name: 'Bash', detail: 'Automatización' },
          { name: 'MySQL', detail: 'Consultas' },
        ],
      },
      {
        name: 'Web y herramientas',
        items: [
          { name: 'HTML · CSS · JavaScript', detail: 'Maquetación' },
          { name: 'Astro · Tailwind · React', detail: 'Este portfolio' },
          { name: 'Git · GitHub', detail: 'Control de versiones' },
          { name: 'IA generativa', detail: 'Prototipado y depuración' },
        ],
      },
    ],
  },
  contact: {
    kicker: 'Contacto',
    title: '¿Hablamos?',
    text: 'Si buscas a alguien para prácticas o un puesto junior en sistemas, redes o soporte IT, escríbeme. Estaré encantado de hablar contigo.',
    emailLabel: 'Escríbeme',
    details: [
      { label: 'Ubicación', value: 'Barcelona, España' },
      { label: 'Disponibilidad', value: 'Inmediata · presencial, híbrido o remoto' },
      { label: 'Busco', value: 'Prácticas FCT / DUAL o primer empleo junior' },
    ],
  },
  footer: {
    built: 'Diseñado y construido con Astro, Tailwind y React.',
    top: 'Volver arriba',
  },
};

export type Dict = typeof es;
