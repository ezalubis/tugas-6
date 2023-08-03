import { useRef, useState, useEffect } from 'react';
import {BiSolidToTop} from "react-icons/bi"
export default function ScrollButton () {
  const [showButton, setShowButton] = useState(false);
  const buttonRef = useRef(null);
  const scrollPositionRef = useRef(0);

  function handleScroll() {
    const currentPosition = window.scrollY;
    scrollPositionRef.current = currentPosition;

    if ( currentPosition > 100) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  }

  function handleScrollToTop (){
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <button
        ref={buttonRef}
        onClick={handleScrollToTop}
        style={{ display: showButton ? 'block' : 'none' }}
        className="fixed right-4 bottom-4 bg-blue-500 text-white py-2 px-4 rounded-lg transition-opacity"
      >
        <BiSolidToTop size={20}/>
      </button>
    </>
  );
}

