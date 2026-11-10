import type { Dict, Project } from './es';

export const en: Dict = {
  lang: 'en',
  meta: {
    title: 'Adrián Ortega Martínez · Systems, IT support & web',
    description:
      'Portfolio of Adrián Ortega Martínez, a network systems administration student in Barcelona: Windows Server and Linux, networking, virtualization and AI-assisted web development.',
  },
  nav: {
    about: 'About',
    projects: 'Projects',
    education: 'Education',
    stack: 'Stack',
    contact: 'Contact',
    menu: 'Menu',
    language: 'Language',
    main: 'Main',
    skip: 'Skip to content',
  },
  theme: { toggle: 'Toggle light and dark mode' },
  hero: {
    status: 'Barcelona · Open to internships',
    hello: "Hi, I'm",
    role: "Network Systems Administration student. I work across servers, networks and IT support, and I build websites with the help of AI.",
    ctaProjects: 'See projects',
    ctaContact: 'Get in touch',
    facts: [
      { label: 'Now', value: 'Higher VET in ASIR · Digitech FP' },
      { label: 'Focus', value: 'Systems, networks & IT support' },
      { label: 'Languages', value: 'Spanish · Catalan · English B2' },
    ],
  },
  about: {
    title: 'About',
    paragraphs: [
      "I'm studying Network Computer Systems Administration (ASIR) at Digitech FP in Barcelona. I like understanding how technology works under the hood: from setting up physical and virtual infrastructure to deploying services and troubleshooting issues methodically.",
      'I work with Windows Server (Active Directory, DNS, DHCP) and Linux (Debian, Ubuntu Server), build virtualized labs and use Python and Bash to automate tasks. I also build web apps with generative AI tools to prototype and debug faster.',
      "I'm looking for an internship (FCT / dual training) or a first junior role in IT support, systems or networking, where I can contribute from day one and keep learning.",
    ],
    skillsTitle: 'Strengths',
    skills: [
      'Fast troubleshooting',
      'Analytical and logical thinking',
      'Quick learner',
      'Teamwork and collaboration',
      'Clear communication',
      'Proactive and self-driven',
    ],
    languagesTitle: 'Languages',
    languages: [
      { name: 'Spanish', level: 'Native' },
      { name: 'Catalan', level: 'Native' },
      { name: 'English', level: 'B2 · Upper intermediate' },
    ],
  },
  projects: {
    filterLabel: 'Filter projects by category',
    title: 'Projects',
    intro: 'Labs, scripts and websites where I put what I learn into practice.',
    filters: { all: 'All', sistemas: 'Systems', redes: 'Networking', python: 'Python', web: 'Web' },
    code: 'Code',
    site: 'Live site',
    items: [
      {
        title: 'Virtual infrastructure lab',
        description:
          'A virtualized client-server setup: a Windows Server domain controller (Active Directory, DNS, DHCP) connected to Windows and Linux workstations, with group policies and connectivity tests.',
        tags: ['Windows Server', 'Active Directory', 'GPO', 'VMware'],
        categories: ['sistemas', 'redes'],
      },
      {
        title: 'Python programs & logic',
        description:
          'A repository of utilities and algorithms: a 7-operation interactive calculator with exception handling, a Caesar cipher with configurable shift and console logic games.',
        tags: ['Python', 'Algorithms', 'Exceptions'],
        categories: ['python'],
        code: 'https://github.com/Rakroft/proyectos-python',
      },
      {
        title: 'Linux servers & homelab',
        description:
          'Headless Debian and Ubuntu Server: key-based SSH with root login disabled, POSIX permissions, cron jobs and isolated internal networks on Proxmox and VirtualBox.',
        tags: ['Debian', 'Ubuntu Server', 'SSH', 'Proxmox'],
        categories: ['sistemas'],
      },
      {
        title: 'Network segmentation with VLANs',
        description:
          'IP addressing design (VLSM / CIDR) and per-department segmentation with VLANs and trunk links in Cisco Packet Tracer, verifying connectivity between segments.',
        tags: ['Packet Tracer', 'VLAN', 'Trunking', 'Subnetting'],
        categories: ['redes'],
      },
      {
        title: 'This portfolio',
        description:
          'A bilingual site with dark mode built with Astro, Tailwind CSS and React, deployed automatically to GitHub Pages with GitHub Actions.',
        tags: ['Astro', 'Tailwind', 'React', 'GitHub Actions'],
        categories: ['web'],
        code: 'https://github.com/Rakroft/rakroft.github.io',
      },
      {
        title: 'AI-assisted web development',
        description:
          'Prototyping interactive websites in HTML5, CSS3 and JavaScript, using generative AI to speed up coding, refine responsive layouts and debug issues.',
        tags: ['HTML5', 'CSS3', 'JavaScript', 'AI'],
        categories: ['web'],
        code: 'https://github.com/Rakroft/Rakroft',
        site: 'https://rakroft.github.io/Rakroft/',
      },
    ] as Project[],
  },
  education: {
    title: 'Education',
    current: 'In progress',
    items: [
      {
        period: '2025 — 2027',
        title: 'Higher VET Diploma in Network Computer Systems Administration (ASIR)',
        place: 'Digitech FP · Barcelona',
        description: 'Network operating systems, services, networking, virtualization, security and databases.',
        current: true,
      },
      {
        period: '2023 — 2025',
        title: 'Baccalaureate in Science & Technology',
        place: 'Jesuïtes El Clot · Barcelona',
        description: 'Science and technology track: mathematics, physics and technology.',
        current: false,
      },
    ],
  },
  stack: {
    title: 'Stack',
    intro: 'Tools and technologies I use in class and in my own labs.',
    groups: [
      {
        name: 'Systems',
        items: [
          { name: 'Windows Server', detail: 'AD DS, DNS, DHCP, GPO' },
          { name: 'Debian / Ubuntu Server', detail: 'CLI, SSH, cron, permissions' },
          { name: 'Windows 10 / 11', detail: 'Support & troubleshooting' },
        ],
      },
      {
        name: 'Networking',
        items: [
          { name: 'TCP/IP · OSI', detail: 'VLSM, CIDR' },
          { name: 'VLANs & trunks', detail: 'Segmentation' },
          { name: 'Cisco Packet Tracer', detail: 'Simulation' },
          { name: 'Diagnostics', detail: 'ping, traceroute, ss, ip' },
        ],
      },
      {
        name: 'Virtualization',
        items: [
          { name: 'VMware Workstation', detail: 'Labs' },
          { name: 'VirtualBox', detail: 'Internal networks' },
          { name: 'Proxmox VE', detail: 'Homelab' },
          { name: 'Snapshots', detail: 'Fast recovery' },
        ],
      },
      {
        name: 'Programming',
        items: [
          { name: 'Python', detail: 'Logic & scripts' },
          { name: 'Bash', detail: 'Automation' },
          { name: 'MySQL', detail: 'Queries' },
        ],
      },
      {
        name: 'Web & tools',
        items: [
          { name: 'HTML · CSS · JavaScript', detail: 'Layout' },
          { name: 'Astro · Tailwind · React', detail: 'This portfolio' },
          { name: 'Git · GitHub', detail: 'Version control' },
          { name: 'Generative AI', detail: 'Prototyping & debugging' },
        ],
      },
    ],
  },
  contact: {
    title: "Let's talk",
    text: "If you're looking for an intern or a junior profile in systems, networking or IT support, drop me a line. I'd be happy to chat.",
    emailLabel: 'Write to me',
    details: [
      { label: 'Location', value: 'Barcelona, Spain' },
      { label: 'Availability', value: 'Immediate · on-site, hybrid or remote' },
      { label: 'Looking for', value: 'Internship (FCT / dual) or first junior role' },
    ],
  },
  footer: {
    built: 'Designed and built with Astro, Tailwind and React.',
    top: 'Back to top',
  },
};
