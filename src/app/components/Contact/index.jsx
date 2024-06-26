'use client'
import Image from 'next/image';

export default function Contact() {
    return(
        <section className="bg-[#FEF2D4] py-4" id='contact'>
            <div className=" text-[#84281f] text-4xl font-extrabold py-2">
                <div className="flex justify-center items-center">
                    <h5 className="text-6xl font-bold tracking-tight leading-none md:text-5xl xl:text-7xl aventine-title">Localização</h5>
                </div>
                <div className="flex justify-center items-center">
                    <h5 className="px-12 md:px-1 max-w-2xl text-2xl font-bold tracking-tight leading-none md:text-2xl xl:text-3xl">Rua Astolfo Bueno, 81, Céu Azul, Belo Horizonte</h5>
                </div>
                <div className="flex justify-center items-center w-screen px-12 py-12">
                    <iframe className='w-[900px] h-[400px]' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d938.3028834381124!2d-44.00023803048517!3d-19.831000537271866!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa691c18c98e5fb%3A0xdf6d99f471aead22!2sR.%20Astolfo%20Bueno%2C%2081%20-%20C%C3%A9u%20Azul%2C%20Belo%20Horizonte%20-%20MG%2C%2031545-350!5e0!3m2!1spt-BR!2sbr!4v1718123106633!5m2!1spt-BR!2sbr" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>
        </section>
    )
}