import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Map My Memoir",
      description: `
Tech Stack:
React
CSS
Firebase
Supabase
Node.js

About the Project:
Map My Memoir is a travel journal web application where users can save memories with photos, notes, and location pins on a world map. It focuses on visual storytelling instead of long text lists.

Key Features:
• Secure user authentication
• Interactive world map
• Image-based memory journaling
      `,
      link: "https://mini-project-map-my-memoir.vercel.app/",
      status: "completed",
    },

    {
      id: 2,
      title: "MiraLook",
      description: `      Tech Stack:
Figma
Build.io
Xano

About the Project:
MiraLook is an AI-powered smart chatbot and mobile fashion assistant designed to provide outfit recommendations, skincare guidance, and personalized styling support.

Current Focus:
• Smart mirror UI experience
• Personalized styling logic
• AI-driven fashion suggestions

 `,
      status: "ongoing",
    },
  ];

  return (
    <div className="animate-fade-in">
      <h1 className="text-5xl mb-12">Projects</h1>

      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project) => (
          <div
            key={project.id}
            className="border border-border rounded-lg p-8 hover:border-primary transition-all duration-300 group"
          >
            <h2 className="text-2xl mb-2 font-medium group-hover:text-primary transition-colors">
              {project.title}
            </h2>

            {project.status === "ongoing" && (
              <span className="inline-block mb-4 text-xs px-3 py-1 rounded-full bg-primary/10 text-primary">
                Ongoing
              </span>
            )}

            <p className="text-muted-foreground font-light mb-6 leading-relaxed whitespace-pre-line">
              {project.description}
            </p>

            {project.link ? (
              <Link to={project.link} target="_blank" rel="noopener noreferrer">
                <Button
                  variant="outline"
                  className="border-primary hover:bg-primary hover:text-primary-foreground group"
                >
                  View Project
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            ) : (
              <Button variant="outline" disabled>
                In Progress
              </Button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;