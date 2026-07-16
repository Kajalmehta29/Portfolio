import "./BrowserFrame.css";
import type { ReactNode } from "react";
import { ChevronLeft, ChevronRight, RotateCw, Lock } from "lucide-react";

interface Props {

    children: ReactNode;

    url?: string;

    theme?: "light" | "dark";

}

const BrowserFrame = ({
    children,
    url = "localhost:5173",
    theme = "light",
}: Props) => {
  return (
    <div className={`browser-frame ${theme}`}>

      <div className="browser-toolbar">

        <div className="browser-controls">
          <span className="red" />
          <span className="yellow" />
          <span className="green" />
        </div>

        <div className="browser-navigation">
          <ChevronLeft size={14} />
          <ChevronRight size={14} />
          <RotateCw size={13} />
        </div>

        <div className="browser-address">

          <Lock size={12} />

          <span>{url}</span>

        </div>

      </div>

      <div className="browser-body">

        {children}

      </div>

    </div>
  );
};

export default BrowserFrame;