import { MongoClient } from "mongodb";
import { NextResponse } from "next/server";

export async function POST(request) {
    const req=await request.json()
    const uri = "mongodb+srv://harish:YEGJEpU2DIxUuhYP@cluster0.vtsdo4i.mongodb.net/";
    const client = new MongoClient(uri);
    try {
      const database = client.db('inventory');
      const users = database.collection('user');
      const query = {uname:`${req.uname}`,pass:`${req.pass}`};
      const user = await users.find(query).toArray()
     if(user!=null)
      return NextResponse.json(true)
    else
    return NextResponse.json(false)
    } finally {
      // Ensures that the client will close when you finish/error
      await client.close();
    }
  }