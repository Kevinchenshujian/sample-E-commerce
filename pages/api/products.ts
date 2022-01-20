import { getMongodb } from "../../mongodb";

export default async function handler(req, res) {
  // switch the methods
  switch (req.method) {
    case "GET": {
      return getProducts(req, res);
    }

    case "POST": {
      return addProduct(req, res);
    }
  }
}

// Getting all posts.
async function getProducts(req, res) {
  try {
    let db = await getMongodb();
    let products = await db.collection("products").find({}).toArray();
    return res.json({
      message: JSON.parse(JSON.stringify(products)),
      success: true,
    });
  } catch (error) {
    return res.json({
      message: new Error(error).message,
      success: false,
    });
  }
}

// Adding a new post
async function addProduct(req, res) {
  try {
    let db = await getMongodb();
    await db.collection("products").insertOne(req.body);
    return res.json({
      message: "Product added successfully",
      success: true,
    });
  } catch (error) {
    return res.json({
      message: new Error(error).message,
      success: false,
    });
  }
}
