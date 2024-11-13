
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
    btn_url?: string
}

export default function ButtonTicket({ href, label, className, classNameB, searchParams, btn_url }: ButtonProps) { 

    if (searchParams.utm_campaign) {
        return (
            <div className={`w-full flex ${className ? className : 'max-w-sm'}`}>
                <a
                    // className={`btn-grad px-4 py-2 text-xl font-bold uppercase rounded-full ${classNameB}`}
                    className={`bg-gradient-to-b from-red-500 to-red-600 border-4 border-red-700 px-4 py-2 text-xl font-bold uppercase rounded-full ${classNameB}`}
                    href={`${btn_url}?utm_term=${searchParams.utm_term}&utm_campaign=${searchParams.utm_campaign}&utm_source=FacebookAds-p4&utm_content=${searchParams.utm_content}&utm_medium=${searchParams.utm_medium}`}

                >{label}</a>
            </div>
        )
    }

    return (
        <div className={`w-full flex ${className ? className : 'max-w-sm'}`}>
            <a
                // className={`btn-grad px-4 py-2 text-xl font-bold uppercase rounded-full ${classNameB}`}
                className={`bg-gradient-to-b from-red-500 to-red-600 border-4 border-red-700 px-4 py-2 text-xl font-bold uppercase rounded-full ${classNameB}`}
                href={`${btn_url}?utm_term=${'nao-treaqueado'}&utm_campaign=${'nao-treaqueado'}&utm_source=FacebookAds-p3&utm_content=${'nao-treaqueado'}&utm_medium=${'nao-treaqueado'}`}
            >{label}</a>
        </div>
    )
}
