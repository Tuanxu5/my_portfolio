import CustomButton from "@/app/components/shared/button";
import TitleComponent from "@/app/components/shared/title";
import { mockDataSkill } from "@/app/mocks/_mockSkills";
import Image from "next/image";

export default function SkillsSection() {
  const skills = mockDataSkill;

  return (
    <section className="w-full">
      <TitleComponent title="Skills" subTitle={<span>Here are some of my skills.</span>} />
      <div className="flex flex-wrap mt-10">
        {skills?.map((skill) => (
          <div key={skill.id} className="w-full rounded-3xl mt-5">
            <div className="flex justify-start flex-wrap gap-x-5 gap-y-3">
              {skill?.children?.map((item) => (
                <CustomButton
                  key={item.id}
                  label={
                    <div className="flex justify-between gap-2 items-center">
                      <Image src={item.image} height={40} width={40} alt="" />
                      <div className="text-[14px]">{item.name}</div>
                    </div>
                  }
                  px={6}
                  py={2.5}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
