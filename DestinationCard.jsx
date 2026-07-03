function DestinationCard({
  placeName,
  country,
  budget,
  duration,
  season,
}) {
  return (
    <div className="bg-white p-5 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold">{placeName}</h2>

      <p className="text-gray-600">{country}</p>

      <p><strong>Budget:</strong> Rs. {budget}</p>

      <p><strong>Duration:</strong> {duration}</p>

      <p><strong>Season:</strong> {season}</p>

      {budget < 50000 ? (
        <span className="inline-block mt-3 px-3 py-1 bg-green-500 text-white rounded">
          Budget Friendly
        </span>
      ) : (
        <span className="inline-block mt-3 px-3 py-1 bg-red-500 text-white rounded">
          Luxury Trip
        </span>
      )}
    </div>
  );
}

export default DestinationCard;