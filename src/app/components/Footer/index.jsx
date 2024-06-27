'use client'
import Image from 'next/image';
import bebel from "@/app/assets/images/bebel.png";
import Link from 'next/link';
import {FaInstagram, FaHeart} from "react-icons/fa";


export default function Footer() {
    return(
        <div className="bg-[#84281f]">
            <div className="m-auto flex justify-between items-center p-4 text-white">
                <Link href="/">
                    <h1 className="text-4xl cursive-title">Delícias da Bebel</h1>
                </Link>
                <ul className="sm:flex">
                    <li className="md:p-4">
                        <Link href='/'>Inicio</Link>
                    </li>
                    <li className="md:p-4">
                        <Link href='#menu'>Cardápio</Link>
                    </li>
                    <li className="md:p-4">
                        <Link href='/#about'>Sobre</Link>
                    </li>
                    <li className="md:p-4">
                        <Link href='/#contact'>Contato</Link>
                    </li>
                    <li className="md:p-4">
                        <Link href='/#testimonials'>Depoimentos</Link>
                    </li>
                    <li className="md:p-4">
                        <Link href='https://www.instagram.com/deliciassdabebel_?igsh=MWJhOHh1dm5qOHpqcA==' target={'https://www.instagram.com/deliciassdabebel_?igsh=MWJhOHh1dm5qOHpqcA=='}>
                            <FaInstagram size={20} />
                        </Link>
                    </li>
                </ul>
            </div>
            <div className="bg-[#e9eaea]">
                <Link href='https://versianiworks.com' target={'https://versianiworks.com'}>
                    <p className="flex justify-center text-black text-[0.9rem]">
                        Feito com <span className="flex items-center px-1 text-rose-700"><FaHeart size={17}/></span> por Versiani Works
                    </p>
                </Link>
            </div>
        </div>
    )
}