import DestinationCard from "./components/DestinationCard";
import destinations from "./data/destinations";

function App() {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold text-center mb-8">
        Popular Travel Destinations
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {destinations.map((destination) => (
          <DestinationCard
            key={destination.id}
            placeName={destination.placeName}
            country={destination.country}
            budget={destination.budget}
            duration={destination.duration}
            season={destination.season}
          />
        ))}
      </div>
    </div>
  );
}

export default App;