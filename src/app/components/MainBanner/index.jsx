'use client'
import Image from 'next/image';
import fogao from "@/app/assets/images/fogao.jpeg";


export default function MainBanner() {
    return(
        <div className="flex items-center hero-img justify-center h-screen overflow-hidden bg-[#84281f] bg-fixed bg-center bg-cover">
            {/*Overlay */}
            <div className="absolute top-0 left-0 right-0 bottom-[-9rem] md:bottom-[-90px] bg-[black]/50 z-[2]"/>
            <div className="z-[2]">
                    <h2 className="md:text-9xl text-7xl text-center aventine-title text-white">A melhor Feijoada</h2>
                    <h2 className="md:text-6xl text-6xl text-center aventine-title text-white">Na região da Pampulha</h2>
            </div>
        </div>
    )
}