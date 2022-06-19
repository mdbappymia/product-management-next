import rimraf from "rimraf";

const deleteImage = (req: any, res: any) => {
  if (req.method === "POST") {
    console.log(req.body);
    rimraf(`public/${req.body.url}`, async function (e) {
      if (e) {
        throw new Error("Error");
      } else res.status(200).json({ acknowledged: true, url: req.body.url });
    });
  }
};
export default deleteImage;
