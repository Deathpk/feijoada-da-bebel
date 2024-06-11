'use client'
import Image from 'next/image';
import fogao from "@/app/assets/images/feijoada-item.jpeg";


export default function MainBanner() {
    return(
        <div className="flex items-center justify-center h-screen overflow-hidden bg-[#84281f] bg-fixed bg-center bg-cover">
                <div>
                    <h2 className="md:text-9xl text-7xl text-center aventine-title ">A melhor Feijoada</h2>
                    <h2 className="md:text-6xl text-6xl text-center aventine-title ">Na região da Pampulha</h2>
                </div>
            {/* <div className="container m-auto">
                <div className="grid grid-cols-4 gap-4 md:grid-cols-8 lg:grid-cols-12">
                    <div className="col-span-4 lg:col-span-6">
                        <div>
                            <h2 className="md:text-9xl text-7xl text-center aventine-title ">A melhor Feijoada</h2>
                            <h2 className="md:text-6xl text-6xl text-center aventine-title ">Na região da Pampulha</h2>
                        </div>
                    </div>
                    <div className="col-span-4 lg:col-span-6">
                        <div className='items-center justify-center h-[100px]'>
                            <Image
                                className="rounded-xl"
                                src={fogao}
                                alt="fogao"
                                width={600}
                                height={320}
                            />
                        </div>
                    </div>
                </div>
            </div> */}
            {/*Overlay */}
            {/* <div className="absolute top-0 left-0 right-0 bottom-[-50px] bg-black/20 z-[2]"/> */}
            {/* <div className="p-5 text-[#84281f] z-[2] md:mt-[-10rem]">
                <h2 className="md:text-7xl text-6xl text-center font-bold ">Na região da Pampulha</h2>
            </div> */}
        </div>
    )
}