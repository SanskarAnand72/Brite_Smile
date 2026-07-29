export const mockData = {
  settings: {
    heroHeadline: "BRITE SMILE DENTAL CARE —\nBest Multi Speciality Dental Clinic in Lucknow",
    heroSubheadline: "Expert dental care by Dr. Priyank Prakash — Teeth Whitening, Implants, Root Canal & Orthodontics in Lucknow at affordable prices. Your Smile Is Our Priority.",
    heroCtaText: "View Services",
    heroCtaLink: "#services",
    heroBgImageUrl: "",
    heroDoctorImageUrl: "",
    heroStatistics: [
      { label: "HAPPY PATIENTS", value: "5000+" },
      { label: "YEARS EXPERIENCE", value: "24+" },
      { label: "TREATMENTS", value: "30+" }
    ],
    contactPhone: "+91 94150 04719",
    contactEmail: "info@britesmiledental.com",
    contactAddress: "Lucknow, Uttar Pradesh",
    workingHours: "Mon-Sat: 10:00 AM - 8:00 PM",
    socialFacebook: "#",
    socialInstagram: "#",
    socialTwitter: "#",
    googleMapsEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3559.043598502334!2d80.9926861!3d26.8703831!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399be2c47a9e3cd3%3A0x6b71b76df479b12e!2sBrite%20Smile%20Dental%20Care!5e0!3m2!1sen!2sus!4v1714493322646!5m2!1sen!2sus"
  },
  navigation: [
    { label: "Home", href: "/#hero", order: 0, isEnabled: true },
    { label: "Services", href: "/#services", order: 1, isEnabled: true },
    { label: "About Us", href: "/#about", order: 2, isEnabled: true },
    { label: "Reviews", href: "/#testimonials", order: 3, isEnabled: true },
    { label: "Why Us", href: "/#why-us", order: 4, isEnabled: true },
    { label: "Contact", href: "/#contact", order: 5, isEnabled: true }
  ],
  services: [
    { id: "teeth-whitening", title: "Teeth Whitening", shortDescription: "Professional teeth whitening treatments that are safe, fast, and long-lasting.", icon: "tooth", isFeatured: true },
    { id: "dental-implants", title: "Dental Implants", shortDescription: "Permanent and natural-looking solutions using advanced titanium implant technology.", icon: "implant", isFeatured: true },
    { id: "orthodontics", title: "Orthodontics & Braces", shortDescription: "Complete orthodontic solutions including metal, ceramic braces and Invisalign.", icon: "braces", isFeatured: true },
    { id: "root-canal", title: "Root Canal Treatment", shortDescription: "Pain-free RCT using rotary endodontics and advanced anaesthesia techniques.", icon: "drill", isFeatured: true },
    { id: "dental-exams", title: "Check-ups & Exams", shortDescription: "Thorough examinations including digital X-rays and early cavity detection.", icon: "search", isFeatured: false },
    { id: "periodontics", title: "Gum Disease Treatment", shortDescription: "Expert care for bleeding gums and periodontitis.", icon: "shield", isFeatured: false }
  ],
  doctors: [
    {
      id: "dr-priyank",
      name: "Dr. Priyank Prakash",
      specialty: "Chief Dental Surgeon",
      bio: "With over 24 years of experience, Dr. Priyank Prakash is one of the most trusted names in modern dentistry in Lucknow.",
      image: "/images/doctor_profile.jpg",
      experienceYears: 24,
      isFeatured: true
    }
  ],
  testimonials: [
    { id: "1", patientName: "Aman Singh", rating: 5, content: "Best dental clinic in Lucknow. Dr. Priyank is very professional and the treatment was completely painless.", isFeatured: true, displayOrder: 1 },
    { id: "2", patientName: "Priya Sharma", rating: 5, content: "Got my teeth whitening done here. Amazing results! Highly recommended.", isFeatured: true, displayOrder: 2 },
    { id: "3", patientName: "Rahul Verma", rating: 5, content: "Very clean clinic and polite staff. The root canal treatment was done perfectly.", isFeatured: true, displayOrder: 3 }
  ],
  gallery: [
    { id: "1", title: "Modern Clinic", url: "/images/clinic_hero.jpg", category: "clinic", isBeforeAfter: false, isFeatured: true, displayOrder: 1 },
    { id: "2", title: "Advanced Equipment", url: "/images/gallery_1.jpg", category: "clinic", isBeforeAfter: false, isFeatured: true, displayOrder: 2 },
    { id: "3", title: "Technology", url: "/images/gallery_2.jpg", category: "clinic", isBeforeAfter: false, isFeatured: true, displayOrder: 3 }
  ],
  faqs: [
    { id: "1", question: "How often should I visit the dentist?", answer: "We recommend visiting every 6 months for a routine check-up and professional cleaning." },
    { id: "2", question: "Is root canal treatment painful?", answer: "With our advanced rotary endodontics and local anaesthesia, root canal treatments are completely painless." },
    { id: "3", question: "Do you offer EMIs for treatments?", answer: "Yes, we offer flexible payment options and EMIs for major treatments like braces and implants." }
  ]
};
