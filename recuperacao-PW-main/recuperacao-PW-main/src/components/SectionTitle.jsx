// Título de seção no estilo do protótipo: Roboto Light, cinza claro,
// grande ("About", "Main Focus/Mission Statement", "Our Projects", ...).
export default function SectionTitle({ children, as: Tag = 'h2', className = '' }) {
  return <Tag className={`section-title ${className}`}>{children}</Tag>
}
