import Card from "../Card";
import "./Home.css"



function Home() {

    const data = [
        {
            Character: "Mario",
            imgSrc: "https://upload.wikimedia.org/wikipedia/en/5/5c/Mario_by_Shigehisa_Nakaue.png"
        },
        {
            Character: "Peach",
            imgSrc: "https://upload.wikimedia.org/wikipedia/en/thumb/1/16/Princess_Peach_Stock_Art.png/170px-Princess_Peach_Stock_Art.png"
        }

    ];

    

    return (

       <section className="card-section">
        
        < Card character={data[0].Character} imgSrc={data[0].imgSrc}/>
        < Card character={data[1].Character} imgSrc={data[1].imgSrc} />
        

        </section>
    );
}


export default Home;