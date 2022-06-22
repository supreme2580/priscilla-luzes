import SmallHead from "./SmallHead";

export default function SmallHero() {
    return(
        <div className="bg-zinc-800 min-h-auto flex-col">
            <div className=""><SmallHead /></div>
            <div className="w-screen h-40 bg-smallHero bg-center bg-cover flex items-center justify-center">
                <div className="mt-32 w-32 h-32 rounded-full bg-hero bg-center bg-cover"></div>
            </div>
            <div className="flex-col w-full text-center mt-14 space-y-2 px-4">
                <div className="text-2xl text-white font-semibold">Priscilla <span className="text-amber-500">Luzes</span></div>
                <div className="text-lg text-white">Hello I am Priscilla Luzes and I am an 
                <span className="text-amber-500"> actress</span>, scroll down to know more about me</div>
            </div>
        </div>
    )
}