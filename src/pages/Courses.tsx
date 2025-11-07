import { Award, CheckCircle2 } from "lucide-react";

const Courses = () => {
  const courses = [
  {
    name: "Power BI",
    image: new URL("../assets/powerbi.png", import.meta.url).href,
  },
  {
    name: "Graphic Design, Basic UI/UX",
    image: new URL("../assets/uiux.png", import.meta.url).href,
  },
  
  {
    name: "Business Analysis & Process Management",
    image: new URL("../assets/buisness.png", import.meta.url).href,
  },
  {
    name: "Building a free Website with WordPress",
    image: new URL("../assets/wordpress.png", import.meta.url).href,
  },
  {
    name: "Introduction to Generative AI Studio",
    image: new URL("../assets/AI.png", import.meta.url).href,
  },
  {
    name: "Nptel - Introduction to Internet of Things",
    image: new URL("../assets/NPTEL.png", import.meta.url).href,
  },
];


  return (
    <div className="animate-fade-in">
  <h1 className="text-5xl mb-12">Certifications</h1>

  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl">
    {courses.map((course, index) => (
      <div
        key={index}
        className="p-6 border border-border rounded-lg hover:border-primary transition-all duration-300 group"
      >
        <div className="flex items-center gap-3 mb-4">
          <CheckCircle2 className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors" />
          <h3 className="text-xl font-light">{course.name}</h3>
          <Award className="ml-auto w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
        </div>

        <img
          src={course.image}
          alt={course.name}
          className="rounded-lg w-full h-auto max-h-[350px] object-contain border border-border group-hover:border-primary transition-all duration-300"
        />
      </div>
    ))}
  </div>
</div>

  );
};

export default Courses;
