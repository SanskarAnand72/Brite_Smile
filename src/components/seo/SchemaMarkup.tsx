import { mockData } from "@/lib/data/mock"

export function SchemaMarkup() {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "Dentist",
    "name": "Brite Smile Dental Care",
    "image": "https://britesmiledental.com/logo.png",
    "@id": "",
    "url": "https://britesmiledental.com",
    "telephone": mockData.settings.contactPhone,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "123 Dental Street, Medical District",
      "addressLocality": "New York",
      "addressRegion": "NY",
      "postalCode": "10001",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 40.6976637,
      "longitude": -74.1197639
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "08:00",
        "closes": "19:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Saturday",
        "opens": "09:00",
        "closes": "14:00"
      }
    ]
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
    />
  )
}
