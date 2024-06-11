'use client'
import Image from 'next/image';
import bebel from "@/app/assets/images/bebel.png";


export default function AboutUs() {
    return(
        <section className="bg-[#FEF2D4]">
            <div className="text-[#84281f] text-center text-4xl font-extrabold py-2">
                <div class="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
                    <div class="flex justify-center lg:md:justify-start lg:mt-0 lg:col-span-5">
                        <Image
                            className='rounded-full'
                            src={bebel} alt="Bebel's photo"
                            width={300}
                            height={300}
                        />
                    </div>  
                    <div class="mr-auto place-self-center lg:col-span-7">
                        <h1 class="max-w-2xl mb-4 text-4xl font-bold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">Afinal, quem é Bebel?</h1>
                        <p class="max-w-2xl mb-6 font-light text-[#84281f] lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">Isabel Cristina, 15 anos de experiência com a culinária Brasileira, Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo accusantium magni nisi fugit! Incidunt sed reiciendis accusamus fugiat numquam eos, nesciunt nulla! Quos incidunt qui minus, aperiam pariatur possimus earum.</p>
                    </div>              
                </div>
            </div>
        </section>
    )
}