import Image from "next/image";
import "./threeImgComp.css";

export default function ThreeImgComp({ heading, paragraph, images }) {
  return (
    <section className="threeTiles">
      <div className="threeTilesWrapp">
        <div className="tilesContent">
          <h2>{heading}</h2>
          <p>{paragraph}</p>
        </div>
        <div className="tilesPicture">
          <div className="slideForMob">
            {images.map((image, index) => (
              <div key={index} className="imgTile">
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={500}
                  height={300}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
