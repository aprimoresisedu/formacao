import Image from "next/image"
import Button from "./button"
import { ReactNode } from "react"

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

export default function Header({ searchParams, price, title, subtitle, items, btn }: HeaderProps) {
    return (
        <header className="sm:h-screen h-[1000px] bg-image flex sm:items-center justify-center border-b-4 border-[#c4ecf4] px-4 sm:pt-0 pt-12">
            <div className="w-full max-w-7xl sm:grid sm:grid-cols-2 flex flex-col">
                <div className="w-full max-w-xl flex flex-col gap-4 text-white sm:text-left text-center sm:items-start items-center">
                    <div className="relative w-[124px] h-[60px] sm:w-[124px] sm:h-[90px]">
                        <Image
                            src="/images/logo.webp"
                            alt=""
                            layout="fill"
                            objectFit="contain"
                        />
                    </div>
                    <h1 className="text-2xl sm:text-3xl font-bold">{title}</h1>
                    <p className="">{subtitle}</p>
                    {items.length > 0 && (
                        <ul>
                            {items.map((item: string, index: number) => (
                                <li key={index}>{item}</li>
                            ))}
                        </ul>
                    )}
                    <div className="w-full max-w-sm flex flex-col gap-4 items-center">
                        {/* <div className="flex flex-col text-center">
                            <p className="text-base">de <span className="line-through text-red-500 font-semibold">R$97,00</span> por apenas</p>
                            <p className="text-5xl font-bold text-[#c4ecf4]">R${price}</p>
                        </div> */}
                        {!btn && (
                            <Button
                                searchParams={searchParams}
                                href="#inscricao"
                                label="Quero ver valores"
                                classNameB="w-full max-w-xl text-center"
                            />
                        )}
                    </div>
                </div>
            </div>
        </header>
    )
}
