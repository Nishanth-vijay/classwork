import data from './assets/db.json'

import './Card.css'
export default function Card() {
    return (
        <div id="card">
            {

                data.map(

                    (item) => (
                        <div key={item.id}>
                            <img src={item.image} alt="Image" />
                            <h1>{item.title}</h1>
                            <center>
                                <h1>${item.price}</h1>
                                <h2>{item.category}</h2>
                            </center>
                        </div>



                    )

                )


            }



        </div>
    )
}