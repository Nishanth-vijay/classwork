export default function Map(){
const  Students =["Arya","Rahul","Aisha","Kiran"]
    return(

<>
<ul>{
Students.map((stu,key)=> <li key={key}>{stu}</li>)
}
</ul>

</>

    )
}