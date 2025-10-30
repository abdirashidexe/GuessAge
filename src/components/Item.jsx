export default function Item({data, dogImg}){
    return(<>
        <h1>{data.name}</h1>
        {console.log(data)}
        <h3>Description: {data.description}</h3>
        {dogImg != null && <img src={dogImg} alt="dog image"></img>}
        <div>
            <p>Female Weight: {data.female_weight.min}-{data.female_weight.max} </p>
            <p>Male Weight: {data.male_weight.min}-{data.male_weight.max} </p>
            <p>Life expectancy between {data.life.min} and {data.life.max} years</p>
            <p>Hypoallergenic? {data.hypoallergenic? "yes": "no"}</p>
        </div>  
    </>)
}