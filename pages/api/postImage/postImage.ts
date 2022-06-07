import fs from 'fs'
const postImage =(req:any,res:any)=>{
    console.log('hello')
    if(req.method === 'POST'){
        const image = req.body
        if(/^data:image\/png;base64,/.test(image.image)){
            var base64Data = image.image.replace(/^data:image\/png;base64,/, "")
        }
        if(/^data:image\/jpeg;base64,/.test(image.image)){
            var base64Data = image.image.replace(/^data:image\/jpeg;base64,/, "")
        }
    const path = `utils/images/${image.folder}`;
    fs.mkdir(path, { recursive: true }, (error: any) => {
      if (error) {
        console.log(error);
      }
      fs.writeFile(
        `utils/images/${image.folder}/${image.id}.png`,
        base64Data,
        "base64",
        function (err: any) {
          if (err) console.log(err);
        }
      );
    });
    fs.writeFile(
      `utils/images/${image.folder}/${image.id}.png`,
      base64Data,
      "base64",
      function (err: any) {
        if (err) console.log(err);
      }
    );
    res.json({url:`utils/images/${image.folder}/${image.id}.png`})
    }
}
export default postImage