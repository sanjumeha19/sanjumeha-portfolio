import { motion, type Variants } from "framer-motion";

// ✅ import images properly
import login from "@/assets/loginscreen.jpeg";
import profile from "@/assets/profilepage.jpeg";
import domain from "@/assets/domainpage.jpeg";
import subdomain from "@/assets/subdomain.jpeg";
import jobsearch from "@/assets/jobsearchpage.jpeg";
import menu from "@/assets/menupage.jpeg";
import certificate from "@/assets/CMR-Certificate.png";

// soft fade-up animation
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const Hackathons = () => {
  return (
    <div className="space-y-20">

      {/* Intro */}
      <motion.section
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <h1 className="text-4xl font-light mb-4">Hackathons</h1>
        <p className="text-muted-foreground max-w-2xl">
          Experiences where I collaborated with others, worked under time
          pressure, and built meaningful solutions through thoughtful design
          and development.
        </p>
      </motion.section>

      {/* Timeline */}
      <section className="relative pl-8">
        {/* Vertical line */}
        <div className="absolute left-2 top-0 h-full w-px bg-border" />

        {/* Hackathon Card */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative"
        >
          {/* Timeline dot */}
          <div
            className="absolute -left-[6px] top-6 w-4 h-4 rounded-full
            bg-background border-2 border-primary shadow-sm"
          />

          {/* Card */}
          <div
            className="ml-6 p-8 rounded-2xl border border-border
            bg-gradient-to-br from-background to-background/70
            shadow-sm hover:shadow-lg hover:border-primary/60
            transition-all duration-300"
          >
            {/* Header */}
            <h2 className="text-2xl font-light mb-1">
              CMR Hackathon — Hyderabad
            </h2>
            <p className="text-sm text-muted-foreground mb-6">
              8th & 9th Jan 2026 · 36-hour college-level hackathon · Team of 3
            </p>

            {/* Problem */}
            <div className="mb-4 text-sm leading-relaxed">
              <span className="text-xs uppercase tracking-wide text-muted-foreground">
                Problem
              </span>
              <p className="mt-1">
                Many students struggle to choose a career path due to lack of
                engaging and accessible guidance.
              </p>
            </div>

            {/* Solution */}
            <div className="mb-6 text-sm leading-relaxed">
              <span className="text-xs uppercase tracking-wide text-muted-foreground">
                Solution
              </span>
              <p className="mt-1">
                Developed a gamified career guidance platform using a website
                and a Flutter-based mobile application. Users explore career
                paths through trending courses, salary packages, job
                opportunities, domain exploration, and personalized
                recommendations. The solution focuses on intuitive UI flow
                and engaging visual feedback.
              </p>
            </div>

            {/* My Role */}
            <div className="p-4 rounded-xl bg-muted/40">
              <span className="text-xs uppercase tracking-wide text-muted-foreground">
                My Role
              </span>
              <p className="text-sm mt-1">
                Owned the design and development of the{" "}
                <span className="text-primary">
                  Flutter-based mobile app
                </span>
                , while two teammates built the website. Focused on UI flow,
                gamified interactions, and smooth navigation.
              </p>
            </div>

            {/* Tech Stack */}
            <div className="mt-6 flex flex-wrap gap-2">
              {["Flutter", "Dart", "Mobile UI/UX", "Team Collaboration"].map(
                (tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 text-xs rounded-full border border-border
                    text-muted-foreground hover:text-primary hover:border-primary/60
                    transition-colors cursor-default"
                  >
                    {tech}
                  </span>
                )
              )}
            </div>

            {/* Screenshots */}
            <div className="mt-10">
              <h3 className="text-sm font-medium mb-3">
                Mobile App Screenshots
              </h3>

              <div className="flex gap-4 overflow-x-auto pb-2">
                {[login, profile, domain, subdomain, jobsearch, menu].map(
                  (src, i) => (
                    <motion.img
                      key={i}
                      src={src}
                      alt={`App screen ${i + 1}`}
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                      className="h-72 rounded-2xl border border-border
                      shadow-sm bg-background"
                    />
                  )
                )}
              </div>
            </div>

            {/* Certificate */}
            <div className="mt-10">
              <p className="text-xs text-muted-foreground mb-2">
                Proof of participation
              </p>
              <img
                src={certificate}
                alt="CMR Hackathon Certificate"
                className="max-w-md rounded-2xl border border-border
                shadow-md bg-background"
              />
            </div>

            {/* Learning */}
            <div className="mt-10 border-l-2 border-primary pl-4">
              <p className="text-sm italic text-muted-foreground">
                What I learned: This hackathon strengthened my confidence in
                building user-first mobile experiences under tight deadlines,
                while communicating clearly and taking ownership within a team.
              </p>
            </div>

            {/* Closing line */}
            <p className="text-sm text-muted-foreground mt-6">
              This experience reinforced my love for building calm, intuitive
              mobile experiences under real-world pressure.
            </p>

            {/* GitHub link */}
            <div className="mt-6">
              <a
                href="https://github.com/sanjumeha19/Career_Guidance-App"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-primary hover:underline"
              >
                View full implementation on GitHub →
              </a>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default Hackathons;