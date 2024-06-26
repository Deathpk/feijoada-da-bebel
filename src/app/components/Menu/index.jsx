'use client'
import Image from 'next/image';
import feijoadaItem from '@/app/assets/images/feijoada-item.jpeg';
import tropeiroItem from '@/app/assets/images/tropeiro-item.jpeg';
import dobradinhaItem from '@/app/assets/images/dobradinha-item.jpeg';

export default function Menu() {
    let whatsAppNumber = "553197283666";
    let apiLink = `https://api.whatsapp.com/send?phone=${whatsAppNumber}&text=Olá, vim pelo seu site, vocês já estão aceitando pedidos? gostaria de encomendar`;

    const items = [
        {
            title: "Feijoada",
            ingredients: "Feijão preto, Carne seca, Orelha de porco, Rabinho, Pé de porco, Lombo, Paio, Linguiça Portuguesa, Cebola, Folhas de Louro, Pimenta do reino, Laranja.",
            image: feijoadaItem,
            wppLink: `${apiLink} uma Feijoada.`
        },
        {
            title: "Tropeiro",
            ingredients: "Bacon, pernil, linguiça calabresa, torresmo, couve e ovo.",
            image: tropeiroItem,
            wppLink: `${apiLink} um Tropeiro.`
        },
        {
            title: "Dobradinha",
            ingredients: "Dobradinha, feijão branco, calabresa e cheiro verde.",
            image: dobradinhaItem,
            wppLink: `${apiLink} uma Dobradinha.`
        },
    ];

    return(
        <section className="bg-[#84281f] mx-auto py-2 px-2">
            <h1 className="text-6xl text-[#FEF2D4] text-center font-semibold py-4 mb-6 aventine-title md:text-8xl">Cardápio</h1>
            <div className="space-y-24" id="menu">
                {items.map((item, index) => (
                    <div
                        key={index}
                        className={`flex flex-col md:flex-row ${
                        index % 2 === 0 ? 'md:flex-row-reverse' : ''
                        } items-center md:items-start`}
                    >
                        <div className="w-full md:w-1/2 pr-4">
                            <Image
                                src={item.image}
                                alt={item.title}
                                width={1080}
                                height={500}
                                className="w-full h-[300px] md:h-96 object-cover rounded-3xl"
                            />
                        </div>
                        <div className="md:w-1/2 md:p-6 mt-2">
                            <h2 className="text-6xl text-white text-center md:text-start font-semibold mb-2">{item.title}</h2>
                            <h4 className="text-2xl text-white font-semibold mb-2">Ingredientes</h4>
                            <p className="text-white mb-6">{item.ingredients}</p>
                            <a href={item.wppLink} 
                                className="flex justify-center px-5 py-3 text-base font-medium text-center hover:text-[#eaa558] text-[#84281f] border border-gray-300 rounded-lg bg-gray-100 focus:ring-4 focus:ring-gray-100"
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