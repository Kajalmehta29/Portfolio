import "./Background.css";

const Background = () => {
  return (
    <div className="background" aria-hidden="true">
      <div className="bg-blob blob-1" />
      <div className="bg-blob blob-2" />
      <div className="bg-blob blob-3" />
      <div className="bg-grid" />
    </div>
  );
};

export default Background;