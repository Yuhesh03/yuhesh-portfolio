type SectionHeadingProps = {
  label: string
  title: string
  description?: string
  centered?: boolean
  light?: boolean
}

export default function SectionHeading({ label, title, description, centered = false, light = false }: SectionHeadingProps) {
  return (
    <div className={`section-heading${centered ? ' section-heading--centered' : ''}${light ? ' section-heading--light' : ''}`}>
      <span className="eyebrow"><span className="eyebrow-dot" />{label}</span>
      <h2>{title}</h2>
      {description && <p>{description}</p>}
    </div>
  )
}
