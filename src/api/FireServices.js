import db from "../config/FireConfig";

export const getInfo = async () => {
  let data;
  await db
    .collection("info")
    .get()
    .then((querySnapshot) => {
      data = querySnapshot.docs.map((doc) => doc.data());
    })
    .catch((e) => console.log(e));

  const options = { year: "numeric", month: "long", day: "numeric" };

  const fixedData = data[0].info.map((data) => {
    let date = new Date(data.date);
    return {
      color: data.color,
      date: date,
      deaths: data.deaths,
      hospitalizedPatients: data.hospitalizedPatients,
      newInfected: data.newInfected,
      totalInfected: data.totalInfected,
      totalRecovered: data.totalRecovered,
    };
  });
  const orderData = fixedData.sort((a, b) => a.date - b.date);
  const finalData = orderData.map((data) => {
    return {
      color: data.color,
      date: data.date.toLocaleDateString("es-ES", options),
      deaths: data.deaths,
      hospitalizedPatients: data.hospitalizedPatients,
      newInfected: data.newInfected,
      totalInfected: data.totalInfected,
      totalRecovered: data.totalRecovered,
    };
  });
  return finalData;
};
