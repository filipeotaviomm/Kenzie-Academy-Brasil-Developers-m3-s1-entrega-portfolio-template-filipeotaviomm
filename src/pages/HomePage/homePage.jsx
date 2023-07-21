import { AboutSection } from "../../components/AboutSection/aboutSection";
import { BannerSection } from "../../components/BannerSection/bannerSection";
import { DefaultTemplate } from "../../components/DefaultTemplate/defaultTemplate";
import { ProjectsSection } from "../../components/ProjectsSection/projectsSection";
import { TecnologiesSection } from "../../components/TecnologiesSection/tecnologiesSection";

export const HomePage = () => {
  return (
    <DefaultTemplate>
      <BannerSection />
      <AboutSection />
      <TecnologiesSection />
      <ProjectsSection />
    </DefaultTemplate>
  );
};
