"use client";

import { Button } from "@heroui/react";

const imgDotPattern =
  "https://www.figma.com/api/mcp/asset/f64d972b-b084-4c04-8ab7-7e745170ecba";
const imgBigArrow =
  "https://www.figma.com/api/mcp/asset/8bcf3408-96ca-4763-a249-ee3523f80841";
const imgFloatingBook =
  "https://www.figma.com/api/mcp/asset/1d2a4bc7-c1ac-4d49-9e06-326adcac80a5";
const imgStar =
  "https://www.figma.com/api/mcp/asset/cd846f9a-b7c9-4048-b5eb-b4b2d270f558";
const imgEllipse =
  "https://www.figma.com/api/mcp/asset/dc420f4b-4b35-4ce7-af30-0cb8bc3e7f06";
const imgEllipse1 =
  "https://www.figma.com/api/mcp/asset/46e05df4-1bfe-4a63-9e43-75b15d9e3995";

export default function WaitlistCTA() {
  return (
    <section className="flex flex-col items-center py-16 sm:py-20 lg:py-24 px-5 sm:px-10 lg:px-[120px]">
      <div className="bg-[#e2ef85] relative flex flex-col lg:flex-row overflow-hidden rounded-3xl w-full max-w-[1200px]">
        {/* Left content */}
        <div className="flex flex-col gap-5 lg:gap-6 items-start justify-center pl-8 sm:pl-12 lg:pl-[72px] pr-8 lg:pr-8 pt-10 sm:pt-12 lg:py-[72px] pb-8 lg:pb-[72px] w-full lg:w-[640px] lg:shrink-0">
          <h2
            className="font-bold text-[32px] sm:text-[38px] lg:text-[44px] text-[#067008] leading-tight lg:leading-[52px]"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            Você chegou no
            <br />
            fim da página.
          </h2>
          <p className="font-normal text-[15px] sm:text-[17px] text-[#067008] leading-[26px]">
            Se chegou até aqui, é porque tá interessado.
            <br />
            Então vai lá, faz logo o cadastro.
          </p>
          <Button
            className="!bg-white !text-[#067008] !font-bold !text-base lg:!text-lg !h-12 !px-5 !rounded-xl !min-w-0 !shadow-none mt-2"
            style={{ fontFamily: "var(--font-archivo)" }}
            onPress={() => document.getElementById("waitlist")?.scrollIntoView({ behavior: "smooth" })}
          >
            Vai, clica nesse botão
          </Button>
        </div>

        {/* Right illustration — visible from sm up */}
        <div className="relative flex-1 overflow-hidden min-h-[200px] sm:min-h-[260px] lg:min-h-0">
          <img
            alt=""
            className="absolute left-[20%] top-[10%] h-[60%] w-[70%] object-contain"
            src={imgDotPattern}
          />
          <img
            alt=""
            className="absolute left-[25%] top-[5%] w-[55%] h-[80%] object-contain"
            src={imgBigArrow}
          />
          <div className="absolute left-[10%] top-[40%] rotate-12">
            <img alt="" className="h-11 w-14" src={imgFloatingBook} />
          </div>
          <div className="absolute right-[5%] top-[5%] -rotate-15">
            <img alt="" className="size-14 sm:size-16" src={imgStar} />
          </div>
          <img alt="" className="absolute right-[8%] top-[45%] size-5" src={imgEllipse} />
          <img alt="" className="absolute left-[5%] bottom-[10%] size-10" src={imgEllipse1} />
          <div className="absolute left-[18%] bottom-[8%] rotate-10">
            <p
              className="font-black text-2xl sm:text-[32px] text-[#067008]"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              A+
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
