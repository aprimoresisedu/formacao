"use client"

import Button from "@/components/button";
import Card from "@/components/card";
import Dropdown from "@/components/dropdown";
import HeaderVSL from "@/components/header-vsl";
import Section from "@/components/section";
import { Slider2 } from "@/components/slider-2";
import { XMarkIcon, LockClosedIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

interface FormProps {
    searchParams: {
        utm_content?: string
        utm_campaign?: string
        utm_term?: string
        utm_source?: string
        utm_medium?: string
    }
}

type Data = {
    name: string
    email: string
    phone: string
}

const initialData = {
    name: '',
    email: '',
    phone: '',
}

export default function Page({ searchParams }: FormProps) {

    const [error, setError] = useState<boolean>(false)
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [data, setData] = useState<Data>(initialData)
    const [isOpen, setIsOpen] = useState<boolean>(false)
    const { push } = useRouter()

    function formatPhone(phone: string): string {
        phone = phone.replace(/\D/g, '');

        phone = phone.replace(/^(\d{2})(\d)/, '($1) $2');
        phone = phone.replace(/(\d{5})(\d)/, '$1-$2');

        return phone;
    }

    function onChange({ type, value }: { type: keyof Data, value: string }) {

        if (type === 'phone') {

            setData((prevState) => ({
                ...prevState,
                phone: formatPhone(value)
            }))

            return
        }

        if (type) {
            setData((prevState) => ({
                ...prevState,
                [type]: value
            }))
        }
    }

    function formatPhoneToE164(phone: string): string {
        // Remove todos os caracteres não numéricos
        const digits = phone.replace(/\D/g, "");

        // Verifica se tem o DDD (2 primeiros dígitos após o "55")
        if (digits.length === 11) {
            return `+55${digits}`;
        }

        return 'Telefone inválido'
    }

    const listHeaderItems = [
        '➡  Como tomar decisão na hora da intercorrência',
        '➡  Como ter postura e ser respeitada pela sua equipe',
        '➡  Como identificar o paciente grave em menos de 10 minutos',
        '➡  Como se destacar no mercado de trabalho para conquistar seu primeiro ou segundo cargo como enfermeira',
    ]

    const assinaturaListItems = [
        'Trilha de Valorização de Carreira: conteúdos práticos para conseguir emprego ou subir de cargo',
        'Trilha de Atuação 100% Segura: conteúdos práticos com passo a passo comprovado',
        'Trilha de Referência na Liderança: conteúdos práticos para liderar qualquer time',
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

    function formSubmited() {

        setIsLoading(true)
        setError(false)

        if (data.email.length === 0 || data.name.length === 0 || data.phone.length === 0) {

            setError(true)
            setIsLoading(false)
            return
        }

        fetch('https://connect.pabbly.com/workflow/sendwebhookdata/IjU3NjYwNTY1MDYzMjA0Mzc1MjZlNTUzMDUxM2Ii_pc', {
            method: "POST",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                ...data,
                phone: formatPhoneToE164(data.phone),
                utm_source: searchParams.utm_source,
                utm_campaign: searchParams.utm_campaign,
                utm_medium: searchParams.utm_medium,
                utm_content: searchParams.utm_content,
                utm_term: searchParams.utm_term,
            })
        })

        fetch(`https://services.leadconnectorhq.com/hooks/V4asAT7IrV5IdErLl2Fr/webhook-trigger/d8930375-d577-4610-85de-d394a6bed320`, {
            method: "POST",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                ...data,
                phone: formatPhoneToE164(data.phone),
                utm_source: searchParams.utm_source,
                utm_campaign: searchParams.utm_campaign,
                utm_medium: searchParams.utm_medium,
                utm_content: searchParams.utm_content,
                utm_term: searchParams.utm_term,
            })
        }).then(() => {

            setIsLoading(false)
            push(`https://chk.eduzz.com/2337329?email=${data.email}&name=${data.name}&phone=${data.phone}&utm_term=${searchParams.utm_term}&utm_campaign=${searchParams.utm_campaign}&utm_source=utm_source=${searchParams.utm_source}&utm_content=${searchParams.utm_content}&utm_medium=${searchParams.utm_medium}`)
        }).catch(e => console.log(e))
    }

    useEffect(() => {

        if (isOpen) {

            document.getElementsByTagName('body')[0].classList.add('overflow-hidden')
        } else {

            document.getElementsByTagName('body')[0].classList.remove('overflow-hidden')
        }
    }, [isOpen])

    return (
        <>
            <HeaderVSL
                price="10,00"
                title={<><strong>Aula:</strong> como ser uma enfermeira segura nas intercorrências e disputada pelo mercado de trabalho</>}
                searchParams={searchParams}
                subtitle={<>Assista a aula de introdução gratuitamente e você vai aprender a:</>}
                items={listHeaderItems}
            />
            <a
                href="https://wa.me/5584996995568?text=Estou%20com%20uma%20d%C3%BAvida%20sobre%20a%20Forma%C3%A7%C3%A3o%20DONA%20do%20Plant%C3%A3o%2C%20consegue%20priorizar%20meu%20atendimento%3F"
                className="fixed right-4 bottom-4 bg-white p-[2px] rounded-full z-[9999]"
            >
                <Image
                    src="/images/v4/image.png"
                    alt=""
                    width={56}
                    height={56}
                />

            </a>
            <footer className="py-4 bg-black text-white text-center text-sm">
                <p>Dona do Plantão. Todos os direitos reservados. Políticas de Privacidade.</p>
            </footer>
            {isOpen && (
                <div className={`w-full h-screen fixed top-0 left-0 flex items-center justify-center`}>
                    <div onClick={() => setIsOpen(false)} className={`absolute top-0 left-0 w-full h-full bg-black/40`} />
                    <div className="relative max-w-xl w-full px-6 py-10 pb-6 rounded-xl bg-white z-50 flex flex-col items-center gap-4">
                        <div className="text-center">
                            <h2 className="text-2xl font-semibold">Formação Dona do Plantão</h2>
                            <p className="text-slate-700 text-sm">Digite seu nome, E-mail e Telefone</p>
                            {error && <p className="text-rose-700 text-sm">Preencha os campos abaxio corretamente.</p>}
                        </div>
                        <button onClick={() => setIsOpen(false)} className="absolute top-4 right-4 border border-zinc-200 w-5 h-5 flex items-center justify-center rounded hover:bg-zinc-100">
                            <XMarkIcon className="w-3 h-3 stroke-2 text-zinc-600" />
                        </button>
                        <div className="w-full flex flex-col gap-4">
                            <div className="flex flex-col gap-1">
                                <label className="text-sm text-slate-700">Nome:</label>
                                <input
                                    value={data.name}
                                    onChange={(e) => onChange({ type: 'name', value: e.target.value })}
                                    className="px-3 py-2 border border-zinc-200 outline-none shadow rounded-lg text-slate-700 text-sm"
                                    placeholder="Digite seu nome..."
                                />
                            </div>
                            <div className="flex flex-col gap-1">
                                <label className="text-sm text-slate-700">E-mail:</label>
                                <input
                                    value={data.email}
                                    onChange={(e) => onChange({ type: 'email', value: e.target.value })}
                                    className="px-3 py-2 border border-zinc-200 outline-none shadow rounded-lg text-slate-700 text-sm"
                                    placeholder="Digite seu email..."
                                />
                            </div>
                            <div className="flex flex-col gap-1">
                                <label className="text-sm text-slate-700">Telefone:</label>
                                <input
                                    value={data.phone}
                                    onChange={(e) => onChange({ type: 'phone', value: e.target.value })}
                                    className="px-3 py-2 border border-zinc-200 outline-none shadow rounded-lg text-slate-700 text-sm"
                                    placeholder="Telefone com DDD"
                                    maxLength={15}
                                />
                            </div>
                            <div className="flex flex-col items-center gap-2">
                                <button onClick={() => formSubmited()} className="w-full bg-emerald-500 text-white font-semibold px-4 py-2 text-sm rounded-lg flex items-center justify-center gap-2 shadow">
                                    {isLoading ? (
                                        <div className="w-4 h-4 border-2 border-t-zinc-500 border-gray-300 rounded-full animate-spin" />
                                    ) : (
                                        <span>Continuar Matrícula</span>
                                    )}
                                </button>
                                <p className="text-sm text-slate-700/50 flex items-center gap-1">
                                    <LockClosedIcon className="w-3 h-3" strokeWidth={3} />
                                    <span>Seus dados estão seguros</span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}
