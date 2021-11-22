import SocialContact from "../../common/social-contact/social-contact";
import { Wrapper } from "./footer-style";

function Footer() {
  return (
    <Wrapper>
      <div className="footer">
        <SocialContact />
      </div>
    </Wrapper>
  );
}

export default Footer;
