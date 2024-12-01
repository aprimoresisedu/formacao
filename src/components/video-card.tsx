export default function VideoCard({ src, name, description, colors, className, classNameVideo }: { src: string, name?: string, description?: string, colors?: boolean, className?: string, classNameVideo?: string }) {
    return (
        <div className={`flex flex-col gap-4 w-full ${className ? className : 'max-w-sm'}`}>
            <iframe
            id="panda-527e4247-193a-4d1b-8d22-7481982fdb10"
            src={src}
            allow="accelerometer;gyroscope;autoplay;encrypted-media;picture-in-picture"
            allowFullScreen
            className={`rounded-xl w-full ${classNameVideo ? classNameVideo : 'h-60'}`}>
          </iframe>
          <div className="flex flex-col text-center">
            <h4 className={`text-xl font-semibold ${colors ? 'text-black' : 'text-white'}`}>{name}</h4>
            <p className={`${colors ? 'text-zinc-800' : 'text-zinc-200'}`}>{description}</p>
          </div>
        </div>
    )
}