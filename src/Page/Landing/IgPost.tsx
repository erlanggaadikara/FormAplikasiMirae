/** @jsxImportSource @emotion/react */
import { css, jsx } from "@emotion/react";
import InstagramEmbed from "react-instagram-embed";
import { observer } from "mobx-react-lite";
import Text from "libs/ui/Text";

export default observer(() => {
  return (
    <div className="h-screen w-screen flex flex-col items-center">
      <div className="flex flex-col items-center m-20">
        <Text className="text-3xl">Posting selalu update untuk kamu</Text>
        <Text className="text-2xl">Pantau feed kami di Instagram</Text>
      </div>
      <div className="flex flex-row items-center">
        <InstagramEmbed
          url="https://www.instagram.com/p/CGjHtIvA76g"
          clientAccessToken="443208643542635|6ec15e396d25b42af710b72e219e12f8"
          maxWidth={320}
          hideCaption={false}
          containerTagName="div"
          protocol=""
          injectScript
        />
        <InstagramEmbed
          url="https://www.instagram.com/p/CF45GDagqiP/"
          clientAccessToken="443208643542635|6ec15e396d25b42af710b72e219e12f8"
          maxWidth={320}
          hideCaption={false}
          containerTagName="div"
          protocol=""
          injectScript
        />
        <InstagramEmbed
          url="https://www.instagram.com/p/CF45BgwAj5D/"
          clientAccessToken="443208643542635|6ec15e396d25b42af710b72e219e12f8"
          maxWidth={320}
          hideCaption={false}
          containerTagName="div"
          protocol=""
          injectScript
        />
      </div>
    </div>
  );
});
