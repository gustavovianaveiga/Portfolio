import('./Sobre.css')
function Sobre(props) {

    return (
        <div id="global">
            <section id="sobre" className='text-center'>
                <h1><b>Bem-vindo ao meu site</b></h1>
                <p>Me chamo {props.nome} e esse é o meu portifólio. Divirta-se!</p>
            </section>
        </div>
    )
}

export default Sobre
