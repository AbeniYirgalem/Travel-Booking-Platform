import Packages from "../components/packageComponents/PackagesContent";
import Footer from "./Footer";
import PackageHeader from "../components/packageComponents/PackageHeader";
import PackageArticles from "../components/packageComponents/PackageArticles";
import PackagesContent from "../components/packageComponents/PackagesContent";

function Package() {
  return (
    <>
      <PackageHeader />
      <PackagesContent />
      <PackageArticles />
      <Footer />
    </>
  );
}

export default Package;
