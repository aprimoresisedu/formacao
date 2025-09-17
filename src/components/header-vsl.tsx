"use client"

import { ReactNode } from "react"
import Script from "next/script"
import Image from "next/image"
import { useRouter } from "next/navigation"

interface HeaderProps {
    searchParams: {
        utm_content?: string
        utm_campaign?: string
        utm_term?: string
        utm_source?: string
        utm_medium?: string
    }
    price: string
    title: ReactNode
    subtitle: ReactNode
    items: string[]
    btn?: boolean
}

export default function HeaderVSL({
    title,
    subtitle,
    items,
}: HeaderProps) {

    // const [isLoading, setIsLoading] = useState(false)
    const { push } = useRouter()

    return (
        <header className="sm:min-h-screen flex sm:items-start justify-center border-b-4 border-[#c4ecf4] px-4 pt-12 pb-6 bg-[#f2f2f2]">
            <div className="w-full max-w-7xl flex flex-col items-center">
                <div className="w-full max-w-5xl flex flex-col gap-10 text-slate-900 text-center items-center">
                    <div className="relative w-[124px] h-[45px] sm:w-[124px] sm:h-[45px]">
                        <Image
                            src="/images/logo-black.png"
                            alt=""
                            layout="fill"
                            objectFit="contain"
                        />
                    </div>
                    <h1 className="text-2xl sm:text-4xl sm:font-bold">{title}</h1>
                    <p className="shadow bg-white border border-zinc-200 rounded px-4 py-1">
                        {subtitle}
                    </p>
                    <div className="sm:grid sm:grid-cols-2 text-left flex flex-col gap-4">
                        <ul className="flex flex-col gap-4 sm:block">
                            <li>{items[0]}</li>
                            <li>{items[1]}</li>
                        </ul>
                        <ul className="flex flex-col gap-4 sm:block">
                            <li>{items[2]}</li>
                            <li>{items[3]}</li>
                        </ul>
                    </div>

                    <iframe
                        id="panda-0d1d8bc0-ab97-4b46-91ee-9ae6a0857458"
                        src="https://player-vz-d6af11ef-db4.tv.pandavideo.com.br/embed/?v=0d1d8bc0-ab97-4b46-91ee-9ae6a0857458&iosFakeFullscreen=true"
                        style={{ border: "none" }}
                        allow="accelerometer;gyroscope;autoplay;encrypted-media;picture-in-picture"
                        allowFullScreen
                        className="sm:rounded-2xl rounded-xl sm:w-[720px] sm:h-[360px] w-full h-[240px]"
                    ></iframe>

                    <div className="w-full max-w-xl flex flex-col gap-2 items-center">
                        <p className="text-sm">Para participar da Formação DONA do Plantão, aperte no botão abaixo</p>
                        <button
                            className={`w-full sm:px-20 px-4 py-5 flex justify-center font-bold uppercase rounded-xl bg-[#05c8b5] text-white`}
                            onClick={() => {
                                // setIsLoading(true)
                                push(`/v4`)
                            }}
                        >
                            {/* {isLoading ? (
                                <div className="w-5 h-5 border-2 border-t-emerald-800 border-emerald-200 rounded-full animate-spin" />
                            ) : ( */}
                            <span>QUERO PARTICIPAR DA FORMAÇÃO</span>
                            {/* )} */}
                        </button>
                    </div>

                    <Script
                        src="https://player.pandavideo.com.br/api.v2.js"
                        strategy="lazyOnload"
                        onLoad={() => {
                            if (typeof window !== "undefined" && "PandaPlayer" in window) {
                                const panda_id_player =
                                    "panda-0d1d8bc0-ab97-4b46-91ee-9ae6a0857458"
                                // @ts-ignore
                                const p = new window.PandaPlayer(panda_id_player, {
                                    onReady() {
                                        // @ts-ignore
                                        p.loadWindowScreen({ panda_id_player })
                                    },
                                })
                            }
                        }}
                    />
                </div>
            </div>
        </header >
    )
}
