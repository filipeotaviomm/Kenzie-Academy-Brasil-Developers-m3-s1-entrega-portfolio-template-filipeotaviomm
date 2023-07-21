import { Footer } from "../Footer/footer";
import { Header } from "../Header/header";

export const DefaultTemplate = ({ children }) => {
  return (
    <div>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};
