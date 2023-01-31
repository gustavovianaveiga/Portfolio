import './Header.css';

function Header() {

    return (

        <header>
            <div id="header" className='flex items-center justify-center'>
                <div className='flex justify-between '>
                    <h1>&lt;Veiga/&gt;</h1>
                    <section className='flex justify-between'>
                        <ul><a href="#Projetos">Projetos</a></ul>
                        <ul><a href="#footer">Contato</a></ul>
                        <ul><a href="#Sobre">Sobre</a></ul>
                    </section>
                </div>
            </div>
        </header>

    )
}

export default Header
