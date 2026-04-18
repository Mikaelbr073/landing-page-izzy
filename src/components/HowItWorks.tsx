const imgFoldShadow =
  "https://www.figma.com/api/mcp/asset/4d6fa6ac-7376-4fc3-ab53-fd688c77b0bc";
const imgFoldFlap =
  "https://www.figma.com/api/mcp/asset/f7c067b5-df7f-41d9-b566-24a2b822553b";
const imgPaperclip =
  "https://www.figma.com/api/mcp/asset/913a3471-c12d-47a2-8d0b-d036cf3ad763";
const imgDoodleArrow =
  "https://www.figma.com/api/mcp/asset/fbf53be6-f21a-4f3c-bcc7-dccae0d7eed7";
const imgDoodleArrow1 =
  "https://www.figma.com/api/mcp/asset/13a6739c-256b-4da9-8315-0a61e209c120";

// Doodle decorations
const imgDoodleUnderline =
  "https://www.figma.com/api/mcp/asset/6d7175c3-4ab2-4b54-b492-79671fe3d148";
const imgDoodleStar =
  "https://www.figma.com/api/mcp/asset/ce0ee27e-6c65-4395-80be-bf149d9ce3e1";
const imgDoodleStar2 =
  "https://www.figma.com/api/mcp/asset/b3037e38-4e52-44cd-962c-8ff031f757ad";
const imgDoodleLightbulb =
  "https://www.figma.com/api/mcp/asset/6bc81df2-e137-4347-a5a7-97a4df2c5d20";
const imgDoodlePencil =
  "https://www.figma.com/api/mcp/asset/f08af439-2093-43ce-97a9-143943b77b0a";
const imgDoodleSpiral =
  "https://www.figma.com/api/mcp/asset/8e5b6bf3-b9a3-4fda-8441-ea0f3413f72b";
const imgDoodleDots =
  "https://www.figma.com/api/mcp/asset/3982feb1-6e07-4383-aa20-a38246a4e8fb";
const imgDoodleHeart =
  "https://www.figma.com/api/mcp/asset/a704ccfa-18c1-4e48-934c-65724a808d8d";
const imgDoodleBook =
  "https://www.figma.com/api/mcp/asset/d3c56764-32d6-464a-bcfd-ab31d07ac3a5";
const imgDoodleNote =
  "https://www.figma.com/api/mcp/asset/c93cffef-f5e6-40c1-bc1a-40857e5efc77";
const imgDoodleClock =
  "https://www.figma.com/api/mcp/asset/01fd571b-3f32-47d1-b4d5-f0d76fc55b20";
const imgDoodleFlask =
  "https://www.figma.com/api/mcp/asset/44d64607-ca91-4c0b-bc71-f119ce0f0a2c";
const imgDoodleAtom =
  "https://www.figma.com/api/mcp/asset/5e357848-d9dd-4a95-bdf8-7aba7a956512";
const imgDoodleCheck =
  "https://www.figma.com/api/mcp/asset/bf217bc6-e538-46e1-a4f2-20aea0da73fb";
const imgDoodleGradCap =
  "https://www.figma.com/api/mcp/asset/ee69590b-e21c-46e9-b26f-d175dcbaa52b";
const imgDoodleMiniStar =
  "https://www.figma.com/api/mcp/asset/83903cb4-959e-446c-a161-b2ee6770785d";
const imgDoodleZigzag =
  "https://www.figma.com/api/mcp/asset/b7ed8d26-f0c4-4c5e-8abb-dae7bd7132ef";
const imgDoodleCurveArrow =
  "https://www.figma.com/api/mcp/asset/395615a4-8d2f-46d8-99c9-b2dfb76a6765";

function PostIt({
  num,
  title,
  description,
  rotate,
  withPaperclip,
}: {
  num: string;
  title: string;
  description: string;
  rotate?: string;
  withPaperclip?: boolean;
}) {
  return (
    <div className={`relative ${rotate ?? ""} transition-transform duration-200 hover:scale-110 hover:z-10 hover:rotate-0 cursor-default`}>
      <div className="bg-[#fde68a] flex flex-col gap-3 w-full max-w-[336px] pb-7 pt-6 px-7 rounded-[4px] shadow-[1px_4px_8px_0px_rgba(15,23,41,0.08),2px_12px_24px_0px_rgba(15,23,41,0.12)] hover:shadow-[4px_16px_40px_0px_rgba(15,23,41,0.22)] transition-shadow duration-200 overflow-hidden">
        <p
          className="font-black text-[80px] sm:text-[96px] text-[#f055a5] leading-[80px] sm:leading-[96px]"
          style={{ fontFamily: "var(--font-inter)" }}
        >
          {num}
        </p>
        <p className="font-bold text-xl sm:text-[22px] text-[#383733] leading-7">
          {title}
        </p>
        <p
          className="font-normal text-[14px] sm:text-[15px] text-[#383733] leading-[22px]"
          style={{ opacity: 0.72 }}
        >
          {description}
        </p>
        <img alt="" className="absolute right-0 top-0 size-[34px]" src={imgFoldShadow} />
        <img alt="" className="absolute right-0 top-0 size-[34px]" src={imgFoldFlap} />
      </div>
      {withPaperclip && (
        <div className="absolute right-[80px] -top-4 rotate-8">
          <img alt="" className="h-16 w-8" src={imgPaperclip} />
        </div>
      )}
    </div>
  );
}

function ArrowDown() {
  return (
    <div className="flex items-center justify-center py-2 lg:hidden">
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#f055a5" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 5v14M5 12l7 7 7-7" />
      </svg>
    </div>
  );
}

