import { MongoClient } from "mongodb";
import { NextResponse } from "next/server";



// this code is to add products
export async function POST(request) {
  // Replace the uri string with your connection string.
  let body = await request.json()
  const uri = "mongodb+srv://harish:YEGJEpU2DIxUuhYP@cluster0.vtsdo4i.mongodb.net/";
  const client = new MongoClient(uri);
  try {
    const database = client.db('inventory');
    const inventory = database.collection('product');
    const products = await inventory.insertOne(body)
    return NextResponse.json({  ok: true })
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}

//--------------------------------------------------------

// this code is to display products in view page
export async function GET(request) {
  
  const uri = "mongodb+srv://harish:YEGJEpU2DIxUuhYP@cluster0.vtsdo4i.mongodb.net/";
  const client = new MongoClient(uri);
  try {
    const database = client.db('inventory');
    const inventory = database.collection('product');
    const query = {};
    const products = await inventory.find(query).toArray()
   
    return NextResponse.json({products})
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}



//---checkuser in data base
