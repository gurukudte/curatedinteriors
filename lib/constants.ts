import { Service, Testimonial, WhyChooseUsItem } from "@/types";

export const SERVICES: Service[] = [
  {
    id: "1",
    title: "Admission Support",
    description:
      "Specialized in innovative recruitment strategies and targeted marketing campaigns designed to connect you with highly passionate students.",
    category: "Education",
    icon: "graduation-cap",
    image: "/services/admission.jpg",
  },
  {
    id: "2",
    title: "Internship Placement",
    description:
      "A diverse range of internships curated across various industries, matching your skills and interests with leading companies.",
    category: "Career",
    icon: "briefcase",
    image: "/services/internship.jpg",
  },
  // Add all other services with images
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "1",
    name: "Dr. Sarah Johnson",
    role: "Medical College Director",
    content:
      "Danstar transformed our admission process, helping us attract top-tier students from across the country. Their innovative approach doubled our applications.",
    avatar: "/testimonials/1.jpg",
  },
  // Add more testimonials
];

export const WHY_CHOOSE_US: WhyChooseUsItem[] = [
  {
    id: "1",
    title: "Proven Expertise",
    description:
      "Our team brings decades of combined experience in healthcare education and placement.",
    icon: "award",
    stat: "15+ Years",
  },
  // Add other items
];
