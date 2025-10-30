export default function DogImage({ dogImg, name }) {
  return (
    <div>
      <h1>{name}</h1>
      {dogImg != null && <img src={dogImg} alt={name} width="300" />}
    </div>
  );
}
