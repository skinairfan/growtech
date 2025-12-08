import PageTitle from "../components/PageTitle";
import Portfolios from "../components/Portfolios"

function Portfolio() {
  return (
    <>
      <PageTitle
        title="Portfolio"
        breadcrumb="Home / Portfolio"
      />
      <Portfolios />
    </>
  );
}

export default Portfolio;
