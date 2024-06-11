'use client'
import Image from 'next/image';
import feijoadaItem from '@/app/assets/images/feijoada-item.jpeg';
import tropeiroItem from '@/app/assets/images/tropeiro-item.jpeg';

export default function Menu() {
    const items = [
        {
            title: "Feijoada",
            ingredients: "Feijão preto, Carne seca, Orelha de porco, Rabinho, Pé de porco, Lombo, Paio, Linguiça Portuguesa, Cebola, Folhas de Louro, Pimenta do reino, Laranja.",
            image: feijoadaItem,
            wppLink: "#"
        },
        {
            title: "Tropeiro",
            ingredients: "Feijão preto, Carne seca, Orelha de porco, Rabinho, Pé de porco, Lombo, Paio, Linguiça Portuguesa, Cebola, Folhas de Louro, Pimenta do reino, Laranja.",
            image: tropeiroItem,
            wppLink: "#"
        },
    ];

    return(
        <section className="bg-[#84281f] mx-auto py-2 px-2">
            <h1 className="text-6xl text-[#FEF2D4] text-center font-semibold py-4 mb-6">Cardápio</h1>
            <div className="space-y-24" id="menu">
                {items.map((item, index) => (
                    <div
                        key={index}
                        className={`flex flex-col md:flex-row ${
                        index % 2 === 0 ? 'md:flex-row-reverse' : ''
                        } items-center md:items-start`}
                    >
                        <div className="md:w-1/2">
                        <Image
                            src={item.image}
                            alt={item.title}
                            width={1080}
                            height={500}
                            className="w-full h-96 object-cover rounded-xl"
                        />
                        </div>
                        <div className="md:w-1/2 p-6">
                            <h2 className="text-6xl text-white font-semibold mb-2">{item.title}</h2>
                            <h4 className="text-2xl text-white font-semibold mb-2">Ingredientes</h4>
                            <p className="text-white mb-6">{item.ingredients}</p>
                            <a href={item.wppLink} 
                                className="px-5 py-3 text-base font-medium text-center hover:text-[#eaa558] text-[#84281f] border border-gray-300 rounded-lg bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
                                target="_blank"
                            >
                                Encomendar
                            </a>     
                        </div>
                    </div>
                    ))}
            </div>
            
        </section>
    )
}