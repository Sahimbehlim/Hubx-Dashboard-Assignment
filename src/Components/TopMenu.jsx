import React, { useState } from "react";
import { Dialog, DialogPanel, PopoverGroup } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { FaPlus } from "react-icons/fa";
import { BiPowerOff } from "react-icons/bi";
import { MdQuestionMark } from "react-icons/md";
import { RiUserSharedLine } from "react-icons/ri";
import { useModal } from "../modalContext";

const Navigation = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const menuItems = [
    {
      text: "Create course",
      icon: <FaPlus fontSize={"13px"} />,
    },
    {
      text: "Preview home page",
      icon: <MdOutlineRemoveRedEye />,
    },
    {
      text: "Preview after login page",
      icon: <MdOutlineRemoveRedEye />,
    },
    {
      text: "View welcome screen",
      icon: <BiPowerOff />,
    },
  ];

  const { toggleModal } = useModal();

  return (
    <header className="px-6 border-b-[1px] bg-white">
      {/* Desktop Screen Menu */}
      <nav className="mx-auto flex lg:gap-5 items-center py-2">
        <div className="flex flex-1 lg:flex-initial">
          <a href="#" className="-m-1.5 p-1.5">
            <h1 className="text-lg font-semibold">Dashboard</h1>
          </a>
        </div>
        <div className="flex lg:hidden order-1">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <PopoverGroup className="hidden lg:flex items-center gap-x-3">
          {menuItems.map((item) => (
            <div key={item.text} className="flex items-center gap-1">
              <button className="bg-[#ebebeb] h-8 w-8 rounded-[100%] flex items-center justify-center">
                {item.icon}
              </button>
              <p className="text-sm text-gray-500">{item.text}</p>
            </div>
          ))}
        </PopoverGroup>
        <div className="ms-auto flex items-center gap-4 me-4 lg:me-0">
          {[
            { text: "Invite", icon: <RiUserSharedLine /> },
            { text: "Help", icon: <MdQuestionMark className="text-lg" /> },
          ].map((item, index) => (
            <div key={index} className="flex items-center gap-1">
              <span className="bg-[#55ccc1] text-white w-8 h-8 flex items-center justify-center rounded-full">
                {item.icon}
              </span>
              <button
                onClick={index === 0 && toggleModal}
                className="text-gray-700 text-sm"
              >
                {item.text}
              </button>
            </div>
          ))}
        </div>
      </nav>

      {/* Tablet & Mobile Screen Menu */}
      <Dialog
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-10" />
        <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-2 sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <h1 className="text-lg font-semibold">Dashboard</h1>
            </a>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-4 pt-4 flex flex-col">
                {menuItems.map((item) => (
                  <div key={item.text} className="flex items-center gap-1">
                    <button className="bg-[#ebebeb] h-8 w-8 rounded-[100%] flex items-center justify-center">
                      {item.icon}
                    </button>
                    <p className="text-sm text-gray-700">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
};

export default Navigation;
