import BrowserFrame from "./BrowserFrame/BrowserFrame";

interface Props {
    image: string;
    url: string;
    theme: "light" | "dark";
}

const ProjectHero = ({
    image,
    url,
    theme,
}: Props) => {
  return (
    <section className="project-hero">

      <BrowserFrame
    url={url}
    theme={theme}
>

    <img
        src={image}
    />

</BrowserFrame>

    </section>
  );
};

export default ProjectHero;