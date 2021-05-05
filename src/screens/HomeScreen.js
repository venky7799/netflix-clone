import React from "react";
import Banner from "../banner";
import "./HomeScreen.css";
import Nav from "../Nav"; 
import requests from "../Requests";
import Row from "../Row";


const HomeScreen=()=>{
    

    return(
        
        <div className="homeScreen">
            <Nav/>
            <Banner/>

            
           <Row title="NETFLIX ORIGINALS"
            fetchUrl={requests.fetchNetflixOriginals} 
            isLargeRow />
            <Row title="Trending Now"
             fetchUrl={requests.fetchTrending} />
            <Row title="Comedy Movies"
             fetchUrl={requests.fetchComedyMovies} /> 
            <Row title="Horror Movies" 
            fetchUrl={requests.fetchHorrorMovies} />
            <Row title="Romance Movies"
             fetchUrl={requests.fetchRomanceMovies} /> 
            <Row title="Documentaries" 
            fetchUrl={requests.fetchDocumentaries} />
            
            {console.log(requests.fetchComedyMovies)}
    
        </div>
    );

}


 export default HomeScreen;