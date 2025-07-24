require("dotenv").config();
const mongoose = require("mongoose");
const Product = require("./models/Product");

const products = [
  { name: "High-Precision Furnace Thermometer", description: "Measures furnace temperatures with accuracy.", price: 25000, image: "https://picsum.photos/id/100/600/400" },
  { name: "Digital Steel Temperature Sensor", description: "Durable sensor for steel industries.", price: 30000, image: "https://picsum.photos/id/101/600/400" },
  { name: "Advanced Heat Gauge", description: "Monitor and control industrial heat levels.", price: 40000, image: "https://picsum.photos/id/102/600/400" },
  { name: "Compact Industrial Thermometer", description: "Compact yet accurate thermometer for furnaces.", price: 20000, image: "https://m.media-amazon.com/images/I/61uh9EtI13L._SL1100_.jpg" },
  { name: "Infrared Heat Sensor", description: "Contactless infrared temperature measurement.", price: 35000, image: "https://i.etsystatic.com/23763069/r/il/4d52f8/3198423681/il_1588xN.3198423681_b5n3.jpg" },
  { name: "Wireless Temperature Logger", description: "Logs temperature data wirelessly for monitoring.", price: 27000, image: "https://picsum.photos/id/103/600/400" },
  { name: "Industrial Pyrometer", description: "Non-contact temperature measurement for metals.", price: 32000, image: "https://picsum.photos/id/104/600/400" },
  { name: "Digital Furnace Controller", description: "Controls furnace heat levels with precision.", price: 45000, image: "https://picsum.photos/id/105/600/400" },
  { name: "High Temp Probe Sensor", description: "Robust probe for extreme temperatures.", price: 23000, image: "https://picsum.photos/id/106/600/400" },
  { name: "Thermal Imaging Camera", description: "Visualize heat patterns in furnaces.", price: 55000, image: "https://picsum.photos/id/107/600/400" },
  { name: "Portable Infrared Thermometer", description: "Handheld thermometer for quick readings.", price: 18000, image: "https://picsum.photos/id/108/600/400" },
  { name: "Wireless Furnace Sensor", description: "Connects via Bluetooth for easy monitoring.", price: 26000, image: "https://picsum.photos/id/109/600/400" },
  { name: "Temperature Data Logger", description: "Logs temperature over time for analysis.", price: 29000, image: "https://picsum.photos/id/110/600/400" },
  { name: "Industrial Heat Detector", description: "Detects and warns of dangerous heat levels.", price: 24000, image: "https://picsum.photos/id/111/600/400" },
  { name: "High-Speed Thermal Scanner", description: "Quickly scans for temperature anomalies.", price: 50000, image: "https://picsum.photos/id/112/600/400" },
  { name: "Smart Furnace Monitor", description: "Integrates with IoT to monitor furnaces remotely.", price: 48000, image: "https://picsum.photos/id/113/600/400" },
  { name: "Digital Kiln Thermometer", description: "Designed specifically for kiln monitoring.", price: 21000, image: "https://picsum.photos/id/114/600/400" },
  { name: "Surface Temperature Gun", description: "Measures surface heat quickly & accurately.", price: 19000, image: "https://picsum.photos/id/115/600/400" },
  { name: "Industrial Heat Shield", description: "Protective device to manage extreme heat.", price: 42000, image: "https://picsum.photos/id/116/600/400" },
  { name: "Heavy-Duty Furnace Gauge", description: "Rugged gauge for industrial furnaces.", price: 38000, image: "https://picsum.photos/id/117/600/400" },
];

async function seedDB() {
  console.log("MONGO_URI =", process.env.MONGO_URI);

  if (!process.env.MONGO_URI) {
    console.error("❌ MONGO_URI is not set in .env");
    process.exit(1);
  }

  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("✅ Connected to MongoDB");

    const result1 = await Product.deleteMany({});
    console.log(`🗑️ Deleted ${result1.deletedCount} existing products`);

    const result2 = await Product.insertMany(products);
    console.log(`🌱 Inserted ${result2.length} sample products`);

  } catch (err) {
    console.error("❌ Error:", err);
    process.exit(1);
  }
}

seedDB();
