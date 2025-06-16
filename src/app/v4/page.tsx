import Button from "@/components/button";
import Card from "@/components/card";
import Dropdown from "@/components/dropdown";
import Header from "@/components/header";
import Section from "@/components/section";
import { Slider } from "@/components/slider";
import { Slider2 } from "@/components/slider-2";
import Image from "next/image";

interface FormProps {
    searchParams: {
        utm_content?: string
        utm_campaign?: string
        utm_term?: string
        utm_source?: string
        utm_medium?: string
    }
}

export default function Page({ searchParams }: FormProps) {

    const listHeaderItems = [
        '➡ Conquistar uma carreira valorizada subindo de cargo ou conquistando o primeiro emprego',
        '➡ Ter 100% de segurança na atuação (não só nas intercorrências, mas no dia a dia)',
        '➡ Ser uma líder referência para a equipe, com domínio completo das habilidades socioemocionais',
    ]

    const assinaturaListItems = [
        'Trilha de Atuação 100% Segura: conteúdos práticos com passo a passo comprovado',
        'Trilha de Referência na Liderança: conteúdos práticos para liderar qualquer time',
        'Trilha de Valorização de Carreira: conteúdos práticos para conseguir emprego ou subir de cargo',
        'Elegibilidade de emissão de Certificado reconhecido pelo MEC como Curso de Aperfeiçoamento',
        'Bônus: Materclass do Plantão ao Consultório',
        'Bônus: Masterclass Educação Financeira para Enfermeiras',
        'Bônus: Imersão Painel com as Gestoras',
        'Bônus: Curso Jornada para Excelência',
    ]

    const ParaQuemE = [
        'Para estudantes de enfermagem que já querem se destacar e usar os últimos estágios para garantir o emprego na instituição.',
        'Para quem já está formada e quer conquistar o primeiro emprego como enfermeira.',
        'Para quem já está inserida no mercado de trabalho e não sabe o que fazer para conquistar outro cargo com melhor remuneração na enfermagem.',
        'Para técnicas de enfermagem que têm a graduação e não sabem como fazer a transição de carreira para efetivar o vínculo como enfermeira.',
        'Para quem é concursada e deseja atuar de uma forma mais segura nos plantões.',
    ]

    const carrosselImages = [
        ['1.0', '1.1', '1.2', '1.0', '1.1', '1.2'],
        ['2.0', '2.1', '2.2', '2.0', '2.1', '2.2'],
        ['3.0', '3.1', '3.2', '3.3', '3.4', '3.5', '3.6', '3.0', '3.1', '3.2', '3.3', '3.4', '3.5', '3.6']
    ]

    const carrosselTitles = [
        'Fundamentos da Enfermagem Pós Moderna',
        'Competências Socioemocionais',
        'Competências Técnicas'
    ]

    return (
        <>
            <Header
                price="10,00"
                title={<>Formação Dona com conhecimento prático de +20 anos de experiência para você ter segurança como enfermeira</>}
                searchParams={searchParams}
                subtitle={<>Na faculdade, nos ensinam muita teoria, mas e na prática? Esta Formação já mostrou para centenas de alunas o passo a passo para:</>}
                items={listHeaderItems}
            />
            <main className="">
                <Section classNameS="px-4 grad-01" className="py-12 sm:py-24">
                    <div className="flex flex-col gap-12 text-center">
                        <div className="max-w-4xl flex flex-col items-center gap-8 text-white">
                            <div className="flex flex-col gap-4">
                                <h2 className="text-2xl sm:text-4xl font-bold">Enfermeira que não tem postura ganha mal e tem dificuldade de conseguir emprego</h2>
                                <div>
                                    <p>O Brasil está cheio de enfermeiras formadas que ganham pouco — <strong>e não é porque o mercado está ruim</strong>.</p>
                                    <p>É porque o mercado não paga bem para quem é só mais uma.</p>
                                </div>
                            </div>
                            <div className="flex flex-col gap-4">
                                <p>A <strong>OMS</strong> prevê um déficit global de <strong>4,5 milhões de enfermeiros até 2030</strong>. Oportunidade tem!</p>
                                <div className="relative w-full h-[200px]">
                                    <Image
                                        src="/images/v4/news.png"
                                        alt="News"
                                        fill
                                        objectFit="contain"
                                    />
                                </div>
                            </div>
                            <div className="flex flex-col gap-4 text-white">
                                <p>Mas essas vagas — e os melhores salários — <strong>não são para qualquer uma</strong>.</p>
                                <p>São para as enfermeiras que <strong>decidem com segurança, lideram com clareza e entregam resultado real</strong>.</p>
                                <p>Segundo a <strong>UNESCO e o Fórum Econômico Mundial</strong>, as competências mais exigidas no mercado atual — como <strong>pensamento crítico, liderança e resiliência</strong> — simplesmente não fazem parte da grade curricular da maioria das faculdades.</p>
                            </div>
                        </div>
                        {/* <Button
                            searchParams={searchParams}
                            href="#inscricao"
                            label="QUERO FAZER MINHA INSCRIÇÃO"
                            className="text-white max-w-full flex justify-center px-12"
                        /> */}
                    </div>
                </Section>
                <Section classNameS="px-4 bg-white border-y-4 border-[#c4ecf4] bg-[#efeee8]" className="py-12 sm:py-24">
                    <div className="max-w-5xl flex flex-col items-center gap-8 text-black">
                        <h2 className="text-2xl sm:text-4xl font-bold text-black text-center">O mundo mudou. O ensino da enfermagem, não.</h2>
                        <div className="relative w-full h-[472px]">
                            <Image
                                src="/images/v4/g4.png"
                                alt=""
                                layout="fill"
                                objectFit="contain"
                            />
                        </div>
                        <div className="flex flex-col gap-4 text-black text-center">
                            <p>Enquanto isso, quem só sabe cumprir a rotina… continua no rodízio de plantões pesados e salários baixos.</p>
                            <p>Essa é a diferença entre a enfermeira que <strong>ganha 10 mil reais e escolhe onde quer trabalhar</strong>, e a enfermeira que tem <strong>dificuldade para conseguir ou manter um emprego com 2 mil reais de salário</strong>.</p>
                        </div>
                        {/* <div className="w-full sm:max-w-6xl overflow-hidden flex justify-center">
                            <Slider />
                        </div> */}
                    </div>
                </Section>
                <Section classNameS="px-4 py-12 sm:py-24 bg-[#220023]">
                    <div className="w-full flex flex-col items-center max-w-4xl">
                        <div className="text-white flex flex-col items-center gap-12">
                            <h3 className="text-2xl sm:text-4xl font-bold text-white text-center">Por que isso está acontecendo?</h3>
                            <div className="max-w-xl flex flex-col items-start gap-6 py-8 px-8 border border-[#4a124e] rounded-xl bg-[#310c34]">
                                <h4 className="text-lg font-medium text-white">Porque a faculdade te dá um diploma - mas <strong>não te ensina a ser bem paga</strong>. Não te ensina a:</h4>
                                <ul className="flex flex-col gap-2">
                                    <li className="relative ps-8 flex items-center">
                                        <svg className="absolute left-0 h-6 w-6 fill-emerald-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="m424-408-86-86q-11-11-28-11t-28 11q-11 11-11 28t11 28l114 114q12 12 28 12t28-12l226-226q11-11 11-28t-11-28q-11-11-28-11t-28 11L424-408Zm56 328q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z" /></svg>
                                        <span>Se posicionar</span>
                                    </li>
                                    <li className="relative ps-8 flex items-center">
                                        <svg className="absolute left-0 h-6 w-6 fill-emerald-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="m424-408-86-86q-11-11-28-11t-28 11q-11 11-11 28t11 28l114 114q12 12 28 12t28-12l226-226q11-11 11-28t-11-28q-11-11-28-11t-28 11L424-408Zm56 328q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z" /></svg>
                                        <span>Liderar equipes</span>
                                    </li>
                                    <li className="relative ps-8 flex items-center">
                                        <svg className="absolute left-0 h-6 w-6 fill-emerald-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="m424-408-86-86q-11-11-28-11t-28 11q-11 11-11 28t11 28l114 114q12 12 28 12t28-12l226-226q11-11 11-28t-11-28q-11-11-28-11t-28 11L424-408Zm56 328q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z" /></svg>
                                        <span>Assumir a frente diante do caos</span>
                                    </li>
                                    <li className="relative ps-8 flex items-center">
                                        <svg className="absolute left-0 h-6 w-6 fill-emerald-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="m424-408-86-86q-11-11-28-11t-28 11q-11 11-11 28t11 28l114 114q12 12 28 12t28-12l226-226q11-11 11-28t-11-28q-11-11-28-11t-28 11L424-408Zm56 328q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z" /></svg>
                                        <span>Se tornar insubstituível</span>
                                    </li>
                                </ul>
                                <div className="flex flex-col gap-6">
                                    <h5 className="text-lg font-medium text-white">E o mercado nota.</h5>
                                    <div className="flex flex-col gap-4">
                                        <p>A prova disso é a mensagem que recebemos frequentemente de gestoras e recrutadoras de enfermagem. Como essa:</p>
                                        <p className="ps-4 text-zinc-300">{`"`}Os enfermeiros não assumem liderança. Essa é a minha maior dificuldade! Não têm postura, não evoluem, não sabem comunicar, não planejam, não propõem melhorias.</p>
                                        <p className="ps-4 text-zinc-300">E aí a gente, como gestora, não sabe mais o que fazer.{`"`}</p>
                                        <p>Essa é a verdade que ninguém fala: <strong>enfermeira que não entrega valor visível é facilmente substituída e vive insatisfeita com o salário</strong>.</p>
                                    </div>
                                </div>
                            </div>
                            {/* <div className="w-full flex flex-col gap-6 sm:gap-12">
                                {carrosselImages.map((carrosel: string[], index: number) => (
                                    <div key={index} className="w-full flex justify-center items-center sm:flex-row flex-col gap-4">
                                        <div className="sm:w-56 sm:text-left text-center">
                                            <p>Módulos de</p>
                                            <h4 className="sm:text-xl text-2xl font-semibold text-grad">{carrosselTitles[index]}</h4>
                                        </div>
                                        <Slider2
                                            imagesList={carrosel}
                                        />
                                    </div>
                                ))}
                            </div> */}
                            <Button
                                searchParams={searchParams}
                                href="#inscricao"
                                label="QUERO FAZER MINHA INSCRIÇÃO"
                                className="max-w-full flex justify-center"
                            />
                        </div>
                    </div>
                </Section>
                <Section classNameS="px-4 py-12 sm:py-24 grad-01">
                    <div className="sm:grid sm:grid-cols-2 flex flex-col items-center gap-4 sm:gap-0">
                        <div className="relative w-full h-[490px] sm:h-[600px]">
                            <Image
                                src="/images/mockup.webp"
                                alt=""
                                layout="fill"
                                objectFit="contain"
                            />
                        </div>
                        <div className="text-white flex flex-col items-center gap-12">
                            <div className="flex flex-col items-start gap-4">
                                <h2 className="text-2xl sm:text-4xl text-left font-bold">Como resolver isso?:</h2>
                                <p><strong>Você precisa parar de ser uma enfermeira apenas técnica e precisa começar a ser estratégica</strong>.</p>
                                <p>Isso significa desenvolver habilidades que <strong>fazem você ser promovida, não esquecida</strong>:</p>
                                <ul className='relative flex flex-col gap-6 text-lg'>
                                    <li className="w-full relative flex items-center ps-8 border-b border-white/20 pb-4">
                                        <svg className="absolute left-0 top-1 fill-emerald-400" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="m488-440-36 36q-11 11-11 28t11 28q11 11 28 11t28-11l104-104q12-12 12-28t-12-28L508-612q-11-11-28-11t-28 11q-11 11-11 28t11 28l36 36H360q-17 0-28.5 11.5T320-480q0 17 11.5 28.5T360-440h128Zm-8 360q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z" /></svg>
                                        <p className="">Postura de liderança;</p>
                                    </li>
                                    <li className="w-full relative flex items-center ps-8 border-b border-white/20 pb-4">
                                        <svg className="absolute left-0 top-1 fill-emerald-400" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="m488-440-36 36q-11 11-11 28t11 28q11 11 28 11t28-11l104-104q12-12 12-28t-12-28L508-612q-11-11-28-11t-28 11q-11 11-11 28t11 28l36 36H360q-17 0-28.5 11.5T320-480q0 17 11.5 28.5T360-440h128Zm-8 360q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z" /></svg>
                                        <p className="">Clareza emocional e comunicação com a equipe;</p>
                                    </li>
                                    <li className="w-full relative flex items-center ps-8 border-b border-white/20 pb-4">
                                        <svg className="absolute left-0 top-1 fill-emerald-400" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="m488-440-36 36q-11 11-11 28t11 28q11 11 28 11t28-11l104-104q12-12 12-28t-12-28L508-612q-11-11-28-11t-28 11q-11 11-11 28t11 28l36 36H360q-17 0-28.5 11.5T320-480q0 17 11.5 28.5T360-440h128Zm-8 360q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z" /></svg>
                                        <p className="">Raciocínio clínico na prática;</p>
                                    </li>
                                    <li className="w-full relative flex items-center ps-8 border-b border-white/20 pb-4">
                                        <svg className="absolute left-0 top-1 fill-emerald-400" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="m488-440-36 36q-11 11-11 28t11 28q11 11 28 11t28-11l104-104q12-12 12-28t-12-28L508-612q-11-11-28-11t-28 11q-11 11-11 28t11 28l36 36H360q-17 0-28.5 11.5T320-480q0 17 11.5 28.5T360-440h128Zm-8 360q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z" /></svg>
                                        <p className="">Capacidade de organizar processos e pensar como gestora</p>
                                    </li>
                                </ul>
                                <p className="text-center">Quando você desenvolve isso, você para de disputar por salário e começa a escolher onde quer atuar.</p>
                                <Button
                                    searchParams={searchParams}
                                    href="#inscricao"
                                    label="QUERO FAZER MINHA INSCRIÇÃO"
                                    className="max-w-full flex justify-center"
                                />
                            </div>
                        </div>
                    </div>
                </Section>
                <Section classNameS="px-4 bg-white border-y-4 border-[#c4ecf4] bg-[#efeee8]" className="py-12 sm:py-24">
                    <div className="max-w-5xl flex flex-col items-center gap-8 text-black">
                        <h2 className="text-2xl sm:text-4xl font-bold text-black text-center">E a prova disso são os resultados das centenas de alunas DONAS do Plantão.</h2>
                        <ul className="columns-1 sm:columns-2 md:columns-3 gap-2 space-y-2">
                            {Array.from({ length: 20 }).map((_, index) => (
                                <li key={index} className="break-inside-avoid">
                                    <Image
                                        src={`/images/v4/test/${index + 1}.png`}
                                        alt={`Depoimento ${index + 1}`}
                                        width={500}
                                        height={500}
                                        className="w-full h-auto"
                                    />
                                </li>
                            ))}
                        </ul>
                        <Button
                            searchParams={searchParams}
                            href="#inscricao"
                            label="QUERO FAZER MINHA INSCRIÇÃO"
                            className="max-w-full flex justify-center"
                        />
                        {/* <div className="w-full sm:max-w-6xl overflow-hidden flex justify-center">
                            <Slider />
                        </div> */}
                    </div>
                </Section>
                <Section classNameS="px-4 py-12 sm:py-24 bg-[#220023]">
                    <div className="w-full flex flex-col items-center max-w-4xl">
                        <div className="text-white flex flex-col items-center sm:gap-12">
                            <h3 className="text-2xl sm:text-4xl font-bold text-white text-center">Todas essas habilidades são treináveis, não é sobre “talento” ou “dom”</h3>
                            <div className="max-w-4xl flex flex-col items-center gap-14 py-8 sm:px-8 b2order border-[#4a124e] rounded-xl b2g-[#310c34]">
                                <p className="max-w-2xl text-lg font-medium text-white text-center">Apresento o <strong>Método DONA do Plantão</strong>, com os 4 pilares que fazem o mercado parar e olhar pra você:</p>
                                <ul className="relative w-full h-[800px] sm:h-[700px] flex flex-col justify-center sm:items-center gap-6">
                                    <li className="bg-[#441348] px-4 py-2 rounded absolute -top-[39px] z-50 font-extrabold">D.O.N.A</li>
                                    <li className="sm:absolute left-0 flex translate-x-[8%] sm:translate-x-0 w-[90%] sm:w-[390px] top-[25px] h-[160px] py-8 px-8 border border-[#4a124e] rounded-xl bg-[#310c34] flex items-center gap-4 z-50">
                                        <span className="h-6 w-6 bg-[#441348] border-4 border-[#310c34] rounded-full absolute -left-[34px] sm:-right-[39px] sm:left-auto z-[999]" />
                                        <h5 className="text-6xl font-extrabold text-white">D</h5>
                                        <p className="text-zinc-300">Domine técnicas e conteúdos: Aprenda o que ninguém ensina sobre raciocínio clínico, fluxogramas e atuação segura.</p>
                                    </li>
                                    <li className="sm:absolute flex translate-x-[8%] sm:translate-x-0 sm:right-0 top-[185px] w-[90%] sm:w-[390px] h-[160px] py-8 px-8 border border-[#4a124e] rounded-xl bg-[#310c34] flex items-center gap-4 z-50">
                                        <span className="h-6 w-6 bg-[#441348] border-4 border-[#310c34] rounded-full absolute -left-[34px] sm:-left-[39px] z-[999]" />
                                        <h5 className="text-6xl font-extrabold text-white">O</h5>
                                        <p className="text-zinc-300">Organize e lidere a sua equipe: Liderança prática, delegação de funções e engajamento de equipe.</p>
                                    </li>
                                    <li className="absolute h-full w-4 bg-[#441348] border-x-[4px] border-[#310c34]"></li>
                                    <li className="sm:absolute left-0 flex translate-x-[8%] sm:translate-x-0 top-[345px] w-[90%] sm:w-[390px] h-[160px] py-8 px-8 border border-[#4a124e] rounded-xl bg-[#310c34] flex items-center gap-4">
                                        <span className="h-6 w-6 bg-[#441348] border-4 border-[#310c34] rounded-full absolute -left-[34px] sm:-right-[39px] sm:left-auto z-[999]" />
                                        <h5 className="text-6xl font-extrabold text-white">N</h5>
                                        <p className="text-zinc-300">Organize e lidere a sua equipe: Liderança prática, delegação de funções e engajamento de equipe.</p>
                                    </li>
                                    <li className="sm:absolute flex translate-x-[8%] sm:translate-x-0 sm:right-0 bottom-[25px] w-[90%] sm:w-[390px] h-[160px] py-8 px-8 border border-[#4a124e] rounded-xl bg-[#310c34] flex items-center gap-4">
                                        <span className="h-6 w-6 bg-[#441348] border-4 border-[#310c34] rounded-full absolute -left-[34px] sm:-left-[39px] z-[999]" />
                                        <h5 className="text-6xl font-extrabold text-white">A</h5>
                                        <p className="text-zinc-300">Organize e lidere a sua equipe: Liderança prática, delegação de funções e engajamento de equipe.</p>
                                    </li>
                                    <li className="absolute -bottom-[46px] sm:left-auto -left-10 z-50"><svg className="h-24 w-24 fill-[#441348]" xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M459-381 314-526q-3-3-4.5-6.5T308-540q0-8 5.5-14t14.5-6h304q9 0 14.5 6t5.5 14q0 2-6 14L501-381q-5 5-10 7t-11 2q-6 0-11-2t-10-7Z" /></svg></li>
                                </ul>
                                <div className="flex flex-col gap-4 text-center">
                                    <p>Além das 150 mil horas de experiência em plantões que sustentam o nosso método, ele também é baseado na conversa com gestores e recrutadores de grandes instituições.</p>
                                    <p>Nós conhecemos os bastidores dos processos seletivos e sabemos exatamente o que você precisa fazer para se destacar como enfermeira.</p>
                                </div>
                            </div>
                            {/* <div className="w-full flex flex-col gap-6 sm:gap-12">
                                {carrosselImages.map((carrosel: string[], index: number) => (
                                    <div key={index} className="w-full flex justify-center items-center sm:flex-row flex-col gap-4">
                                        <div className="sm:w-56 sm:text-left text-center">
                                            <p>Módulos de</p>
                                            <h4 className="sm:text-xl text-2xl font-semibold text-grad">{carrosselTitles[index]}</h4>
                                        </div>
                                        <Slider2
                                            imagesList={carrosel}
                                        />
                                    </div>
                                ))}
                            </div> */}
                            <Button
                                searchParams={searchParams}
                                href="#inscricao"
                                label="QUERO FAZER MINHA INSCRIÇÃO"
                                className="max-w-full flex justify-center"
                            />
                        </div>
                    </div>
                </Section>
                <Section classNameS="px-4 py-12 sm:py-24 grad-01">
                    <div className="w-full flex flex-col items-center max-w-4xl">
                        <div className="text-white flex flex-col items-center gap-12">
                            <h3 className="text-2xl sm:text-4xl font-bold text-white text-center">Para quem é a nossa Formação?</h3>
                            <div className="max-w-xl flex flex-col items-start gap-6 py-8 px-8 border border-[#4a124e] rounded-xl bg-[#310c34]">
                                <ul className="flex flex-col gap-4">
                                    {ParaQuemE.map((item, index) => (
                                        <li key={index} className="relative ps-8 flex items-start">
                                            <svg className="absolute left-0 h-6 w-6 fill-emerald-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="m424-408-86-86q-11-11-28-11t-28 11q-11 11-11 28t11 28l114 114q12 12 28 12t28-12l226-226q11-11 11-28t-11-28q-11-11-28-11t-28 11L424-408Zm56 328q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z" /></svg>
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </Section>
                <Section classNameS="px-4 py-12 sm:py-24 bg-[#220023]">
                    <div className="w-full flex flex-col items-center gap-12">
                        <div className="text-white flex flex-col items-center gap-12">
                            <h3 className="text-2xl sm:text-4xl font-bold text-white text-center max-w-4xl">Quais trilhas de conteúdos práticos você vai encontrar na Formação DONA?</h3>
                            <div className="w-full flex flex-col gap-6 sm:gap-12">
                                {carrosselImages.map((carrosel: string[], index: number) => (
                                    <div key={index} className="w-full flex justify-center items-center sm:flex-row flex-col gap-4">
                                        <div className="sm:w-56 sm:text-left text-center">
                                            <p>Módulos de</p>
                                            <h4 className="sm:text-xl text-2xl font-semibold text-grad">{carrosselTitles[index]}</h4>
                                        </div>
                                        <Slider2
                                            imagesList={carrosel}
                                        />
                                    </div>
                                ))}
                            </div>
                            <Button
                                searchParams={searchParams}
                                href="#inscricao"
                                label="QUERO FAZER MINHA INSCRIÇÃO"
                                className="max-w-full flex justify-center"
                            />
                        </div>
                        <div className="max-w-2xl flex flex-col gap-6 text-center text-white">
                            <h3 className="text-2xl sm:text-3xl font-bold text-white">Você quer poder ganhar mais como enfermeira, e nós temos o caminho certo para isso</h3>
                            <div className="flex flex-col gap-4">
                                <p className="">Na Formação DONA do Plantão, a praticidade será a sua maior vantagem. Você não perderá o seu tempo assistindo à aulas com muita teoria e pouca prática.</p>
                                <p className="">Muito pelo contrário: As aulas são práticas e diretas ao ponto, todo o conteúdo foi planejado para ter resultados nos seus plantões e na sua carreira.</p>
                                <h3 className="text-2xl font-semibold text-grad">Não perca mais tempo.</h3>
                                <p className="">Se torne DONA do Plantão e conquiste seu primeiro emprego na enfermagem ou um cargo melhor do que você já tem hoje.</p>
                            </div>
                        </div>
                        <Button
                            searchParams={searchParams}
                            href="#inscricao"
                            label="QUERO FAZER MINHA INSCRIÇÃO"
                            className="max-w-full flex justify-center"
                        />
                    </div>
                </Section>
                <Section classNameS="px-4 py-12 sm:py-24 grad-01">
                    <div className="flex flex-col gap-12">
                        <div className="sm:grid sm:grid-cols-2 flex flex-col items-center gap-4 sm:gap-0">
                            <div className="relative w-full h-[390px] sm:h-[600px]">
                                <Image
                                    src="/images/mockup2.webp"
                                    alt=""
                                    layout="fill"
                                    objectFit="contain"
                                />
                            </div>
                            <div className="text-white flex flex-col items-center gap-12">
                                <div className="flex flex-col items-center gap-4">
                                    <h2 className="text-2xl sm:text-4xl text-left font-bold">Com a Formação DONA do Plantão, você vai:</h2>
                                    <ul className='relative flex flex-col gap-6 text-lg'>
                                        <li className="relative flex items-center ps-8">
                                            <svg className="absolute left-0 top-1 fill-emerald-400" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="m488-440-36 36q-11 11-11 28t11 28q11 11 28 11t28-11l104-104q12-12 12-28t-12-28L508-612q-11-11-28-11t-28 11q-11 11-11 28t11 28l36 36H360q-17 0-28.5 11.5T320-480q0 17 11.5 28.5T360-440h128Zm-8 360q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z" /></svg>
                                            <p className="border-b border-white/20 pb-4">Ter segurança na sua atuação durante a intercorrência através de um passo a passo mental</p>
                                        </li>
                                        <li className="relative flex items-center ps-8">
                                            <svg className="absolute left-0 top-1 fill-emerald-400" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="m488-440-36 36q-11 11-11 28t11 28q11 11 28 11t28-11l104-104q12-12 12-28t-12-28L508-612q-11-11-28-11t-28 11q-11 11-11 28t11 28l36 36H360q-17 0-28.5 11.5T320-480q0 17 11.5 28.5T360-440h128Zm-8 360q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z" /></svg>
                                            <p className="border-b border-white/20 pb-4">Entender como delegar as funções sem a sua equipe fique perdida</p>
                                        </li>
                                        <li className="relative flex items-center ps-8">
                                            <svg className="absolute left-0 top-1 fill-emerald-400" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="m488-440-36 36q-11 11-11 28t11 28q11 11 28 11t28-11l104-104q12-12 12-28t-12-28L508-612q-11-11-28-11t-28 11q-11 11-11 28t11 28l36 36H360q-17 0-28.5 11.5T320-480q0 17 11.5 28.5T360-440h128Zm-8 360q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z" /></svg>
                                            <p className="border-b border-white/20 pb-4">Ser reconhecida como uma enfermeira líder e admirada pela sua equipe</p>
                                        </li>
                                        <li className="relative flex items-center ps-8">
                                            <svg className="absolute left-0 top-1 fill-emerald-400" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="m488-440-36 36q-11 11-11 28t11 28q11 11 28 11t28-11l104-104q12-12 12-28t-12-28L508-612q-11-11-28-11t-28 11q-11 11-11 28t11 28l36 36H360q-17 0-28.5 11.5T320-480q0 17 11.5 28.5T360-440h128Zm-8 360q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z" /></svg>
                                            <p className="border-b border-white/20 pb-4">Conversar de igual para igual com o colega médico e toda a equipe multi</p>
                                        </li>
                                        <li className="relative flex items-center ps-8">
                                            <svg className="absolute left-0 top-1 fill-emerald-400" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="m488-440-36 36q-11 11-11 28t11 28q11 11 28 11t28-11l104-104q12-12 12-28t-12-28L508-612q-11-11-28-11t-28 11q-11 11-11 28t11 28l36 36H360q-17 0-28.5 11.5T320-480q0 17 11.5 28.5T360-440h128Zm-8 360q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z" /></svg>
                                            <p className="border-b border-white/20 pb-4">Se destacar no mercado de trabalho e conquistar o seu primeiro emprego na enfermagem ao seguir nosso checklist prático                                        </p>
                                        </li>
                                        <li className="relative flex items-center ps-8">
                                            <svg className="absolute left-0 top-1 fill-emerald-400" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="m488-440-36 36q-11 11-11 28t11 28q11 11 28 11t28-11l104-104q12-12 12-28t-12-28L508-612q-11-11-28-11t-28 11q-11 11-11 28t11 28l36 36H360q-17 0-28.5 11.5T320-480q0 17 11.5 28.5T360-440h128Zm-8 360q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z" /></svg>
                                            <p className="border-b border-white/20 pb-4">Ser valorizada com um cargo melhor do que você já tem atualmente na enfermagem</p>
                                        </li>
                                    </ul>
                                    <Button
                                        searchParams={searchParams}
                                        href="#inscricao"
                                        label="QUERO FAZER MINHA INSCRIÇÃO"
                                        className="max-w-full flex justify-center"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col items-center gap-10">
                            <h2 className="max-w-xl text-2xl sm:text-4xl text-center font-bold text-white">Os resultados das nossas alunas falam por nós:</h2>
                            <div className="flex flex-col items-center gap-6">
                                <div className="flex gap-6 flex-wrap">
                                    <iframe className="rounded-md w-full w-full h-[200px] lg:w-[500px] lg:h-[240px]" id="panda-2c4e2261-5c54-4e4b-b459-06ba3c243842" src="https://player-vz-d6af11ef-db4.tv.pandavideo.com.br/embed/?v=2c4e2261-5c54-4e4b-b459-06ba3c243842&iosFakeFullscreen=true" allow="accelerometer;gyroscope;autoplay;encrypted-media;picture-in-picture" allowFullScreen ></iframe>
                                    <iframe className="rounded-md w-full w-full h-[200px] lg:w-[500px] lg:h-[240px]" id="panda-9bd1c94b-8018-4028-9dce-8af0aa25c241" src="https://player-vz-d6af11ef-db4.tv.pandavideo.com.br/embed/?v=9bd1c94b-8018-4028-9dce-8af0aa25c241&iosFakeFullscreen=true" allow="accelerometer;gyroscope;autoplay;encrypted-media;picture-in-picture" allowFullScreen></iframe>
                                </div>
                                <div className="flex gap-6 flex-wrap">
                                    <iframe className="rounded-md w-full w-full h-[200px] lg:w-[400px] lg:h-[240px]" id="panda-3fd75f61-71fe-4705-a066-73faa14ff7b1" src="https://player-vz-d6af11ef-db4.tv.pandavideo.com.br/embed/?v=3fd75f61-71fe-4705-a066-73faa14ff7b1&iosFakeFullscreen=true" allow="accelerometer;gyroscope;autoplay;encrypted-media;picture-in-picture" allowFullScreen></iframe>
                                    <iframe className="rounded-md w-full w-full h-[200px] lg:w-[400px] lg:h-[240px]" id="panda-ae5bf1c3-aa2a-461f-81c1-81bfb8f738e5" src="https://player-vz-d6af11ef-db4.tv.pandavideo.com.br/embed/?v=ae5bf1c3-aa2a-461f-81c1-81bfb8f738e5&iosFakeFullscreen=true" allow="accelerometer;gyroscope;autoplay;encrypted-media;picture-in-picture" allowFullScreen></iframe>
                                    <iframe className="rounded-md w-full w-full h-[200px] lg:w-[400px] lg:h-[240px]" id="panda-515f8b27-d211-44c7-9c7b-7b8e6ba13861" src="https://player-vz-d6af11ef-db4.tv.pandavideo.com.br/embed/?v=515f8b27-d211-44c7-9c7b-7b8e6ba13861&iosFakeFullscreen=true" allow="accelerometer;gyroscope;autoplay;encrypted-media;picture-in-picture" allowFullScreen></iframe>
                                </div>
                            </div>
                        </div>
                    </div>
                </Section>
                <Section id="inscricao" classNameS="px-4 py-12 sm:-py-24 bg-image-2">
                    <div className="flex flex-col gap-6 sm:gap-12">
                        <div className="w-full flex flex-col items-center text-white">
                            <p className="text-lg uppercase">Assinatura anual</p>
                            <h2 className="text-2xl sm:text-4xl text-center font-bold">Formação Dona do Plantão</h2>
                        </div>
                        <div className="sm:grid sm:grid-cols-2 flex flex-col gap-8 sm:gap-12">
                            <div>
                                <ul className="flex flex-col gap-4">
                                    {assinaturaListItems.map((item: string, index: number) => (
                                        <li className="relative flex items-center ps-8" key={index + item}>
                                            <svg className="absolute left-0 top-1 fill-emerald-400" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="m488-440-36 36q-11 11-11 28t11 28q11 11 28 11t28-11l104-104q12-12 12-28t-12-28L508-612q-11-11-28-11t-28 11q-11 11-11 28t11 28l36 36H360q-17 0-28.5 11.5T320-480q0 17 11.5 28.5T360-440h128Zm-8 360q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z" /></svg>
                                            <p className="text-white">{item}</p>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="max-w-lg bg-[#4e005b]/80 rounded-xl flex flex-col items-center justify-start gap-8 border border-white/20 p-8">
                                <div className="relative w-[124px] h-[60px] sm:w-[124px] sm:h-[32px]">
                                    <Image
                                        src="/images/logo.webp"
                                        alt=""
                                        layout="fill"
                                        objectFit="contain"
                                    />
                                </div>
                                <div className="text-center text-white flex flex-col items-center gap-4">
                                    <div>
                                        <h5 className="flex items-end">
                                            <span className="text-lg">12x</span>
                                            <span className="text-5xl font-bold">R$59,70</span>
                                        </h5>
                                        <p className="text-lg text-white/80">Ou R$ 597,00 à vista</p>
                                    </div>
                                    <hr className="w-full border border-white/20" />
                                    <h5 className="uppercase"><strong>7 dias</strong> de garantia incondicional</h5>
                                    <Button
                                        searchParams={searchParams}
                                        href="https://wa.me/5584996206183?text=C%C3%A9sar%2C%20estou%20vindo%20da%20p%C3%A1gina%20e%20quero%20me%20matricular%20na%20Forma%C3%A7%C3%A3o%20DONA!"
                                        label="Quero me matricular!"
                                        classNameB="w-full max-w-xl text-center"
                                    />
                                    <div className="relative w-[124px] h-[60px] sm:w-[224px] sm:h-[96px]">
                                        <Image
                                            src="/images/payment.png"
                                            alt=""
                                            layout="fill"
                                            objectFit="contain"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Section>
                <Section classNameS="px-4 pb-0 pt-12 sm:py-24 bg-[#000] grad-01">
                    <div className="flex flex-col gap-6 sm:gap-12">
                        <div className="flex flex-col items-center gap-6 grad-02 w-full max-w-xl py-12 px-4 sm:p-12 rounded-xl">
                            <Image
                                src="/images/garantia.webp"
                                alt="Garantia selo"
                                width={150}
                                height={150}
                            />
                            <h2 className="text-2xl sm:text-4xl text-center font-bold text-white">Garantia Incondicional de 7 dias</h2>
                            <div className="flex flex-col gap-4 text-center">
                                <p className="text-white">Temos tanta segurança de que a Formação te entrega o caminho certo para se qualificar e ganhar mais como enfermeira que estamos dispostas a te dar 7 dias sem risco para fazer sua matrícula e começar a usar nosso passo a passo validado.</p>
                            </div>
                            <hr className="w-full bg-white" />
                            <Button
                                searchParams={searchParams}
                                href="#inscricao"
                                label="QUERO FAZER MINHA INSCRIÇÃO"
                                className="text-white max-w-full"
                                classNameB="text-white w-full text-center"
                            />
                        </div>
                    </div>
                </Section>
                {/* <Section classNameS="px-4 pb-12 pt-0 sm:py-24 grad-01">
                    <div className="sm:grid sm:grid-cols-2 flex flex-col items-center gap-4 sm:gap-0">
                        <div className="relative w-full h-[400px] sm:h-[600px]">
                            <Image
                                src="/images/mockup2.webp"
                                alt=""
                                layout="fill"
                                objectFit="contain"
                            />
                        </div>
                        <div className="text-white flex flex-col items-center gap-4 sm:gap-12">
                            <div className="flex flex-col items-start gap-4">
                                <h2 className="text-2xl sm:text-4xl text-left font-bold">O que é o DONA?</h2>
                                <div className="flex flex-col gap-4">
                                    <p className="">Somos uma Instituição Educacional que transformou o mercado da enfermagem e já impactou mais de 800 alunas.</p>
                                    <p className="">Oferecemos um ecossistema digital completo, através da nossa Formação e nossa Pós, com o objetivo de tornar nossas alunas enfermeiras seguras que tomam as melhores decisões nos plantões e são admiradas pelos colegas de trabalho.</p>
                                    <p className="">Toda a nossa metodologia é baseada na Aprendizagem Significativa, com aulas voltadas para aplicação prática do conhecimento e validada por mais de 50 mil horas de plantões.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </Section> */}
                <Section classNameS="px-4 py-12 sm:py-24 bg-[#efeee8]">
                    <div className="w-full flex flex-col items-center gap-4">
                        <h2 className="text-2xl sm:text-4xl font-bold text-black text-center">Perguntas Frequentes</h2>
                        <div className="flex flex-col w-full max-w-3xl gap-4">
                            <Dropdown title="Funciona para quem está desempregada?">
                                <p>Sim! Frequentemente gestoras e recrutadoras de enfermagem nos pedem indicações de enfermeiras para processos seletivos. Ou seja: sabemos e oferecemos a você exatamente o que o mercado de trabalho espera. Colocando tudo em prática, em poucos meses você conquista o seu primeiro emprego (e já tem o retorno do seu investimento na sua matrícula da Formação).</p>
                            </Dropdown>
                            <Dropdown title="Funciona para quem tem pouco tempo?">
                                <p>A Formação é feita por nós, enfermeiras, que além de sermos educadoras também somos mães e esposas. Por isso, ela foi desenvolvida para enfermeiras que mesmo com a vida corrida, ainda desejam se qualificar profissionalmente.</p>
                            </Dropdown>
                            <Dropdown title="Funciona para quem não fez uma boa graduação?">
                                <p>Para se tornar uma enfermeira DONA do Plantão, você não precisa “decorar” a Brunner inteira. Você só precisa dominar as urgências e emergências que vão aparecer no seu plantão e também estar alinhada com o que o mercado de trabalho espera e é exatamente isso que você encontra na nossa Formação.</p>
                            </Dropdown>
                            <Dropdown title="Funciona para qualquer setor da enfermagem?">
                                <p>Sim. Independente se você trabalha na UTI, Enfermaria, PS, Sala vermelha, UBS, Classificação de risco, Homecare… a Formação foi pensada para entregar segurança na sua atuação e valorização para a sua carreira.</p>
                            </Dropdown>
                            <Dropdown title="Plano de assinatura">
                                <p>Faça parte da maior formação para enfermeiras e assine nosso plano por apenas 12x de R$ 59,70.</p>
                                <p>Você terá acesso a todas as aulas gravadas, Elegibilidade da Certificação pelo MEC ao final do curso, materiais de apoio e as trilhas de aprendizagem individual.</p>
                                <p>Lembrando que a cobrança ocorre anualmente, mas você pode parcelar esse valor em até doze vezes sem juros no cartão.</p>
                            </Dropdown>
                            <Dropdown title="Garantia">
                                <p>Oferecemos uma garantia incondicional de 7 dias. Sendo assim, você pode entrar, acessar todo o conteúdo disponível e, se não se adaptar, achar que não é para você ou até mesmo se arrepender nos primeiros 7 sete dias, pode solicitar o reembolso dentro desse prazo e nós devolveremos 100% do valor investido. Simples assim, sem complicação ou letras miúdas.</p>
                            </Dropdown>
                            <Dropdown title="Fidelidade">
                                <p>Ao adquirir nossa assinatura, você pode cancelar a renovação automática dela a qualquer momento, sem problema algum. O cancelamento do seu plano evita que a sua assinatura anual seja renovada automaticamente e o acesso permanece liberado até o final do ano pago.</p>
                            </Dropdown>
                            <Dropdown title="Como acessar">
                                <p>Após realizar a sua assinatura e o pagamento ter sido confirmado com sucesso, você receberá o acesso ao nosso portal de aulas com o seu login e senha por e-mail.</p>
                                <p>Você poderá acessar o portal pelo link que receber via e-mail ou pelo whatsapp da nossa equipe.</p>
                                <p>Se tiver alguma dúvida, não se preocupe, o nosso suporte está sempre disposto a ajudar da melhor maneira. É só enviar um e-mail para: contato@aprimresisedu.com.</p>
                            </Dropdown>
                            <Dropdown title="E se eu não gostar?">
                                <p>Você tem 7 dias para conferir o conteúdo do Guia e decidir se ele é para você ou não.</p>
                                <p>Isso significa que se, por qualquer razão, você não estiver completamente satisfeita com o material, basta entrar em contato conosco dentro desse período e nós devolveremos 100% do seu dinheiro, sem perguntas nem burocracias. O risco é zero.</p>
                            </Dropdown>
                            <Dropdown title="Por quais aulas começar?">
                                <p>Em nossa plataforma, temos um módulo chamado Comece por Aqui. Ali explicamos sobre os conceitos fundamentais da nossa metodologia e também sobre como utilizar a nossa plataforma para que você não tenha nenhuma dúvida.</p>
                                <p>Além disso, ao entrar para a nossa Formação, você também poderá participar da Aula de Boas Vindas ao vivo, assim, você vai entender individualmente qual será o seu caminho dentro da nossa Plataforma.</p>
                            </Dropdown>
                            <Dropdown title="Renovação">
                                <p>A renovação da assinatura acontece automaticamente a cada 12 meses. Para assinaturas realizadas por cartão de crédito, o valor da anuidade é cobrado novamente no seu cartão a cada renovação automática. Mas se sua assinatura foi feita por pagamento via boleto ou Pix, você receberá as informações para pagamento por e-mail no dia em que a renovação acontecer. Essa forma de cobrança traz muito mais praticidade para você nos pagamentos.</p>
                            </Dropdown>
                            <Dropdown title="Formas de pagamento">
                                <p>Trabalhamos com as seguintes formas de pagamento:</p>
                                <p>{'–'} Pix</p>
                                <p>{'–'} Boleto à vista</p>
                                <p>{'–'} Saldo Eduzz</p>
                                <p>{'–'} Cartão de crédito em até 12x</p>
                            </Dropdown>
                            <Dropdown title="Cancelamento">
                                <p>Você pode cancelar a sua assinatura quando quiser. Basta entrar em contato com o nosso time de suporte pelo e-mail contato@aprimoresisedu.com e solicitar o cancelamento da sua assinatura.</p>
                            </Dropdown>
                            <Dropdown title="Reembolso">
                                <p>O reembolso integral da assinatura pode ser solicitado dentro dos 7 dias de garantia sem problema algum. Basta contatar a nossa equipe de suporte e você vai conseguir toda a ajuda que precisa para realizar o reembolso.</p>
                            </Dropdown>
                            <Dropdown title="Ainda tenho uma dúvida">
                                <p>Estamos aqui para te ajudar! Se você ainda tem alguma dúvida, aperte <a className="text-blue-500" href="https://api.whatsapp.com/send?phone=558496995568&text=Isa,%20quero%20tirar%20uma%20d%C3%BAvida%20sobre%20a%20Forma%C3%A7%C3%A3o%20DONA%20do%20Plant%C3%A3o!%20Poderia%20me%20ajudar?">neste link</a> e fale com a nossa equipe de matrículas: Falar com a equipe de matrículas.</p>
                            </Dropdown>
                        </div>
                    </div>
                </Section>
            </main>
            <footer className="py-4 bg-black text-white text-center">
                <p>Dona do Plantão. Todos os direitos reservados. Políticas de Privacidade.</p>
            </footer>
        </>
    )
}
