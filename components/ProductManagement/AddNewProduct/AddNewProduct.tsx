import Image from "next/image";
import { FC, useState } from "react";
import { useForm } from "react-hook-form";
import { getBase64 } from "../../../functions/imageProcess";

interface IProps {
  setAddProductShow: Function;
}
const AddNewProduct: FC<IProps> = ({ setAddProductShow }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [images, setImages] = useState<any>([]);
  const [image, setImage] = useState(null);
  const [mainImage, setMainImage] = useState("");
  const [name, setName] = useState("");
  const [categorySelected, setCategorySelected] = useState("select");
  const [detailsList, setDetailsList] = useState<any>([]);
  const [detailsText, setDetailsText] = useState("");

  const onSubmit = (data: any) => console.log(data);
  const imageAdd = (image: any) => {
    getBase64(image).then((img: any) => {
      //   setViewImg(img)
      if (!name) {
        alert("Please insert product name");
        return;
      }
      fetch("/api/postImage/postImage", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({
          image: img,
          id: `${name.replace(" ", "_")}${Date.now()}`,
          folder: name.replace(" ", "_"),
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          setImages([...images, data]);
        });
    });
  };
  console.log(mainImage);

  const deleteImage = (imgUrl: any) => {
    console.log("Clicked");
    fetch("/api/deleteSingleImage/deleteImage", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ url: imgUrl }),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.acknowledged) {
          setImages(images.filter((item: any) => item.url !== result.url));
        }
      });
  };

  return (
    <div className="relative">
      <h1 className="text-center font-bold uppercase text-2xl border-b-4">
        Add new product
      </h1>
      <button
        onClick={() => setAddProductShow(false)}
        className="absolute top-0 right-0 px-3 py-1 bg-red-700 text-white font-bold"
      >
        &times;
      </button>
      <div className="p-10">
        <form onSubmit={handleSubmit(onSubmit)}>
          <label className="w-full block">Product Name</label>
          <input
            className="border"
            onChange={(e: any) => setName(e.target.value)}
          />
          <div>
            <label className="block">Products Images</label>
            <div className="flex">
              {images.map((image: any, i: any) => (
                <div className=" relative" key={i}>
                  <Image
                    src={"/" + image.url}
                    alt=""
                    height={300}
                    width={300}
                  />
                  <button
                    onClick={() => deleteImage(image.url)}
                    className="bg-red-600 px-2 absolute top-0 right-0"
                  >
                    &times;
                  </button>
                </div>
              ))}
            </div>
            <div>
              <input
                type="file"
                className="border p-2 outline-none"
                onChange={(e: any) => setImage(e.target.files[0])}
              />
              <button
                onClick={() => imageAdd(image)}
                className="bg-indigo-800 px-5  py-2 border text-white font-bold uppercase"
              >
                Add
              </button>
            </div>
            <input type="text" name="" className="border" />
          </div>

          {/* product main image  */}
          <div>
            {images.length > 0 && (
              <Image
                src={"/" + mainImage || images[0].url}
                alt=""
                height={300}
                width={300}
              />
            )}
            <h1>Select main Image</h1>
            <select
              onChange={(e) => setMainImage(e.target.value)}
              defaultValue={"/" + images[0]?.url || ""}
            >
              {images.map((image: any, i: number) => (
                <option value={image.url} key={i}>
                  {i}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block w-full">Select or Input Category</label>
            <div>
              <input
                type="radio"
                name="selectCategory"
                value={categorySelected}
                checked={categorySelected === "select"}
                onChange={() => setCategorySelected("select")}
              />
              Select Category
              <br />
              <input
                type="radio"
                name="selectCategory"
                value={categorySelected}
                checked={categorySelected === "input"}
                onChange={() => setCategorySelected("input")}
              />
              Input New Category
            </div>
            <div>
              {categorySelected === "select" && (
                <div>
                  <label className="block w-full">
                    Select Product Category
                  </label>

                  <select defaultValue={"1"} {...register("category")}>
                    <option value={"1"}>1</option>
                    <option value={"2"}>2</option>
                    <option value={"3"}>3</option>
                  </select>
                </div>
              )}
              {categorySelected === "input" && (
                <>
                  <label className="block">Input your Category Name</label>
                  <input
                    type="text"
                    className="border"
                    {...register("category")}
                  />
                </>
              )}
            </div>
          </div>

          <div>
            <label className="block">Product Details</label>
            {detailsList.length > 0 && (
              <div>
                {detailsList.map((item: string, i: number) => (
                  <li key={i}>
                    {item}{" "}
                    <button
                      className="bg-red-600 text-white font-bold px-2"
                      onClick={() =>
                        setDetailsList(
                          detailsList.filter((a: any) => a !== item)
                        )
                      }
                    >
                      &times;
                    </button>
                  </li>
                ))}
              </div>
            )}
            <br />
            <input
              type="text"
              className="border"
              onChange={(e) => setDetailsText(e.target.value)}
              value={detailsText}
            />
            <button
              className="bg-yellow-600 px-5 text-white"
              onClick={() => {
                if (detailsText === "") {
                  return;
                }
                setDetailsList([...detailsList, detailsText]);
                setDetailsText("");
              }}
            >
              Add
            </button>
          </div>

          <div>
            <h1>Price</h1>
            <input className="border" type="number" {...register("price")} />
          </div>
          <div>
            <h1>Commission</h1>
            <input
              className="border"
              type="number"
              {...register("commission")}
            />
          </div>

          {errors.exampleRequired && <span>This field is required</span>}

          <input type="submit" />
        </form>
      </div>
    </div>
  );
};

export default AddNewProduct;
