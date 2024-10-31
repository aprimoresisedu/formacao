import Button from "@/components/button";
import Dropdown from "@/components/dropdown";
import Header from "@/components/header";
import Section from "@/components/section";
import { Slider } from "@/components/slider";
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
    return (
        <>
            <Header
                price="10,00"
                searchParams={searchParams}
            />
            <main className="">
                <Section classNameS="px-4 grad-01" className="py-12 sm:py-24">
                    <div className="flex flex-col gap-12 text-center">
                        <div className="relative w-full h-[126px] sm:h-[280px]">
                            <Image
                                src="/images/01.png"
                                alt=""
                                layout="fill"
                                objectFit="contain"
                            />
                        </div>
                        <div className="max-w-4xl flex flex-col items-center gap-4 text-white">
                            <h2 className="text-2xl sm:text-4xl font-bold">Tenha segurança sobre o que fazer, quando fazer e como delegar na intercorrência</h2>
                            <p className="text-lg">Você não precisa se sentir travada quando o paciente intercorre.</p>
                            <p className="text-lg">As +800 enfermeiras formadas pelo DONA que usaram o mesmo passo a passo dentro desse Guia de Intercorrência Segura são a maior prova disso.</p>
                            <p className="text-lg">Para que os seus pacientes tenham o melhor desfecho possível, quanto mais segurança você tiver, melhor vai ser.</p>
                            <p className="text-lg">Porque na hora do caos, na maioria das vezes a gente congela. Às vezes, a pressão vai no teto e a insegurança bate ainda mais forte.</p>
                            <p className="text-lg">E parece que a única coisa que resta é chamar uma enfermeira mais experiente porque ela já sabe o que tem que fazer.</p>
                            <p className="text-lg">Já é tão pouco tempo na hora da intercorrência, né? Cada segundo, cada minuto valem mais que ouro, valem a própria vida do seu paciente.</p>
                            <p className="text-lg">Se você já souber exatamente o que tem que fazer, como tem que fazer e em que ordem tem que fazer, quantas vidas a mais você poderia salvar?</p>
                            <p className="text-lg">Com esse Guia de Intercorrência Segura, é exatamente isso que as nossas +800 enfermeiras já tem, e é o que você também pode ter.</p>
                            <p className="text-lg">Antes, elas ficavam inseguras. Agora, elas seguem um passo a passo comprovado, que deixa todas as outras enfermeiras pensando: {"“"}eu nunca vi uma enfermeira lidando com uma intercorrência tão bem assim!{"”"}.</p>
                            <p className="text-lg">É esse tipo de segurança que você está buscando?</p>
                        </div>
                        <Button
                            searchParams={searchParams}
                            href=""
                            label="Quero acesso ao guia de intercorrência"
                            className="text-white max-w-full flex justify-center"
                        />
                    </div>
                </Section>
                <Section classNameS="px-4 bg-[#2b67c7] border-y-4 border-[#c4ecf4]" className="py-12 sm:py-24">
                    <div className="flex flex-col items-center gap-12">
                        <h2 className="text-2xl sm:text-4xl font-bold text-white text-center">Você também pode ser mais uma das enfermeiras DONAs do Plantão</h2>
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
                <Section classNameS="py-12 sm:py-24 grad-01">
                    <div className="">
                        <div className="text-white flex flex-col items-center gap-12">
                            <div className="w-full max-w-2xl bg-[#14285a] py-12 px-6 sm:p-12 rounded-xl border border-white flex flex-col items-center gap-4">
                                <h2 className="text-2xl text-center font-bold">O que você vai encontrar nesse Guia:</h2>
                                <ul className='relative flex flex-col gap-6 text-lg'>
                                    <li className="relative flex items-center ps-8">
                                        <svg className="absolute left-0 top-1 fill-emerald-400" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="m424-424-86-86q-11-11-28-11t-28 11q-11 11-11 28t11 28l114 114q12 12 28 12t28-12l226-226q11-11 11-28t-11-28q-11-11-28-11t-28 11L424-424ZM200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm0-80h560v-560H200v560Zm0-560v560-560Z" /></svg>
                                        <p className="border-b border-white/20 pb-4">Como tomar sempre a melhor decisão durante a intercorrência, através de um passo a passo sistematizado e comprovado</p>
                                    </li>
                                    <li className="relative flex items-center ps-8">
                                        <svg className="absolute left-0 top-1 fill-emerald-400" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="m424-424-86-86q-11-11-28-11t-28 11q-11 11-11 28t11 28l114 114q12 12 28 12t28-12l226-226q11-11 11-28t-11-28q-11-11-28-11t-28 11L424-424ZM200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm0-80h560v-560H200v560Zm0-560v560-560Z" /></svg>
                                        <p className="border-b border-white/20 pb-4">Método ABCDE para descobrir se o paciente é grave ou não em até 90 segundos</p>
                                    </li>
                                    <li className="relative flex items-center ps-8">
                                        <svg className="absolute left-0 top-1 fill-emerald-400" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="m424-424-86-86q-11-11-28-11t-28 11q-11 11-11 28t11 28l114 114q12 12 28 12t28-12l226-226q11-11 11-28t-11-28q-11-11-28-11t-28 11L424-424ZM200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm0-80h560v-560H200v560Zm0-560v560-560Z" /></svg>
                                        <p className="border-b border-white/20 pb-4">O passo a passo essencial no atendimento do paciente grave (através do Protocolo M.O.V.E)</p>
                                    </li>
                                    <li className="relative flex items-center ps-8">
                                        <svg className="absolute left-0 top-1 fill-emerald-400" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="m424-424-86-86q-11-11-28-11t-28 11q-11 11-11 28t11 28l114 114q12 12 28 12t28-12l226-226q11-11 11-28t-11-28q-11-11-28-11t-28 11L424-424ZM200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm0-80h560v-560H200v560Zm0-560v560-560Z" /></svg>
                                        <p className="border-b border-white/20 pb-4">Como utilizar o Sistema SAMPLE para avaliar todo o histórico clínico do paciente</p>
                                    </li>
                                </ul>
                                <Button
                                    searchParams={searchParams}
                                    href=""
                                    label="Liberar meu guia agora"
                                    className="max-w-full flex justify-center"
                                />
                            </div>
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
                                <h2 className="text-2xl sm:text-4xl text-left font-bold">Com o Guia Intercorrência Segura, você vai:</h2>
                                <ul className='relative flex flex-col gap-6 text-lg'>
                                    <li className="relative flex items-center ps-8">
                                        <svg className="absolute left-0 top-1 fill-emerald-400" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="m488-440-36 36q-11 11-11 28t11 28q11 11 28 11t28-11l104-104q12-12 12-28t-12-28L508-612q-11-11-28-11t-28 11q-11 11-11 28t11 28l36 36H360q-17 0-28.5 11.5T320-480q0 17 11.5 28.5T360-440h128Zm-8 360q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z" /></svg>
                                        <p className="border-b border-white/20 pb-4">Ter segurança em cada um dos passos da sua atuação na intercorrência</p>
                                    </li>
                                    <li className="relative flex items-center ps-8">
                                        <svg className="absolute left-0 top-1 fill-emerald-400" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="m488-440-36 36q-11 11-11 28t11 28q11 11 28 11t28-11l104-104q12-12 12-28t-12-28L508-612q-11-11-28-11t-28 11q-11 11-11 28t11 28l36 36H360q-17 0-28.5 11.5T320-480q0 17 11.5 28.5T360-440h128Zm-8 360q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z" /></svg>
                                        <p className="border-b border-white/20 pb-4">Saber se o seu paciente é ou não grave nos primeiros segundos</p>
                                    </li>
                                    <li className="relative flex items-center ps-8">
                                        <svg className="absolute left-0 top-1 fill-emerald-400" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="m488-440-36 36q-11 11-11 28t11 28q11 11 28 11t28-11l104-104q12-12 12-28t-12-28L508-612q-11-11-28-11t-28 11q-11 11-11 28t11 28l36 36H360q-17 0-28.5 11.5T320-480q0 17 11.5 28.5T360-440h128Zm-8 360q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z" /></svg>
                                        <p className="border-b border-white/20 pb-4">Entender como delegar as funções sem que a sua equipe fique perdida</p>
                                    </li>
                                    <li className="relative flex items-center ps-8">
                                        <svg className="absolute left-0 top-1 fill-emerald-400" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="m488-440-36 36q-11 11-11 28t11 28q11 11 28 11t28-11l104-104q12-12 12-28t-12-28L508-612q-11-11-28-11t-28 11q-11 11-11 28t11 28l36 36H360q-17 0-28.5 11.5T320-480q0 17 11.5 28.5T360-440h128Zm-8 360q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z" /></svg>
                                        <p className="border-b border-white/20 pb-4">Ser reconhecida como uma enfermeira líder e admirada pela sua equipe</p>
                                    </li>
                                    <li className="relative flex items-center ps-8">
                                        <svg className="absolute left-0 top-1 fill-emerald-400" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="m488-440-36 36q-11 11-11 28t11 28q11 11 28 11t28-11l104-104q12-12 12-28t-12-28L508-612q-11-11-28-11t-28 11q-11 11-11 28t11 28l36 36H360q-17 0-28.5 11.5T320-480q0 17 11.5 28.5T360-440h128Zm-8 360q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z" /></svg>
                                        <p className="border-b border-white/20 pb-4">Conversar de igual pra igual com o colega médico e toda a equipe multi</p>
                                    </li>
                                </ul>
                                <Button
                                    searchParams={searchParams}
                                    href=""
                                    label="Liberar meu guia agora"
                                    className="max-w-full flex justify-center"
                                />
                            </div>
                        </div>
                    </div>
                </Section>
                <Section classNameS="px-4 py-12 sm:py-24 bg-[#000] grad-01">
                    <div className="flex flex-col gap-6 sm:gap-12">
                        <div className="w-full flex flex-col items-center gap-6">
                            <h2 className="text-2xl sm:text-4xl text-center font-bold text-white">Guia: Intercorrência Segura</h2>
                            <div className="flex flex-col items-center gap-6 bg-[#33678c] border w-full max-w-xl py-12 px-4 sm:p-16 rounded-xl">
                                <p className="px-4 py-2 border border-[#c4ecf4] rounded-full text-lg text-white font-semibold text-center">Adquira agora</p>
                                <div className="flex flex-col text-center">
                                    <p className="text-base text-white">de <span className="line-through text-red-500 font-semibold">R$97,00</span> por apenas</p>
                                    <p className="text-5xl font-bold text-white">R$10,00</p>
                                </div>
                                <hr className="w-full bg-white" />
                                <Button
                                    searchParams={searchParams}
                                    href=""
                                    label="Liberar meu guia agora"
                                    className="text-white max-w-full"
                                    classNameB="text-white w-full text-center"
                                />
                                <div className="relative flex justify-center">
                                    <Image
                                        src="/images/bandeiras.svg"
                                        alt="Bandeiras aceitas"
                                        width={200}
                                        height={50}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col items-center gap-6 grad-02 w-full max-w-xl py-12 px-4 sm:p-12 rounded-xl">
                            <Image
                                src="/images/garantia.webp"
                                alt="Garantia selo"
                                width={150}
                                height={150}
                            />
                            <h2 className="text-2xl sm:text-4xl text-center font-bold text-white">Garantia Incondicional de 7 dias</h2>
                            <div className="flex flex-col gap-4 text-center">
                                <p className="text-white">Sem letras miúdas. Sem enrolação. Se você achar, por qualquer motivo que seja, que o Guia de Intercorrência Segura não é para você, basta mandar um email e nós devolvemos o seu investimento.</p>
                                <p className="text-white">0 riscos para você conferir com os seus próprios olhos o quanto esse Guia vai te ajudar no seu dia a dia de plantão!</p>
                            </div>
                            <hr className="w-full bg-white" />
                            <Button
                                searchParams={searchParams}
                                href=""
                                label="Liberar meu guia agora"
                                className="text-white max-w-full"
                                classNameB="text-white w-full text-center"
                            />
                        </div>
                        <div className="flex flex-col items-center gap-6 bg-[#7FD9FF69] w-full max-w-xl py-12 px-4 sm:p-12 rounded-xl">
                            <h2 className="text-2xl sm:text-4xl text-center font-bold text-[#c4ecf4]">{"“"}Mas, esse Guia é bom mesmo? Ele é tão barato...{"”"}</h2>
                            <div className="flex flex-col gap-4 text-center">
                                <p className="text-white">Se ele não for bom, como nós vamos fazer você ter vontade de procurar a nossa Formação e nossa Pós em Urgência e Inovação?</p>
                                <p className="text-white">Esse super desconto é uma forma de fazer você conhecer o DONA e entender o que faz nosso conteúdo gerar transformação para a sua atuação a beira leito!</p>
                                <p className="text-white">O objetivo é que você consiga ter mais segurança na sua atuação. E, se você quiser uma ajuda para ter alguém do seu lado pegando na sua mão, nós vamos poder te ajudar!</p>
                            </div>
                            <hr className="w-full bg-white" />
                            <Button
                                searchParams={searchParams}
                                href=""
                                label="Liberar meu guia agora"
                                className="text-white max-w-full"
                                classNameB="text-white w-full text-center"
                            />
                        </div>
                    </div>
                </Section>
                <Section classNameS="px-4 py-12 sm:py-24 grad-01">
                    <div className="sm:grid sm:grid-cols-2 flex flex-col items-center gap-4 sm:gap-0">
                        <div className="relative w-full h-[490px] sm:h-[600px]">
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
                <Section classNameS="px-4 py-12 sm:py-24 bg-white">
                    <div className="w-full flex flex-col items-center gap-4">
                        <h2 className="text-2xl sm:text-4xl font-bold text-black text-center">Perguntas Frequentes</h2>
                        <div className="flex flex-col w-full max-w-3xl gap-4">
                            <Dropdown title="Para quem é esse Guia?">
                                <p>Para enfermeiras que querem se sentir mais seguras e admiradas pelos colegas de trabalho.</p>
                                <p>Mesmo hoje se sentindo totalmente travada nas intercorrências, você vai alcançar a segurança e o reconhecimento que você busca nos plantões.</p>
                            </Dropdown>
                            <Dropdown title="Para quem NÃO é esse Guia?">
                                <p>Sendo sincera: não é para enfermeiras que já acham que dominam 100% as intercorrências.</p>
                                <p>Na nossa experiência, esse tipo de enfermeira costuma ficar fechada para entender como ter mais resultados na beira leito.</p>
                                <p>Se esse for o seu perfil, a nossa sugestão é que você avalie bem se é uma boa decisão mesmo pegar o seu guia.</p>
                            </Dropdown>
                            <Dropdown title="E se eu não souber o que fazer na intercorrência?">
                                <p>Então o Guia é ainda mais necessário para você. Ele vai te ajudar justamente com isso.</p>
                                <p>Se você ainda não sabe o que fazer, quando fazer e como delegar as funções pra sua equipe, saiba que o Guia foi pensado exatamente para a sua realidade.</p>
                            </Dropdown>
                            <Dropdown title="Como eu acesso o guia após a compra?">
                                <p>Logo após a confirmação da sua compra, você receberá um e-mail com as instruções detalhadas para acessar a área de alunos.</p>
                                <p>Lá, você encontrará o ebook em formato PDF, pronto para ser baixado e lido no seu computador, tablet ou celular.</p>
                                <p>Você poderá acessar o conteúdo a qualquer hora, de qualquer lugar, e consultar o Guia sempre que precisar (até no seu plantão, caso você queira).</p>
                            </Dropdown>
                            <Dropdown title="E se eu não gostar?">
                                <p>Você tem 7 dias para conferir o conteúdo do Guia e decidir se ele é para você ou não.</p>
                                <p>Isso significa que se, por qualquer razão, você não estiver completamente satisfeita com o material, basta entrar em contato conosco dentro desse período e nós devolveremos 100% do seu dinheiro, sem perguntas nem burocracias. O risco é zero.</p>
                            </Dropdown>
                            <Dropdown title="Por que é tão barato?">
                                <p>Nós queremos que você nos conheça e entenda o que é ser DONA do seu Plantão, que é o objetivo de todos os nossos produtos e acompanhamentos.</p>
                                <p>Queremos que você se encante, e busque a nossa ajuda de outras formas, caso faça sentido para você.</p>
                                <p>Nós não iríamos conseguir fazer isso sem que você tenha uma excelente experiência com o seu guia, entende?</p>
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