
import Link from "next/link";
// import HeaderIcon from "./HeaderIcon";

const Footer = () => {
  return (
    <footer className="relative bg-blue-500 pt-8 pb-6 mt-32">
      <div
        className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20"
        style={{ height: "80px", transform: "translateZ(0)" }}
      >
        <svg
          className="absolute bottom-0 overflow-hidden"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          version="1.1"
          viewBox="0 0 2560 100"
          x="0"
          y="0"
        >  <polygon
          className="text-blue-500 fill-current"
          points="2560 0 2560 100 0 100"
        ></polygon></svg>
      </div>
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap">
          <div className="w-full lg:w-6/12 px-4">
            <h4 className="text-3xl font-semibold text-white">
              TRUYENNHO.COM
              </h4>
            <h5 className="text-lg mt-0 mb-2 text-white">
              HỖ TRỢ KHÁCH HÀNG
              </h5>
            <div className="mt-6">
              <button
                className="bg-white text-blue-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2 p-3"
                type="button"
              >
                <i className="flex fab fa-twitter"></i>
              </button>
            </div>
          </div>

          <div className="w-full lg:w-6/12 px-4">
            <div className="flex flex-wrap items-top mb-6">
              <div className="w-full lg:w-4/12 px-4 ml-auto">
                <span className="block uppercase text-white text-sm font-semibold mb-2">
                  LINKS HOT
                  </span>
                <ul className="list-unstyled">
                  <li>
                    <Link href="/#">
                      <a
                        className="text-white hover:text-red-500 font-semibold block pb-2 text-sm" rel="nofollow noopener noreferrer"
                        target="_blank">
                        Giới thiệu
                      </a>
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="w-full lg:w-4/12 px-4">
                <span className="block uppercase text-white text-sm font-semibold mb-2">
                  THAM KHẢO THÊM
                  </span>
                <ul className="list-unstyled">
                  <li>
                    <Link href="/#">
                      <a
                        className="text-white hover:text-red-500 font-semibold block pb-2 text-sm" rel="nofollow noopener noreferrer"
                        target="_blank">
                        Đăng ký
                      </a>
                    </Link>
                  </li>
                </ul>
              </div>

            </div>
          </div>


        </div>

        <hr className="my-6 border-gray-400" />

        <div className="flex flex-wrap items-center md:justify-between justify-center">
          <div className="w-full md:w-full  px-4 mx-auto text-center">
            <div className="text-sm text-white font-semibold py-1">
              Copyright © {new Date().getFullYear()} - 2030.{" "}
              <a
                href="tel:1800 8098"
                className="text-white hover:text-red-500"
                rel="nofollow"
              >
                Email:abc@gmail.com
                </a>
                .
              </div>
          </div>
        </div>
      </div>

    </footer >
  );
};

export default Footer;
