import React from 'react';
import './Main.css';
import Mirror from './Mirror'
import Laptop from './Laptop'
import Sobre from './Sobre'






function Main() {


    return (
        <main className='flex justify-center items-center flex-col'>
            <div id="main2" className='text-white flex flex-row items-center justify-center'><div id="main2escopo" className='flex flex-row items-center justify-between flex-wrap'>
                <Sobre nome='Gustavo'></Sobre>
                <Laptop></Laptop>
            </div>

            </div>
            <div id="main" className='text-white flex flex-col items-center justify-center'>

                <Mirror name='gustavo'></Mirror>
            </div>

        </main>

    )
}

export default Main
