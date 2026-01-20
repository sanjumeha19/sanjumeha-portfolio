import { MapPin, Award } from "lucide-react";
import { Button } from "@/components/ui/button";

const Home = () => {
  return (
    <div className="animate-fade-in space-y-16">
      {/* About Me Section */}
      <section>
        <h1 className="text-5xl mb-6">About Me</h1>
        <p className="text-lg leading-relaxed text-muted-foreground font-light">
      I am someone who enjoys creating with patience and quiet care, always drawn to simple and meaningful work. I learn gently but consistently, taking time to understand every detail. I love designs and ideas that feel calm, warm, and easy to connect with. I believe that growth doesn’t need to be loud — steady effort is enough. I pay attention to small things, because small things shape how something feels. I value kindness, clarity, and peaceful communication in everything I do. I want the things I create to bring a sense of comfort, softness, and quiet beauty.
        </p>
      </section>

      {/* Location */}
      <section>
        <h2 className="text-3xl mb-4">Location</h2>
        <div className="flex items-center gap-2 text-muted-foreground">
          <MapPin className="w-5 h-5" />
          <span className="font-light">Chennai, Tamil Nadu, India</span>
        </div>
      </section>

      {/* Education */}
      <section>
        <h2 className="text-3xl mb-6">Education</h2>
        <div className="space-y-6">
          <div className="border-l-2 border-primary pl-6">
            <h3 className="text-xl font-medium mb-1">BE Computer Science (2023–2027)</h3>
            <p className="text-muted-foreground font-light">SRM Easwari Engineering College — GPA: 8.49</p>
          </div>
          <div className="border-l-2 border-muted pl-6">
            <h3 className="text-xl font-medium mb-1">Prince Matriculation Higher Secondary School (2020–2023)</h3>
            <p className="text-muted-foreground font-light">Percentage: 78%</p>
          </div>
        </div>
      </section>

      {/* Hobbies / Interests */}
      <section>
        <h2 className="text-3xl mb-6">Hobbies / Interests</h2>
        <ul className="space-y-2 text-muted-foreground font-light">
          <li className="flex items-center gap-2">
            <span className="w-2 h-2 bg-primary rounded-full"></span>
            Paranormal Enthusiast
          </li>
          <li className="flex items-center gap-2">
            <span className="w-2 h-2 bg-primary rounded-full"></span>
            UI/UX designing
          </li>
          <li className="flex items-center gap-2">
            <span className="w-2 h-2 bg-primary rounded-full"></span>
            Exploring new design trends
          </li>
        </ul>
      </section>

      {/* Extra-Curricular */}
      <section>
        <h2 className="text-3xl mb-6">Extra-Curricular</h2>
        <div className="border border-border rounded-lg p-6">
          <div className="flex items-start gap-3 mb-4">
            <Award className="w-6 h-6 mt-1" />
            <div>
              <h3 className="text-xl font-medium mb-1">Makeup Artist</h3>
              
            </div>
          </div>
          <Button variant="outline" className="border-primary hover:bg-primary hover:text-primary-foreground">
            View Certificate
          </Button>
        </div>
      </section>

      {/* Skills */}
      <section>
        <h2 className="text-3xl mb-6">Skills</h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {/* Technical Skills */}
          <div>
            <h3 className="text-xl mb-4 font-medium">Technical Skills</h3>
            <ul className="space-y-2 text-muted-foreground font-light">
              <li>Java</li>
              <li>JavaScript</li>
              <li>HTML</li>
              <li>CSS</li>
              <li>SQL</li>
              <li>C / C++</li>
            </ul>
          </div>

          {/* Design & Tools */}
          <div>
            <h3 className="text-xl mb-4 font-medium">Design & Tools</h3>
            <ul className="space-y-2 text-muted-foreground font-light">
               <li>Power BI</li>
              <li>UI/UX (Figma)</li>
              <li>Adobe Illustrator</li>
              <li>Wix Studio</li>
              <li>WordPress</li>
              <li>Front-end Development</li>
              <li>Business Analysis</li>
              
            </ul>
          </div>

          {/* Soft Skills */}
          <div>
            <h3 className="text-xl mb-4 font-medium">Soft Skills</h3>
            <ul className="space-y-2 text-muted-foreground font-light">
              <li>Teamwork</li>
              <li>Event management</li>
              <li>Multitasking</li>
              <li>Time management</li>
              <li>Leadership</li>
              <li>Problem-solving</li>
            </ul>
          </div>
        </div>
      </section>
           

      {/* Resume Download */}
      <section>
  <h2 className="text-3xl mb-6">Resume</h2>
<a href="/sanjumeha-portfolio/SG_SANJU_MEHA.pdf" download>
    <Button className="border-primary hover:bg-primary hover:text-primary-foreground">
      Download Resume
    </Button>
  </a>
</section>

    </div>
  );
};

 

export default Home;
