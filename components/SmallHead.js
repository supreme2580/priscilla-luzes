import Link from "next/link";

export default function SmallHead() {
    const toggleMobileMenu = () => {
        const sideBar = document.querySelector(".side-bar")
        sideBar?.classList.toggle("-translate-x-full")
    }
    return(
        <div className="w-screen flex justify-between items-center px-2 py-4">
            <div className="text-2xl text-white font-semibold">Priscilla <span className="text-amber-500">Luzes</span></div>
            <button className="p-2" onClick={toggleMobileMenu}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
            </button>

            <div className="bg-zinc-800 w-screen absolute inset-y-0 left-0 transform -translate-x-full transition duration-200 ease-in-out side-bar">
                <button className="focus:outline-none focus:bg-zinc-700 p-4 mobile-menu-btn" onClick={toggleMobileMenu}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
                <div className="text-white text-2xl h-full w-full grid place-items-center">
                    <div className="flex-col text-center space-y-10">
                        <div className="hover:text-amber-500" onClick={toggleMobileMenu}><Link href="#bio"><a>Bio</a></Link></div>
                        <div className="hover:text-amber-500" onClick={toggleMobileMenu}><Link href="#videos"><a>Video</a></Link></div>
                        <div className="hover:text-amber-500" onClick={toggleMobileMenu}><Link href="/"><a>Photos</a></Link></div>
                        <div className="hover:text-amber-500" onClick={toggleMobileMenu}><Link href="/"><a>Contact</a></Link></div>
                    </div>
                </div>
            </div>
            
        </div>
    )
}