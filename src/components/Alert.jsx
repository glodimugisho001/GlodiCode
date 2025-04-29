import { useAlertContext } from "../context/alertContext";
import { useRef, useEffect } from "react";

/**
 * This is a global component that uses context to display a global alert message.
 */
function Alert() {
  const { isOpen, type, message, onClose } = useAlertContext();
  const cancelRef = useRef();
  const isSuccess = type === "success";

  // Pour gérer la fermeture avec la touche Escape
  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape" && isOpen) {
        onClose();
      }
    };
    
    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Overlay */}
      <div 
        className="fixed inset-0 bg-black bg-opacity-30 transition-opacity"
        onClick={onClose}
      />
      
      {/* Contenu de l'alerte */}
      <div 
        className={`relative w-full max-w-md p-4 rounded shadow-lg transform transition-all ${
          isSuccess ? 'bg-green-300' : 'bg-orange-300'
        }`}
        ref={cancelRef}
      >
        <div className="text-lg font-bold mb-2">
          {isSuccess ? 'All good!' : 'Oops!'}
        </div>
        <div className="text-base">
          {message}
        </div>
      </div>
    </div>
  );
}

export default Alert;
  