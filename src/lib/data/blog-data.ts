import blogImage1 from "@/images/blogs/blog-1.avif";
import blogImage2 from "@/images/blogs/blog-2.avif";
import blogImage3 from "@/images/blogs/blog-3.avif";
import blogImage4 from "@/images/blogs/blog-4.avif";
import blogImage5 from "@/images/blogs/blog-5.avif";
import blogImage6 from "@/images/blogs/blog-6.avif";
import blogImage7 from "@/images/blogs/blog-7.avif";

import userImage1 from "@/images/team/team-1.jpeg";
import userImage2 from "@/images/team/team-2.jpeg";
import userImage3 from "@/images/team/team-3.jpeg";
import userImage4 from "@/images/team/team-4.jpeg";
import userImage5 from "@/images/team/team-5.jpeg";

export const blogsData = [
  {
    title: "Unlocking the Potential of UX Design in Today’s Digital Landscape",
    subtitle:
      "Discover the key principles and practices that drive successful user experiences in today's rapidly evolving digital landscape. Learn how to create intuitive interfaces that captivate audiences.",
    createdAt: "2024-04-01",
    thumbnail: blogImage1,
  },
  {
    title: "The Importance of User-Centered Design",
    subtitle: "Why Putting Users First Leads to Better Products",
    createdAt: "2024-04-01",
    thumbnail: blogImage2,
  },
  {
    title: "Mastering the Art of Visual Hierarchy",
    subtitle: "Creating More Effective Designs Through Visual Prioritization",
    createdAt: "2024-03-25",
    thumbnail: blogImage3,
  },
  {
    title: "Navigating the World of Responsive Design",
    subtitle: "Tips and Tricks for Crafting Seamless Multi-Device Experiences",
    createdAt: "2024-03-18",
    thumbnail: blogImage4,
  },
  {
    title: "Understanding the Basics of UX Research",
    subtitle: "A Beginner's Guide to Gathering User Insights",
    createdAt: "2024-03-10",
    thumbnail: blogImage5,
  },
  {
    title: "The Power of Prototyping in Design",
    subtitle: "How Prototypes Drive Innovation and Improve Collaboration",
    createdAt: "2024-03-03",
    thumbnail: blogImage6,
  },
  {
    title: "Designing for Accessibility: A Comprehensive Guide",
    subtitle: "Ensuring Inclusivity in Your Digital Products",
    createdAt: "2024-02-25",
    thumbnail: blogImage7,
  },
];

export const tags = [
  { name: "UI Design", slug: "ui-design" },
  { name: "UX Design", slug: "ux-design" },
  { name: "Responsive Design", slug: "responsive-design" },
  { name: "Prototyping", slug: "prototyping" },
  { name: "User Research", slug: "user-research" },
  { name: "Mobile Design", slug: "mobile-design" },
  { name: "Accessibility", slug: "accessibility" },
  { name: "Visual Hierarchy", slug: "visual-hierarchy" },
  { name: "Brand Consistency", slug: "brand-consistency" },
  { name: "Emotional Design", slug: "emotional-design" },
  { name: "Color Theory", slug: "color-theory" },
  { name: "Innovation", slug: "innovation" },
  { name: "Trends", slug: "trends" },
  { name: "Best Practices", slug: "best-practices" },
  { name: "User Engagement", slug: "user-engagement" },
];

export const categories = [
  { name: "UI Design", slug: "ui-design" },
  { name: "UX Design", slug: "ux-design" },
  { name: "Mobile App Design", slug: "mobile-app-design" },
  { name: "Web Design", slug: "web-design" },
  { name: "User Research", slug: "user-research" },
  { name: "Prototyping", slug: "prototyping" },
  { name: "Accessibility", slug: "accessibility" },
  { name: "Color Theory", slug: "color-theory" },
  { name: "Design Trends", slug: "design-trends" },
  { name: "Inclusive Design", slug: "inclusive-design" },
  { name: "User Engagement", slug: "user-engagement" },
  { name: "Digital Strategy", slug: "digital-strategy" },
  { name: "Visual Design", slug: "visual-design" },
  { name: "Interaction Design", slug: "interaction-design" },
  { name: "Content Strategy", slug: "content-strategy" },
];

export const blogComments = [
  {
    comment:
      "Thank you for this insightful post! I've been struggling with time management lately, and your tips are really helpful.",
    createdAt: "2024-04-14T12:00:00Z",
    author: {
      name: "John Doe",
      image: userImage1,
    },
    replies: [],
  },
  {
    comment:
      "I couldn't agree more! Effective time management is crucial in today's busy world. Your suggestions are practical and easy to implement.",
    createdAt: "2024-04-14T13:00:00Z",
    author: {
      name: "Emily Brown",
      image: userImage2,
    },
    replies: [
      {
        comment:
          "Absolutely, Emily! It's all about finding what works best for you and sticking to it.",
        createdAt: "2024-04-14T13:10:00Z",
        author: {
          name: "Bob Johnson",
          image: userImage3,
        },
      },
    ],
  },
  {
    comment:
      "This post couldn't have come at a better time! I've been feeling overwhelmed with my workload, and your advice gives me hope that I can get back on track.",
    createdAt: "2024-04-14T14:00:00Z",
    author: {
      name: "Alice Smith",
      image: userImage5,
    },
    replies: [
      {
        comment:
          "You're not alone, Alice. We're all in this together! Remember to take it one step at a time.",
        createdAt: "2024-04-14T14:05:00Z",
        author: {
          name: "John Doe",
          image: userImage4,
        },
      },
    ],
  },
];

