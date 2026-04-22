"use client";

import { Button } from "@heroui/react";

export default function WaitlistCTA() {
  return (
    <section className="bg-[#fff6e8] flex flex-col items-center justify-center px-5 sm:px-10 lg:px-[120px] py-16 sm:py-20 lg:py-24">
      <div className="flex flex-col gap-5 items-center justify-center w-full max-w-[760px] text-center">
        <h2
          className="font-bold text-[36px] sm:text-[42px] lg:text-[48px] text-[#383733] leading-[1.1] tracking-[-0.96px]"
          style={{ fontFamily: "var(--font-inter)" }}
        >
          Agora é sua vez de
          <br />
          começar essa{" "}
          <span className="text-[#939d1f]">história</span>.
        </h2>
        <p className="font-normal text-[16px] sm:text-[17px] lg:text-[18px] text-[#817e79] leading-[1.5]">
          Garanta o acesso antecipado e dê ao seu filho uma nova forma
          <br className="hidden sm:block" />
          de aprender — mais leve, divertida e personalizada.
        </p>
        <div className="h-2" />
        <Button
          className="!bg-[#ccd537] !text-white !font-bold !text-base lg:!text-lg !h-12 !px-5 !rounded-xl !min-w-0 !shadow-none"
          style={{ fontFamily: "var(--font-archivo)" }}
          onPress={() =>
            document.getElementById("waitlist")?.scrollIntoView({ behavior: "smooth" })
          }
        >
          Quero entrar na lista
        </Button>
      </div>
    </section>
  );
}
