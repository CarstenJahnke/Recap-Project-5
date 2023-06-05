export default function Spotlight({ image, artist }) {
  return (
    <div>
      <img
        src={image}
        alt={`spotlight image by ${artist}`}
        style={{ width: "50%" }}
      />
      <div style={{ padding: "2px" }}>
        <h4>{artist}</h4>
      </div>
    </div>
  );
}
