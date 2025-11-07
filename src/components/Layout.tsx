import { ReactNode, useState } from "react";
import { NavLink } from "./NavLink";
import profileImage from "@/assets/img.jpg";
import { ContactModal } from "./ContactModal";

interface LayoutProps {
  children: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <div className="flex min-h-screen bg-background text-foreground">
      {/* Fixed Sidebar */}
      <aside className="fixed left-0 top-0 h-screen w-64 border-r border-border flex flex-col items-center py-12 px-6">
        {/* Profile Photo */}
        <div className="mb-12">
          <img
            src={profileImage}
            alt="Profile"
            className="w-32 h-32 rounded-full object-cover border-2 border-primary"
          />
        </div>

        {/* Navigation Menu */}
        <nav className="flex flex-col gap-4 w-full">
          <NavLink
            to="/"
            className="text-lg font-light tracking-wide hover:text-primary transition-colors py-2 text-center"
            activeClassName="text-primary font-normal"
          >
            Home
          </NavLink>
          <NavLink
            to="/projects"
            className="text-lg font-light tracking-wide hover:text-primary transition-colors py-2 text-center"
            activeClassName="text-primary font-normal"
          >
            Projects
          </NavLink>
          <NavLink
            to="/courses"
            className="text-lg font-light tracking-wide hover:text-primary transition-colors py-2 text-center"
            activeClassName="text-primary font-normal"
          >
            Courses
          </NavLink>
          <button
            onClick={() => setIsContactOpen(true)}
            className="text-lg font-light tracking-wide hover:text-primary transition-colors py-2 text-center"
          >
            Contact
          </button>
        </nav>
      </aside>

      {/* Main Content Area */}
      <main className="ml-64 flex-1 overflow-y-auto">
        <div className="max-w-5xl mx-auto px-12 py-16">
          {children}
        </div>
      </main>

      {/* Contact Modal */}
      <ContactModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
    </div>
  );
};
