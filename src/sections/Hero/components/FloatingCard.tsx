import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";

interface FloatingCardProps {
  Icon: LucideIcon;
  title: string;
  subtitle: string;
  className?: string;
}

const FloatingCard = ({
  Icon,
  title,
  subtitle,
  className = "",
}: FloatingCardProps) => {
  return (
    <motion.div
      className={`floating-card ${className}`}
      animate={{
        y: [0, -10, 0],
      }}
      transition={{
        duration: 5,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      <div className="floating-card-icon">
        <Icon size={22} />
      </div>

      <div>
        <h4>{title}</h4>
        <p>{subtitle}</p>
      </div>
    </motion.div>
  );
};

export default FloatingCard;