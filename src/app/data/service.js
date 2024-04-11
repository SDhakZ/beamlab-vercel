import boltAnimation from "@/app/assets/animations/boltAnimation.json";
import responsiveAnimation from "@/app/assets/animations/responsiveAnimation.json";
import securityAnimation from "@/app/assets/animations/securityAnimation.json";
import customDesignAnimation from "@/app/assets/animations/customDesignAnimation.json";

export const serviceData = [
  {
    id: 1,
    slug: "web-development",
    title: "Web Development",
    brief: "Superb design, flawless website—setting the internet's benchmark.",
    images: {
      default: "/services/web-dev-logo.png",
      hover: "/services/web-dev-logo-light.png",
    },
    serviceDetail: {
      heroTitle: "Desktop to Mobile Ready Web Design",
      heroImage: "/services/web-development/web-dev-hero.png",
      serviceBrief:
        "At Beamlab we specialize in delivering cutting-edge web development services tailored to meet the unique needs of businesses and organizations across various industries. Our team of experienced developers and designers is dedicated to crafting exceptional digital experiences that drive results. Explore our range of services below:",
      offerings: [
        "Static and Dynamic Website",
        "Complete Responsive Design",
        "Optimum User Experience Design",
        "SEO Optimization",
        "Website Maintenance and Support ",
      ],
      sellingProposition: [
        {
          title: "Fast Performance",
          description:
            "This section is designed to visually and interactively demonstrate the speed and performance advantages of your services.  Lorem ipsum is a very long lasting example of random words being displayed .",
          image: boltAnimation,
          imageWidth: "300px",
        },
        {
          title: "Complete Responsiveness",
          description:
            "This section is designed to visually and interactively demonstrate the speed and performance advantages of your services.  Lorem ipsum is a very long lasting example of random words being displayed .",
          image: responsiveAnimation,
          imageWidth: "300px",
        },
        {
          title: "Secured webiste",
          description:
            "This section is designed to visually and interactively demonstrate the speed and performance advantages of your services.  Lorem ipsum is a very long lasting example of random words being displayed .",
          image: securityAnimation,
          imageWidth: "400px",
        },
        {
          title: "Custom Design",
          description:
            "This section is designed to visually and interactively demonstrate the speed and performance advantages of your services.  Lorem ipsum is a very long lasting example of random words being displayed .",
          image: customDesignAnimation,
          imageWidth: "400px",
        },
      ],
    },
  },
  {
    id: 2,
    slug: "ai-implementation",
    title: "AI Implementation",
    brief: " Superb design, flawless website—setting the internet's benchmark.",
    images: {
      default: "/services/ai-implementation.png",
      hover: "/services/ai-implementation-light.png",
    },
  },
  {
    id: 3,
    slug: "mobile-app-development",
    title: "Mobile App Development",
    brief: " Superb design, flawless website—setting the internet's benchmark.",
    images: {
      default: "/services/mobile-app-dev.png",
      hover: "/services/mobile-app-dev-light.png",
    },
  },
];
