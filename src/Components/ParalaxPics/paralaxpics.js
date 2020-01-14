import React from 'react';
import { Parallax, Background } from 'react-parallax';
import laptop from '../ParalaxPics/laptopcafe.jpg';
import './paralaxpic.css';

export class ParalaxPics extends React.Component{

    render(){
        return (
            <div>
            <div className="Projects">
                 <link
                rel="stylesheet"
                href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
                integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
                crossorigin="anonymous"
            />
            </div>

        {/* <div class = "parallax">
            {/* <img src={laptop}></img> */}
            <h1>heheheh</h1>
        {/* </div> */}

            <div>
              
                <main class="wrapper">
                <section class="section parallax bg1">
                    <div class="boxed">
                    <h1>Welcome</h1>
                    </div>
                </section>
                {/* <section class="section static">
                    <h1>Boring</h1>
                </section>
                <section class="section parallax bg2">
                    <h1>SO FWUFFY AWWW</h1>
                </section> */}
                </main>  
            </div>
            </div>       


        
           

      
        )
    }
}