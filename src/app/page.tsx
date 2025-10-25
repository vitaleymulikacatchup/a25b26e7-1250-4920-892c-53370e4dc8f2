"use client"

import { ThemeProvider } from "@/providers/ThemeProvider";
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import HeroSplit from '@/components/sections/hero/HeroSplit';
import TextSplitAbout from '@/components/sections/about/TextSplitAbout';
import ProductCardTwo from '@/components/sections/product/ProductCardTwo';
import FeatureCardOne from '@/components/sections/feature/FeatureCardOne';
import TestimonialCardOne from '@/components/sections/testimonial/TestimonialCardOne';
import FaqBase from '@/components/sections/faq/FaqBase';
import ContactCenterForm from '@/components/sections/contact/ContactCenterForm';
import { Bed, Crown, HelpCircle, MessageCircle, Sparkles } from "lucide-react";

export default function Home() {
  return (
    <ThemeProvider
      defaultButtonVariant="shift-hover"
      defaultTextAnimation="reveal-blur"
      borderRadius="soft"
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingOverlay
          navItems={[
            { name: "Rooms", id: "rooms" },
            { name: "Amenities", id: "amenities" },
            { name: "About", id: "about" },
            { name: "Reviews", id: "reviews" },
            { name: "Contact", id: "contact" }
          ]}
          brandName="Grand Haven Hotel"
          button={{
            text: "Book Now",
            href: "contact"
          }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroSplit
          title="Experience Luxury Redefined"
          description="Indulge in unparalleled comfort and sophistication at Grand Haven Hotel, where every detail is crafted for your perfect stay."
          tag="Luxury Stay"
          tagIcon={Crown}
          imageSrc="https://images.pexels.com/photos/189295/pexels-photo-189295.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          imageAlt="Luxury hotel lobby with elegant interior design"
          imagePosition="right"
          buttons={[
            {
              text: "Book Your Stay",
              href: "contact"
            },
            {
              text: "Explore Rooms",
              href: "rooms"
            }
          ]}
        />
      </div>

      <div id="about" data-section="about">
        <TextSplitAbout
          title="Grand Haven Hotel"
          description={[
            "Nestled in the heart of the city, Grand Haven Hotel offers an extraordinary blend of contemporary elegance and timeless hospitality. Our commitment to excellence ensures every guest experiences the pinnacle of luxury accommodation.",
            "From meticulously designed suites to world-class amenities, we create unforgettable moments that transform ordinary stays into extraordinary memories."
          ]}
          buttons={[
            {
              text: "Our Story",
              href: "about"
            }
          ]}
        />
      </div>

      <div id="rooms" data-section="rooms">
        <ProductCardTwo
          title="Luxury Accommodations"
          description="Discover our collection of beautifully appointed rooms and suites, each designed to provide the ultimate comfort and sophistication."
          tag="Premium Rooms"
          tagIcon={Bed}
          products={[
            {
              id: "deluxe",
              brand: "Grand Haven",
              name: "Deluxe King Room",
              price: "$299/night",
              rating: 5,
              reviewCount: "847",
              imageSrc: "https://images.pexels.com/photos/3755585/pexels-photo-3755585.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Deluxe king room with modern furnishings"
            },
            {
              id: "suite",
              brand: "Grand Haven",
              name: "Executive Suite",
              price: "$599/night",
              rating: 5,
              reviewCount: "523",
              imageSrc: "https://images.pexels.com/photos/14917460/pexels-photo-14917460.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Executive suite with separate living area"
            },
            {
              id: "penthouse",
              brand: "Grand Haven",
              name: "Presidential Penthouse",
              price: "$1299/night",
              rating: 5,
              reviewCount: "186",
              imageSrc: "https://images.pexels.com/photos/8572163/pexels-photo-8572163.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Presidential penthouse with city views"
            }
          ]}
        />
      </div>

      <div id="amenities" data-section="amenities">
        <FeatureCardOne
          title="World-Class Amenities"
          description="Elevate your stay with our exceptional facilities designed for relaxation, wellness, and culinary excellence."
          tag="Premium Services"
          tagIcon={Sparkles}
          features={[
            {
              title: "Wellness Spa",
              description: "Rejuvenate your mind and body at our award-winning spa featuring therapeutic treatments and tranquil relaxation areas.",
              imageSrc: "https://images.pexels.com/photos/3902730/pexels-photo-3902730.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Luxury spa treatment room",
              button: {
                text: "Book Treatment",
                href: "contact"
              }
            },
            {
              title: "Fine Dining Restaurant",
              description: "Savor exquisite cuisine crafted by renowned chefs using the finest local and international ingredients.",
              imageSrc: "https://images.pexels.com/photos/2291636/pexels-photo-2291636.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Elegant hotel restaurant dining room",
              button: {
                text: "View Menu",
                href: "contact"
              }
            },
            {
              title: "Fitness Center",
              description: "Maintain your wellness routine in our state-of-the-art fitness facility equipped with premium exercise equipment.",
              imageSrc: "https://images.pexels.com/photos/4498574/pexels-photo-4498574.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Modern hotel fitness center",
              button: {
                text: "Learn More",
                href: "contact"
              }
            }
          ]}
        />
      </div>

      <div id="reviews" data-section="reviews">
        <TestimonialCardOne
          title="What Our Guests Say"
          description="Experience the exceptional service and luxury that makes Grand Haven Hotel the preferred choice for discerning travelers."
          tag="Guest Reviews"
          tagIcon={MessageCircle}
          testimonials={[
            {
              id: "1",
              name: "Sarah Johnson",
              role: "Executive Director",
              company: "Global Enterprises",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/789822/pexels-photo-789822.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Portrait of Sarah Johnson"
            },
            {
              id: "2",
              name: "Michael Chen",
              role: "Investment Manager",
              company: "Capital Partners",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/5716037/pexels-photo-5716037.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Portrait of Michael Chen"
            },
            {
              id: "3",
              name: "Emily Rodriguez",
              role: "Marketing Director",
              company: "Innovation Corp",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Portrait of Emily Rodriguez"
            },
            {
              id: "4",
              name: "David Thompson",
              role: "CEO",
              company: "TechVision LLC",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/3783546/pexels-photo-3783546.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Portrait of David Thompson"
            },
            {
              id: "5",
              name: "Amanda Foster",
              role: "Senior Partner",
              company: "Strategic Solutions",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Portrait of Amanda Foster"
            }
          ]}
        />
      </div>

      <div id="faq" data-section="faq">
        <FaqBase
          title="Frequently Asked Questions"
          description="Find answers to common questions about our hotel services, amenities, and booking policies."
          tag="Help Center"
          tagIcon={HelpCircle}
          faqs={[
            {
              id: "1",
              title: "What are your check-in and check-out times?",
              content: "Check-in is available from 3:00 PM and check-out is until 12:00 PM. Early check-in and late check-out can be arranged upon request and availability."
            },
            {
              id: "2",
              title: "Do you offer airport transportation?",
              content: "Yes, we provide complimentary airport shuttle service. Please contact our concierge at least 24 hours in advance to arrange transportation."
            },
            {
              id: "3",
              title: "What dining options are available?",
              content: "Our hotel features a fine dining restaurant, casual cafe, rooftop bar, and 24-hour room service to satisfy all your culinary needs."
            },
            {
              id: "4",
              title: "Is parking available at the hotel?",
              content: "We offer both valet parking and self-parking options. Valet parking is complimentary for suite guests, while standard rates apply for other room categories."
            },
            {
              id: "5",
              title: "What is your cancellation policy?",
              content: "Reservations can be cancelled up to 24 hours before arrival without penalty. Cancellations within 24 hours may incur a one-night room charge."
            }
          ]}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactCenterForm
          title="Reserve Your Luxury Experience"
          description="Ready to experience the pinnacle of hospitality? Contact our reservations team to book your stay or inquire about our services."
          inputs={[
            {
              name: "fullName",
              type: "text",
              placeholder: "Full Name",
              required: true
            },
            {
              name: "email",
              type: "email",
              placeholder: "Email Address",
              required: true
            },
            {
              name: "phone",
              type: "tel",
              placeholder: "Phone Number",
              required: true
            },
            {
              name: "checkIn",
              type: "date",
              placeholder: "Check-in Date",
              required: true
            },
            {
              name: "checkOut",
              type: "date",
              placeholder: "Check-out Date",
              required: true
            },
            {
              name: "guests",
              type: "number",
              placeholder: "Number of Guests",
              required: true
            }
          ]}
          textarea={{
            name: "specialRequests",
            placeholder: "Special requests or preferences...",
            rows: 4,
            required: false
          }}
          buttonText="Submit Reservation"
        />
      </div>
    </ThemeProvider>
  );
}