import { motion } from "framer-motion";
import SectionHeading from "../layout/section-heading";

export default function AboutSection() {
  return (
    <section id="about" className="container mx-auto h-full w-full space-y-8">
      <SectionHeading title="About Me" />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{
          bounce: false,
          duration: 1,
          ease: "easeOut",
          delay: 0.5,
        }}
        className="space-y-2"
      >
        <p className="text-base font-light leading-relaxed text-foreground md:text-lg lg:text-xl">
          My coding story started from back in my high-school days, back then my
          passion for coding ignited when I was introduced to{" "}
          <span className="font-semibold text-foreground">PHP</span> and later
          on one of the language's most popular framework called{" "}
          <a
            href="https://laravel.com"
            rel="noopener noreferrer"
            target="_blank"
            className="font-semibold text-foreground underline transition-colors hover:text-primary"
          >
            Laravel
          </a>
          , i made several small projects using these technologies paired with{" "}
          <span className="font-semibold text-foreground">MySQL</span> as the
          database. These early experiences laid the foundation for my journey
          into the world of{" "}
          <span className="font-semibold text-foreground">web development</span>
          .
        </p>
        <p className="text-base font-light leading-relaxed text-foreground md:text-lg lg:text-xl">
          However, it wasn't until I stumbled upon a certain{" "}
          <a
            href="https://youtube.com/playlist?list=PLFIM0718LjIWXagluzROrA-iBY9eeUt4w&si=pX6sixXlbWHTW2AC"
            rel="noopener noreferrer"
            target="_blank"
            className="text-nowrap font-semibold text-foreground underline transition-colors hover:text-primary"
          >
            JavaScript course
          </a>{" "}
          that my interest really peaked. Learning about the language and its
          powerful ecosystems and libraries like{" "}
          <span className="font-semibold text-foreground">React</span> for{" "}
          <span className="font-semibold text-foreground">front-end</span>{" "}
          development and eventually{" "}
          <span className="font-semibold text-foreground">TypeScript</span> as a
          static type checker for my projects{" "}
          <i>(because plain javascript is usually a pain)</i>, These
          technologies really opened up a whole new realm of possibilities for
          me.
        </p>
        <p className="text-base font-light leading-relaxed text-foreground md:text-lg lg:text-xl">
          While learning the afromentioned technologies, I found myself drawn to{" "}
          <span className="font-semibold text-foreground">back-end</span> side
          of web development as well, exploring back-end technologies like{" "}
          <span className="font-semibold text-foreground">Node.js</span> with{" "}
          <span className="font-semibold text-foreground">Express</span>, and
          also new languages like{" "}
          <span className="font-semibold text-foreground">Go</span> with the{" "}
          <span className="font-semibold text-foreground">Gin</span> library{" "}
          along with new databases like{" "}
          <span className="font-semibold text-foreground">PostgreSQL</span> and{" "}
          <span className="font-semibold text-foreground">MongoDB</span>. Each
          new skill I acquired fueled my curiosity and propelled me further
          along my coding journey, shaping me into the developer I am today.
        </p>
      </motion.div>
    </section>
  );
}
