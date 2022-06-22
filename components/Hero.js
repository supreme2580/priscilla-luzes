import Link from "next/link"

export default function Hero() {
    return (
        <div className="flex justify-between scroll-smooth">
            <div className="w-full bg-zinc-800 h-screen px-10 py-4 flex-col justify-between">
                <div className="flex-col space-y-2">
                    <div className="text-white text-3xl text-amber-500 font-semibold">Priscilla <span className="text-white">Luiz</span></div>
                    <div className="flex space-x-6 text-white text-lg">
                        <div className="hover:text-amber-500"><Link href="#bio"><a>Bio</a></Link></div>
                        <div className="hover:text-amber-500"><Link href="/"><a>Video</a></Link></div>
                        <div className="hover:text-amber-500"><Link href="/"><a>Photos</a></Link></div>
                        <div className="hover:text-amber-500"><Link href="/"><a>Contact</a></Link></div>
                    </div>
                </div>
                <div className="flex flex-col h-screen justify-center items-center">
                    <div className="mb-32 space-y-4">
                        <div className="text-white text-5xl font-semibold">Hey I am <span className="text-amber-500">Priscilla Luiz</span></div>
                        <div className="text-white text-xl">-Actress</div>
                    </div>
                </div>
            </div>
            <div className="w-full bg-hero bg-cover bg-center h-screen"></div>
        </div>
    )
}