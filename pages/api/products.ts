import { getMongodb } from "../../mongodb";
import { ObjectId } from "mongodb";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // switch the methods
  switch (req.method) {
    case "GET": {
      return getProducts(req, res);
    }

    case "POST": {
      return addProduct(req, res);
    }

    case "PUT": {
      return updateProduct(req, res);
    }

    case "DELETE": {
      return deleteProduct(req, res);
    }
  }
}

// Getting all products.
async function getProducts(req: NextApiRequest, res: NextApiResponse) {
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

// Adding a new product
async function addProduct(req: NextApiRequest, res: NextApiResponse) {
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

// Updating a product
async function updateProduct(req: NextApiRequest, res: NextApiResponse) {
  try {
    let db = await getMongodb();
    await db
      .collection("products")
      .updateOne(
        { _id: new ObjectId(req.body._id) },
        { $set: { name: req.body.name, price: req.body.price } }
      );
    return res.json({
      message: "Product updated successfully",
      success: true,
    });
  } catch (error) {
    return res.json({
      message: new Error(error).message,
      success: false,
    });
  }
}

// Delete a product
async function deleteProduct(req: NextApiRequest, res: NextApiResponse) {
  try {
    let db = await getMongodb();
    await db.collection("products").deleteOne({ _id: new ObjectId(req.body) });
    return res.json({
      message: "Product deleted successfully",
      success: true,
    });
  } catch (error) {
    return res.json({
      message: new Error(error).message,
      success: false,
    });
  }
}
