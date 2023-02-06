import React from 'react';
import './Main.css';
import Mirror from './Mirror'

import styled from 'styled-components'



function Main() {


    return (
        <main className='flex justify-center'>
            <div id="main" className='text-white flex flex-col items-center justify-center'>
                <Mirror name='gustavo'></Mirror>


            </div>

        </main>

    )
}

export default Main
