import { useState } from 'react';
import styled from 'styled-components'
import './Mirror.css';



const Textareastyled = styled.textarea`background: transparent; width:445px;height:260px;
&:focus-visible{outline: none}
&::-webkit-scrollbar-track{ background: transparent;}
&::-webkit-scrollbar{ background: transparent; width:2px}
&::-webkit-scrollbar-thumb{ background: rgb(210, 210, 210);}
`
const Agrupamento = styled.div`height:500px; width:90%`


function Mirror() {

    const [code, setcode] = useState(`
    
    color: rgb(215, 215, 215);
    margin:5px;
    width:80px;
    height:80px;
    background:#3838f3;
    border-radius: 100%;
    z-index:3;
    transition: all 0.2s;
    &:focus-visible { outline: none; }
    &::before { 
                    content:''; 
                    width:150px;
                    height:6px; 
                    align-self: center;
                    transform:rotate(-20deg);
                    background:linear-gradient(90deg,
                    rgba(255,255,255,1) 0%, rgba(198,198,198,1) 52%,
                    rgba(186,186,186,1) 100%); 
                    position: absolute;
                    z-index:4;
                    border-radius:50%;
                    box-shadow: 0px 4px 6px 0px rgba(0,0,0,0.75);
                    transition: all 0.3s;}
    &:hover::before { 
                    transform:rotate(30deg);
                     }
    &:after { 
                    content:''; 
                    width:5px;
                    height:5px; 
                    position: relative;
                    left:40px;
                    top:0px;
                    z-index:2;
                    border-radius:100%;
                    background:#b2b2b2;
                    box-shadow: 0px 4px 6px 0px rgba(0,0,0,0.75);
                    transition: all 0.3s;}  
    &:hover::after {left:-60px;
    top:30px;}                            
    `)
    const [value, setvalue] = useState()

    const espelho = () => setvalue(document.querySelector('input').value)
    const mirrorcode = () => setcode(document.querySelector('textarea').value)

    const Square = styled.div`${code}`

    return (
        <Agrupamento className='flex justify-between items-center' >
            <section className='flex flex-col items-center justify-center '>
                <Square className='flex justify-center'></Square>
            </section>
            <section id='secoundsection'>
                <Textareastyled autocorrect="off" autocomplete="off" autocapitalize="off" spellcheck="false" onChange={mirrorcode}>{code}</Textareastyled></section>
        </Agrupamento>
    )
}

export default Mirror
