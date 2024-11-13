
interface ButtonProps {
    label: string
    href: string
    className?: string
    classNameB?: string
    searchParams: {
        utm_content?: string 
        utm_campaign?: string 
        utm_term?: string
        utm_source?: string
        utm_medium?: string
    }
}

export default function ButtonT2({ href, label, className, classNameB, searchParams }: ButtonProps) {

    if (searchParams.utm_campaign) {
        return (
            <div className={`w-full flex ${className ? className : 'max-w-sm'}`}>
                <a
                    // className={` border-8 border-[#608c98]/60  bg-[#00c9ff] px-4 py-2 text-xl font-bold uppercase rounded-full ${classNameB}`}
                    className={` border-8 border-[#608c98]/60  bg-red-500 px-4 py-2 text-xl font-bold uppercase rounded-full ${classNameB}`}
                    href={`https://chk.eduzz.com/2460920?utm_term=${searchParams.utm_term}&utm_campaign=${searchParams.utm_campaign}&utm_source=${searchParams.utm_source}&utm_content=${searchParams.utm_content}&utm_medium=${searchParams.utm_medium}`}

                >{label}</a>
            </div>
        )
    }

    return (
        <div className={`w-full flex ${className ? className : 'max-w-sm'}`}>
            <a
                // className={` border-8 border-[#608c98]/60  bg-[#00c9ff] px-4 py-2 text-xl font-bold uppercase rounded-full ${classNameB}`}
                className={` border-8 border-[#608c98]/60  bg-red-500 px-4 py-2 text-xl font-bold uppercase rounded-full ${classNameB}`}
                href={`https://chk.eduzz.com/2460920?utm_term=${'nao-treaqueado'}&utm_campaign=${'nao-treaqueado'}&utm_source=${'nao-traqueado'}&utm_content=${'nao-treaqueado'}&utm_medium=${'nao-treaqueado'}`}
            >{label}</a>
        </div>
    )
}
