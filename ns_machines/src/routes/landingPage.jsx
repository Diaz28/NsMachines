import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

// CSS
import '../css/carousel.css';

export default function Root() {
    return (
        <div>

            <Carousel >
                <Carousel.Item interval={5000}>
                    <img className="bd-placeholder-img carousel-img" width="100%" height="100%" src="/carousel1.jpg" preserveAspectRatio="xMidYMid slice" aria-hidden="true" focusable="false"/>
                    <Carousel.Caption>
                        <h3>Serviços disponíveis</h3>
                        <p>Sonorização, iluminação e Transporte</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={5000}>
                <img className="bd-placeholder-img carousel-img" width="100%" height="100%" src="/carousel2.jpg" preserveAspectRatio="xMidYMid slice" aria-hidden="true" focusable="false"/>
                    <Carousel.Caption>
                        <h3>Animadores</h3>
                        <p>Dj's animadores e coreografias</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={5000}>
                <img className="bd-placeholder-img carousel-img" width="100%" height="100%" src="/carousel3.jpg" preserveAspectRatio="xMidYMid slice" aria-hidden="true" focusable="false"/>
                    <Carousel.Caption>
                        <h3>Diversão</h3>
                        <p>Insufláveis e Grupos de música</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>



            <div class="container marketing">



                <hr class="featurette-divider" />

                <div class="row featurette">
                    <div class="col-md-7">
                        <h2 class="featurette-heading fw-normal lh-1"> NS Casamentos: <span class="text-body-secondary">direcionada à produção de eventos</span></h2>
                        <p class="lead">A nossa empresa é uma entidade jovem e enérgica, dedicada à realização de eventos, com especialização notória na área de casamentos, bem como na gestão de uma variada gama de eventos privados e corporativos.</p>
    
                    </div>
                    <div class="col-md-5 align-self-center">
                    <img className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto rounded-xl" width="500" height="500" src="/landing_1.jpg" preserveAspectRatio="xMidYMid slice" aria-hidden="true" focusable="false"/>
                    </div>
                </div>

                <hr class="featurette-divider" />

                <div class="row featurette">
                    <div class="col-md-7 order-md-2">
                        <h2 class="featurette-heading fw-normal lh-1">Excelência e Variedade: <span class="text-body-secondary">A Nossa Abordagem Inigualável em Serviços de Eventos</span></h2>
                        <p class="lead">Destacamo-nos pela excelência dos nossos serviços e pela qualidade superior dos nossos equipamentos. Além disso, dispomos de uma vasta gama de serviços diversificados, projetados para atender integralmente às necessidades de nossa distinta clientela.</p>
                    </div>
                    <div class="col-md-5 order-md-1">
                    <img className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto rounded-xl" width="500" height="500" src="/landing_2.jpg" preserveAspectRatio="xMidYMid slice" aria-hidden="true" focusable="false"/>
                    </div>
                </div>

                <hr class="featurette-divider"></hr>

                <div class="row featurette">
                    <div class="col-md-7">
                        <h2 class="featurette-heading fw-normal lh-1">Adaptação Excepcional:  <span class="text-body-secondary">Transformando Cada Evento em Uma Experiência Única</span></h2>
                        <p class="lead">Indiscutivelmente, o que nos distingue é a nossa notável capacidade de adaptação a uma ampla variedade de eventos, mantendo sempre nossa dedicação e foco inabaláveis na criação de experiências únicas em cada ocasião.</p>
                    </div>
                    <div class="col-md-5">
                    <img className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto rounded-xl" width="500" height="500" src="/landing_3.jpg" preserveAspectRatio="xMidYMid slice" aria-hidden="true" focusable="false"/>
                    </div>
                </div>

            </div>


        </div>


    );
}