export default function HowItWorks() {
  return (
    <section id="como-funciona" className="bg-white relative overflow-hidden px-5 sm:px-10 lg:px-[120px] py-16 sm:py-20 lg:py-24">
      {/* Doodles background — hidden on small screens */}
      <div className="absolute inset-0 pointer-events-none hidden sm:block">
        <p className="absolute left-[115px] top-[60px] font-bold text-2xl text-[#3a4bfd] opacity-35 -rotate-8">
          π = 3.14
        </p>
        <p className="absolute right-[200px] top-[33px] font-black text-[56px] text-[#f055a5] opacity-40 -rotate-12">
          A+
        </p>
        <img alt="" className="absolute right-[215px] top-[106px] h-5 w-20 -rotate-10" src={imgDoodleUnderline} />
        <img alt="" className="absolute left-[380px] top-[58px] size-12 -rotate-15" src={imgDoodleStar} />
        <img alt="" className="absolute right-[371px] top-[450px] size-8 rotate-20" src={imgDoodleStar2} />
        <img alt="" className="absolute left-[759px] top-[46px] h-13 w-11 rotate-5" src={imgDoodleLightbulb} />
        <img alt="" className="absolute left-[60px] top-[386px] h-6 w-20 -rotate-25" src={imgDoodlePencil} />
        <img alt="" className="absolute right-[143px] top-[500px] size-12 rotate-15" src={imgDoodleSpiral} />
        <img alt="" className="absolute left-[200px] top-[520px] h-6 w-15" src={imgDoodleDots} />
        <img alt="" className="absolute right-[290px] top-[435px] h-[26px] w-7 -rotate-10" src={imgDoodleHeart} />
        <img alt="" className="absolute left-[42px] top-[220px] h-10 w-14 rotate-12" src={imgDoodleBook} />
        <img alt="" className="absolute left-[477px] top-[560px] h-10 w-8 rotate-5" src={imgDoodleNote} />
        <img alt="" className="absolute right-[367px] top-[40px] size-12 rotate-8" src={imgDoodleClock} />
        <img alt="" className="absolute left-[140px] top-[553px] h-13 w-10 -rotate-10" src={imgDoodleFlask} />
        <img alt="" className="absolute left-[520px] top-[35px] size-14 -rotate-5" src={imgDoodleAtom} />
        <p className="absolute right-[183px] top-[580px] font-bold text-[22px] text-[#3a4bfd] opacity-30 rotate-6">
          2+2=?
        </p>
        <p className="absolute left-[50px] top-[29px] font-black text-[36px] text-[#939d1f] opacity-35 -rotate-8">
          ABC
        </p>
        <img alt="" className="absolute left-[674px] top-[580px] h-8 w-9 rotate-10" src={imgDoodleCheck} />
        <img alt="" className="absolute right-[170px] top-[300px] h-10 w-13 rotate-15" src={imgDoodleGradCap} />
        <img alt="" className="absolute left-[820px] top-[582px] size-6 -rotate-20" src={imgDoodleMiniStar} />
        <img alt="" className="absolute left-[79px] top-[160px] h-4 w-[70px] rotate-5" src={imgDoodleZigzag} />
        <p className="absolute left-[231px] top-[60px] font-black text-[36px] text-[#f055a5] opacity-35 rotate-12">
          #
        </p>
        <img alt="" className="absolute right-[140px] top-[120px] h-10 w-[40px] -rotate-90" src={imgDoodleCurveArrow} />
      </div>

      <div className="relative max-w-[1200px] mx-auto flex flex-col gap-10 lg:gap-12 items-center">
        {/* Section Header */}
        <div className="text-center">
          <h2 className="font-extrabold text-[28px] sm:text-[34px] lg:text-[40px] text-[#1a1a2e] leading-tight lg:leading-[50px]">
            Como funciona?
          </h2>
          <p className="font-normal text-base sm:text-lg text-[#5a5a6e] mt-3 max-w-[480px] mx-auto">
            Em 3 passos simples o seu filho já tem um monitor inteligente ao lado.
          </p>
        </div>

        {/* Steps — vertical on mobile, horizontal on desktop */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-0 w-full">
          <div className="flex items-center justify-center w-full lg:w-auto">
            <PostIt
              num="1"
              title="Baixe o app"
              description="Disponível para Android e iOS. Cadastre o perfil do seu filho em menos de 2 minutos."
              rotate="lg:rotate-3"
            />
          </div>

          <ArrowDown />
          <div className="hidden lg:flex items-center justify-center w-[88px] shrink-0">
            <img alt="" className="h-12 w-[88px] rotate-2" src={imgDoodleArrow} />
          </div>

          <div className="flex items-center justify-center w-full lg:w-auto">
            <PostIt
              num="2"
              title="Faça a primeira pergunta"
              description="O Izzy responde dúvidas de qualquer matéria com explicações claras e interativas."
              rotate="lg:-rotate-2"
              withPaperclip
            />
          </div>

          <ArrowDown />
          <div className="hidden lg:flex items-center justify-center w-[88px] shrink-0">
            <img alt="" className="h-12 w-[88px] -rotate-3" src={imgDoodleArrow1} />
          </div>

          <div className="flex items-center justify-center w-full lg:w-auto">
            <PostIt
              num="3"
              title="Acompanhe o progresso"
              description="Veja os pontos, relatórios e sugestões personalizadas pelo dashboard do app."
              rotate="lg:rotate-2"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
