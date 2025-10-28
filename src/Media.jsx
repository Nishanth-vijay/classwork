export default function Media(){


    const image= "https://th.bing.com/th/id/OIP.qxZMrDXfeGLzkkzBwrOa-QHaEK?w=289&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3"
const vedio="https://youtu.be/NMThdHhrLoM?si=FrdcQqlnHoCN-mZ2"
const audio="./Pileche.mp3"

const audioimg="https://www.naasongs.co/wp-content/uploads/2014/03/Khaleja-2010-250x250.jpg"


return(


<>

<img id="img" src={image} alt="CAR" />

{/* <vedio  controls><Source src= "https://youtu.be/NMThdHhrLoM?si=FrdcQqlnHoCN-mZ2" type="video/mp4" ></Source>  </vedio> */}


<iframe width="100%" height="315" src="https://www.youtube.com/embed/NMThdHhrLoM?si=000qNhhMHuBtzNK3" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

<center>
<img  src={audioimg} alt="Khaleja" /> <br />
<audio  controls>    <source src={audio} type="audio/mpeg" />   </audio>

</center>


</>

)
}