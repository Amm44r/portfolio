import { BentoCard, BentoGrid } from "@/components/ui/BentoGrid";
import { BellIcon, CalendarIcon, FileTextIcon, GlobeIcon, InputIcon } from "@radix-ui/react-icons";

const features = [
    {
        Icon: FileTextIcon,
        name: "HRMS: User provision system",
        description: "2024",
        href: "/hrms-case-study",
        cta: "Learn more",
        className: "col-span-3 md:col-span-1 aspect-w-1 aspect-h-1",
        background: <img 
        src="/images/test.jpg"
        className="w-full"/>,
      },
      {
        Icon: FileTextIcon,
        name: "Web design agency: Visual identity",
        description: "2023",
        href: "/web-design-agency",
        cta: "Learn more",
        className: "col-span-3 md:col-span-1 aspect-w-1 aspect-h-1",
        background: "",
      },
      {
        Icon: FileTextIcon,
        name: "",
        description: "",
        href: "",
        cta: "Learn more",
        className: "col-span-3 md:col-span-1 aspect-w-1 aspect-h-1",
        background: "",
      },
];

export async function BentoDemo() {
  return (
    <BentoGrid className="grid-rows-3 md:grid-rows-1"> {/* change md */}
      {features.map((feature) => (
        <BentoCard key={feature.name} {...feature} />
      ))}
    </BentoGrid>
  );
}
