import React, { useState } from "react";

const ContactBtn = () => {

    const [isOpen, setIsOpen] = useState()


    const handleIsOpen = () =>{
        setIsOpen(!isOpen)
    }


    function openWhatsApp() {
        // Replace the phone number and message with your desired values
        var phoneNumber = "+972522113937"; // Enter the phone number with the country code
        var message = ".שלום, יש לי שאלה";
    
        var url =
          "https://wa.me/" + phoneNumber + "?text=" + encodeURIComponent(message);
    
        window.open(url);
      }
    
  return <div>
    
    {/* <div>
         <img src={phoneBtn}  className=" md:hidden fixed bottom-[36px] left-1 z-30  w-[70px]" alt="" />
          <a href="tel:+972522113937"className=" md:hidden fixed bottom-10 left-10 z-30 h-20 w-20 "></a> 
      </div> */}

{isOpen && <div className="fixed bottom-[36px] right-3 z-30  w-[70px] animate-fade-in delay-500">
    <div>
    <svg xmlns="http://www.w3.org/2000/svg" className="mt-3 z-0 cursor-pointer"  width="64" height="64" fill="none"><circle cx="32" cy="32" r="32" fill="#555FD9"/><circle cx="32" cy="32" r="22" fill="#fff"/><path d="M44.367 46c-3.345 0-6.605-.746-9.78-2.237a29.693 29.693 0 0 1-14.35-14.35C18.747 26.237 18 22.977 18 19.633c0-.466.156-.855.467-1.166.31-.311.7-.467 1.166-.467h6.3c.363 0 .687.117.973.35.285.233.453.531.505.894l1.011 5.445c.052.363.045.694-.02.992a1.593 1.593 0 0 1-.446.797l-3.734 3.81c1.09 1.868 2.45 3.618 4.084 5.25a28.455 28.455 0 0 0 5.405 4.24l3.656-3.656c.233-.233.538-.408.914-.524a2.528 2.528 0 0 1 1.108-.098l5.367 1.089c.362.078.66.253.894.526.233.272.35.59.35.952v6.3c0 .466-.156.855-.467 1.166-.31.311-.7.467-1.166.467z" fill="#FF7848"/>
          </svg>
          <a href="tel:+972522113937"className="rounded-full w-[70px] h-[70px] fixed bottom-[180px]   z-30 h-20 w-20 "></a> 
  
    </div>
     
      <svg role="button" onClick={openWhatsApp} xmlns="http://www.w3.org/2000/svg"  className="mt-3 cursor-pointer"  width="64" height="64" fill="none"><circle cx="32" cy="32" r="32" fill="#555FD9"/><path d="M10.937 31.906a21.106 21.106 0 0 0 2.824 10.57L10.76 53.432l11.212-2.94a21.14 21.14 0 0 0 10.106 2.573h.01c11.655 0 21.143-9.484 21.148-21.142a21.011 21.011 0 0 0-6.189-14.958c-3.993-3.996-9.303-6.198-14.96-6.2-11.658 0-21.145 9.484-21.15 21.141" fill="url(#a)"/><path d="M10.184 31.9a21.863 21.863 0 0 0 2.924 10.949L10 54.197l11.614-3.045a21.897 21.897 0 0 0 10.469 2.666h.01c12.073 0 21.902-9.826 21.907-21.9a21.768 21.768 0 0 0-6.41-15.495c-4.138-4.14-9.638-6.42-15.498-6.423-12.076 0-21.903 9.824-21.908 21.9zM17.1 42.277l-.434-.689a18.156 18.156 0 0 1-2.783-9.687c.004-10.037 8.172-18.202 18.216-18.202a18.09 18.09 0 0 1 12.873 5.338 18.093 18.093 0 0 1 5.33 12.879c-.005 10.036-8.174 18.203-18.21 18.203h-.007a18.188 18.188 0 0 1-9.268-2.538l-.665-.394-6.892 1.807 1.84-6.717z" fill="url(#b)"/><path d="M26.615 22.744c-.41-.911-.841-.93-1.231-.946-.32-.013-.685-.012-1.05-.012s-.958.137-1.46.684c-.501.548-1.915 1.873-1.915 4.566 0 2.693 1.961 5.296 2.235 5.661.274.365 3.787 6.069 9.35 8.263 4.625 1.823 5.566 1.46 6.57 1.369 1.003-.091 3.238-1.324 3.694-2.602.457-1.278.457-2.374.32-2.602-.137-.229-.502-.366-1.05-.64-.547-.273-3.238-1.597-3.74-1.78-.502-.182-.867-.274-1.232.275-.365.547-1.413 1.78-1.733 2.145-.319.365-.638.41-1.186.137-.547-.275-2.31-.852-4.402-2.717-1.627-1.45-2.726-3.242-3.045-3.79-.32-.548-.034-.844.24-1.117.246-.245.548-.64.822-.959.273-.32.364-.547.546-.913.183-.365.091-.685-.045-.958-.137-.274-1.201-2.982-1.688-4.064z" fill="#fff"/><defs><linearGradient id="a" x1="2134.56" y1="4277.48" x2="2134.56" y2="10.765" gradientUnits="userSpaceOnUse"><stop stop-color="#1FAF38"/><stop offset="1" stop-color="#60D669"/></linearGradient><linearGradient id="b" x1="2210" y1="4429.71" x2="2210" y2="10" gradientUnits="userSpaceOnUse"><stop stop-color="#F9F9F9"/><stop offset="1" stop-color="#fff"/></linearGradient></defs></svg>  
      <svg role="button"  onClick={handleIsOpen}  xmlns="http://www.w3.org/2000/svg" className="mt-3 cursor-pointer" width="64" height="64" fill="none"><circle cx="32" cy="32" r="32" fill="#555FD9"/><path d="M45.38 18.641a2.113 2.113 0 0 0-2.995 0L32 29.006 21.615 18.62a2.117 2.117 0 1 0-2.995 2.995L29.006 32 18.62 42.385a2.117 2.117 0 1 0 2.995 2.995L32 34.994 42.385 45.38a2.117 2.117 0 1 0 2.995-2.995L34.994 32 45.38 21.615c.807-.807.807-2.166 0-2.974z" fill="#F6F6F6"/></svg>
      </div>}

  
{!isOpen &&  <svg  onClick={handleIsOpen} xmlns="http://www.w3.org/2000/svg" className="fixed bottom-[36px] right-3 z-30  w-[70px]" width="64" height="64" fill="none"><circle cx="32" cy="32" r="32" fill="#FF7848"/><path d="M45 46H19l-6 6V18c0-3.3 2.7-6 6-6h26c3.3 0 6 2.7 6 6v22c0 3.3-2.7 6-6 6z" fill="#F6F6F6"/><path d="M32 32a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM42 32a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM22 32a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" fill="#555FD9"/></svg>}
   
     
     {/* <img
        onClick={openWhatsApp}
        src={whatsAppImg}
        className=" fixed bottom-[33px] md:bottom-[53px] right-1 md:right-4   z-30 h-20 w-20"
      ></img> */}

  

  </div>;
};

export default ContactBtn;
