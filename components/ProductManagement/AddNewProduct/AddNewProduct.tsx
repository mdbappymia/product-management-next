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
    reset,
  } = useForm();
  const [images, setImages] = useState<any>([]);
  const [image, setImage] = useState(null);
  const [mainImage, setMainImage] = useState("");
  const [name, setName] = useState("");
  const [categorySelected, setCategorySelected] = useState("select");
  const [detailsList, setDetailsList] = useState<any>([]);
  const [detailsText, setDetailsText] = useState("");
  // product size
  const [size, setSize] = useState("");
  const [sizes, setSizes] = useState<any[]>([]);
  // product color
  const [color, setColor] = useState("");
  const [colors, setColors] = useState<any[]>([]);

  const onSubmit = (data: any) => {
    const productData = {
      ...data,
      images: images,
      mainImage: mainImage,
      name: name,
      details: detailsList,
      sizes: sizes,
      colors: colors,
    };
    // console.log(productData);
    const isAddedProduct = window.confirm("Are you sure add product?");
    if (isAddedProduct) {
      fetch("/api/addProduct/addProduct", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(productData),
      })
        .then((res) => res.json())
        .then((result) => {
          console.log(result);
          if (result.acknowledged) {
            reset();
            setImages([]);
            setName("");
            setMainImage("");
            setDetailsList([]);
            setSizes([]);
            setColors([]);
            alert("Successful");
          }
        });
    }
  };
  const imageAdd = (image: any) => {
    getBase64(image).then((img: any) => {
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
          if (!mainImage) {
            setMainImage(data.url);
            // console.log(data)
          }
        });
    });
  };
  // console.log(mainImage);

  const deleteImage = (imgUrl: any) => {
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
          if (images.length === 1) {
            setMainImage("");
          }
        }
      });
  };
  return (
    <div className="relative">
      <h1 className="text-center font-bold uppercase text-2xl border-b-4">
        Add new product
      </h1>
      <button
        type="button"
        onClick={() => setAddProductShow(false)}
        className="absolute top-0 right-0 px-3 py-1 bg-red-700 text-white font-bold"
      >
        &times;
      </button>
      <div className="p-10">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label className="w-full block">Product Name</label>
            <input
              className="border"
              onChange={(e: any) => setName(e.target.value)}
            />
          </div>
          <div>
            <label className="w-full block">Product Description</label>
            <textarea className="border" {...register("description")} />
          </div>
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
                    type="button"
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
                type="button"
                onClick={() => imageAdd(image)}
                className="bg-indigo-800 px-5  py-2 border text-white font-bold uppercase"
              >
                Add
              </button>
            </div>
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
                      type="button"
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
              type="button"
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
          <div>
            <h1>Quantity</h1>
            <input className="border" type="number" {...register("quantity")} />
          </div>
          {sizes.length > 0 && (
            <div>
              <h3>Product Sizes</h3>
              {sizes.map((item: any, i: any) => (
                <li key={i}>
                  {item}{" "}
                  <button
                    type="button"
                    className="bg-red-500 px-2"
                    onClick={() =>
                      setSizes(sizes.filter((i: any) => i !== item))
                    }
                  >
                    X
                  </button>
                </li>
              ))}
            </div>
          )}
          <div>
            <h1>Size</h1>
            <input
              className="border"
              type="text"
              onChange={(e: any) => setSize(e.target.value)}
              value={size}
            />
            <button
              type="button"
              className="border bg-green-500"
              onClick={() => {
                setSizes([...sizes, size]);
                setSize("");
              }}
            >
              Add Size
            </button>
          </div>

          {/* color  */}
          {colors.length > 0 && (
            <div>
              <h3>Product Colors</h3>
              {colors.map((item: any, i: any) => (
                <li key={i}>
                  {item}{" "}
                  <button
                    type="button"
                    className="bg-red-500 px-2"
                    onClick={() =>
                      setColors(colors.filter((i: any) => i !== item))
                    }
                  >
                    X
                  </button>
                </li>
              ))}
            </div>
          )}
          <div>
            <h1>Color</h1>
            <input
              className="border"
              type="text"
              onChange={(e: any) => setColor(e.target.value)}
              value={color}
            />
            <button
              type="button"
              className="border bg-green-500"
              onClick={() => {
                setColors([...colors, color]);
                setColor("");
              }}
            >
              Add Color
            </button>
          </div>

          {errors.exampleRequired && <span>This field is required</span>}

          <input type="submit" />
        </form>
      </div>
    </div>
  );
};

export default AddNewProduct;
