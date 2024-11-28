import FooterBody from "./FooterBody";
import FooterEmail from "./FooterEmail";

const Footer = () => {
    return (  
        <div className="bg-black py-8 px-9">
            <FooterEmail />
            <FooterBody />
        </div>
    );
}
 
export default Footer;