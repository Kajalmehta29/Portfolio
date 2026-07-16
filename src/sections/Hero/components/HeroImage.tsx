import profile from "../../../assets/hero/kajal.png";
import logo from "../../../assets/hero/km-logo.png";

type FloatingCardProps = {
  icon: string;
  title: string;
  subtitle?: string;
};

const FloatingCard = ({ icon, title, subtitle }: FloatingCardProps) => {
  return (
    <div className="floating-card__inner">
      <div className="floating-card__icon">{icon}</div>
      <div className="floating-card__text">
        <div className="floating-card__title">{title}</div>
        {subtitle && <div className="floating-card__subtitle">{subtitle}</div>}
      </div>
    </div>
  );
};

const HeroImage = () => {
  return (
    <div className="hero__image-section">

      <div className="hero__glow" />

      <img
        src={logo}
        alt=""
        className="hero__watermark"
      />

      <img
        src={profile}
        alt="Kajal Mehta"
        className="hero__image"
      />

      <div className="floating-card top-left">
        <FloatingCard
          icon="🏆"
          title="GSSoC"
          subtitle="Open Source"
        />
      </div>

      <div className="floating-card bottom-right">
        <FloatingCard
          icon="📦"
          title="Menaga ERP"
          subtitle="Enterprise Project"
        />
      </div>

      <div className="floating-card top-right">
        <FloatingCard
          icon="🎓"
          title="8.97 CGPA"
          subtitle="VIT Bhopal"
        />
      </div>

    </div>
  );
};

export default HeroImage;