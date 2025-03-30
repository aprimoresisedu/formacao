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
        '➡ Ter 100% de segurança na atuação (não só nas intercorrências, mas no dia a dia)',
        '➡ Ser uma líder referência para a equipe, com domínio completo das habilidades socioemocionais',
        '➡ Conquistar uma carreira valorizada subindo de cargo ou conquistando o primeiro emprego',
    ]

    const subtitles = [
        [
            'Para que os seus pacientes tenham o melhor desfecho possível, quanto mais segurança você tiver, melhor vai ser.',
            'Porque na hora do caos, na maioria das vezes a gente congela.Às vezes, a pressão vai no teto e a insegurança bate ainda mais forte.',
            'Na Formação Prática do DONA, você vai ter uma trilha de conteúdos com treinamentos práticos e simples para saber cada passo a passo comprovado que deixa todas as outras enfermeiras pensando: “eu nunca vi uma enfermeira lidando com uma intercorrência tão bem assim!”.',
        ],
        [
            'Quando o assunto é liderança, normalmente as enfermeiras ou acabam sendo “boazinhas demais” e deixam todo mundo no hospital fazer o quer…',
            'Ou acabam sendo autoritárias demais, tentando ganhar a equipe através da imposição de cima para baixo.',
            'Isso acaba acontecendo porque a faculdade não te ensina nada sobre as habilidades socioemocionais. Mas, aqui na Formação DONA, você aprende sobre as estratégias de comunicação, liderança e engajamento de equipe, comprovadas cientificamente, para que você não dependa de um “carisma natural” para liderar. ',
        ],
        [
            'Não sabe exatamente o que fazer para se destacar no mercado de trabalho?',
            'Enquanto o mercado está em constante mudança, as grades curriculares das graduações são sempre as mesmas.',
            'Para alcançar esse destaque, tudo o que você precisa é estar alinhada com o futuro do cuidado. Através do desenvolvimento das habilidades emergentes segundo o Fórum Econômico Mundial. E aqui na Formação você encontra uma trilha especializada para você subir de cargo na enfermagem ou conquistar o seu primeiro emprego.',
        ]
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
                            <h2 className="text-2xl sm:text-4xl font-bold">+1000 alunas enfermeiras nos mostraram que você só precisa de 3 pilares para se tornar DONA do plantão</h2>
                            <div className="sm:grid sm:grid-cols-2 gap-6 flex flex-col">
                                <Card
                                    title="Atuação 100% Segura"
                                    icon={<svg className="fill-white w-16 h-16" xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M200-200v-560 454-85 191Zm0 80q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v320h-80v-320H200v560h280v80H200Zm494 40L552-222l57-56 85 85 170-170 56 57L694-80ZM320-440q17 0 28.5-11.5T360-480q0-17-11.5-28.5T320-520q-17 0-28.5 11.5T280-480q0 17 11.5 28.5T320-440Zm0-160q17 0 28.5-11.5T360-640q0-17-11.5-28.5T320-680q-17 0-28.5 11.5T280-640q0 17 11.5 28.5T320-600Zm120 160h240v-80H440v80Zm0-160h240v-80H440v80Z" /></svg>}
                                    subtitle={subtitles[0]}
                                    customClass="col-span-1"
                                />
                                <Card
                                    title="Referência na Liderança"
                                    icon={<svg className="fill-white w-16 h-16" xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M0-240v-63q0-43 44-70t116-27q13 0 25 .5t23 2.5q-14 21-21 44t-7 48v65H0Zm240 0v-65q0-32 17.5-58.5T307-410q32-20 76.5-30t96.5-10q53 0 97.5 10t76.5 30q32 20 49 46.5t17 58.5v65H240Zm540 0v-65q0-26-6.5-49T754-397q11-2 22.5-2.5t23.5-.5q72 0 116 26.5t44 70.5v63H780Zm-455-80h311q-10-20-55.5-35T480-370q-55 0-100.5 15T325-320ZM160-440q-33 0-56.5-23.5T80-520q0-34 23.5-57t56.5-23q34 0 57 23t23 57q0 33-23 56.5T160-440Zm640 0q-33 0-56.5-23.5T720-520q0-34 23.5-57t56.5-23q34 0 57 23t23 57q0 33-23 56.5T800-440Zm-320-40q-50 0-85-35t-35-85q0-51 35-85.5t85-34.5q51 0 85.5 34.5T600-600q0 50-34.5 85T480-480Zm0-80q17 0 28.5-11.5T520-600q0-17-11.5-28.5T480-640q-17 0-28.5 11.5T440-600q0 17 11.5 28.5T480-560Zm1 240Zm-1-280Z" /></svg>}
                                    subtitle={subtitles[1]}
                                    customClass="col-span-1"
                                />
                                <Card
                                    title="Valorização de Carreira"
                                    icon={<svg className="fill-white w-16 h-16" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="m387-412 35-114-92-74h114l36-112 36 112h114l-93 74 35 114-92-71-93 71ZM240-40v-309q-38-42-59-96t-21-115q0-134 93-227t227-93q134 0 227 93t93 227q0 61-21 115t-59 96v309l-240-80-240 80Zm240-280q100 0 170-70t70-170q0-100-70-170t-170-70q-100 0-170 70t-70 170q0 100 70 170t170 70ZM320-159l160-41 160 41v-124q-35 20-75.5 31.5T480-240q-44 0-84.5-11.5T320-283v124Zm160-62Z" /></svg>}
                                    subtitle={subtitles[2]}
                                    customClass="col-span-2"
                                />
                            </div>
                        </div>
                        <Button
                            searchParams={searchParams}
                            href="#inscricao"
                            label="QUERO VER VALORES"
                            className="text-white max-w-full flex justify-center px-12"
                        />
                    </div>
                </Section>
                <Section classNameS="px-4 bg-white border-y-4 border-[#c4ecf4] bg-[#efeee8]" className="py-12 sm:py-24">
                    <div className="flex flex-col items-center gap-12">
                        <h2 className="text-2xl sm:text-4xl font-bold text-black text-center max-w-4xl">Você também pode ser mais uma das enfermeiras DONAs do Plantão</h2>
                        <div className="w-full max-w-5xl flex gap-4 sm:flex-nowrap flex-wrap">
                            <div className="relative w-full h-[200px]">
                                <Image
                                    src="/images/02.png"
                                    alt=""
                                    layout="fill"
                                    objectFit="contain"
                                />
                            </div>
                            <div className="relative w-full h-[200px]">
                                <Image
                                    src="/images/03.png"
                                    alt=""
                                    layout="fill"
                                    objectFit="contain"
                                />
                            </div>
                            <div className="relative w-full h-[200px]">
                                <Image
                                    src="/images/04.png"
                                    alt=""
                                    layout="fill"
                                    objectFit="contain"
                                />
                            </div>
                        </div>
                        <div className="w-full sm:max-w-6xl overflow-hidden flex justify-center">
                            <Slider />
                        </div>
                    </div>
                </Section>
                <Section classNameS="px-4 py-12 sm:py-24 bg-[#220023]">
                    <div className="w-full">
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
                                label="QUERO VER VALORES"
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
                                    label="QUERO VER VALORES"
                                    className="max-w-full flex justify-center"
                                />
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
                                        href="https://wa.me/5584996995568?text=Isa%2C%20estou%20vindo%20da%20p%C3%A1gina%20e%20quero%20me%20matricular%20na%20Forma%C3%A7%C3%A3o%20DONA!"
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
                                <p className="text-white">Sem letras miúdas. Sem enrolação. Se você achar, por qualquer motivo que seja, que a Formação DONA do Plantão não é para você, basta mandar um email e nós devolveremos o seu investimento.</p>
                                <p className="text-white">0 riscos para você conferir com os seus próprios olhos o quanto a Formação vai te ajudar no seu dia a dia de plantão!</p>
                            </div>
                            <hr className="w-full bg-white" />
                            <Button
                                searchParams={searchParams}
                                href="#inscricao"
                                label="Quero ver valores"
                                className="text-white max-w-full"
                                classNameB="text-white w-full text-center"
                            />
                        </div>
                    </div>
                </Section>
                <Section classNameS="px-4 pb-12 pt-0 sm:py-24 grad-01">
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
                </Section>
                <Section classNameS="px-4 py-12 sm:py-24 bg-[#efeee8]">
                    <div className="w-full flex flex-col items-center gap-4">
                        <h2 className="text-2xl sm:text-4xl font-bold text-black text-center">Perguntas Frequentes</h2>
                        <div className="flex flex-col w-full max-w-3xl gap-4">
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
