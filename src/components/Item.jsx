import DogImage from "./DogImage";
import DogInfo from "./DogInfo";

export default function Item({ data, dogImg }) {
  return (
    <>
      <DogImage dogImg={dogImg} name={data.name} />
      <DogInfo data={data} />
    </>
  );
}
