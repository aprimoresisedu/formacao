import Image from "next/image"
import Button from "./button"

interface HeaderProps {

}

export default function Header({ }: HeaderProps) {
    return (
        <header className="h-screen bg-image flex items-center justify-center border-b-4 border-[#c4ecf4] px-4">
            <div className="w-full max-w-7xl sm:grid sm:grid-cols-2 flex flex-col">
                <div className="w-full max-w-xl flex flex-col gap-4 text-white sm:text-left text-center sm:items-start items-center">
                    <div className="relative w-[162px] h-[60px] sm:w-[240px] sm:h-[90px]">
                        <Image
                            src="/images/logo.webp"
                            alt=""
                            layout="fill"
                            objectFit="contain"
                        />
                    </div>
                    <h1 className="text-2xl sm:text-3xl font-bold">Tenha conhecimento para se sentir uma enfermeira segura na atuação nas intercorrências</h1>
                    <p className="">Guia com <strong>20 anos de experiência prática</strong> em plantões para você saber como executar a Avaliação Inicial, Secundária e a Abordagem Sistemática.</p>
                    <div className="w-full max-w-sm flex flex-col gap-4 items-center">
                        <Button
                            href=""
                            label="Sim, quero o guia comprovado"
                        />
                        <div className="flex flex-col text-center">
                            <p className="text-base">de <span className="line-through text-red-500 font-semibold">R$97,00</span> por apenas</p>
                            <p className="text-5xl font-bold text-[#c4ecf4]">R$10,00</p>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}