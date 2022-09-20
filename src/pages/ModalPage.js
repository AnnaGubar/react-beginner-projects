import { useState } from "react";
import "../styles/modal.scss";

const Modal = ({open,setOpen, children})=>(
  
  <div className={`overlay animated ${open ? "show" : ""}`}>
  <div className="modal">
    <svg onClick={()=> setOpen(false)} height="200" viewBox="0 0 200 200" width="200">
      <title />
      <path d="M114,100l49-49a9.9,9.9,0,0,0-14-14L100,86,51,37A9.9,9.9,0,0,0,37,51l49,49L37,149a9.9,9.9,0,0,0,14,14l49-49,49,49a9.9,9.9,0,0,0,14-14Z" />
    </svg>
    {children}
  </div>
</div>
)

//* если открытие/закрытие модалки не анимированны - условный рендер
//  <div className="overlay"

// export function ModalPage() {
//   const [open, setOpen] = useState(false);

//   return (
//     <div className="ModalPage">
//       <button onClick={()=>setOpen(prev=>!prev)} className="open-modal-btn">✨ Открыть окно</button>
//       {open && <Modal open={open} setOpen={setOpen}>Empty modal</Modal>}
//     </div>
//   );
// }

//* если открытие/закрытие модалки анимированны - добавление класса по условию
//  <div className={`overlay animated ${open ? "show" : ""}`}>

export function ModalPage() {
  const [open, setOpen] = useState(false);

  return (
    <div className="ModalPage">
      <button onClick={()=>setOpen(true)} className="open-modal-btn">✨ Открыть окно</button>
      <Modal open={open} setOpen={setOpen}>
        <img src="https://media2.giphy.com/media/xT0xeJpnrWC4XWblEk/giphy.gif" alt=""/>
        <h3>Modal is open</h3>
      </Modal>
    </div>
  );
}
