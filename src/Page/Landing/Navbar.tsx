/** @jsxImportSource @emotion/react */
import { css, jsx } from "@emotion/react";
import { observer, useLocalObservable } from "mobx-react-lite";
import Image from "libs/ui/Image";

export default observer(() => {
  return (
    <div
      id="navbar"
      className="w-full absolute top-0 flex lg:flex-row md:flex-row flex-col lg:justify-between"
      css={css`
        background-color: white;
      `}
    >
      <div className="p-2 mx-6">
        <Image
          src="images/green-stock.png"
          className="lg:w-50 lg:h-16 h-12 rounded-full"
        />
      </div>
      <div className="flex flex-row items-center lg:justify-end md:justify-end w-1/2 h-20 lg:text-base text-sm ">
        <a className="mx-10" href="#">
          About
        </a>
        <a
          className="rounded-md p-2 mx-4 text-white text-center"
          css={css`
            background-color: #04396f;
          `}
          href="/Form/1"
        >
          Open Account
        </a>
      </div>
    </div>
  );
});
