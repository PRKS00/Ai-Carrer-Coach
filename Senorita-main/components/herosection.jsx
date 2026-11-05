"use client"
import Link from "next/link"
import React, { useEffect } from 'react'
import { Button } from './ui/button'
import Image from "next/image"
import { useRef } from "react"


const Herosection = () => {
    const imageref=useRef();
    useEffect(()=>{
        const imageEle=imageref.current;
        const handleScroll = () =>{
            const imgp=window.scrollY;
            const imgt=100;
            if(imgp>imgt){
                imageEle.classList.add("scrolled");
            }else{
                imageEle.classList.remove("scrolled");
            }
        }
        window.addEventListener("scroll",handleScroll);
        return ()=>{
            window.removeEventListener("scroll",handleScroll);
        }
    })
    return (
        <section className="w-full min-h-screen pt-36 md:pt-48 pb-10">
            <div className="space-y-6 text-center" >
                <div className="space-y-6 mx-auto">
                    <h1 className="bg-linear-to-b from-gray-400 via-gray-200 to-gray-600 
               font-extrabold tracking-tighter text-transparent bg-clip-text 
               text-4xl md:text-6xl lg:text-7xl xl:text-8xl pb-2 pr-2">
                        Your AI Career Coach For <br />
                        Professional Success
                    </h1>

                    <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl">

                        Advance your carrer with personalised guidance, Interview prep
                        and AI powerded tools for job success.
                    </p>
                </div>
                <div className="flex justify-center space-x-4">
                    <Link href="/dashboard">
                        <Button size='lg' className="px-8"><span>Get Started</span></Button>
                    </Link>
                    <Link href="/dashboard">
                        <Button size='lg' className="px-8" variant='outline'><span>Get Started</span></Button>
                    </Link>
                </div>
                <div className="hero-img-wrap mt-5 md:mt-0">
                    <div ref={imageref} className="hero-img">
                        <Image
                            src={"/banner.jpeg"}
                            height={1280}
                            width={720}
                            alt="banner"

                            className="rounded-lg border shadow-2xl mx-auto"
                            priority
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Herosection