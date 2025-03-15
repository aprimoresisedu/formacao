
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

export default function Button({ href, label, className, classNameB, searchParams }: ButtonProps) {

    if (href) {
        return (
            <div className={`w-full flex ${className ? className : 'max-w-sm'}`}>
                <a
                    className={`px-16 sm:px-20 btn-grad-2 px-4 py-3 text-xl font-bold uppercase rounded-full ${classNameB}`}
                    href={href}

                >{label}</a>
            </div>
        )
    }

    if (searchParams.utm_campaign) {
        return (
            <div className={`w-full flex ${className ? className : 'max-w-sm'}`}>
                <a
                    className={`btn-grad-2 px-4 py-3 text-xl font-bold uppercase rounded-full ${classNameB}`}
                    href={`https://chk.eduzz.com/2337329/?utm_term=${searchParams.utm_term}&utm_campaign=${searchParams.utm_campaign}&utm_source=utm_source=${searchParams.utm_source}&utm_content=${searchParams.utm_content}&utm_medium=${searchParams.utm_medium}`}

                >{label}</a>
            </div>
        )
    }

    return (
        <div className={`w-full flex ${className ? className : 'max-w-sm'}`}>
            <a
                className={`btn-grad-2 px-4 py-3 text-xl font-bold uppercase rounded-full ${classNameB}`}
                href={`https://chk.eduzz.com/2337329/?utm_term=${'nao-treaqueado'}&utm_campaign=${'nao-treaqueado'}&utm_source=nao-traqueado&utm_content=${'nao-treaqueado'}&utm_medium=${'nao-treaqueado'}`}
            >{label}</a>
        </div>
    )
}