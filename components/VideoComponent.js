import Image from "next/image";
import Link from "next/link";

export default function VideoComponent() {
    return(
        <div className="w-full px-4 sm:px-10 flex-col space-y-4" id="videos">
            <div className="text-3xl sm:text-6xl text-white w-full text-center font-semibold">Vid<span className="text-amber-500">eos</span></div>
            <div className="sm:grid md:grid-cols-2 xl:grid-cols-3 gap-4 3xl:flex flex-wrap justify-center mt-10">
                <Link href="https://www.youtube.com/watch?v=lfuMWWElxuo">
                    <a target="_blank">
                        <div className="flex-col bg-black">
                            <Image
                                src="https://i.ytimg.com/vi/lfuMWWElxuo/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDYM5ofPzGredOL7Io_2FR1QpvAbA"
                                layout="responsive"
                                width={1920}
                                height={1080} />
                                <div className="text-white text-lg font-semibold text-center">NO MIRROR MAKEUP CHALLENGE😳</div>
                        </div>
                    </a>
                </Link>
                <Link href="https://www.youtube.com/watch?v=k1LgOyxxMcs">
                <div className="flex-col bg-black">
                    <a target="_blank">
                        <Image
                            src="https://i.ytimg.com/vi/k1LgOyxxMcs/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBSaM61o8u3C_OYwkoemFm8CoWamA"
                            layout="responsive"
                            width={1920}
                            height={1080} />
                            <div className="text-white text-lg font-semibold text-center">Can I Sing Poor Unfortunate Souls???</div>
                    </a>
                </div>
                </Link>
                <Link href="https://www.youtube.com/watch?v=C2tBOm9TU1k">
                    <a target="_blank">
                        <div className="flex-col bg-black">
                            <Image
                                src="https://i.ytimg.com/vi/C2tBOm9TU1k/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCZJsekdHXbcwYfNL3cMvDui0Ce_g"
                                layout="responsive"
                                width={1920}
                                height={1080} />
                                <div className="text-white text-lg font-semibold text-center">Drag King Makeup 💄👑</div>
                        </div>
                    </a>
                </Link>
                <Link href="https://www.youtube.com/watch?v=4GyuopqWNJc">
                    <a target="_blank">
                        <div className="flex-col bg-black">
                            <Image
                                src="https://i.ytimg.com/vi/4GyuopqWNJc/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBOPLFuxY251vFLJkkmxOYtgxY_fQ"
                                layout="responsive"
                                width={1920}
                                height={1080} />
                                <div className="text-white text-lg font-semibold text-center">Gore Makeup: 5 Different Wounds🩸</div>
                        </div>
                    </a>
                </Link>
                <Link href="https://www.youtube.com/watch?v=YS_LSEanMQY">
                    <a target="_blank">
                        <div className="flex-col bg-black">
                            <Image
                                src="https://i.ytimg.com/vi/YS_LSEanMQY/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLB1A-7v4dkKODett5JgbYn5RrXwdw"
                                layout="responsive"
                                width={1920}
                                height={1080} />
                                <div className="text-white text-lg font-semibold text-center">Two Stages of Old Age Makeup✨</div>
                        </div>
                    </a>
                </Link>
            </div>
            <div className="text-center p-5">
                <button className="bg-amber-500 p-3 rounded-lg text-white font-semibold">
                    <Link href="https://www.youtube.com/channel/UCfSvyeNBd1PdyX0EVOXTpYA"><a target="_blank">View More Videos</a></Link>
                </button>
            </div>
        </div>
    )
}