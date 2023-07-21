

const ArrowBtnLeft = ({onClick,  disabled}) => {

  return (
    <div onClick={onClick}>
      {disabled ? (
        <div className="flex items-center justify-center ">
          
          <svg
          className=" mr-96 cursor-pointer"
            width="49"
            height="48"
            viewBox="0 0 49 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.000492096 24C0.000492096 37.1295 10.8948 48 24.0012 48C37.131 48 48.002 37.106 48.002 23.9765C48.002 10.8706 37.131 0 24.0012 0C10.8948 0 0.000492096 10.8941 0.000492096 24Z"
              fill="#FF7848"
            />
            <path
              d="M16.2357 26.4471C14.6121 24.9177 14.6121 23.1528 16.2357 21.6234L26.3301 12.1176C27.1067 11.3646 28.2125 11.3646 28.9184 12.0235C29.6949 12.7764 29.6949 13.9529 28.9655 14.6352L19.0122 24.0234L28.9655 33.4117C29.6949 34.1177 29.6714 35.2706 28.9184 36.047C28.2361 36.7295 27.1067 36.6823 26.3301 35.9528L16.2357 26.4471Z"
              fill="#F6F6F6"
            />
          </svg>
          <div className="Group143 relative h-20 w-20">
            <div className="Ellipse61 absolute left-0 top-0 h-20 w-20 rounded-full border border-orange-400" />
            <div className=" absolute left-[30.48px] top-[19.05px] h-[41.90px] w-5 text-center text-4xl font-semibold text-orange-400">
              2
            </div>
          </div>
        </div>
      ) : (
        <div className="flex items-center justify-center">
          
          <svg 
            className="rotate-180 mr-96 cursor-pointer"
            width="49"
            height="48"
            viewBox="0 0 49 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M24.0007 47C36.5555 47 47.0015 36.5766 47.0015 24C47.0015 11.4464 36.5549 1 24.0007 1C11.4226 1 1 11.4236 1 23.9765C1 36.555 11.4245 47 24.0007 47Z"
              stroke="#FF7848"
              stroke-width="2"
            />
            <path
              d="M31.7662 26.4471C33.3898 24.9177 33.3898 23.1528 31.7662 21.6234L21.6719 12.1176C20.8952 11.3646 19.7894 11.3646 19.0835 12.0235C18.307 12.7764 18.307 13.9529 19.0364 14.6352L28.9897 24.0234L19.0364 33.4117C18.307 34.1177 18.3305 35.2706 19.0835 36.047C19.7659 36.7295 20.8952 36.6823 21.6719 35.9528L31.7662 26.4471Z"
              fill="#FF7848"
            />
          </svg>
          <div className="Group142 relative h-20 w-20">
            <div className="Ellipse62 absolute left-0 top-0 h-20 w-20 rounded-full bg-orange-400" />
            <div className=" absolute left-[33.33px] top-[19.05px] h-[41.90px] w-[13.33px] text-center text-4xl font-semibold text-neutral-100">
              2
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ArrowBtnLeft;
