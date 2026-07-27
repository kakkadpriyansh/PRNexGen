/**
 * JsonLd — injects a <script type="application/ld+json"> tag.
 * This is a server component (no "use client") so it renders in the initial HTML.
 */
interface JsonLdProps {
  schema: Record<string, unknown>
}

export default function JsonLd({ schema }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
