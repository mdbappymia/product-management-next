import { FC } from "react";
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
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            className="border"
            defaultValue="test"
            {...register("example")}
          />

          {/* include validation with required or other standard HTML validation rules */}
          <input {...register("exampleRequired", { required: true })} />
          {/* errors will return when field validation fails  */}
          {errors.exampleRequired && <span>This field is required</span>}

          <input type="submit" />
        </form>
      </div>
    </div>
  );
};

export default AddNewProduct;
