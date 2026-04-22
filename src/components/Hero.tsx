"use client";

import { useActionState } from "react";
import { Button, Input } from "@heroui/react";
import { joinWaitlist } from "@/app/actions/waitlist";

const imgAvatar =
  "https://www.figma.com/api/mcp/asset/109d98c2-7221-43bd-8b15-ff9e8d62d7b7";
const imgAvatar1 =
  "https://www.figma.com/api/mcp/asset/0af6e121-0029-4282-9f70-6abaf41f22ad";
const imgAvatar2 =
  "https://www.figma.com/api/mcp/asset/12f53b62-85c6-44bb-9fb7-5a5bcb62a38a";
const imgMascot =
  "https://www.figma.com/api/mcp/asset/c4a56afb-c388-425c-9702-35e196061139";
const imgHeroDividerWave =
  "https://www.figma.com/api/mcp/asset/470e4849-a7f4-40b0-b12e-0e2e5deef28b";

function FloatingCard({
  emoji,
  title,
  subtitle,
  width,
  textWidth,
}: {
  emoji: string;
  title: string;
  subtitle: string;
  width: number;
  textWidth: number;
}) {
  return (
    <div
      className="backdrop-blur-[10px] bg-white border border-[#e3dacc] flex gap-3 items-center pl-[14px] pr-4 py-3 rounded-2xl shadow-[0px_8px_32px_0px_rgba(0,0,0,0.15),0px_1px_0px_1px_rgba(255,255,255,0.4)]"
      style={{ width }}
    >
      <div className="backdrop-blur-[4px] bg-[#fff6e8] border border-[#e3dacc] flex items-center justify-center rounded-[10px] shrink-0 size-10">
        <span className="text-[20px] leading-none">{emoji}</span>
      </div>
      <div className="flex flex-col gap-[3px]" style={{ width: textWidth }}>
        <p className="font-semibold text-[12px] text-[#383733] leading-[16px]">{title}</p>
        <p className="font-normal text-[11px] text-[#817e79] leading-[14px]">{subtitle}</p>
      </div>
    </div>
  );
}

