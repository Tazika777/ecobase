import Image from "next/image";
import { MainHeader } from "./components/mainHeader";
import { BelowHeader } from "./components/belowHeader";
import { Navbar } from "./components/navbar";
import SelectedNavigation from "./components/selectedNavigation";
import SignIn from "./components/signIn";
import BeforeFooter from "./components/beforeFooter";
import Footer from "./components/footer";

export default function Home() {
  return (
    <> 
      <SignIn />
    </>
  );
}
