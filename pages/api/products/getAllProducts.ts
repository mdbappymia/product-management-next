import { client } from "../../../functions/dbConnect";

const getAllProducts = async (req: any, res: any) => {
  try {
    await client.connect();
    if (req.method === "GET") {
      const allProducts = await client
        .db("product_management")
        .collection("products")
        .find({})
        .toArray();
      res.json(allProducts);
    }
  } catch (e) {
    res.json(e);
  }
};

export default getAllProducts;
