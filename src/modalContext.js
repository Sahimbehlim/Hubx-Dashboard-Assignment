import { createContext, useContext } from "react";

export const modalContext = createContext({
  viewModal: null,
  setViewModal: () => {},
  toggleModal: () => {},
});

export const ModalProvider = modalContext.Provider;

export const useModal = () => {
  return useContext(modalContext);
};
