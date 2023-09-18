export async function fetchCars() {
  const headers = {
    "X-RapidAPI-Key": "854d5c46d3msh66dfccd0595f0ebp16915ajsn7625a62f595a",
    "X-RapidAPI-Host": "cars-by-api-ninjas.p.rapidapi.com",
  };

  const reponse = await fetch(
    "https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla",
    { headers: headers }
  );

  const result = await reponse.json();
  return result;
}
