import { NextResponse } from "next/server"
import fs from "fs"
import path from "path"

export async function GET() {
  try {
    const filePath = path.join(process.cwd(), "data", "products.json")
    const fileContents = fs.readFileSync(filePath, "utf8")
    const products = JSON.parse(fileContents)

    return NextResponse.json(products)
  } catch (error) {
    console.error("Error loading products:", error)
    return NextResponse.json({ error: "Error al cargar productos" }, { status: 500 })
  }
}
