import React from 'react';

const Redes = () => {
    return (
        <div className=' bg-fondoCuatro w-screen h-[75vh] flex flex-col justify-between items-center'>
            


            <div className='pt-16'>
                <div className='border-2 border-fondoCinco rounded-full border-dashed h-80 w-80'>
                    <div className='text-white flex flex-col justify-center items-center gap-6 h-full w-full'>
                        <p className='text-3xl font-blac font-serif' >Hasta la proxima</p>
                        <p className='font-semibold'>info@ramon.com</p>
                        <div className='flex flex-row flex-wrap justify-center gap-7 w-1/2 '>
                            <a href="https://x.com/TizianoRossi18?t=dV3O74ryBc-KoCNFQVTWeA&s=08" target='_blank' className='flex w-10 h-10 '><i className="flex border-1 rounded-full justify-center items-center bi bi-twitter-x h-full w-full bg-black"></i></a>
                            <a href="https://instagram.com/tizianorossi05?igshid=OGQ5ZDc2ODk2ZA==" target='_blank' className='flex w-10 h-10'><i className=" flex border-1 rounded-full justify-center items-center bi bi-instagram h-full w-full bg-gradient-to-r from-pink-500 to-yellow-500"></i></a>
                        </div>
                    </div>
                </div>
            </div>

            <div className='flex h-[10%] items-center w-full border-1 border-t-2 text-white border-fondoCinco'>
                <div className='w-full flex flex-row justify-center'>
                    <i class="bi bi-c-circle"></i>
                    <p>2023 - Form | All Right Deserved</p>
                </div>
            </div>
        </div>
    )
}

export { Redes }