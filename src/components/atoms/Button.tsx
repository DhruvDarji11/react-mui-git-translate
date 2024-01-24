import { Button } from "@material-tailwind/react";
import React, { FC } from "react";
import { buttonType } from "../../types/buttonTypes";

const ButtonComponent: FC<buttonType> = ({
  onClickFun,
  textValue,
  className,
}) => {
  return (
    <>
      <br />
      <Button
        placeholder="Button"
        className={className}
        // className={` ${
        //   className
        //     ? className
        //     : "rounded-lg px-2 py-1 border solid border-black"
        // } `}
        variant="outlined"
        onClick={onClickFun}
      >
        {textValue}
      </Button>
      <br />
    </>
  );
};

export { ButtonComponent };
