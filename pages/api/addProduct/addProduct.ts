import { client } from "../../../functions/dbConnect";

const addProduct = async (req: any, res: any) => {
  await client.connect();
  console.log("database connected");
  if (req.method === "POST") {
    const database = client.db("product_management");
    const productCollection = database.collection("products");
    const data = req.body;
    const result = await productCollection.insertOne(data);
    res.json(result);
    // console.log(data);
  }
};
export default addProduct;
