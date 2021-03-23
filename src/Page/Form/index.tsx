/** @jsxImportSource @emotion/react */
import { css, jsx } from "@emotion/react";
import { RouteComponentProps } from "@reach/router";
import { observer, useLocalObservable } from "mobx-react-lite";
import Image from "libs/ui/Image";

interface propType {
  path?: RouteComponentProps;
  children?: any;
}

export default observer((props: propType) => {
  return (
    <div className="container h-screen flex flex-col">
      <div
        id="navbar"
        className="w-full flex lg:flex-row md:flex-row flex-col lg:justify-between"
        css={css`
          background-color: white;
        `}
      >
        <div className="p-2 mx-6">
          <Image
            src="/images/mirae-logo.png"
            className="lg:w-50 lg:h-16 h-12"
          />
        </div>
        <div className="flex flex-row items-center lg:justify-end md:justify-end w-1/2 h-20 lg:text-base text-sm "></div>
      </div>
      <div className="w-screen h-32 bg-gray-200"></div>
      {props.children}
    </div>
  );
});
