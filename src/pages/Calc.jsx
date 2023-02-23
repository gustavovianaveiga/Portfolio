import { useState } from 'react';
import './Calc.css';

function Calc() {
    const [result, setresult] = useState(0)
    const [conta, setconta] = useState('')
    $(document).ready(() => {
        $("#teclas").click((e) => {
            setconta(conta + e.target.innerText);

            if ((e.target.innerText).includes("C")) { setconta(''); setresult(0) }
            if ((e.target.innerText).includes("=")) { setresult(eval(document.querySelector('#conta').innerHTML)); setconta(conta.substring(0, (document.querySelector('#conta').innerHTML).length)) }

        })
        // $('#igual').click(() => { setresult(eval(conta)) })
    });

    return (

        <div id='Calc' className='flex flex-col'>
            <div id="appleicon" className='flex justify-center items-center'>
                <div id="icons" className='flex justify-between items-center'>
                    <ul className='red'></ul>
                    <ul className='yellow'></ul>
                    <ul className='green'></ul>
                </div>
            </div>
            <div className='flex flex-col justify-between items-center'>
                <div id="display" className='flex justify-end'>
                    <div className='flex justify-between flex-col items-center cem'>
                        <div></div>
                        <p id='conta'>{conta}</p>
                        <p id='result'>{parseFloat(result).toFixed(2)}</p>
                    </div>
                </div>
                <div id="teclas" className='flex flex-row justify-center items-center flex-wrap'>
                    <div id="c" className='operadoressecundarios'>C</div>
                    <div id="maismenos" className='operadoressecundarios'>+</div>
                    <div id="porcentagem" className='operadoressecundarios'>-</div>
                    <div id="dividir" className='operadores'>/</div>
                    <div id="sete">7</div>
                    <div id="oito">8</div>
                    <div id="nove">9</div>
                    <div id="x" className='operadores'>*</div>
                    <div id="quatro">4</div>
                    <div id="cinco">5</div>
                    <div id="seis">6</div>
                    <div id="menos" className='operadores'>-</div>
                    <div id="um">1</div>
                    <div id="dois">2</div>
                    <div id="tres">3</div>
                    <div id="mais" className='operadores'>+</div>
                    <div id="zero">0</div>
                    <div id="null"></div>
                    <div id="ponto">.</div>
                    <div id="igual" className='operadores'>=</div>
                </div>
            </div>
        </div >

    )
}
export default Calc