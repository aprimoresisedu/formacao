
interface ButtonProps {
    label: string
    href: string
    className?: string
    classNameB?: string
}

export default function Button({ href, label, className, classNameB }: ButtonProps) {
    return (
        <div className={`w-full flex ${className ? className :  'max-w-sm'}`}>
            <a
                className={`btn-grad px-4 py-3 text-xl font-bold uppercase rounded-full ${classNameB}`}
                href={href}
            >{label}</a>
        </div>
    )
}