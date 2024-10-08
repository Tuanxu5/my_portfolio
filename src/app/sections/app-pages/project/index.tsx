"use client";

import CustomButton from "@/app/components/shared/button";
import TitleComponent from "@/app/components/shared/title";
import Image from "next/image";
import Link from "next/link";

export const ProjectSection = () => {
  return (
    <section>
      <TitleComponent
        title="Projects"
        subTitle={
          <span>
            Take a look at some of the ideas <br />
            we’ve helped to implement. Will yours be next?
          </span>
        }
      />
      <div className="flex flex-col flex-wrap gap-[100px] mt-[100px]">
        <div className="flex flex-wrap justify-between">
          <div className="flex flex-col w-[50%]">
            <span className="text-[1rem] text-[#03030f80]">Development</span>
            <span className="text-[2.5rem] font-semibold mt-6">Web Development</span>
            <span className="mt-4 text-[16px] leading-6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores odio deserunt exercitationem inventore
              laboriosam, aspernatur qui animi provident quia? Soluta dicta quis, non laborum ut neque eos pariatur
              asperiores distinctio.
            </span>
            <div className="mt-10">
              <Link href="/pages/projects">
                <CustomButton label="See now" px={10} py={4} />
              </Link>
            </div>
          </div>
          <div className="w-[40%]">
            <Image
              src="https://cdn.dribbble.com/userupload/14393308/file/original-fbd920935c3a22422573a6b02516c1ba.jpg?resize=2048x1536"
              className="h-full rounded-xl"
              alt=""
              width={1000}
              height={1000}
            />
          </div>
        </div>
        <div className="flex flex-wrap justify-between">
          <div className="w-[40%]">
            <Image
              src="https://cdn.dribbble.com/userupload/16392755/file/original-f7a203380bfddfe2f4a3689e573e8be3.png?resize=2048x1536"
              className="h-full rounded-xl"
              alt=""
              width={1000}
              height={1000}
            />
          </div>
          <div className="flex flex-col w-[50%]">
            <span className="text-[1rem] text-[#03030f80]">Development</span>
            <span className="text-[2.5rem] font-semibold mt-6">Mobile App Development</span>
            <span className="mt-4 text-[16px] leading-6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores odio deserunt exercitationem inventore
              laboriosam, aspernatur qui animi provident quia? Soluta dicta quis, non laborum ut neque eos pariatur
              asperiores distinctio.
            </span>
            <div className="mt-10">
              <Link href="/pages/projects">
                <CustomButton label="See now" px={10} py={4} />{" "}
              </Link>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap justify-between">
          <div className="flex flex-col w-[50%]">
            <span className="text-[1rem] text-[#03030f80]">Other</span>
            <span className="text-[2.5rem] font-semibold mt-6">Design, Tools, ...</span>
            <span className="mt-4 text-[16px] leading-6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores odio deserunt exercitationem inventore
              laboriosam, aspernatur qui animi provident quia? Soluta dicta quis, non laborum ut neque eos pariatur
              asperiores distinctio.
            </span>
            <div className="mt-10">
              <Link href="/pages/projects">
                <CustomButton label="See now" px={10} py={4} />
              </Link>
            </div>
          </div>
          <div className="w-[40%]">
            <Image
              src="https://cdn.dribbble.com/userupload/5575292/file/original-5dfde511d76c84baea8461634ef44459.png?resize=1504x1128"
              className="h-full rounded-xl"
              alt=""
              width={1000}
              height={1000}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
