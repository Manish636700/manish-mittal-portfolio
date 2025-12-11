import { 
  PERSONAL_INFO, METRICS, FOUNDATIONS, SERVICES, 
  PERFORMANCE_METRICS, TOOLCHAIN, RECENT_WINS 
} from "./data";
import { Github, Linkedin, Twitter, Terminal, Heart } from "lucide-react";
import { Check, Mail, MapPin } from "lucide-react";
import "./globals.css";
import Main from "./component/Main";
import Nav from "./component/Nav";
import Foundations from "./component/Foundations";
import Services from "./component/Services";
import Performance_Metrics from "./component/Performance_Metrics";
import Toolchain from "./component/Toolchain";
import Wins from "./component/Wins";
import Contact from "./component/Contact";
import Footer from "./component/Footer";
import About from "./component/About";
export default function Home() {
  return (
    <div className="overflow-x-hidden">

      <Nav></Nav>

      <Main ></Main>

      <About></About>
      
      <Foundations></Foundations>



      {/* Services */}
      
      <Services></Services>
      {/* Performance Metrics */}
     
      <Performance_Metrics></Performance_Metrics>
      {/* Toolchain */}
      
      <Toolchain></Toolchain>
      {/* Wins */}
     
      <Wins></Wins>
      {/* Contact */}
      
      <Contact></Contact>

      {/* Footer */}
      <Footer></Footer> 
    </div>
  );
}