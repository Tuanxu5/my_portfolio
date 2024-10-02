import { FlipWords } from "@/app/components/aceternity-ui/flip-words";
import FooterPage from "@/app/components/layouts/footer";
import HeaderPage from "@/app/components/layouts/header";
import ContactComponent from "@/app/components/shared/contact";
import TitleComponent from "@/app/components/shared/title";
import { ExperienceSection } from "@/app/sections/experiences";
import { ImageParallaxSection } from "@/app/sections/image-parallax";
import ListProjectSection from "@/app/sections/list-project";
import { MyGoalSection } from "@/app/sections/my-goal";
import SkillsSection from "@/app/sections/skills";
import StatsSection from "@/app/sections/stats";

export default function AppPage() {
  const words = ["TuanXu", "Software Developer"];

  return (
    <div>
      <HeaderPage />
      <section className="flex flex-col gap-[120px] pt-[120px] pb-[50px] h-full items-center">
        <TitleComponent
          title="About"
          subTitle={<div>I have experience in modern develop web and mobile apps.</div>}
          name={
            <span>
              Hi, I&apos;m
              <FlipWords words={words} duration={5000} />
            </span>
          }
        />
        <ImageParallaxSection />
        <MyGoalSection />
        <StatsSection />
        <TitleComponent
          title="Projects"
          subTitle={
            <span>
              Take a look at some of the ideas <br />
              we’ve helped to implement. Will yours be next?
            </span>
          }
        />
        <ListProjectSection />
        <ExperienceSection />
        <SkillsSection />
        <ContactComponent />
      </section>
      <FooterPage />
    </div>
  );
}
