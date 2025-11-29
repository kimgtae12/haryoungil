import React, { ReactElement } from "react";
import ReactDom from "react-dom";
import Modal from "react-modal";

interface ModalPortalPropsType {
  children: ReactElement;
}

//modal root 설정
Modal.setAppElement("#aside-root");

const ModalPortal: React.FC<ModalPortalPropsType> = ({ children }) => {
  const el: HTMLElement | null = document.getElementById("aside-root");

  if (!el) return null; // 'el'이 null일 경우 null 반환

  return ReactDom.createPortal(children, el);
};

export default ModalPortal;
