export default function Bio() {
    return(
        <div className="w-full px-4 sm:px-10" id="bio">
            <div className="text-3xl sm:text-6xl text-amber-500 w-full text-center font-semibold">Bio<span className="text-white">graphy</span></div>
            <div className="w-full sm:flex justify-between space-x-4 space-y-4 mt-10">
                <div className="w-full h-full text-white text-lg sm:text-2xl -mt-4 sm:mt-4">
                    Priscilla Luzes is a 21 year old Brazilian-American actress,
                     born in Rio de Janeiro. She is studying for Media Arts and Theatre in the University 
                     of North Texas in Denton, TX. She is known for her role as Nadia, a superhero costume designer, 
                     in the YouTube web-series Mighty Moron (2019). She is recognized for her role in Arrows (2019), 
                     as a fiery pessimistic survivor in a post apocalyptic world. In the short film, Her Guest (2020), 
                     she is known for her role as Yennifer, a pretentious model seeking wealth. She stars in UNT's Short 
                     Film Club's Production, Jackie (2022), a psychological thriller. She aspires to work as a 
                     professional actress in larger productions.
                </div>
                <div className="w-full h-auto bg-smallHero bg-cover bg-center h-screen hidden sm:block hover:scale-105 transition duration-200 ease-in transform"></div>
            </div>
        </div>
    )
}