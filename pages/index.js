import "react-app-polyfill/ie9";
import "react-app-polyfill/stable";

import Head from "../components/head";
import NavMobile from "../components/NavMobile";
import useMedia from "../components/MediaQuery/MediaQuery";
import Home from "../components/Home/Home";
import axios from "axios";

export default function HomePage({ photos }) {
  const { isMobileOrTablet } = useMedia();
  return (
    <>
      <Head title="Manièra" />
      {isMobileOrTablet && <NavMobile />}
      <Home photos={photos} />
    </>
  );
}

export const getServerSideProps = async () => {
  try {
    const response = await axios.get(
      `https://graph.instagram.com/me/media?limit=200&fields=id,media_type,permalink,media_url&access_token=${process.env.INSTAGRAM_ACCESS_TOKEN}`
    );

    const edges =
      response.data.data.filter((media) => media.media_type === "IMAGE") ?? [];

    const photos = edges.map(({ media_url, permalink }) => {
      return {
        url: permalink,
        thumbnailUrl: media_url,
        displayUrl: media_url,
        caption: "node.edge_media_to_caption.edges[0].node.text",
      };
    });
  } catch (error) {}

  return { props: { photos: [] } };
};
