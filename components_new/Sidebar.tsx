// import { LiaCommentSolid } from "react-icons/lia";
// import { BiDonateHeart, BiDumbbell } from "react-icons/bi";
// import { FaUtensils } from "react-icons/fa";
// import "./Sidebar.css";
// import React from "react";

// type SidemenuProps = {
//   isOpen?: boolean;
// };

// export const Sidebar = ({ isOpen = true }: SidemenuProps) => {
//   return (
//     <div className={`sidebar ${isOpen ? 'open' : ''}`}>
//       <div className="sidebar-content">
//         <a className="menu-item" href="/feed/feed_index">
//           <LiaCommentSolid />
//           Feed
//         </a>
//         <a className="menu-item" href="/gym/gym_index">
//           <BiDumbbell />
//           Gym
//         </a>
//         <a className="menu-item" href="/food_delivery/food_delivery_index">
//           <FaUtensils />
//           Food delivery
//         </a>
//         <a className="menu-item" href="/charity/charity_index">
//           <BiDonateHeart />
//           Charity donations
//         </a>
//       </div>
//     </div>
//   );
// };

import { useState } from 'react';
import { LiaCommentSolid } from "react-icons/lia";
import { BiDonateHeart, BiDumbbell, BiMenu } from "react-icons/bi";
import { FaUtensils } from "react-icons/fa";
import "./Sidebar.css";

export const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className={`sidebar ${isOpen ? 'open' : ''}`}>
        <div className="sidebar-content">
          <a className="menu-item" href="/feed/feed_index">
            <LiaCommentSolid />
            Feed
          </a>
          <a className="menu-item" href="/gym/gym_index">
            <BiDumbbell />
            Gym
          </a>
          <a className="menu-item" href="/food_delivery/food_delivery_index">
            <FaUtensils />
            Food delivery
          </a>
          <a className="menu-item" href="/charity/charity_index">
            <BiDonateHeart />
            Charity donations
          </a>
        </div>
      </div>
      
      <button 
        className={`toggle-btn ${isOpen ? 'open' : ''}`} 
        onClick={() => setIsOpen(!isOpen)}
      >
        <BiMenu />
      </button>
    </>
  );
};