// import React, { useState } from 'react';
// import { Menu, X } from 'lucide-react';

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const menuItems = ['HOME', 'ABOUT', 'SKILLS', 'CONTACT'];

//   return (
//     <nav className="fixed w-full bg-black/90 text-sky-400 p-4 z-50">
//       <div className="container mx-auto flex justify-between items-center">
//         <div className="text-2xl font-bold">VB</div>
        
//         {/* Desktop Menu */}
//         <div className="hidden md:flex space-x-8">
//           {menuItems.map((item) => (
            
//             <a
//               key={item}
//               href={`#${item.toLowerCase()}`}
//               className="hover:text-sky-300 transition-colors duration-300"
//             >
//               {item}
//             </a>
//           ))}
//         </div>

//         {/* Mobile Menu Button */}
//         <button
//           className="md:hidden text-sky-400"
//           onClick={() => setIsOpen(!isOpen)}
//         >
//           {isOpen ? <X size={24} /> : <Menu size={24} />}
//         </button>
//       </div>

//       {/* Mobile Menu */}
//       {isOpen && (
//         <div className="md:hidden absolute top-16 left-0 right-0 bg-black/90 p-4">
//           {menuItems.map((item) => (
//             <a
//               key={item}
//               href={`#${item.toLowerCase()}`}
//               className="block py-2 text-center hover:text-sky-300 transition-colors duration-300"
//               onClick={() => setIsOpen(false)}
//             >
//               {item}
//             </a>
//           ))}
//         </div>
//       )}
//     </nav>
//   );
// };

// export default Navbar;


import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = ['HOME', 'ABOUT', 'SKILLS', 'CONTACT'];

  return (
    <nav className="fixed w-full bg-black/90 text-sky-400 p-4 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold">VB</div>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8">
          {menuItems.map((item) => (
            <button
              key={item}
              className="btn"
              onClick={() => window.location.href = `#${item.toLowerCase()}`}
            >
              {item}
            </button>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="btn md:hidden flex items-center justify-center"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 bg-black/90 p-4 flex flex-col items-center gap-4">
          {menuItems.map((item) => (
            <button
              key={item}
              className="btn"
              onClick={() => {
                window.location.href = `#${item.toLowerCase()}`;
                setIsOpen(false);
              }}
            >
              {item}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;