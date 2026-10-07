// Textos e informações do site, como no protótipo do Figma.

// Itens do menu de navegação (rótulos em inglês, como no protótipo).
export const navLinks = [
  { to: '/', label: 'Main', end: true },
  { to: '/galeria', label: 'Gallery' },
  { to: '/projetos', label: 'Projects' },
  { to: '/certificacoes', label: 'Certifications' },
  { to: '/contato', label: 'Contacts' },
]

// Informações de contato exibidas no rodapé e na página de contato.
export const contactInfo = {
  addressLines: ['1234 Sample Street', 'Austin Texas 78704'],
  phone: '512.333.2222',
  email: 'sampleemail@gmail.com',
}

// Redes sociais do rodapé.
export const social = [
  { name: 'Facebook', href: '#' },
  { name: 'Twitter', href: '#' },
  { name: 'LinkedIn', href: '#' },
  { name: 'Pinterest', href: '#' },
]

// Texto da seção "About" (lorem ipsum, como no protótipo).
export const aboutText =
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."

// Itens numerados da seção "Main Focus/Mission Statement".
export const missionItems = [
  {
    number: '1',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed efficitur, lectus et facilisis placerat.',
  },
  {
    number: '2',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed efficitur, lectus et facilisis placerat, magna mauris porttitor tortor, a auctor est felis ut nisl.',
  },
]

// Certificações exibidas na página /certificacoes.
export const certifications = [
  { title: 'ISO 9001', text: 'Quality management systems. Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
  { title: 'ISO 14001', text: 'Environmental management. Sed efficitur, lectus et facilisis placerat.' },
  { title: 'LEED', text: 'Green building certification. Magna mauris porttitor tortor, a auctor est felis ut nisl.' },
  { title: 'BIM Level 2', text: 'Building information modelling. Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
]
