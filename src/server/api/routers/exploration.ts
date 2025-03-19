import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

// Define Zod schemas for type safety
const AlienDiscoverySchema = z.object({
  id: z.number(),
  name: z.string(),
  description: z.string(),
  location: z.string(),
  researchValue: z.string(),
  discoveryDate: z.string(),
});

const ExplorationLocationSchema = z.object({
  id: z.number(),
  name: z.string(),
  description: z.string(),
  image: z.string(),
  difficulty: z.string(),
  resources: z.array(z.string()),
});

const ExplorationVehicleSchema = z.object({
  id: z.number(),
  name: z.string(),
  description: z.string(),
  image: z.string(),
  stats: z.object({
    range: z.string(),
    speed: z.string(),
    capacity: z.string(),
    specialEquipment: z.string(),
  }),
});

// Type definitions based on the schemas
type AlienDiscovery = z.infer<typeof AlienDiscoverySchema>;
type ExplorationLocation = z.infer<typeof ExplorationLocationSchema>;
type ExplorationVehicle = z.infer<typeof ExplorationVehicleSchema>;

// Mock data for alien discoveries
const alienDiscoveriesData: AlienDiscovery[] = [
  {
    id: 1,
    name: "Mysterious Footprints",
    description: "Strange impressions in the Martian soil that don't match any known Earth species or equipment. These footprints appear to lead toward geological formations and then disappear.",
    location: "Acidalia Planitia",
    researchValue: "High",
    discoveryDate: "Year 5"
  },
  {
    id: 2,
    name: "Signal Anomalies",
    description: "Unexplained radio signals detected from deep beneath the Martian surface. The patterns suggest artificial origin rather than natural phenomena.",
    location: "Utopia Planitia",
    researchValue: "Very High",
    discoveryDate: "Year 8"
  },
  {
    id: 3,
    name: "Ancient Structures",
    description: "Geometric formations that appear too regular to be natural. Partially buried beneath centuries of Martian dust, these structures hint at a previous civilization.",
    location: "Valles Marineris",
    researchValue: "Extreme",
    discoveryDate: "Year 12"
  },
  {
    id: 4,
    name: "Unusual Material Composition",
    description: "Samples containing alloys and compounds that cannot be explained by known Martian geology. These materials exhibit properties unknown to Earth science.",
    location: "Olympus Mons",
    researchValue: "High",
    discoveryDate: "Year 7"
  }
];

// Mock data for exploration locations
const explorationLocationsData: ExplorationLocation[] = [
  {
    id: 1,
    name: "Olympus Mons",
    description: "The largest volcano in the solar system, towering 21.9 km above the surrounding plains. Ancient alien glyphs have been spotted near the caldera, suggesting it may have held special significance.",
    image: "/img1.jpg",
    difficulty: "Hard",
    resources: ["Iron", "Copper", "Rare Earth Elements", "Alien Artifacts"]
  },
  {
    id: 2,
    name: "Valles Marineris",
    description: "A vast canyon system stretching over 4,000 km across the Martian surface. Deep scans have revealed unusual cavern systems that don't appear natural in origin.",
    image: "/img1.jpg",
    difficulty: "Medium",
    resources: ["Water Ice", "Sedimentary Minerals", "Clay", "Alien Technology"]
  },
  {
    id: 3,
    name: "Acidalia Planitia",
    description: "A vast plain in the northern hemisphere where the first alien footprints were discovered. The area now serves as the primary research zone for xenoarchaeology.",
    image: "/img1.jpg",
    difficulty: "Easy",
    resources: ["Iron Oxide", "Silicates", "Water Ice", "Footprint Castings"]
  },
  {
    id: 4,
    name: "Utopia Planitia",
    description: "A large plain containing significant amounts of subsurface water ice and the source of mysterious signals. Research teams have established a permanent monitoring station here.",
    image: "/img1.jpg",
    difficulty: "Medium",
    resources: ["Water Ice", "Methane", "Iron", "Signal Data"]
  }
];

// Mock data for exploration vehicles
const explorationVehiclesData: ExplorationVehicle[] = [
  {
    id: 1,
    name: "Xenoarchaeology Rover",
    description: "Specialized rover equipped with ground-penetrating radar, sample collection tools, and analysis equipment designed specifically for investigating alien artifacts.",
    image: "/img1.jpg",
    stats: {
      range: "50 km",
      speed: "15 km/h",
      capacity: "2 researchers",
      specialEquipment: "Artifact Containment Unit"
    }
  },
  {
    id: 2,
    name: "Signal Tracking Drone",
    description: "Autonomous flying drone with advanced signal detection and triangulation capabilities. Perfect for locating and tracking the mysterious alien signals.",
    image: "/img1.jpg",
    stats: {
      range: "100 km",
      speed: "60 km/h",
      capacity: "None",
      specialEquipment: "Multi-spectrum Antenna Array"
    }
  },
  {
    id: 3,
    name: "Excavation Transport",
    description: "Heavy-duty vehicle designed for archaeological digs and artifact recovery. Contains a mobile lab for preliminary analysis of discoveries.",
    image: "/img1.jpg",
    stats: {
      range: "150 km",
      speed: "10 km/h",
      capacity: "4 researchers + equipment",
      specialEquipment: "Sterile Excavation Chamber"
    }
  }
];

export const explorationRouter = createTRPCRouter({
  getAlienDiscoveries: publicProcedure
    .query(() => {
      // In a real implementation, this would fetch from a database
      return alienDiscoveriesData;
    }),

  getExplorationLocations: publicProcedure
    .query(() => {
      // In a real implementation, this would fetch from a database
      return explorationLocationsData;
    }),

  getExplorationVehicles: publicProcedure
    .query(() => {
      // In a real implementation, this would fetch from a database
      return explorationVehiclesData;
    }),

  getExplorationLocationById: publicProcedure
    .input(z.object({ id: z.number() }))
    .query(({ input }) => {
      // In a real implementation, this would fetch from a database
      const location = explorationLocationsData.find(location => location.id === input.id);
      // Validate the data before returning
      return location ? ExplorationLocationSchema.parse(location) : null;
    }),

  getAlienDiscoveryById: publicProcedure
    .input(z.object({ id: z.number() }))
    .query(({ input }) => {
      // In a real implementation, this would fetch from a database
      const discovery = alienDiscoveriesData.find(discovery => discovery.id === input.id);
      // Validate the data before returning
      return discovery ? AlienDiscoverySchema.parse(discovery) : null;
    }),

  getExplorationVehicleById: publicProcedure
    .input(z.object({ id: z.number() }))
    .query(({ input }) => {
      // In a real implementation, this would fetch from a database
      const vehicle = explorationVehiclesData.find(vehicle => vehicle.id === input.id);
      // Validate the data before returning
      return vehicle ? ExplorationVehicleSchema.parse(vehicle) : null;
    }),
});
