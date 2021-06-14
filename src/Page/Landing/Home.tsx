/** @jsxImportSource @emotion/react */
import { css, jsx } from "@emotion/react";
import { observer } from "mobx-react-lite";
import Text from "libs/ui/Text";
import { Carousel } from "react-responsive-carousel";

export default observer(() => {
  return (
    <div className="flex flex-row mt-20 flex-1">
      <div className="lg:w-1/2 flex flex-1 flex-grow">
        <Carousel axis="horizontal" showThumbs={false} showStatus={false}>
          <img src="images/bg-1.jpg" />
          <div></div>
        </Carousel>
      </div>
      <div className="flex flex-1 flex-col justify-center mx-14 ">
        <Text className="text-right text-5xl mt-11 ">
          Wujudkan mimpimu dengan Investasi
        </Text>
        <div
          className="bg-green-500 mt-4 mb-11"
          css={css`
            height: 7px;
          `}
        >
          {""}
        </div>
        <a
          className="rounded-md text-white text-center py-4 px-14  mt-16 text-base"
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
