const CarruselDestacado = () => {
return (
 <div className="container-fluid mb-5">
    <div id="carouselExample" class="carousel slide">
    <div class="carousel-inner">
        <div class="carousel-item active ">
        <img src={"/images/banners-BR-web1_2000x.webp"} class={"d-block w-100"} alt={"carrusel"}/>
        </div>
        <div class="carousel-item">
        <img src={"/images/banners-BR-web2_2000x.webp"} class={"d-block w-100"} alt={"carrusel"}/>
        </div>
        </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
    </button>
    </div>
 </div>
)
}


export default CarruselDestacado;