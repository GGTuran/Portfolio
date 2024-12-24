import TwitterIcon from "@/assets/icons/TwitterIcon";
import { GithubIcon, LinkedinIcon } from "lucide-react";

const Footer = () => {
  return (
    <div>
      <div className="bg-gradient-to-b from-gray-800 to-gray-900 text-white">
        <hr className="border-t border-gray-700 opacity-5" />
        {/* Footer */}
        <footer className="bg-gray-900 text-white py-6">
          <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
            {/* Social Links */}
            <div className="flex space-x-4 mb-4 md:mb-0">
              <a
                href="https://www.linkedin.com/in/tayyabamerituran"
                className="hover:text-white"
              >
                <LinkedinIcon />
              </a>
              <a href="https://github.com/GGTuran" className="hover:text-white">
                <GithubIcon />
              </a>
              <a href="https://x.com/TayyabTuran" className="hover:text-white">
                <TwitterIcon />
              </a>
            </div>

            {/* Copyright */}
            <p className="text-sm text-center md:text-right text-white">
              © 2024 - Tayyab Ameri Turan. All Rights Reserved.
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
