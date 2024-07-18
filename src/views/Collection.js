import React from "react";
import { NavLink } from "react-router-dom";
import { Icon } from "components/Icons";

export default function Collection() {
  const items = [
    {
      id: 1,
      title: "Best of Pritam",
      artist: "Pritam",
      image:
        "https://i.scdn.co/image/ab67616d00001e0243cddcba56b445a39bcd36bc",
    },

    {
      id: 2,
      title: "Best of A.R Rehman",
      artist: "A.R Rehman",
      image: "https://i.scdn.co/image/ab67706c0000da841110140e0aa45059b1e2cbb3",
    },

    {
      id: 3,
      title: "Bollywood Central",
      artist: "Vishal-Shekha, Arijit Singh and more",
      image: "https://i.scdn.co/image/ab67706f00000002efcd35fd64a73060bb6605e4",
    },
  ];
  return (
    <div>
      <h3 className="text-2xl text-white font-bold tracking-tight mb-4">
        Playlists
      </h3>

      <div className="grid grid-cols-2 gap-x-4">
        <div className="h-[296px] bg-gradient-to-r from-gra3 to-gra4 rounded p-6 group relative">
          <div className="mt-20">
            <span className="text-sm font-semibold">Pritam</span>{" "}
            <span className="opacity-70"> • O Maahi </span>
            <span className="text-sm font-semibold">Arijit Singh</span>{" "}
            <span className="opacity-70"> • Tum Hi Ho </span>
            <span className="text-sm font-semibold">Darshan Raval</span>{" "}
            <span className="opacity-70"> • Hawa Banke </span>
            <span className="text-sm font-semibold">A.R Rehman</span>{" "}
            <span className="opacity-70"> • Roja </span>
            <span className="text-sm font-semibold">Kishore Kumar</span>{" "}
            <span className="opacity-70"> • Mere Mehboob </span>
          </div>
          <div>
            <h3 className="text-3xl font-bold mt-6">Liked Songs
            </h3>
            <p>204 Liked Songs</p>
          </div>
          <button className="w-12 h-12 bg-primary absolute right-4 bottom-4 transition-opacity rounded-full flex items-center shadow-2xl justify-center opacity-0 group-hover:opacity-100 group-active:opacity-100">
            <Icon name="play" />
          </button>
        </div>

        <div className="grid">
          <div className="flex gap-x-4">
            {items.map((item) => (
              <NavLink
                key={item.id}
                to="/"
                className={
                  "bg-footer rounded p-4 transition-all hover:bg-menubg group"
                }
              >
                <div className="relative ">
                  <img
                    className="w-auto h-auto inset-0 object-cover mb-4"
                    src={item.image}
                  />
                  <button className="w-12 h-12 bg-primary absolute right-2 bottom-2 transition-opacity rounded-full flex items-center shadow-2xl justify-center opacity-0 group-hover:opacity-100 group-active:opacity-100">
                    <Icon name="play" />
                  </button>
                </div>
                <span className="font-semibold text-white text-[16px] whitespace-nowrap">
                  {item.title}
                </span>{" "}
                <br />
                <span className="mt-1 text-[14px] text-link">
                  {item.artist}
                </span>
              </NavLink>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
