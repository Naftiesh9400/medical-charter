import { Link } from "react-router-dom";
import { Linkedin, Youtube, Instagram, Facebook, Mail, MapPin, Phone } from "lucide-react";

const footerData = [
  {
    name: "Company",
    types: [
      { name: "About Us", link: "/about" },
      { name: "Careers", link: "/careers" },
      { name: "Blog", link: "/blog" },
    ],
  },
  {
    name: "Support",
    types: [
      { name: "Help Center", link: "/help" },
      { name: "Terms of Service", link: "/terms" },
      { name: "Privacy Policy", link: "/privacy" },
    ],
  },
];

interface FooterProps {
  hideDownloadNow?: boolean;
}

const FooterSection = ({ hideDownloadNow }: FooterProps) => {
  return (
    <div className="bg-gradient-to-b from-[#34415A] to-[#141414] w-full px-4 sm:px-6 lg:px-20 py-8">
      <div className="flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="font-bold text-[24px] sm:text-[32px] lg:text-[50px] text-center md:text-left text-white">
          Take the First Step Toward Your Dream Career!
        </p>
        <Link
          to="/sign-up"
          className="bg-[#0C50E3] text-white text-sm lg:text-base font-semibold px-6 py-3 rounded-full text-center hover:bg-[#0b45c2] transition-colors"
        >
          Get Started Now
        </Link>
      </div>
      <div
        className="w-full h-[1px] my-8"
        style={{
          background:
            "linear-gradient(90deg, #6172F3 0%, #FFFFFF 28%, #FFFFFF 63%, #6172F3 100%)",
          boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
        }}
      ></div>
      <div className="flex flex-col lg:flex-row gap-8 justify-between items-start lg:items-center">
        <div className="flex flex-col items-center lg:items-start gap-6">
          <Link to="/" className="flex items-center gap-3">
            {/* Placeholder for Logo */}
            <div className="h-[35px] w-[40px] bg-white/10 rounded flex items-center justify-center text-white text-xs">Logo</div>
            <div className="flex flex-col items-center lg:items-start gap-[6px]">
              <p className="text-[32px] font-semibold text-white">EMS</p>
            </div>
          </Link>
          <p className="text-sm md:text-base text-white text-center lg:text-left max-w-md leading-5">
            We aim to bridge the gap between college education and industry
            needs and make you job-ready.
          </p>
          <div className="flex gap-4 text-gray-300">
            <a
              href="https://www.linkedin.com/company/emsprolearn/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href="https://www.youtube.com/@Elevate-My-Skill"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white"
            >
              <Youtube className="w-6 h-6" />
            </a>
            <a
              href="https://www.instagram.com/emsprolearn"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white"
            >
              <Instagram className="w-6 h-6" />
            </a>
            <a
              href="https://www.facebook.com/emsprolearn/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white"
            >
              <Facebook className="w-6 h-6" />
            </a>
          </div>
        </div>
        <div className="flex flex-wrap justify-center lg:justify-start lg:flex-nowrap gap-8 lg:gap-12 w-full lg:w-auto">
          <div className="flex gap-16">
            {footerData.map((data, index) => (
              <div key={index} className="text-center lg:text-left">
                <p className="text-lg font-bold text-white mb-4">{data.name}</p>
                <div className="flex flex-col gap-2 text-sm text-gray-300">
                  {data.types.map((type, idx) => (
                    <Link key={idx} to={type.link} className="hover:text-white">
                      <h3>{type.name}</h3>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div>
            <p className="text-lg font-bold text-white mb-4 text-center lg:text-left">
              Quick Contact
            </p>
            <div className="flex flex-col justify-center lg:justify-start lg:items-start items-center gap-2 text-sm text-gray-300">
              <div className="flex items-start justify-start gap-2">
                <MapPin className="w-5 h-5 shrink-0" />
                <p className="w-[200px]">
                  B517, 5th Floor, B Tower, Bhutani Alphathum , Sector 90,
                  Noida, Uttar Pradesh 201304
                </p>
              </div>
              <p className="flex items-center gap-2">
                <Mail className="w-5 h-5" />
                help@elevatemyskill.com
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-5 h-5" />
                +91-9266516675
              </p>
            </div>
          </div>
          {/* Conditional rendering for the "Download Now" div */}
          {!hideDownloadNow && (
            <div>
              <p className="text-lg font-bold text-white mb-4 text-center lg:text-left">
                Download Now
              </p>
              <div className="flex flex-col gap-4">
                <Link to="https://play.google.com/store/apps/details?id=com.elevatemyskill.learners">
                  <div className="w-[135px] h-[40px] bg-white/10 rounded flex items-center justify-center text-white text-xs border border-white/20">Google Play</div>
                </Link>
                <Link to="https://apps.apple.com/in/app/ems-prolearn/id6739293367">
                  <div className="w-[135px] h-[40px] bg-white/10 rounded flex items-center justify-center text-white text-xs border border-white/20">App Store</div>
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
      <div
        className="w-full h-[1px] my-8"
        style={{
          background:
            "linear-gradient(90deg, #6172F3 0%, #FFFFFF 28%, #FFFFFF 63%, #6172F3 100%)",
          boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
        }}
      ></div>
      <div className="text-xs sm:text-sm text-white text-center">
        ©️ 2025 Elevate My Skill. All rights reserved.
        <p>A product of CMV Technologies International Pvt Ltd</p>
      </div>
    </div>
  );
};

export default FooterSection;
