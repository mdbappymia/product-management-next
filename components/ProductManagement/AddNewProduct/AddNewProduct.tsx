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
    watch,
    formState: { errors },
  } = useForm();
  const [images, setImages] = useState([]);
  const [image, setImage] = useState(null);
  const [viewImg, setViewImg] = useState("");
  const [categorySelected, setCategorySelected] = useState("select");
  const [detailsList, setDetailsList] = useState<any>([]);
  const [detailsText, setDetailsText] = useState("");

  const onSubmit = (data: any) => console.log(data);
  const imageAdd = () => {
    getBase64(image).then((data: any) => {
      setViewImg(data);
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
          <input className="border" {...register("productName")} />
          <div>
            <label className="block">Products Images</label>
            {viewImg !== "" && (
              <Image src={viewImg} alt="" height={300} width={300} />
            )}
            <div>
              <input
                type="file"
                className="border p-2 outline-none"
                onChange={(e: any) => setImage(e.target.files[0])}
              />
              <button
                onClick={imageAdd}
                className="bg-indigo-800 px-5  py-2 border text-white font-bold uppercase"
              >
                Add
              </button>
            </div>
            <input type="text" name="" id="" />
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
                  <li key={i}>{item}</li>
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
                setDetailsList([...detailsList, detailsText]);
                setDetailsText("");
              }}
            >
              Add
            </button>
          </div>

          {/* <input {...register("exampleRequired", { required: true })} />
          <input {...register("exampleRequired", { required: true })} /> */}

          {errors.exampleRequired && <span>This field is required</span>}

          <input type="submit" />
        </form>
      </div>
    </div>
  );
};

export default AddNewProduct;
