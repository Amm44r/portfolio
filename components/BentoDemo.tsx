import { BentoCard, BentoGrid } from "@/components/ui/BentoGrid";
import { BellIcon, CalendarIcon, FileTextIcon, GlobeIcon, InputIcon } from "@radix-ui/react-icons";

const features = [
    {
        Icon: FileTextIcon,
        name: "HRMS: Design strategy",
        description: "2024",
        href: "/hrms-case-study",
        cta: "Learn more",
        className: "col-span-3 md:col-span-1 aspect-w-1 aspect-h-1",
        background: <img 
        src="/images/test.jpg"
        alt="HRMS"
        className="w-full"/>,
      },
      {
        Icon: FileTextIcon,
        name: "Web design agency: Visual identity",
        description: "2023",
        href: "/web-design-agency",
        cta: "Learn more",
        className: "col-span-3 md:col-span-1 aspect-w-1 aspect-h-1",
        background: <img 
        src="/images/indx.jpg"
        alt="indx agency"
        className="w-full"/>,
      },
      {
        Icon: FileTextIcon,
        name: "",
        description: "",
        href: "",
        cta: "Learn more",
        className: "col-span-3 md:col-span-1 aspect-w-1 aspect-h-1 hidden md:block",
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
