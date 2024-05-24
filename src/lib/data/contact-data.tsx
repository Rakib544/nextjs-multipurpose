import { ChatIcon, NotificationIcon, PhoneIcon } from "@/components/icons";
import { MapPin } from "lucide-react";

export const contactData = [
  {
    id: 1,
    title: "Chat to sales",
    subtitle: "Speak to our friendly teams",
    link: "",
    icon: <ChatIcon className="h-5 w-5 text-[#6666FF]" />,
    btnText: "Chat to sales",
  },
  {
    id: 2,
    title: "Chat to support",
    subtitle: "Write here to help",
    link: "",
    icon: <NotificationIcon className="h-5 w-5 text-[#6666FF]" />,
    btnText: "Chat to support",
  },
  {
    id: 3,
    title: "Visit us",
    subtitle: "Visit our office HQ",
    link: "",
    icon: <MapPin className="h-5 w-5 fill-white text-[#6666FF]" />,
    btnText: "Get Direction",
  },
  {
    id: 4,
    title: "Call us",
    subtitle: "Monday-Fri from 8am to 5pm",
    link: "",
    icon: <PhoneIcon className="h-5 w-5 text-[#6666FF]" />,
    btnText: "Call our team",
  },
];
