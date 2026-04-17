import data from "../data"
import { connectToDatabase } from "./index"
import Product from "./models/product.model"
import { cwd } from "process"
//import { loadEnvConfig } from "@next/env"
import pkg from "@next/env"
const { loadEnvConfig } = pkg
loadEnvConfig(process.cwd())
const main = async () => {
  try {
    // 1. Explicitly load env and check URI
    const projectDir = cwd()
    loadEnvConfig(projectDir)

    const dbUri = process.env.MONGODB_URI
    console.log("Loaded URI:", dbUri) // <--- Add this line
    if (!dbUri) {
      throw new Error(
        "MONGODB_URI is not defined in your environment variables."
      )
    }

    const { products } = data

    // 2. Ensure we WAIT for the connection
    console.log("Connecting to MongoDB...")
    await connectToDatabase(dbUri)
    console.log("Connected successfully.")

    // 3. Clear and Insert
    console.log("Cleaning existing products...")
    await Product.deleteMany({})

    console.log(`Inserting ${products.length} products...`)
    const createdProducts = await Product.insertMany(products)

    console.log({
      count: createdProducts.length,
      message: "Seeded database successfully",
    })

    process.exit(0)
  } catch (error) {
    console.error("Seed Error:", error)
    process.exit(1) // Exit with error code
  }
}

main()