export default function Hero() {
  const [state, formAction, pending] = useActionState(joinWaitlist, null);

  return (
    <section id="hero" className="bg-[#fff6e8] overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-5 sm:px-10 lg:px-[120px]">
        <div className="flex flex-col lg:flex-row items-start justify-between pt-10 sm:pt-14 lg:pt-[140px] pb-16 lg:pb-[130px] gap-10 lg:gap-6">

          {/* Hero Left */}
          <div className="flex flex-col gap-5 lg:gap-7 w-full lg:w-[561px] lg:shrink-0">
            {/* Badge */}
            <div className="bg-[#e4e6ff] flex items-center px-[14px] py-2 rounded-full self-start">
              <span className="font-semibold text-[12px] sm:text-[13px] text-[#3a4bfd] whitespace-nowrap">
                Acesso antecipado — vagas limitadas
              </span>
            </div>

            {/* Title */}
            <div
              className="font-extrabold text-[#1a1a2e] text-[36px] sm:text-[44px] lg:text-[56px] leading-tight lg:leading-[66px]"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              <p>Aprender ficou</p>
              <p>mais divertido</p>
              <p>
                com <span className="text-[#ccd537]">Izzy Peazy</span> ✨
              </p>
            </div>

            {/* Description */}
            <p className="font-normal text-base sm:text-lg text-[#817e79] leading-7 max-w-[540px]">
              O monitor de estudos inteligente que ajuda crianças do ensino
              fundamental a tirar dúvidas na hora, estudar no próprio ritmo, e
              os pais acompanharem toda a evolução em tempo real. Entre na lista de espera para garantir acesso antecipado!
            </p>

            {/* Waitlist Row */}
            {state?.ok ? (
              <div id="waitlist" className="bg-white border-[1.5px] border-[#e3dacc] flex items-center justify-center px-5 py-3 rounded-[14px] shadow-[0px_4px_16px_0px_rgba(0,0,0,0.08)] w-full max-w-[561px] scroll-mt-28">
                <p className="font-semibold text-[#067008] text-sm sm:text-base">{state.message}</p>
              </div>
            ) : (
              <div id="waitlist" className="flex flex-col gap-1 w-full max-w-[561px] scroll-mt-28">
                <form action={formAction} className="bg-white border-[1.5px] border-[#e3dacc] flex flex-row gap-2 items-center p-1 rounded-[14px] shadow-[0px_4px_16px_0px_rgba(0,0,0,0.08)] w-full">
                  <div className="flex-1 min-w-0">
                    <Input
                      name="email"
                      placeholder="Digite seu e-mail"
                      type="email"
                      className="!bg-transparent !border-none !shadow-none !rounded-[10px] w-full"
                    />
                  </div>
                  <Button
                    type="submit"
                    isDisabled={pending}
                    className="!bg-[#ccd537] !text-white !font-bold !text-sm sm:!text-base lg:!text-lg !h-10 lg:!h-12 !px-3 lg:!px-5 !rounded-xl !min-w-0 !shadow-none shrink-0 whitespace-nowrap"
                    style={{ fontFamily: "var(--font-archivo)" }}
                  >
                    {pending ? "Enviando..." : "Entrar na lista"}
                  </Button>
                </form>
                {state?.ok === false && (
                  <p className="text-red-500 text-xs px-2">{state.message}</p>
                )}
              </div>
            )}

            {/* Social Proof */}
            <div className="bg-white border-[1.5px] border-[#e3dacc] flex gap-[10px] items-center pl-[10px] pr-4 py-2 rounded-full shadow-[0px_2px_12px_0px_rgba(0,0,0,0.06)] self-start">
              <div className="flex items-center">
                <img alt="" className="size-7 rounded-full object-cover ring-2 ring-white z-30" src={imgAvatar} />
                <img alt="" className="size-7 rounded-full object-cover ring-2 ring-white z-20 -ml-2" src={imgAvatar1} />
                <img alt="" className="size-7 rounded-full object-cover ring-2 ring-white z-10 -ml-2" src={imgAvatar2} />
              </div>
              <p className="font-semibold text-[12px] sm:text-[13px] text-[#383733] whitespace-nowrap">
                +500 pais já na lista de espera
              </p>
            </div>
          </div>

          {/* Right: Mascot + Floating Cards */}
          {/*
            On desktop the right column has enough room for cards that overflow the mascot
            boundaries. overflow-visible lets them show.
          */}
          <div className="w-full lg:w-auto lg:shrink-0 flex items-start justify-center lg:justify-start">
            {/*
              Inner container exactly matches mascot dimensions so all card positions
              (relative to mascot in the Figma) map 1-to-1:
                Students  → (-40, -13)  292×86
                Congrats  → (346, 452)  270×80
                Class     → (-64, 572)  290×80
            */}
            <div className="relative w-full max-w-[400px] sm:max-w-[480px] lg:w-[590px] lg:max-w-none">
              {/* Mascot image */}
              <img
                alt="Izzy Peazy mascot"
                width={590}
                height={626}
                className="w-full h-auto block"
                src={imgMascot}
              />

              {/* Floating Cards — desktop only, positioned relative to mascot */}
              {/* Students: left=-40, top=-13 — floats first */}
              <div
                className="hidden lg:block absolute z-10"
                style={{
                  left: -40,
                  top: -13,
                  animation: "float-card 3.2s ease-in-out infinite",
                }}
              >
                <FloatingCard
                  emoji="📚"
                  title="Seu filho nunca mais vai ficar com dúvida"
                  subtitle="Responde dúvidas na hora, qualquer matéria"
                  width={292}
                  textWidth={210}
                />
              </div>

              {/* Congrats: left=346, top=452 — offset phase */}
              <div
                className="hidden lg:block absolute z-10"
                style={{
                  left: 346,
                  top: 452,
                  animation: "float-card 3.8s ease-in-out infinite 1.1s",
                }}
              >
                <FloatingCard
                  emoji="✨"
                  title="Personalizado pro seu filho"
                  subtitle="Cada explicação é única"
                  width={270}
                  textWidth={188}
                />
              </div>

              {/* Class: left=-64, top=572 — further offset */}
              <div
                className="hidden lg:block absolute z-10"
                style={{
                  left: -64,
                  top: 572,
                  animation: "float-card 4.4s ease-in-out infinite 2.2s",
                }}
              >
                <FloatingCard
                  emoji="🕐"
                  title="A Izzy fica disponível 24h"
                  subtitle="Seu filho tira dúvidas a qualquer hora"
                  width={290}
                  textWidth={208}
                />
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Wave divider */}
      <img alt="" className="w-full block" src={imgHeroDividerWave} />
    </section>
  );
}
