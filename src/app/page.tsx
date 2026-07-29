import { HeroSection } from "@/components/home/HeroSection";
import { StatsSection } from "@/components/home/StatsSection";
import { WhyChooseUsSection } from "@/components/home/WhyChooseUsSection";
import { ServicesSection } from "@/components/home/ServicesSection";
import { DoctorSection } from "@/components/home/DoctorSection";
import { GallerySection } from "@/components/home/GallerySection";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { FAQSection } from "@/components/home/FAQSection";
import { ContactSection } from "@/components/home/ContactSection";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Brite Smile Dental Care | Premium Dentistry in New York",
  description: "Experience world-class dental care with advanced technology and a gentle touch. Book your appointment today.",
};

import { mockData } from "@/lib/data/mock";

export default function Home() {
  const { settings } = mockData;

  const heroData = {
    ...settings,
    headline: settings.heroHeadline || "Premium Dental Care for Your Perfect Smile",
    subheadline: settings.heroSubheadline || "Experience world-class dentistry with our team of specialists.",
    ctaText: settings.heroCtaText || "Book an Appointment",
    ctaLink: settings.heroCtaLink || "/book",
    bgImageUrl: settings.heroBgImageUrl || "/images/clinic_hero.jpg",
    doctorImageUrl: settings.heroDoctorImageUrl || "/images/doctor_profile.jpg",
    whatsappNumber: settings.contactPhone || "15551234567"
  };

  const contactData = {
    address: settings.contactAddress || "123 Dental Street, Medical District\nNew York, NY 10001",
    phone: settings.contactPhone || "(555) 123-4567",
    email: settings.contactEmail || "hello@britesmile.com",
    workingHours: settings.workingHours || "Mon - Fri: 8:00 AM - 7:00 PM\nSat: 9:00 AM - 2:00 PM",
    googleMapsEmbedUrl: settings.googleMapsEmbedUrl || "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.9663095343008!2d-74.00425878459418!3d40.74076684379132!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259bf5c1654f3%3A0xc80f9cfce5383d5d!2sGoogle!5e0!3m2!1sen!2sus!4v1625068222101!5m2!1sen!2sus"
  };

  return (
    <>
      <HeroSection {...heroData} />
      <StatsSection />
      <WhyChooseUsSection />
      <ServicesSection />
      <DoctorSection />
      <GallerySection />
      <TestimonialsSection />
      <FAQSection />
      <ContactSection {...contactData} />
    </>
  );
}
