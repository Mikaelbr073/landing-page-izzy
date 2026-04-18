import { Button } from "@heroui/react";

const imgIzzyLogo =
  "https://www.figma.com/api/mcp/asset/7665a21a-7d2d-430b-bc4b-e003f5ad105d";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 flex items-center justify-center px-4 sm:px-8 lg:px-20 py-4 lg:py-6 w-full">
      <div className="bg-white flex h-14 items-center justify-between w-full max-w-[1280px] rounded-full shadow-[0px_4px_24px_0px_rgba(0,0,0,0.2)] pl-5 pr-2 py-2">
        <img
          alt="Izzy Peazy"
          className="h-9 w-[54px] object-contain shrink-0"
          src={imgIzzyLogo}
        />

        <nav className="hidden md:flex gap-6 lg:gap-8 items-center text-sm font-medium text-[#817e79]">
          <a href="#pais" className="hover:text-[#383733] transition-colors whitespace-nowrap">
            Para pais
          </a>
          <a href="#alunos" className="hover:text-[#383733] transition-colors whitespace-nowrap">
            Para alunos
          </a>
          <a href="#como-funciona" className="hover:text-[#383733] transition-colors whitespace-nowrap">
            Como funciona
          </a>
          <a href="#depoimentos" className="hover:text-[#383733] transition-colors whitespace-nowrap">
            Depoimentos
          </a>
        </nav>

        <a href="#waitlist">
          <Button
            className="!bg-[#ccd537] !text-white !font-bold !text-sm md:!text-base lg:!text-lg !px-3 md:!px-4 lg:!px-5 !h-10 md:!h-11 lg:!h-12 !rounded-xl !min-w-0 !shadow-none shrink-0"
            style={{ fontFamily: "var(--font-archivo)" }}
          >
            <span className="hidden sm:inline">Entrar na lista</span>
            <span className="sm:hidden">Entrar na lista</span>
          </Button>
        </a>
      </div>
    </header>
  );
}
