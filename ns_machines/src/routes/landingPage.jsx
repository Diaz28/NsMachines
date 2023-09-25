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
                        <h2 class="featurette-heading fw-normal lh-1"> NS Casamentos <span class="text-body-secondary">direcionada à produção de eventos.</span></h2>
                        <p class="lead">A nossa empresa é uma entidade jovem e enérgica, dedicada à realização de eventos, com especialização notória na área de casamentos, bem como na gestão de uma variada gama de eventos privados e corporativos.</p>
    
                    </div>
                    <div class="col-md-5 align-self-center">
                    <img className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="500" height="500" src="/landing_1.jpg" preserveAspectRatio="xMidYMid slice" aria-hidden="true" focusable="false"/>
                    </div>
                </div>

                <hr class="featurette-divider" />

                <div class="row featurette">
                    <div class="col-md-7 order-md-2">
                        <h2 class="featurette-heading fw-normal lh-1">Oh yeah, it’s that good. <span class="text-body-secondary">See for yourself.</span></h2>
                        <p class="lead">Another featurette? Of course. More placeholder content here to give you an idea of how this layout would work with some actual real-world content in place.</p>
                    </div>
                    <div class="col-md-5 order-md-1">
                        <svg class="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="500" height="500" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 500x500" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="var(--bs-secondary-bg)" /><text x="50%" y="50%" fill="var(--bs-secondary-color)" dy=".3em">500x500</text></svg>
                    </div>
                </div>

                <hr class="featurette-divider"></hr>

                <div class="row featurette">
                    <div class="col-md-7">
                        <h2 class="featurette-heading fw-normal lh-1">And lastly, this one. <span class="text-body-secondary">Checkmate.</span></h2>
                        <p class="lead">And yes, this is the last block of representative placeholder content. Again, not really intended to be actually read, simply here to give you a better view of what this would look like with some actual content. Your content.</p>
                    </div>
                    <div class="col-md-5">
                        <svg class="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="500" height="500" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 500x500" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="var(--bs-secondary-bg)" /><text x="50%" y="50%" fill="var(--bs-secondary-color)" dy=".3em">500x500</text></svg>
                    </div>
                </div>

            </div>


        </div>


    );
}


