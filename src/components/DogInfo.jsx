export default function DogInfo({ data }) {
  return (
    <div>
      <h3>Description: {data.description}</h3>
      <p>Female Weight: {data.female_weight.min}-{data.female_weight.max} kg</p>
      <p>Male Weight: {data.male_weight.min}-{data.male_weight.max} kg</p>
      <p>Life expectancy between {data.life.min} and {data.life.max} years</p>
      <p>Hypoallergenic? {data.hypoallergenic ? "Yes" : "No"}</p>
    </div>
  );
}
