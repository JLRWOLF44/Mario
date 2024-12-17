import "./Card.css"

interface CardI {
    character: string;
    imgSrc: string;
}

function Card ({character,imgSrc}: CardI )
 { return (
    <figure>

    <img src= {imgSrc} alt={`Representatation of ${character}`} />

    <figcaption>{character} </figcaption>
</figure>

);
}

   
  
 


export default Card;