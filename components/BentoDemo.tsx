import { BentoCard, BentoGrid } from "@/components/ui/BentoGrid";
import { BellIcon, CalendarIcon, FileTextIcon, GlobeIcon, InputIcon } from "@radix-ui/react-icons";

const features = [
    {
        Icon: FileTextIcon,
        name: "About me",
        description: "I have noting",
        href: "/",
        cta: "Learn more",
        className: "col-span-3 md:col-span-1",
        background: "",
      },
      {
        Icon: InputIcon,
        name: "Tech stack",
        description: "HTML, CSS, Tailwind, React.JS, Next.JS",
        href: "/",
        cta: "Learn more",
        className: "col-span-3 md:col-span-2",
        background: "",
      },
      {
        Icon: BellIcon, 
        name: "Extras",
        description: "Hackathons, certificates",
        href: "/",
        cta: "Learn more",
        className: "col-span-3 md:col-span-2",
        background: (
          ""
        ),
      },
      {
        Icon: CalendarIcon,
        name: "Keep in touch",
        description: "Use the calendar to filter your files by date.",
        className: "col-span-3 md:col-span-1",
        href: "/",
        cta: "Learn more",
        background: "",
      },
];

export async function BentoDemo() {
  return (
    <BentoGrid className="grid-rows-4 md:grid-rows-2 max-w-[1000px] mx-auto">
      {features.map((feature) => (
        <BentoCard key={feature.name} {...feature} />
      ))}
    </BentoGrid>
  );
}
