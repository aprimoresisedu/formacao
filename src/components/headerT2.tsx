import Image from "next/image"
import ButtonT2 from "./buttonT2"

interface HeaderProps {
    searchParams: {
        utm_content?: string
        utm_campaign?: string
        utm_term?: string
        utm_source?: string
        utm_medium?: string
    }
    price: string
}

export default function HeaderT2({ searchParams, price }: HeaderProps) {
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
                    <h1 className="text-2xl sm:text-3xl font-bold">Guia de Intercorrência com conhecimento prático de +20 anos de experiência para você ter segurança na atuação como enfermeira</h1>
                    <p className="">Na faculdade, nos ensinam muita teoria, mas e na prática? Este Guia vai te mostrar <strong>todo o passo a passo</strong> para você saber <strong>executar com segurança</strong> a Avaliação Inicial, Secundária e a Abordagem.</p>
                    <div className="w-full max-w-sm flex flex-col gap-4 items-center">
                        <ButtonT2
                            searchParams={searchParams}
                            href=""
                            label="RESGATAR MEU GUIA PRÁTICO"
                            classNameB="w-full max-w-xl text-center"
                        />
                        <div className="flex flex-col text-center">
                            <p className="text-base">de <span className="line-through text-red-500 font-semibold">R$97,00</span> por apenas</p>
                            <p className="text-5xl font-bold text-[#c4ecf4]">R${price}</p>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}