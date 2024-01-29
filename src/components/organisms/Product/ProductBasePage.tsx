import React from "react";
import useFetch from "../../../hooks/useFetch";
import { sampleProductCategory } from "../../../utils/constant";
import { Card } from "@material-tailwind/react";

const ProductBasePage = () => {
  const value = useFetch();
  return (
    <div style={{ padding: "10px" }}>
      <div>Products base page</div>
      <br />
      <div>name: {value.user.name}</div>
      <div>IsLoggedIn: {`${value.user.IsLoggedIn}`} </div>
      <div>
        <h3>Different category products are listed here!!!</h3>
        <div className="grid grid-cols-2 gap-2">
          {sampleProductCategory.map((val) => {
            return (
              <Card className="block p-4 m-2" placeholder={undefined}>
                <div>{val.title}</div>
                <div>{val.catID}</div>
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ProductBasePage;
