import './Footer.css';

function Footer() {

    return (

        <footer>
            <div id="footer" className='flex items-center justify-center'>
                <div className='flex justify-between '>
                    <h1>&lt;Veiga/&gt;</h1>
                    <section className='flex justify-between'>
                        <ul><a href="https://www.instagram.com/gstv.veiga/" target='_blank'>Instagram</a></ul>
                        <ul><a href="https://github.com/gustavovianaveiga" target='_blank'>GitHub</a></ul>
                        <ul><a href="https://api.whatsapp.com/send/?phone=557791922123&text&type=phone_number&app_absent=0" target='_blank'>Whatsapp</a></ul>
                    </section>
                </div>
            </div>
        </footer>

    )
}

export default Footer
