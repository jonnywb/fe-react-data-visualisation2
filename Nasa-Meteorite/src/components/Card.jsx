const Card = ({ data }) => {
  return (
    <tr>
      <td>{data.name}</td>
      <td>{data.id}</td>
      <td>{data.nametype}</td>
      <td>{data.recclass}</td>
      <td>{data.mass}</td>
      <td>{data.fall}</td>
      <td>{data.year}</td>
      <td>{data.geolocation.latitude}</td>
      <td>{data.geolocation.longitude}</td>
    </tr>
  );
};

export default Card;
