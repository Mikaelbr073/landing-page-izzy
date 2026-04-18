"use client";

import { useEffect, useRef } from "react";

const imgGrid =
  "https://www.figma.com/api/mcp/asset/15ee3e12-424d-4c47-825a-e2a448af143d";
const imgGrid1 =
  "https://www.figma.com/api/mcp/asset/ccabbe0e-4778-441a-86b3-9c2bec1eaf62";

const benefits = [
  {
    emoji: "📒",
    title: "Dashboard em tempo real",
    description:
      "Veja o desempenho do seu filho em cada matéria, pontos acumulados e tempo de estudo — tudo num painel intuitivo.",
    iconBg: "#e4e6ff",
    accentColor: "#7a88fe",
  },
  {
    emoji: "🔔",
    title: "Alertas inteligentes",
    description:
      "Receba notificações quando seu filho completar atividades, alcançar metas ou precisar de um estímulo extra.",
    iconBg: "#fef3c7",
    accentColor: "#fabe37",
  },
  {
    emoji: "✏️",
    title: "Progresso personalizado",
    description:
      "Relatórios semanais com pontos fortes e áreas que precisam de mais atenção, ajudando você a apoiar melhor.",
    iconBg: "#e2ef85",
    accentColor: "#ccd537",
  },
  {
    emoji: "🎒",
    title: "Parceria escola-família",
    description:
      "Compartilhe o progresso com professores e fortaleça a comunicação entre casa e escola com dados reais.",
    iconBg: "#ffadd9",
    accentColor: "#f055a5",
  },
];

export default function BenefitsParents() {
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cards = gridRef.current?.querySelectorAll<HTMLElement>(".benefit-card");
    if (!cards?.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    cards.forEach((card) => observer.observe(card));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="pais" className="bg-white relative overflow-hidden py-16 sm:py-20 lg:py-24 px-5 sm:px-10 lg:px-[120px]">
      {/* Grid background */}
      <div
        className="absolute inset-0 overflow-hidden pointer-events-none"
        style={{ maskImage: `url('${imgGrid}')`, maskSize: "cover" }}
      >
        <img alt="" className="w-full h-full object-cover" src={imgGrid1} />
      </div>

      <div className="relative max-w-[1200px] mx-auto flex flex-col gap-10 lg:gap-12 items-center">
        {/* Section Header */}
        <div className="flex flex-col gap-4 items-center text-center">
          <div className="bg-[#e4e6ff] flex items-center px-[14px] py-[6px] rounded-full">
            <span className="font-semibold text-[13px] text-[#7a88fe]">
              Para pais e responsáveis
            </span>
          </div>
          <h2 className="font-extrabold text-[28px] sm:text-[34px] lg:text-[40px] text-[#383733] leading-tight lg:leading-[52px] max-w-[680px]">
            Acompanhe o desenvolvimento do seu filho em tempo real
          </h2>
          <p className="font-normal text-base sm:text-lg text-[#817e79] leading-7 max-w-[560px]">
            Dashboard exclusivo, pontos de progresso e sugestões
            personalizadas. Você sempre por dentro.
          </p>
        </div>

        {/* Benefits Grid */}
        <div
          ref={gridRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6 w-full"
        >
          {benefits.map((benefit, index) => (
            <div
              key={benefit.title}
              className="benefit-card bg-white border border-[#e3dacc] relative flex items-start overflow-hidden rounded-2xl shadow-[0px_4px_16px_0px_rgba(0,0,0,0.06)] lg:h-[300px]"
              style={{ transitionDelay: `${index * 130}ms` }}
            >
              {/* Accent bar: 4px wide, full card height */}
              <div
                className="absolute top-[-1px] left-[-1px] w-1 bottom-[-1px]"
                style={{ backgroundColor: benefit.accentColor }}
              />
              {/* Content: px=24px py=32px gap=16px */}
              <div className="flex flex-col gap-4 px-6 py-8 ml-1 overflow-hidden">
                {/* Icon: 48×48px */}
                <div
                  className="flex items-center justify-center rounded-xl size-12 shrink-0"
                  style={{ backgroundColor: benefit.iconBg }}
                >
                  <span className="text-[22px]">{benefit.emoji}</span>
                </div>
                {/* Title: 17px bold, leading 24px, w=230px */}
                <p className="font-bold text-[17px] text-[#383733] leading-6 lg:w-[230px]">
                  {benefit.title}
                </p>
                {/* Description: 13px regular, leading 20px, w=230px */}
                <p className="font-normal text-[13px] text-[#817e79] leading-5 lg:w-[230px]">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
