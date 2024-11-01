import AccordionComp from "./component/Accordion";
import Myheader from "./component/header/Header";
import Mybanner from "./component/Banner/BannerComp";
import IntroCompWithHead from "./component/IntroCompWithHeader";
import TextWithImgComp from "./component/RowCol/TextWithImg";
import ThreeImgComp from "./component/ThreeImgComp/ThreeImgComp";
import threeImgData from "./component/ThreeImgComp/Data.json";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import Footer from "./component/Footer/footer";
import footerData from "./component/Footer/Data.json";
config.autoAddCss = false;
export default function Home() {
  const [servicesSection, projectsSection] = threeImgData.sections;
  return (
    <>
      <Myheader />
      <Mybanner />
      <IntroCompWithHead />
      <TextWithImgComp />
      <ThreeImgComp
        heading={servicesSection.section.wrapper.content.heading}
        paragraph={servicesSection.section.wrapper.content.paragraph}
        images={servicesSection.section.wrapper.pictures.slideForMob.imgTiles.map(
          (img) => ({
            src: img.imageSrc,
            alt: img.altText,
          })
        )}
      />
      <AccordionComp></AccordionComp>
      <ThreeImgComp
        heading={projectsSection.section.wrapper.content.heading}
        paragraph={projectsSection.section.wrapper.content.paragraph}
        images={projectsSection.section.wrapper.pictures.slideForMob.imgTiles.map(
          (img) => ({
            src: img.imageSrc,
            alt: img.altText,
          })
        )}
      />
      <Footer
        address={footerData.address}
        socialLinks={footerData.socialLinks}
        copyright={footerData.copyright}
        formInfo={footerData.formInfo}
        navLinks={footerData.navLinks}
      />
    </>
  );
}
