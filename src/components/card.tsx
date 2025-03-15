import { ReactNode } from "react";

export default function Card({ title, subtitle, icon, customClass }: { title: string, subtitle: string[], icon: ReactNode, customClass: string }) {
    return (
        <div className={`${customClass} px-8 py-8 rounded-xl border border-[#730087] bg-[#4D005A] flex flex-col items-start gap-4 text-left`}>
            {icon}
            <h3 className="text-2xl font-semibold">{title}</h3>
            <div className="flex flex-col gap-2 text-sm text-zinc-100">
                {subtitle.map((item: string, index: number) => (
                    <p key={index}>{item}</p>
                ))}
            </div>
        </div>
    )
}