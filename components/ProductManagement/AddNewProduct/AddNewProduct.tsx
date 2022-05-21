import { FC, useState } from "react";
import { useForm } from "react-hook-form";

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
  const [categorySelected, setCategorySelected] = useState("select");

  const onSubmit = (data: any) => console.log(data);

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
            <label className="w-full">Products Images</label>
            <div>
              <input type="file" className="border p-2 outline-none" />
              <button className="bg-indigo-800 px-5  py-2 border text-white font-bold uppercase">
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
            <label>Produc</label>
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
