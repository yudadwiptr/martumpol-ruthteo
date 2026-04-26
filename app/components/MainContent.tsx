"use client";

import { useState, useEffect, useRef } from "react";
import { IoIosArrowUp } from "react-icons/io";
import Link from "next/link";
import { useInView } from "react-intersection-observer";
import CountdownTimer from "./Countdown";
import Gallery from "./Gallery";
import { config } from "@/lib/config";

type WeddingScreenProps = {
  name?: string;
};

const WeddingScreen = ({ name }: WeddingScreenProps) => {
  const [fadeClass, setFadeClass] = useState("opacity-0");
  const [isOpen, setIsOpen] = useState(false);
  const audioRef = useRef(null);

  // Ambil parameter "to" dari URL jika ada
  let to: string | null = null;
  if (typeof window !== "undefined") {
    const params = new URLSearchParams(window.location.search);
    to = params.get("to");
  }

  // Untuk fade-in pertama kali
  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeClass("opacity-100");
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  const handleOpen = () => {
    setIsOpen(!isOpen);
    if (!isOpen && audioRef.current) {
      // Play music when "Open" is clicked
      (audioRef.current as HTMLAudioElement).play();
    }
  };

  const { ref: mainRef, inView: isMainInView } = useInView({
    threshold: 0.5,
  });

  const { ref: main2Ref, inView: isMain2InView } = useInView({
    threshold: 0.5,
  });

  const { ref: slide1Ref, inView: isSlide1InView } = useInView({
    threshold: 0.5,
  });

  const { ref: slide5Ref, inView: isSlide5InView } = useInView({
    threshold: 0.5,
  });
  const { ref: slide6Ref, inView: isSlide6InView } = useInView({
    threshold: 0.5,
  });
  const { ref: slide7Ref, inView: isSlide7InView } = useInView({
    threshold: 0.5,
  });
  const { ref: slide8Ref, inView: isSlide8InView } = useInView({
    threshold: 0.5,
  });
  const { ref: slide9Ref, inView: isSlide9InView } = useInView({
    threshold: 0.5,
  });
  const { ref: slide10Ref, inView: isSlide10InView } = useInView({
    threshold: 0.5,
  });
  const { ref: endRef, inView: isEndInView } = useInView({
    threshold: 0.5,
  });

  useEffect(() => {
    const video = document.querySelector("iframe");
    if (video) {
      if (isSlide8InView) {
        video.src += "&autoplay=1"; // Mulai video
      } else {
        video.src = video.src.replace("&autoplay=1", ""); // Hentikan video
      }
    }
  }, [isSlide8InView]);

  return (
    <div
      className={`h-screen w-screen flex flex-col md:flex-row ${fadeClass} transition-opacity duration-1000`}
      style={{ backgroundColor: '#fff' }}
    >
      {/* Gambar sisi kiri Wide Untuk Komputer */}
      <div
        className="md:flex justify-center hidden items-end pb-12 w-2/3 h-1/2 md:h-full"
        style={{
          backgroundImage: `url(/foto_1_samping.jpg)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundColor: '#fff',
          backgroundAttachment: 'scroll', // prevent black bg on mobile scroll
        }}
      >
        <div
          className={`bottom-10 left-20 font-ovo text-lg text-black tracking-[5px] uppercase`}
        >
          {config.coupleNames}
        </div>
      </div>

      {/* Konten teks sisi kanan bisa scroll untuk pc */}
      <div className=" md:w-1/3 h-full overflow-y-scroll snap-y snap-mandatory scroll-smooth">
        <div
          id="backgroundWedding"
          className=" snap-start  w-full h-screen flex items-center justify-center "
        >
          <div className="text-center p-5 flex flex-col h-full justify-between py-20">
            <div className="gap-y-2 md:gap-y-4 flex flex-col">
              <h5
                className={`text-sm font-legan text-black text-bold uppercase tracking-wide fadeMain2 ${isMain2InView ? "active" : ""
                  } `}
                ref={main2Ref}
              >
                The Martumpol Of
              </h5>
              <h1
                className={`text-2xl md:text-3xl font-ovo t text-black uppercase fadeMain ${isMainInView ? "active" : ""
                  } `}
                ref={mainRef}
              >
                {config.coupleNames}
              </h1>
              <h5
                className={`text-sm  font-legan text-black uppercase tracking-wide  fadeMain2 ${isMain2InView ? "active" : ""
                  } `}
                ref={main2Ref}
              >
                {new Date(config.eventDate).toLocaleDateString("en-US", {
                  weekday: "long",
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </h5>
            </div>
            <div>
              <p className="mt-20 text-lg uppercase font-xs tracking-widest text-white stroke-black">
                {/* Removed duplicate name display at the top */}
              </p>
              {!isOpen ? (
                <button
                  className="animate-bounce  mt-5 px-5 py-1 uppercase text-xs border border-black hover:text-white stroke-black hover:bg-transparent rounded-full bg-white text-black transition"
                  onClick={handleOpen}
                >
                  Open Invitation
                </button>
              ) : (
                <IoIosArrowUp
                  stroke="4"
                  className="mx-auto mt-20 animate-upDown text-black"
                />
              )}
              {/* Personalized Invitation Block moved to bottom */}
              <div className="flex flex-col items-center justify-center mt-12">
                <p className="text-xl font-legan uppercase tracking-widest mb-2 text-white stroke-black drop-shadow-lg" style={{textShadow: '2px 2px 8px #000, 0 0 2px #000'}}>Dear,</p>
                {to && (
                  <h2 className="text-2xl font-ovo uppercase tracking-wider text-white stroke-black drop-shadow-lg" style={{textShadow: '2px 2px 8px #000, 0 0 2px #000'}}>
                    {decodeURIComponent(to)}
                  </h2>
                )}
                <p className="text-[12px] mt-4 text-white stroke-black drop-shadow-lg" style={{textShadow: '2px 2px 8px #000, 0 0 2px #000'}}>You are invited to our celebration</p>
              </div>
            </div>
          </div>
        </div>
        {isOpen && (
          <>
            {/* Slide 1 */}
            <div
              className={`text-black h-screen flex pt-12 p-5 px-12 snap-start `}
              style={{
                backgroundImage: `url(/slide_1.jpg)`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div
                ref={slide1Ref}
                className={` ${isSlide1InView ? "active" : ""}  fadeInMove`}
              >
                <h1 className="text-xl md:text-2xl font-ovo tracking-wide text-black uppercase">
                  {config.bibleVerse}
                </h1>
                <p className="text-sm mt-1 text-black font-legan">
                  {config.bibleVerseContent}
                </p>
                <p className="absolute bottom-2 left-0 right-0 text-center text-6xl font-wonder text-white stroke-black">{config.coupleNames}</p>
              </div>
            </div>
            {/* Slide 2 */}
            <div
              className={`text-black h-screen flex flex-col snap-start `}
              style={{
                backgroundImage: `url(/slide_2.jpg)`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="w-full flex flex-col items-start pt-8 px-6">
                <p className="font-legan text-xs uppercase tracking-[0.2em] text-black-500 mb-4">The Groom</p>
                <h1 className="text-3xl md:text-5xl text-black font-ovo mb-6 tracking-wide leading-tight text-left font-medium">
    Teofilus<br />
    Sabamtua<br />
    Tambunan, S.E.
  </h1>
                <div className="space-y-1 text-left">
    <p className="font-legan text-sm italic text-gray-600">Putra Dari :</p>
    <h4 className="font-legan text-base text-gray-800 leading-relaxed">
      Bapak Marudut Tambunan & <br className="md:hidden" /> Ibu Lusiana Hutapea
    </h4>
  </div>
                {/* Groom bio and Instagram removed */}
              </div>
              <div className="flex-1" />
            </div>
            {/* Slide 3 */}
            <div
              className="snap-start text-black h-screen flex flex-col "
              style={{
                backgroundImage: `url(/slide_3.jpg)`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="w-full flex flex-col items-start pt-8 px-6"> 
  {/* items-start membuat semua konten rata kiri */}

  <p className="font-legan text-xs uppercase tracking-[0.2em] text-black-500 mb-4">
    The Bride
  </p>

  {/* Nama Mempelai Wanita dibuat pecah baris agar estetik */}
  <h1 className="text-3xl md:text-5xl text-black font-ovo mb-6 tracking-wide leading-tight text-left font-medium">
    Ruth<br />
    Venisa Bella<br />
    Marpaung, S.H.
  </h1>

  <div className="space-y-1 text-left">
    <p className="font-legan text-sm italic text-gray-600">Putri Dari :</p>
    <h4 className="font-legan text-base text-gray-800 leading-relaxed">
      Bapak Drs. Saut Tumpal Maludin Marpaung & <br /> 
      Ibu Nova Pasaribu, S.T., M.Tr.T
    </h4>
  </div>
                {/* Bride bio and Instagram removed */}
              </div>
              <div className="flex-1" />
            </div>

            {/* Slide 5 */}
            <div
              className="snap-start  text-black h-screen flex flex-col items-center px-12 "
              style={{
                backgroundImage: `url(/slide_5.jpg)`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div
                ref={slide5Ref}
                className={` ${isSlide5InView ? "active" : ""
                  }  fadeInMove flex items-center flex-col items-center justify-start h-full pt-12`}
              >
                <h3 className="uppercase font-legan text-xs tracking-[0.2em] mt-5 mb-4 text-black-500">
    our martumpol location
  </h3>
                {/* Nama Gereja */}
  <h1 className="text-2xl md:text-3xl px-4 text-center text-black font-ovo uppercase leading-snug">
    Gereja GKPI Palembang
  </h1>
  {/* Alamat Detail */}
  <p className="text-sm font-legan text-center text-gray-600 mt-2 px-8 leading-relaxed">
    Jl Residen Abdul Rozak, Palembang
  </p>
  {/* Button Google Maps */}
  <a
    href="https://www.google.com/maps/dir/?api=1&destination=Gereja+GKPI+Palembang" // Ganti dengan link share dari Google Maps jika berbeda
    target="_blank"
    rel="noopener noreferrer"
    className="mt-6 px-5 py-2 bg-black text-white rounded-full font-legan text-xs uppercase tracking-widest hover:bg-gray-800 transition-all duration-300 shadow-lg active:scale-95"
  >
    View on Google Maps
  </a>
                {config.holyMatrimony.enabled && (
                  <div className="mt-5 mx-auto flex flex-col items-center">
                    <h3 className="uppercase font-ovo text-sm text-center mt-5 mb-2">
                      Holy Matrimony <br /> {config.holyMatrimony.time}
                    </h3>
                    <p className="text-sm text-center  font-legan text-black">
                      {config.holyMatrimony.place} <br /> {config.holyMatrimony.place_details}
                    </p>
                    <Link
                      href={config.holyMatrimony.googleMapsLink}
                      target="_blank"
                      className="cursor-pointer hover:text-black/20 text-sm rounded-full flex items-center gap-x-2 text-center font-legan mt-5 bg-[#808080] w-fit px-4 py-2 text-black"
                    >
                      Google Maps
                    </Link>
                  </div>
                )}

                {config.weddingReception.enabled && (
                  <div className="mt-5 mx-auto flex  flex-col items-center">
                    <h3 className="uppercase font-ovo text-sm text-center mt-5 mb-2">
                      Wedding Reception <br /> {config.weddingReception.time}
                    </h3>
                    <p className="text-sm text-center  font-legan text-black">
                      {config.weddingReception.place} <br /> {config.weddingReception.place_details}
                    </p>
                    <Link
                      href={config.weddingReception.googleMapsLink}
                      target="_blank"
                      className="cursor-pointer hover:text-black/20 text-sm rounded-full flex items-center gap-x-2 text-center font-legan mt-5 bg-[#808080] w-fit px-4 py-2 text-black"
                    >
                      Google Maps
                    </Link>
                  </div>
                )}
              </div>
            </div>
            {/* Slide 6 */}
            <div
              className="snap-start  text-black h-screen flex flex-col items-center justify-end pb-16 px-12 "
              style={{
                backgroundImage: `url(/slide_6.jpg)`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div
                ref={slide6Ref}
                className={` ${isSlide6InView ? "active" : ""
                  }  fadeInMove flex flex-col items-center justify-start pt-12 h-full`}
              >
                <h1 className="text-2xl text-center text-black  font-ovo">
                  ALMOST TIME FOR <br /> 
    <span className="block mt-1">OUR CELEBRATION</span>
                </h1>
                {/* Countdown Timer */}
                <CountdownTimer />
              </div>
            </div>

            {/* SLIDE 8 */}
            {config.prewedding.enabled && (
              <div
                className="snap-start text-black h-screen flex flex-col justify-center pt-16 pb-16 px-8 "
                style={{
                  backgroundImage: `url(/slide_8.jpg)`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <div
                  ref={slide8Ref}
                  className={`${isSlide8InView ? "active" : ""} fadeInMove `}
                >
                  <h1 className="text-3xl text-black  font-ovo text-center uppercase">
                    Unveiling Our Prewedding Story
                  </h1>
                  <div
                    className="mt-10 mx-auto w-full max-w-2xl relative"
                    style={{ paddingBottom: "56.25%", height: 0 }}
                  >
                    <iframe
                      className="absolute top-0 left-0 w-full h-full"
                      src={`https://www.youtube.com/embed/${config.prewedding.link}?autoplay=1&mute=1&loop=1`}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      referrerPolicy="strict-origin-when-cross-origin"
                      allowFullScreen
                    ></iframe>
                  </div>

                  <div className="-mt-12 w-72 transform skew-x-6 drop-shadow">
                    <p className="text-3xl font-thesignature text-black/80 ">
                      {config.prewedding.detail}
                    </p>
                  </div>
                </div>
              </div>)}





            {/* SLIDE GALLERY */}
            <div
              className="snap-start text-black h-screen flex flex-col justify-center items-center px-4 md:px-12 bg-white/80"
              style={{
                backgroundImage: `url(/foto_1.jpg)`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <Gallery />
            </div>

            {/* SLIDE AKHIR */}
            <div
              className="snap-start text-black h-screen flex flex-col justify-start pt-20 px-12" // Ganti justify-end jadi justify-start "
              style={{
                backgroundImage: `url(/foto_1_samping.jpg)`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div
                ref={endRef}
                className={` ${isEndInView ? "active" : ""} fadeInMove `}
              >
                <h1 className="text-3xl text-black  font-ovo text-center uppercase">
                  {config.thankyou}
                </h1>

                <div className="mt-5 mx-auto flex flex-col ">
                  <p className="text-sm font-legan text-black text-center">
                    {config.thankyouDetail}
                  </p>
                  <p className="text-sm rounded-full text-center font-ovo mt-5 px-6 py-2 text-black uppercase">
                    {config.coupleNames}
                  </p>
                </div>
              </div>

              {/* Footer (Tetap di Bawah) */}
  <footer className="text-white mt-auto pb-10 flex flex-col items-center opacity-90">
  <a 
    href="https://www.instagram.com/yudadwiptr" 
    target="_blank" 
    rel="noopener noreferrer"
    className="flex flex-col items-center animate-pulse hover:animate-none hover:scale-110 group transition-all duration-300 ease-in-out cursor-pointer"
  >
    {/* Cukup nama studio lo aja, kasih tracking biar elegan */}
    <p className="text-[0.6rem] uppercase text-center tracking-[0.3em] text-white group-hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]">
      Created By Yuma Studio
    </p>
    
    {/* Garis dekoratif kecil di bawah biar makin manis (opsional) */}
    <div className="h-[1px] w-0 group-hover:w-full bg-white/50 transition-all duration-500 mt-1"></div>
  </a>
</footer>
</div>
          </>
        )}
      </div>
      {/* Audio Element */}
      <audio ref={audioRef} src="/music/wedding_song.mp3" preload="auto" loop />
    </div>
  );
};

export default WeddingScreen;
