import { Navbar } from "./Navbar"
import { mockData } from "@/lib/data/mock"

export function Header() {
  const { navigation, settings } = mockData;
  
  const navLinks = navigation.filter(item => item.isEnabled).map(item => ({
    name: item.label,
    href: item.href
  }));
  
  const defaultNavLinks = navLinks.length > 0 ? navLinks : [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Treatments", href: "/treatments" },
    { name: "Gallery", href: "/gallery" },
    { name: "Testimonials", href: "/#testimonials" },
    { name: "Contact", href: "/contact" },
  ]

  const contactPhone = settings.contactPhone || "(555) 123-4567"
  const clinicName = "Brite Smile Dental Care"
  
  return <Navbar navLinks={defaultNavLinks} contactPhone={contactPhone} clinicName={clinicName} />
}
