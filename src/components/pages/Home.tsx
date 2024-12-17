import Card from "../Card";
import "./Home.css"
import data from "../../assets/data";


function Home() {

   
    

    return (

       <section className="card-section">
        
        < Card character={data[0].Character} imgSrc={data[0].imgSrc}/>
        < Card character={data[1].Character} imgSrc={data[1].imgSrc} />
        < Card character={data[2].Character} imgSrc={data[2].imgSrc} />
        

        </section>
    );
}


export default Home;