export const blogDetails = [
  {
    type: "h3",
    lineHeight: 2,
    align: "left",
    children: [{ text: "1. Set Clear Goals", bold: true }],
    id: "x4vvx",
  },
  {
    type: "p",
    align: "left",
    children: [
      {
        text: "Before you start managing your time, it's essential to set clear and achievable goals. Identify what you want to accomplish and break it down into smaller, actionable tasks.",
      },
    ],
    id: "ifevs",
    lineHeight: 2,
  },
  {
    type: "h3",
    lineHeight: 2,
    align: "left",
    children: [{ text: "2. Prioritize Your Tasks", bold: true }],
    id: "gdad0",
  },
  {
    type: "p",
    align: "left",
    children: [
      {
        text: "Not all tasks are created equal. Prioritize your tasks based on their importance and urgency. Focus on completing high-priority tasks first to ensure you're making progress towards your goals.",
      },
    ],
    id: "6o99c",
    lineHeight: 2,
  },
  {
    type: "h3",
    lineHeight: 2,
    align: "left",
    children: [{ text: "3. Use a Calendar or Planner", bold: true }],
    id: "kq9hz",
  },
  {
    type: "p",
    align: "left",
    children: [
      {
        text: "Utilize a calendar or planner to organize your schedule and keep track of important deadlines and appointments. Set reminders and allocate specific time slots for each task to stay on track.",
      },
    ],
    id: "ijrpc",
    lineHeight: 2,
  },
  {
    type: "h3",
    lineHeight: 2,
    align: "left",
    children: [{ text: "4. Minimize Distractions", bold: true }],
    id: "fn6oi",
  },
  {
    type: "p",
    align: "left",
    children: [
      {
        text: "Avoid distractions such as social media, email notifications, or unnecessary meetings that can derail your focus and productivity. Create a conducive work environment free from distractions to maximize your efficiency.",
      },
    ],
    id: "8vx6s",
    lineHeight: 2,
  },
  {
    type: "h3",
    lineHeight: 2,
    align: "left",
    children: [{ text: "5. Break Tasks into Smaller Steps", bold: true }],
    id: "kgdm4",
  },
  {
    type: "p",
    align: "left",
    children: [
      {
        text: "If you're facing a large or daunting task, break it down into smaller, more manageable steps. This approach makes the task less overwhelming and allows you to make progress incrementally.",
      },
    ],
    id: "07g9f",
    lineHeight: 2,
  },
  {
    type: "h3",
    lineHeight: 2,
    align: "left",
    children: [{ text: "6. Set Time Limits", bold: true }],
    id: "zlfel",
  },
  {
    type: "p",
    align: "left",
    children: [
      {
        text: "Allocate specific time limits for each task to prevent them from dragging on indefinitely. Use techniques such as the Pomodoro Technique, which involves working for 25 minutes followed by a short break, to maintain focus and productivity.",
      },
    ],
    id: "y7ppu",
    lineHeight: 2,
  },
  {
    type: "h3",
    lineHeight: 2,
    align: "left",
    children: [{ text: "7. Learn to Delegate", bold: true }],
    id: "h92h4",
  },
  {
    type: "p",
    align: "left",
    children: [
      {
        text: "Recognize when you're overwhelmed or when tasks can be better handled by someone else. Delegate tasks that are outside your expertise or that can be done more efficiently by others, freeing up your time for more critical activities.",
      },
    ],
    id: "jee0u",
    lineHeight: 2,
  },
  {
    type: "h3",
    lineHeight: 2,
    align: "left",
    children: [{ text: "8. Take Regular Breaks", bold: true }],
    id: "i6vtj",
  },
  {
    type: "p",
    align: "left",
    children: [
      {
        text: "Rest and relaxation are essential for maintaining productivity and avoiding burnout. Take regular breaks throughout the day to recharge and rejuvenate your mind and body.",
      },
    ],
    id: "6ce12",
    lineHeight: 2,
  },
  {
    type: "h3",
    lineHeight: 2,
    align: "left",
    children: [{ text: "9. Review and Adjust", bold: true }],
    id: "u15a8",
  },
  {
    type: "p",
    align: "left",
    children: [
      {
        text: "Periodically review your time management strategies and assess their effectiveness. Identify areas for improvement and adjust your approach accordingly to optimize your productivity.",
      },
    ],
    id: "fuo52",
    lineHeight: 2,
  },
  {
    type: "h3",
    lineHeight: 2,
    align: "left",
    children: [{ text: "10. Practice Self-Discipline", bold: true }],
    id: "ievys",
  },
  {
    type: "p",
    align: "left",
    children: [
      {
        text: "Effective time management requires discipline and commitment. Stay disciplined in sticking to your schedule and following through with your plans, even when faced with challenges or distractions.",
      },
    ],
    id: "he2a8",
    lineHeight: 2,
  },
  {
    id: "1",
    type: "p",
    children: [
      {
        text: "By implementing these tips into your daily routine, you can enhance your time management skills and achieve greater productivity and success in all areas of your life.Write content",
      },
    ],
    lineHeight: 2,
  },
];
