import './LapStyle.css'

function Laptop() {

    function click() {

        // const altura = window.innerHeight;
        // const largura = window.innerWidth;
        // $('.f11').css({
        //     'display': 'none'
        // });
        // $('#iconReact').css({ 'display': 'none' });
        // $('#laptop').css({ 'width': largura, 'height': altura });
        // $('#tela').css({
        //     'width': largura, 'height': altura, 'border': 'none', 'border-radius': '0%', 'background-size': '101% 100%'
        // });
        // $('.teclado').css({ 'height': '0px' });




    }
    function daynight() {
        if ($('#night').attr('class') == 'on') {
            $('#night').css({ 'opacity': '0' })
            $('#night').attr('class', 'off')
        } else { $('#night').css({ 'opacity': '1' }); $('#night').attr('class', 'on') }
    }

    return (
        <div className='global'>


            <div id="laptop" onClick={daynight}>
                <div id='telaecapa'>
                    <div id="tela" className='card__face'>
                        <div id="conteudo">
                            <video id='day' autoplay muted playsinline>
                                <source src="https://lofi-new.s3.us-east-2.amazonaws.com/seoul/inside+-+night.mp4" type="video/mp4"></source>
                            </video>
                            <video autoplay muted playsinline src="https://lofi-new.s3.us-east-2.amazonaws.com/seoul/inside+-+day.mp4" id='night' className='on' ></video>
                        </div>
                    </div>
                    <div id="capa" className='card__face'></div>
                </div>
                <div className="teclado"></div>
            </div>

        </div >
    )
}

export default Laptop;
