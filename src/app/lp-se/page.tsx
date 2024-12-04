"use client"

import Section from "@/components/section";
import VideoCard from "@/components/video-card";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";

export default function Page() {

    useEffect(() => {
        // Adiciona o script do Respondi após o componente ser montado
        const scriptId = "respondi_src";
        if (!document.getElementById(scriptId)) {
            const script = document.createElement("script");
            script.setAttribute("async", "");
            script.id = scriptId;
            script.src = "https://embed.respondi.app/embed.js";
            document.body.appendChild(script);
        }
    }, []);

    return (
        <>
            <header className="relative  sm:h-screen w-full flex sm:items-center justify-center radial-01 pt-12 sm:pt-0 px-4">
                <div className="w-full max-w-7xl flex justify-center">
                    <div className="w-full flex flex-col items-center text-center gap-4">
                        <div className="relative sm:w-[162px] sm:h-[60px] w-[124px] h-[42px]">
                            <Image
                                src="/images/logo.webp"
                                alt=""
                                layout="fill"
                                objectFit="contain"
                            />
                        </div>
                        <div className="w-full max-w-4xl text-white flex flex-col items-center gap-4">
                            <div className="flex flex-col gap-2">
                                <h1 className="text-2xl sm:text-4xl font-semibold">Parabéns pela sua decisão!</h1>
                                <p className="text-zinc-200 sm:text-lg">Assista ao vídeo abaixo para entender <strong>como desbloquear um bônus</strong> limitado!</p>
                            </div>
                            <iframe
                                id="panda-527e4247-193a-4d1b-8d22-7481982fdb10"
                                src="https://player-vz-d6af11ef-db4.tv.pandavideo.com.br/embed/?v=50b1442c-284e-4b20-bd69-521074868b1f&iosFakeFullscreen=true"
                                allow="accelerometer;gyroscope;autoplay;encrypted-media;picture-in-picture"
                                allowFullScreen
                                className={`rounded-xl w-full h-[196px] sm:h-[492px]`}>
                            </iframe>
                            <p className="text-zinc-200/80 sm:text-lg">Receba seu bônus da <strong>Sessão de Direcionamento de Atuação</strong> com uma de nossas especialistas!</p>
                            <svg className="sm:absolute bottom-4 w-8 h-8 animate-pulse"  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 5.25 7.5 7.5 7.5-7.5m-15 6 7.5 7.5 7.5-7.5" />
                            </svg>
                        </div>
                    </div>
                </div>
            </header>
            <main className="py-16 radial-01">
                <Section className="flex flex-col gap-16 sm:gap-24 px-4">
                    <div className="max-w-4xl flex flex-col items-center gap-4 sm:gap-8 text-lg text-white">
                        <h2 className="text-xl sm:text-2xl font-semibold text-center">O que você acabou de ganhar?</h2>
                        <ul className="flex flex-col gap-4 rounded-xl border px-6 py-12 sm:p-12 text-zinc-200/80">
                            <li className="relative flex items-start">
                                <p className="">A Sessão se trata de 1h frente a frente com uma <strong>enfermeira especialista do nosso time</strong>, que vai te ouvir e te entender, para te dar direcionamentos sobre a sua atuação.</p>
                            </li>
                            <li className="relative flex items-start">
                                <p className="">Como vamos abrir horas do nosso time, não conseguimos dar o bônus para todas as alunas do Guia. Vamos selecionar as melhores respostas das interessadas que preencherem o formulário abaixo.</p>
                            </li>
                            <li className="relative flex items-start">
                                <p className="">Se você tem interesse em se candidatar a uma vaga, basta preencher o formulário abaixo:</p>
                            </li>
                        </ul>
                        <Link className="bg-emerald-300 border-8 border-emerald-500 hover:animate-pulse text-black rounded-xl py-4 px-8 w-full sm:max-w-lg text-center font-semibold" href="#forms">Quero meu bônus gratuito</Link>
                    </div>
                    <div className="flex flex-col items-center gap-8">
                        <h2 className="font-bold text-xl sm:text-3xl text-center max-w-3xl text-white ">Veja o que nossas alunas falam de nós:</h2>
                        <div className="flex justify-center gap-8 flex-wrap">
                            <VideoCard
                                name="Etiana Oliveira"
                                description="Técnica de enfermagem por 10 anos, hoje é a enfermeira amada pela equipe"
                                src="https://player-vz-d6af11ef-db4.tv.pandavideo.com.br/embed/?v=9fc3e50d-22ab-4a35-847c-4993f95773dd&iosFakeFullscreen=true"
                            />
                            <VideoCard
                                name="Paula Marangoni"
                                description="Já tinha desistido da enfermagem, por não conseguir nenhum emprego, até que…"
                                src="https://player-vz-d6af11ef-db4.tv.pandavideo.com.br/embed/?v=390322b3-cfe6-409a-af93-c515fef6b027&iosFakeFullscreen=true"
                            />
                            <VideoCard
                                name="Elionara Fernandes"
                                description="Liderou uma PCR na época do covid que impressionou até a fisioterapeuta"
                                src="https://player-vz-d6af11ef-db4.tv.pandavideo.com.br/embed/?v=a9daf0ff-953a-4240-ae37-20329b645cbf&iosFakeFullscreen=true"
                            />
                            <VideoCard
                                name="Eduarda Rodrigues"
                                description="Tinha uma técnica bem desafiadora, hoje em dia se dão super bem"
                                src="https://player-vz-d6af11ef-db4.tv.pandavideo.com.br/embed/?v=b170b06d-ea24-4778-b822-df42147576b6&iosFakeFullscreen=true"
                            />
                            <VideoCard
                                name="Cristiane Silva"
                                description={`${`"`}Eu tava perdida na enfermagem, não sabia se queria continuar${`"`}`}
                                src="https://player-vz-d6af11ef-db4.tv.pandavideo.com.br/embed/?v=4acaa152-0a64-4064-b163-0dc9f79fe76c&iosFakeFullscreen=true"
                            />
                            <VideoCard
                                name="Gleyce Albuquerque"
                                description={`${`"`}Eu queria a certeza na tomada de decisão${`"`}`}
                                src="https://player-vz-d6af11ef-db4.tv.pandavideo.com.br/embed/?v=e4b46be4-3c53-4549-96fc-8bddf4de9022&iosFakeFullscreen=true"
                            />
                        </div>
                    </div>
                    <div className="max-w-4xl text-white flex flex-col items-center gap-4 sm:gap-12 rounded-xl border px-6 py-12 sm:p-12">
                        <div className="flex flex-col items-start gap-4">
                            <h2 className="text-2xl sm:text-4xl text-left font-bold">O que é o DONA?</h2>
                            <div className="flex flex-col gap-4 text-zinc-200/80">
                                <p className="">Somos uma Instituição Educacional que transformou o mercado da enfermagem e já impactou mais de 800 alunas.</p>
                                <p className="">Oferecemos um ecossistema digital completo, através da nossa Formação e nossa Pós, com o objetivo de tornar nossas alunas enfermeiras seguras que tomam as melhores decisões nos plantões e são admiradas pelos colegas de trabalho.</p>
                                <p className="">Toda a nossa metodologia é baseada na Aprendizagem Significativa, com aulas voltadas para aplicação prática do conhecimento e validada por mais de 50 mil horas de plantões.</p>
                            </div>
                        </div>
                    </div>
                    <div
                        id="forms"
                        className="max-w-4xl"
                        data-respondi-container=""
                        data-respondi-mode="regular"
                        data-respondi-src="https://form.respondi.app/IqAf08qd"
                        data-respondi-width="100%"
                        data-respondi-height="600px"
                    ></div>
                </Section>
            </main>
            <footer className="py-4 px-4 bg-black text-white text-center">
                <p>Dona do Plantão. Todos os direitos reservados. Políticas de Privacidade.</p>
            </footer>
        </>
    )
}
