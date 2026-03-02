import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Linkedin, Github, Mail, Code } from "lucide-react";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ContactModal = ({ isOpen, onClose }: ContactModalProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="bg-card border-border max-w-md">
        <DialogHeader>
          <DialogTitle className="text-2xl font-light text-center mb-6">Get in Touch</DialogTitle>
        </DialogHeader>
        
        <div className="space-y-6">
          <a
            href="https://www.linkedin.com/in/sanjumeha/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 p-4 rounded-lg border border-border hover:border-primary transition-all group"
          >
            <Linkedin className="w-6 h-6 group-hover:text-primary transition-colors" />
            <div>
              <div className="font-medium">LinkedIn</div>
              <div className="text-sm text-muted-foreground">Connect professionally</div>
            </div>
          </a>

          <a
            href="https://github.com/sanjumeha19"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 p-4 rounded-lg border border-border hover:border-primary transition-all group"
          >
            <Github className="w-6 h-6 group-hover:text-primary transition-colors" />
            <div>
              <div className="font-medium">GitHub</div>
              <div className="text-sm text-muted-foreground">View my code</div>
            </div>
          </a>

          <a
            href="https://leetcode.com/u/sanjumeha19/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 p-4 rounded-lg border border-border hover:border-primary transition-all group"
          >
            <Code className="w-6 h-6 group-hover:text-primary transition-colors" />
            <div>
              <div className="font-medium">LeetCode</div>
              <div className="text-sm text-muted-foreground">Check my problem-solving</div>
            </div>
          </a>

          <a
            href="mailto:sanjumeha19@gmail.com"
            className="flex items-center gap-4 p-4 rounded-lg border border-border hover:border-primary transition-all group"
          >
            <Mail className="w-6 h-6 group-hover:text-primary transition-colors" />
            <div>
              <div className="font-medium">Email</div>
              <div className="text-sm text-muted-foreground">sanjumeha19@gmail.com</div>
            </div>
          </a>
        </div>
      </DialogContent>
    </Dialog>
  );
};
