export default function Item(props){
    return(<>
        <h1>{props.name}</h1>
        <h3>Description: {props.description}</h3>
        <div>
            <p>Life expectancy between {props.life.min} and {props.life.max}</p>
            <p>Hypoallergenic: {props.hypoallergenic}</p>
        </div>  
    </>)
}