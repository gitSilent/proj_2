'use client'
import bg from "@/public/loading.webp"
import Image from "next/image";
import { TailSpin } from "react-loader-spinner";

export default function Preloader() {

    return (
        <div className="relative bg-white w-[100vw] h-[100vh] overflow-x-hidden">
            <Image src={bg} alt="" className="fixed w-[100vw] h-[100vh] top-0 left-0 z-40 object-cover" />
            <TailSpin height="80"
                width="80"
                color="#6c6c6c"
                ariaLabel="tail-spin-loading"
                radius="0"
                wrapperStyle={{}}
                wrapperClass="z-[41] absolute top-[42vh] xs:max-md:right-[40vw] right-[49vw]"
                visible={true} />
        </div>
    );
}
