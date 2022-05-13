import React, { FC } from "react";

interface IProps {
  setAddProductShow: Function;
}
const AddNewProduct: FC<IProps> = () => {
  return (
    <div>
      <h1>Add new product</h1>
    </div>
  );
};

export default AddNewProduct;
