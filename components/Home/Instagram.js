import Footer from "../Footer";
import useMedia from "../MediaQuery/MediaQuery";
import Slider from "../Slider";
import useTranslate from "../Translations/useTranslate";

const Instagram = ({ photos, ...props }) => {
  const { isSmallDesktop, isMobileOrTablet } = useMedia();

  const trans = useTranslate("instagram");
  let igPhotos = photos.slice(0, 5);
  if (isSmallDesktop) igPhotos = photos.slice(0, 4);
  if (isMobileOrTablet) igPhotos = photos.slice(0, 6);

  return (
    <section {...props} className="section">
      <div className="instagram">
        <div className="instagram-wrapper">
          <p className="instagram-title">- {trans.title} -</p>
          <p className="instagram-text">
            Follow us{" "}
            <a
              href="https://www.instagram.com/maniera_nail_face_bar_/"
              target="_blank"
              rel="noreferrer"
            >
              @maniera_nail_face_bar_
            </a>
          </p>
          <div className="instagram-photos">
            {isMobileOrTablet && igPhotos.length > 0 ? (
              <Slider isLight>
                <div className="instagram-photos__inner">
                  <a
                    href={igPhotos[0].url}
                    rel="noreferrer"
                    target="_blank"
                    className="instagram-photos__item"
                    style={{
                      backgroundImage: `url(${igPhotos[0].displayUrl})`,
                    }}
                  />
                  <a
                    href={igPhotos[1].url}
                    rel="noreferrer"
                    target="_blank"
                    className="instagram-photos__item"
                    style={{
                      backgroundImage: `url(${igPhotos[1].displayUrl})`,
                    }}
                  />
                  <a
                    href={igPhotos[2].url}
                    rel="noreferrer"
                    target="_blank"
                    className="instagram-photos__item"
                    style={{
                      backgroundImage: `url(${igPhotos[2].displayUrl})`,
                    }}
                  />
                </div>
                <div className="instagram-photos__inner">
                  <a
                    href={igPhotos[3].url}
                    rel="noreferrer"
                    target="_blank"
                    className="instagram-photos__item"
                    style={{
                      backgroundImage: `url(${igPhotos[3].displayUrl})`,
                    }}
                  />
                  <a
                    href={igPhotos[4].url}
                    rel="noreferrer"
                    target="_blank"
                    className="instagram-photos__item"
                    style={{
                      backgroundImage: `url(${igPhotos[4].displayUrl})`,
                    }}
                  />
                  <a
                    href={igPhotos[5].url}
                    rel="noreferrer"
                    target="_blank"
                    className="instagram-photos__item"
                    style={{
                      backgroundImage: `url(${igPhotos[5].displayUrl})`,
                    }}
                  />
                </div>
              </Slider>
            ) : (
              igPhotos.map((photo) => (
                <a
                  key={photo.url}
                  href={photo.url}
                  target="_blank"
                  className="instagram-photos__item"
                  style={{ backgroundImage: `url(${photo.displayUrl})` }}
                  rel="noreferrer"
                />
              ))
            )}
          </div>
        </div>
        <Footer />
      </div>
    </section>
  );
};

export default Instagram;
