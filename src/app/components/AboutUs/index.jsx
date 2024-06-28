'use client'
import Image from 'next/image';
import bebel from "@/app/assets/images/bebel.png";


export default function AboutUs() {
    return(
        <section className="bg-[#FEF2D4]" id='about'>
            <div className="text-[#84281f] text-center text-4xl font-extrabold py-2">
                <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
                    <div className="flex justify-center lg:md:justify-start lg:mt-0 lg:col-span-5">
                        <Image
                            className='rounded-full'
                            src={bebel} alt="Bebel's photo"
                            width={300}
                            height={300}
                        />
                    </div>  
                    <div className="mr-auto place-self-center lg:col-span-7">
                        <h1 className="max-w-2xl mb-4 text-4xl font-bold tracking-tight leading-none md:text-5xl xl:text-6xl">Afinal, quem é Bebel?</h1>
                        <p className="max-w-2xl mb-6 font-semibold text-[#84281f] text-lg lg:mb-8 lg:text-2xl">Olá, me chamo Isabel Cristina, tenho 59 anos e sou apaixonada por cozinhar desde jovem. Sempre recebi muitos elogios pela minha habilidade culinária, então decidi começar a compartilhar minha comida com outras famílias.</p>
                    </div>              
                </div>
            </div>
        </section>
    )
}