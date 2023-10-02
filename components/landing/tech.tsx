import { siteConfig } from "@/config/site";

export default function Tech() {
  return (
    <section className="border-y container py-10 sm:py-20">
      <p className="text-2xl md:text-3xl font-medium mb-5">
        Technologies powering our platform
      </p>
      <div className="flex gap-x-3 gap-y-2 mx-auto flex-wrap">
        {siteConfig.tech.map((tech) => (
          <p
            className="border text-sm md:text-base rounded-lg px-3 py-[2px] cursor-pointer hover:bg-slate-900 hover:text-white transition-all duration-100"
            key={tech}
          >
            {tech}
          </p>
        ))}
      </div>
    </section>
  );
}
