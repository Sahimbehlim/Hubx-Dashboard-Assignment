import React, { useEffect, useState } from "react";
import {
  TopMenu,
  MainSection,
  BottomSection,
  FormModal,
} from "./Components/index";
import { ModalProvider } from "./modalContext";

const App = () => {
  const [viewModal, setViewModal] = useState(false);
  const toggleModal = () => {
    setViewModal(!viewModal);
  };

  useEffect(() => {
    viewModal
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "auto");
  }, [viewModal]);
  return (
    <ModalProvider value={{ toggleModal, viewModal, setViewModal }}>
      <section className="w-full min-h-screen flex flex-col bg-[#f5f5f5] pb-4">
        <TopMenu />
        <MainSection />
        <BottomSection />
        {viewModal && <FormModal />}
      </section>
    </ModalProvider>
  );
};

export default App;
