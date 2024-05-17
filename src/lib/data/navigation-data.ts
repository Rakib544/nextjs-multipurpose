function generateUniqueId() {
  return Math.random() + new Date().getTime();
}

export const navLinks = [
  {
    id: 1,
    label: "Homepage",
    href: "",
    submenus: [
      {
        id: generateUniqueId(),
        label: "Sass Agency",
        href: "/demo-1",
        submenus: [],
      },
      {
        id: generateUniqueId(),
        label: "SEO Agency",
        href: "/demo-2",
        submenus: [],
      },
      {
        id: generateUniqueId(),
        label: "Digital Agency",
        href: "/demo-3",
        submenus: [],
      },
      {
        id: generateUniqueId(),
        label: "App Landing Page",
        href: "/demo-4",
        submenus: [],
      },
      {
        id: generateUniqueId(),
        label: "Digital Studio",
        href: "/demo-5",
        submenus: [],
      },
    ],
  },
  {
    id: generateUniqueId(),
    label: "Pages",
    href: "",
    submenus: [
      {
        id: generateUniqueId(),
        label: "About",
        href: "",
        submenus: [
          {
            id: generateUniqueId(),
            label: "About-1",
            href: "/about-1",
          },
          {
            id: generateUniqueId(),
            label: "About-2",
            href: "/about-2",
          },
        ],
      },
      {
        id: generateUniqueId(),
        label: "Team",
        href: "",
        submenus: [
          {
            id: generateUniqueId(),
            label: "Our Teams",
            href: "/teams",
          },
          {
            id: generateUniqueId(),
            label: "Team Details",
            href: "/team-details",
          },
        ],
      },
      {
        id: generateUniqueId(),
        label: "Contact",
        href: "",
        submenus: [
          {
            id: generateUniqueId(),
            label: "Contact-1",
            href: "/contact-1",
          },
          {
            id: generateUniqueId(),
            label: "Contact-2",
            href: "/contact-2",
          },
        ],
      },
      {
        id: generateUniqueId(),
        label: "Portfolio",
        href: "",
        submenus: [
          {
            id: generateUniqueId(),
            label: "Portfolio",
            href: "/portfolios",
          },
          {
            id: generateUniqueId(),
            label: "Portfolio Details",
            href: "/portfolio-details",
          },
        ],
      },
      {
        id: generateUniqueId(),
        label: "FAQ",
        href: "",
        submenus: [
          {
            id: generateUniqueId(),
            label: "Faq-1",
            href: "/faq-1",
          },
          {
            id: generateUniqueId(),
            label: "Faq-2",
            href: "/faq-2",
          },
        ],
      },
      {
        id: generateUniqueId(),
        label: "Services",
        href: "",
        submenus: [
          {
            id: generateUniqueId(),
            label: "Services-1",
            href: "/services-1",
          },
          {
            id: generateUniqueId(),
            label: "Services-2",
            href: "/services-2",
          },
          {
            id: generateUniqueId(),
            label: "Service details",
            href: "/service-details",
          },
        ],
      },
      {
        id: generateUniqueId(),
        label: "Career",
        href: "",
        submenus: [
          {
            id: generateUniqueId(),
            label: "Career-1",
            href: "/career-1",
          },
          {
            id: generateUniqueId(),
            label: "Career-2",
            href: "/career-2",
          },
          {
            id: generateUniqueId(),
            label: "Job Details",
            href: "/jobs/1",
          },
          {
            id: generateUniqueId(),
            label: "Job Apply",
            href: "/jobs/1/apply",
          },
        ],
      },

      {
        id: generateUniqueId(),
        label: "Utility",
        href: "",
        submenus: [
          {
            id: generateUniqueId(),
            label: "404 Not Found",
            href: "/not-found",
          },
          {
            id: generateUniqueId(),
            label: "Login",
            href: "/auth/signin",
          },
          {
            id: generateUniqueId(),
            label: "Register",
            href: "/auth/signup",
          },
          {
            id: generateUniqueId(),
            label: "Forget Password",
            href: "/auth/forget-password",
          },
          {
            id: generateUniqueId(),
            label: "Terms and Condition",
            href: "/terms-condition",
          },
          {
            id: generateUniqueId(),
            label: "Privacy and Policy",
            href: "/privacy-policy",
          },
        ],
      },
      {
        id: generateUniqueId(),
        label: "Pricing",
        href: "",
        submenus: [
          {
            id: generateUniqueId(),
            label: "Pricing-1",
            href: "/pricing-1",
          },
          {
            id: generateUniqueId(),
            label: "Pricing-2",
            href: "/pricing-2",
          },
          {
            id: generateUniqueId(),
            label: "Pricing-3",
            href: "/pricing-3",
          },
        ],
      },
      {
        id: generateUniqueId(),
        label: "Case Studies",
        href: "",
        submenus: [
          {
            id: generateUniqueId(),
            label: "Case studies",
            href: "/case-studies",
          },
          {
            id: generateUniqueId(),
            label: "Case St. Details",
            href: "/case-studies-details",
          },
        ],
      },
    ],
  },
  {
    id: 5,
    label: "Blogs",
    href: "",
    submenus: [
      {
        id: generateUniqueId(),
        label: "Blog-1",
        href: "/blogs-1",
        submenus: [],
      },
      {
        id: generateUniqueId(),
        label: "Blog-2",
        href: "/blogs-2",
        submenus: [],
      },
      {
        id: generateUniqueId(),
        label: "Blog-3",
        href: "/blogs-3",
        submenus: [],
      },
      {
        id: generateUniqueId(),
        label: "Blog-4",
        href: "/blogs-4",
        submenus: [],
      },
      {
        id: generateUniqueId(),
        label: "Blog Details",
        href: "/blog-details",
        submenus: [],
      },
    ],
  },
  {
    id: generateUniqueId(),
    label: "Dashboard",
    href: "/dashboard",
    submenus: [],
  },
  {
    id: generateUniqueId(),
    label: "Documentation",
    href: "/docs",
    submenus: [],
  },
];
