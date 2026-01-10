import React from "react";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

interface PortfolioViewerProps {
  onClose: () => void;
}

const PortfolioViewer: React.FC<PortfolioViewerProps> = ({ onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center">
      <div className="bg-white rounded-lg shadow-xl p-8 max-w-3xl w-full">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold">Portfolio</h2>
          <Button variant="ghost" size="icon" onClick={onClose}>
            <X className="h-6 w-6" />
          </Button>
        </div>
        <div>
          <p>Here is the portfolio content.</p>
          {/* Add more portfolio content here */}
        </div>
      </div>
    </div>
  );
};

export default PortfolioViewer;
