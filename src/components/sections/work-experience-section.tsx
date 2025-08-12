import { motion } from "motion/react";
import { MapPin, Calendar } from "lucide-react";
import SectionHeading from "../layout/section-heading";
import { workExperiences, type WorkExperience } from "@/lib/data";

function ExperienceCard({
  experience,
  index,
  isLast,
}: {
  experience: WorkExperience;
  index: number;
  isLast: boolean;
}) {
  return (
    <div className="flex relative gap-6 md:gap-8">
      {/* Timeline */}
      <div className="flex relative flex-col items-center">
        {/* Circle */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true, margin: "100px 0px 0px 0px" }}
          transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.1 }}
          className="relative z-10 w-4 h-4 rounded-full shadow-lg bg-primary"
        >
          <div className="absolute -inset-2 rounded-full animate-pulse bg-primary/20" />
        </motion.div>

        {/* Connecting Line */}
        {!isLast && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            whileInView={{ height: "100%", opacity: 1 }}
            viewport={{ once: true, margin: "100px 0px 0px 0px" }}
            transition={{
              duration: 0.8,
              ease: "easeOut",
              delay: index * 0.1 + 0.3,
            }}
            className="bg-primary/30 absolute top-4 min-h-[120px] w-0.5 flex-1"
          />
        )}
      </div>

      {/* Content Card */}
      <motion.div
        initial={{ x: 20, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true, margin: "100px 0px 0px 0px" }}
        transition={{
          duration: 0.8,
          ease: "easeOut",
          delay: index * 0.1 + 0.2,
        }}
        className="flex-1 p-6 space-y-4 rounded-2xl bg-card shadow-xs"
      >
        <div className="space-y-2">
          <h3 className="text-xl font-semibold font-display text-primary">
            {experience.position}
          </h3>
          <p className="font-medium text-foreground">{experience.company}</p>
          <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
            <div className="flex gap-1 items-center">
              <Calendar className="w-4 h-4" />
              <span>{experience.duration}</span>
            </div>
            <div className="flex gap-1 items-center">
              <MapPin className="w-4 h-4" />
              <span>{experience.location}</span>
            </div>
          </div>
        </div>

        <div className="space-y-3">
          <ul className="space-y-2">
            {experience.description.map((item, itemIndex) => (
              <li
                key={itemIndex}
                className="flex gap-2 items-start text-sm leading-relaxed text-muted-foreground"
              >
                <span className="text-primary mt-2 size-1.5 flex-shrink-0 rounded-full bg-current" />
                {item}
              </li>
            ))}
          </ul>

          {experience.technologies && (
            <div className="pt-2">
              <div className="flex flex-wrap gap-2">
                {experience.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </motion.div>
    </div>
  );
}

export default function WorkExperienceSection() {
  return (
    <section id="experience" className="container mx-auto space-y-12 max-w-4xl">
      <SectionHeading title="Work Experience" />
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="space-y-8"
      >
        {workExperiences.map((experience, index) => (
          <ExperienceCard
            key={index}
            experience={experience}
            index={index}
            isLast={index === workExperiences.length - 1}
          />
        ))}
      </motion.div>
    </section>
  );
}
