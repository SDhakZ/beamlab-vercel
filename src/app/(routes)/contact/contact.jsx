"use client";
import { useRef, useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { menuData, socialInfo } from "@/app/data/companyInfo";
import axios from "axios";
import HCaptcha from "@hcaptcha/react-hcaptcha";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";

export default function Contact(props) {
  const { hcaptcha_site_key } = props;
  const initialFormData = {
    name: "",
    email: "",
    organization: "",
    message: "",
  };

  const [formData, setFormData] = useState({ ...initialFormData });
  const [loading, setLoading] = useState(false);
  const [sentStatus, setSentStatus] = useState(null);
  const [token, setToken] = useState(null);
  const captchaRef = useRef(null);
  const [skeletons, setSkeletons] = useState(true);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setSkeletons(false);
    }, 7000);
  }, []);

  useEffect(() => {
    if (token) {
      console.log(`token: ${token}`);
      setVisible(false);
    }
  }, [token]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!token) {
      setVisible(true);
      return;
    }

    setVisible(false);

    const dataToSend = new FormData();
    // Append form data fields
    dataToSend.append("name", formData.name);
    dataToSend.append("email", formData.email);
    dataToSend.append("organization", formData.organization);
    dataToSend.append("message", formData.message);
    dataToSend.append("token", token);

    try {
      setLoading(true);
      const res = await axios.post(
        "http://localhost:3000/api/send",
        dataToSend,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      if (res.status === 200) {
        setSentStatus("success");
        setTimeout(() => {
          setSentStatus(null);
          setFormData({ ...initialFormData });
          captchaRef.current?.resetCaptcha();
        }, 2000);
      }
      // Handle success
    } catch (error) {
      console.log(error);
      setSentStatus("error");
      setTimeout(() => {
        setSentStatus(null);
      }, 2000);
    } finally {
      setLoading(false);
    }
  };

  const handleVerifyCaptcha = (token) => {
    setToken(token);
    setVisible(false);
  };
  return (
    <div className="relative">
      <picture>
        <source media="(max-width: 540px)" srcSet="/contact-bg-mobile.png" />
        <img
          aria-hidden="true"
          alt="contact-bg"
          className="absolute bottom-0"
          src="/contact-bg.png"
        />
      </picture>
      <div className="relative container-margin-compact">
        <section className="top-section-p">
          <h1 className="text-2xl font-semibold sm:text-3xl md:text-4xl text-black-shade-300 lg:text-5xl">
            <span className="gradient-x">Get in Touch:</span> Drop us a line for
            your inquiries
          </h1>
        </section>
        <section className="pb-20 margin-t lg:pb-36">
          <div className="flex flex-col flex-wrap justify-center w-full gap-10 lg:gap-10 sm:flex-row-reverse md:flex-nowrap">
            <form onSubmit={handleSubmit} className="w-full max-w-[550px]">
              <div className="flex flex-col w-full gap-6">
                <input
                  id="sender_name"
                  type="text"
                  placeholder="Full Name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="px-5 py-3 border-2 rounded-full border-black-shade-100 outline-2 outline-primary-orange-300"
                />

                <input
                  id="sender_email"
                  type="email"
                  placeholder="email@gmail.com"
                  name="email"
                  autoComplete="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="px-5 py-3 border-2 rounded-full border-black-shade-100 outline-2 outline-primary-orange-300"
                />

                <input
                  id="sender_org"
                  value={formData.organization}
                  type="text"
                  placeholder="org.co"
                  name="organization"
                  required
                  onChange={handleChange}
                  className="px-5 py-3 border-2 rounded-full border-black-shade-100 outline-2 outline-primary-orange-300"
                />

                <textarea
                  id="sender_message"
                  value={formData.message}
                  name="message"
                  required
                  onChange={handleChange}
                  className="px-5 py-3 transition-all duration-200 border-2 rounded-3xl border-black-shade-100 outline-2 outline-primary-orange-300 min-h-40 "
                  placeholder="Send your message here..."
                />

                <div className="flex flex-col gap-6 mt-2">
                  <div>
                    <HCaptcha
                      sitekey={hcaptcha_site_key}
                      onVerify={handleVerifyCaptcha}
                      ref={captchaRef}
                      size="normal"
                    />
                  </div>

                  <button
                    type="submit"
                    className={`flex border-gradient border-2 hover:border-primary-orange-200 hover:bg-white-shade-100 text-white-shade-200 hover:text-primary-orange-300 bg-primary-orange-300 whitespace-nowrap transition-all h-fit duration-200  w-full items-center max-w-[350px] lg:max-w-[300px] justify-center p-3 text-lg font-medium tracking-wider rounded-full  ${
                      loading
                        ? "bg-gray-400"
                        : sentStatus === "success"
                        ? "bg-green-500"
                        : sentStatus === "error"
                        ? "bg-red-500"
                        : "bg-primary-accent"
                    }`}
                  >
                    {loading ? (
                      <>
                        Sending{" "}
                        <FontAwesomeIcon
                          className="ml-2 animate-spin"
                          icon={faSpinner}
                        />
                      </>
                    ) : sentStatus === "success" ? (
                      "Sent Successfully"
                    ) : sentStatus === "error" ? (
                      "Not Sent"
                    ) : (
                      "Send Message"
                    )}
                  </button>
                </div>
              </div>
            </form>

            <div className="relative flex flex-col w-full gap-10">
              {/* Skeleton element */}
              {skeletons ? (
                <div className="absolute max-w-[700px] md:min-w-[400px] top-0 left-0 w-full h-[480px] bg-gray-300 rounded-sm animate-pulse"></div>
              ) : null}
              {/* Iframe */}

              <iframe
                title="map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.971960990812!2d85.31483457599974!3d27.687261476194163!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb199b5307c9bb%3A0xd5d31db0560d23b3!2sBeam%20Lab%20Pvt.%20Ltd.!5e0!3m2!1sen!2snp!4v1713249544480!5m2!1sen!2snp"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="relative rounded-md z-10 w-full h-[480px] max-w-[700px] md:min-w-[300px]"
              ></iframe>
              <div className="space-y-8 ">
                {menuData[3].items.map((info, index) => (
                  <a
                    title={info.title}
                    key={index}
                    href={info.link}
                    className="flex items-center space-x-4 transition-all duration-200 cursor-pointer text-white-shade-200 hover:text-primary-orange-300 link w-fit "
                  >
                    <FontAwesomeIcon
                      className="text-xl lg:text-2xl text-primary-accent"
                      icon={info.icon}
                      width={20}
                    />
                    <p
                      className={`text-lg sm:text-lg transition-all duration-200  hover:text-primary-orange-300 text-white-shade-200 tracking-wider font-semibold relative overflow-hidden lg:text-lg`}
                    >
                      {info.title}
                    </p>
                  </a>
                ))}
                <div className="flex items-center col-span-2 gap-4 sm:gap-4">
                  {socialInfo.map((socialInfo, index) => (
                    <a
                      key={index}
                      title={socialInfo.title}
                      className="flex items-center justify-center text-3xl transition-all duration-200 rounded-full shadow-md hover:bg-primary-orange-300 w-11 h-11 sm:text-2xl lg:text-2xl bg-black-shade-200 text-white-shade-200 hover:text-primary-accent"
                      href={socialInfo.link}
                    >
                      <FontAwesomeIcon icon={socialInfo.icon} />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <section className="mb-20 lg:mb-36 margin-t ">
        <div className="grid grid-cols-2 gap-6 mt-8 sm:mt-12 lg:gap-x-0 lg:gap-y-10 lg:mt-20">
          <div className="col-span-2 space-y-8 sm:col-span-1">
            {contactInfo.slice(0, 3).map((info, index) => (
              <a
                title={info.title}
                key={index}
                href={info.link}
                className="flex items-center space-x-4 cursor-pointer link w-fit "
              >
                <FontAwesomeIcon
                  className="text-xl lg:text-2xl text-primary-accent"
                  icon={info.icon}
                  width={20}
                />
                <p
                  className={`text-lg sm:text-lg text-black-shade-300 tracking-wider font-semibold relative overflow-hidden lg:text-xl`}
                >
                  {info.title}
                  <span className="underline"></span>
                </p>
              </a>
            ))}
          </div>

          <div className="col-span-2 space-y-8 sm:col-span-1">
            {contactInfo.slice(3, 5).map((info, index) => (
              <a
                title={info.title}
                key={index}
                href={info.link}
                className="flex items-center space-x-4 cursor-pointer link w-fit "
              >
                <FontAwesomeIcon
                  className="text-xl lg:text-2xl text-primary-accent"
                  icon={info.icon}
                  width={20}
                />
                <p
                  className={`text-lg sm:text-lg text-black-shade-300 tracking-wider font-semibold relative overflow-hidden lg:text-xl`}
                >
                  {info.title}
                  <span className="underline"></span>
                </p>
              </a>
            ))}
            <div className="flex items-center col-span-2 gap-8 sm:gap-8 sm:col-span-1">
              {socialInfo.map((socialInfo, index) => (
                <a
                  key={index}
                  title={socialInfo.title}
                  className="text-3xl transition-all duration-300 sm:text-3xl lg:text-[2rem] text-black-shade-200 hover:text-primary-accent"
                  href={socialInfo.link}
                >
                  <FontAwesomeIcon icon={socialInfo.icon} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </section> */}
      </div>
    </div>
  );
}
