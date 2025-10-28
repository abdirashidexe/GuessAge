export default function Item({data}){
    return(<>
        <h1>{data.name}</h1>
        {console.log(data)}
        <h3>Description: {data.description}</h3>
        <div>
            <p>Life expectancy between {data.life.min} and {data.life.max}</p>
            <p>Hypoallergenic: {data.hypoallergenic}</p>
        </div>  
    </>)
}