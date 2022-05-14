import React, { FC, useState } from "react";
import DashboardLayout from "../../../components/Layout/DashboardLayout";
import AddNewProduct from "../../../components/ProductManagement/AddNewProduct/AddNewProduct";

const Products: FC = () => {
  const [addProductShow, setAddProductShow] = useState(false);
  return (
    <DashboardLayout>
      <div className="relative">
        <div>
          <h1 className="text-center font-bold text-2xl uppercase border-b-4">
            Manage Products
          </h1>
          <button
            onClick={() => setAddProductShow(true)}
            className="bg-green-700 font-bold text-white uppercase mx-4 px-5 py-2 my-3 hover:bg-green-800"
          >
            Add new product
          </button>
        </div>
        {addProductShow && (
          <div className="absolute h-full w-full top-0 left-0 bg-white">
            <AddNewProduct setAddProductShow={setAddProductShow} />
          </div>
        )}
      </div>
    </DashboardLayout>
  );
};

export default Products;
