import { github, gmail, instagram, linkedin } from "../assets";

const FooterSection = () => {
  return (
    <footer className="bg-black text-white">
      <div className="flex justify-center items-center sm:px-12 px-4 bg-primary py-7 w-50 h-20">
        <a
          href="https://www.instagram.com"
          className="flex justify-center px-10"
        >
          <img src={instagram} alt="instagram" className="" />
        </a>
        <a
          href="https://www.linkedin.com/"
          className="flex justify-center px-10"
        >
          <img src={linkedin} alt="linkedin" className="" />
        </a>
        <a
          href="https://mail.google.com/mail/u/0/#inbox?compose=new"
          className="flex justify-center px-10"
        >
          <img src={gmail} alt="gmail" className="" />
        </a>
        <a
          href="https://github.com/"
          className="flex justify-center px-10 w-50 h-12"
        >
          <img src={github} alt="github" className="" />
        </a>
      </div>
      <div className="flex justify-center items-center sm:px-12 px-4 bg-primary py-2"></div>
    </footer>
  );
};

export default FooterSection;
