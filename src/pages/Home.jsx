
import './Home.scss'

import imageHome from '../assets/img/illustra.png'

export default function Home(){
    return (
        <section className='container-home'>
            <article className='home-intro'>
                <h1>
                    Encontre os
                    <span> melhores artigos</span> <br /> de programação em um só lugar
                </h1>
                <h2>
                    Explore o topo da programação em um só lugar! 
                    Seu destino único para dicas e 
                    tendências atuais.
                </h2>
                <a href="">Buscar artigos</a>
            </article>
            <article className='home-image'>
                <img src={imageHome} alt="imagem illustra" />
            </article>
        </section>
    )
}