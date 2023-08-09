import { useRef, useState } from "react";
import { db } from "../../../firebase-config";
import { addDoc, collection } from "firebase/firestore";
import emailjs from "@emailjs/browser";
import CheckBox from "../../../components/ui/CheckBox";
import CustomSelect from "../components/DropDown";
import ArrowBtnLeft from "../components/ArrowBtnLeft";
import ArrowBtnRight from "../components/ArrowBtnRight";
import { buget, subjects } from "../../../data/data";
import { useNavigate } from "react-router-dom";

const Form = ({ handleNextPage, handlePrevPage, userCode }) => {
  const navigate = useNavigate();
  const userInputRef = collection(db, "userInput");
  const [level, setLevel] = useState();
  const [errors, setErrors] = useState();
  const [friendName, setFriendName] = useState("");
  const [friendPhone, setFriendPhone] = useState("");
  const [isFirendSend, setIsFirendSend] = useState(false);

  const nameRef = useRef();
  const emailRef = useRef();
  const phoneRef = useRef();
  const friendNameRef = useRef();
  const friendPhoneRef = useRef();

  const [checkboxes, setCheckboxes] = useState({
    ils150: false,
    ils200: false,
    ils250: false,
    vip: false,
    chemistry: false,
    math: false,
    physics: false,
    english: false,
    computerScience: false,
    biology: false,
    psychometric: false,
    tongue: false,
  });

  const handleSendFriend = (e) => {
    e.preventDefault();
    setFriendPhone("");
    setFriendName("");
    setIsFirendSend(true);
    sendEmailToOfer();
  };

  function getCheckedItems() {
    const checkedItems = [];

    for (const key in checkboxes) {
      if (checkboxes[key]) {
        checkedItems.push(key);
      }
    }

    return checkedItems;
  }

  const handleFormSubmit = async () => {
    const isValid = validateForm();
    if (isValid) {
      const checkedItems = getCheckedItems();
      const formData = {
        items: checkedItems,
        email: emailRef.current.value,
        name: nameRef.current.value,
        phone: phoneRef.current.value,
        friendName: friendNameRef.current.value,
        friendPhone: friendPhoneRef.current.value,
        level: level?.label || "",
        userCode: userCode,
      };
      console.log("formData", formData);
      const response = await addDoc(userInputRef, formData);
      console.log("response", response);
      //
      handleNextPage();
    }
    // sendEmail(emailRef.current.value);
    // sendEmailToOfer();
  };

  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    setCheckboxes((prevState) => ({
      ...prevState,
      [name]: checked,
    }));
  };

  const sendEmail = (recipientEmail) => {
    const emailParams = {
      email: recipientEmail,
      // Any other template parameters you defined in your EmailJS template
    };
    emailjs
      .send(
        "service_qwkz0cj",
        "template_k2329q5",
        emailParams,
        "A4s812mw0f4laL3BV"
      )
      .then((response) => {
        console.log("Email sent successfully!", response);
      })
      .catch((error) => {
        console.error("Failed to send email:", error);
      });
  };

  const sendEmailToOfer = () => {
    const emailParams = {
      email: "ofer@shalrom.com",
      userEmail: emailRef.current.value,
      name: nameRef.current.value,
      phone: phoneRef.current.value,
      friendName: friendNameRef.current.value,
      friendPhone: friendPhoneRef.current.value,
      level: level?.label,
      userCode: userCode,
      // Any other template parameters you defined in your EmailJS template
    };
    emailjs
      .send(
        "service_qwkz0cj",
        "template_fka8n44",
        emailParams,
        "A4s812mw0f4laL3BV"
      )
      .then((response) => {
        console.log("Email sent successfully!", response);
      })
      .catch((error) => {
        console.error("Failed to send email:", error);
      });
  };

  const validateForm = () => {
    const email = emailRef.current.value;
    const name = nameRef.current.value;
    const phone = phoneRef.current.value;
    let isValid = true;
    const newErrors = {
      name: "",
      email: "",
      phone: "",
    };

    // Perform validation checks
    if (name.trim() === "") {
      newErrors.name = "לא נקלט שם";
      isValid = false;
      alert("לא נקלט שם");
      setErrors(newErrors);
      return;
    }

    if (phone.trim() === "") {
      newErrors.phone = "לא נקלט מספר טלפון";
      isValid = false;
      alert("לא נקלט מספר טלפון");
      setErrors(newErrors);
      return;
    }

    if (email.trim() === "") {
      newErrors.email = "לא נקלט אימייל";
      isValid = false;
      alert("לא נקלט אימייל");
      setErrors(newErrors);
      return;
    }

    return isValid;
  };

  const splitSubjectsIntoColumns = (subjects) => {
    const middleIndex = Math.ceil(subjects.length / 2);
    const firstColumn = subjects.slice(0, middleIndex);
    const secondColumn = subjects.slice(middleIndex);
    return [firstColumn, secondColumn];
  };

  const [firstColumnSubjects, secondColumnSubjects] =
    splitSubjectsIntoColumns(subjects);

  return (
    <form
      onSubmit={handleFormSubmit}
      className="relative top-[175px]  md:top-[48px]"
    >
      <header
        dir="rtl"
        className=" absolute -top-[20rem] bottom-10 mx-auto w-[100%] text-center text-[2.5rem] font-semibold leading-[4rem] text-orange-400 md:-top-20"
      >
        צריך שיעורים פרטיים ב:
      </header>
      <div className="z-1 relative flex h-[600px] w-[1088px]  rotate-90 rounded-2xl border border-indigo-600 bg-indigo-600 p-20 md:rotate-0 md:justify-between">
        <div className="order-2 flex  flex-row justify-start  md:order-1 md:w-full md:justify-evenly ">
          <div className=" relative left-40 top-40 flex  scale-150 flex-col items-end md:left-0 md:top-0 md:mb-0  md:scale-100 md:flex-row  md:items-start ">
            <div className="flex w-60  flex-col items-end md:w-full md:flex-row md:items-start ">
              <div className="flex -rotate-90 flex-col md:rotate-0 ">
                <div
                  dir="rtl"
                  className=" text-xl font-medium text-neutral-100"
                >
                  במה אתה מתעניין?
                </div>
                <div className=" flex md:flex-row">
                  <div className="flex-end  flex flex-col text-end">
                    <div className="flex justify-between">
                      <div className="mr-4  text-right text-base  font-normal text-neutral-100 ">
                        תקציב
                      </div>

                      <div className=" text-right text-base font-normal text-neutral-100">
                        קטגוריות
                      </div>
                    </div>

                    <div className="flex">
                      <button
                        onClick={() => navigate("/terms")}
                        className="absolute left-[2rem] top-[-1rem]   mt-2 font-bold text-orange-400 underline md:left-[-6rem] md:top-20 "
                      >
                        תקנון
                      </button>
                      <div
                        className={
                          "absolute left-[-3rem] top-[-1rem] text-white md:left-[-6rem] md:top-[3rem]"
                        }
                      >
                        <CheckBox
                          //  className={"text-white absolute m-5"}
                          label={"אישור"}
                        ></CheckBox>
                      </div>

                      <div className="flex flex-col items-end justify-center ">
                        {buget.map((item) => (
                          <CheckBox
                            className={"text-white"}
                            key={item.id}
                            checked={checkboxes[item.id]}
                            name={item.name}
                            id={item.id}
                            onChange={handleCheckboxChange}
                            label={item.label}
                          ></CheckBox>
                        ))}
                      </div>
                      <div className="ml-5 flex flex-col items-end justify-center">
                        {firstColumnSubjects.map((item) => (
                          <CheckBox
                            className={"text-white"}
                            key={item.id}
                            id={item.id}
                            name={item.name}
                            checked={checkboxes[item.id]}
                            onChange={handleCheckboxChange}
                            label={item.label}
                          />
                        ))}
                      </div>

                      <div className="ml-5 flex flex-col items-end justify-center">
                        {secondColumnSubjects.map((item) => (
                          <CheckBox
                            className={"text-white"}
                            key={item.id}
                            id={item.id}
                            name={item.name}
                            checked={checkboxes[item.id]}
                            onChange={handleCheckboxChange}
                            label={item.label}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="flex-end   flex flex-col text-end "></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="  relative   bottom-[6rem] order-1  mb-5 flex  -rotate-90 scale-150 flex-col  justify-center text-end md:bottom-[0rem] md:order-3   md:mb-0  md:rotate-0 md:scale-100  md:justify-start ">
          <div className=" absolute right-64 top-32  md:right-80  md:top-2  md:rotate-0 ">
            <CustomSelect setLevel={setLevel}></CustomSelect>
          </div>
          <div className=" text-xl font-medium text-neutral-100">שם</div>
          <input
            aria-label="name"
            id="name"
            name="name"
            type="text "
            className="mt-2  h-10 w-60 rounded-xl border border-[#555FD9] bg-neutral-100 pr-1 text-end focus:outline-none"
            ref={nameRef}
          />
          {errors?.name && <p className="text-red">{errors?.name}</p>}
          <div className="text-xl font-medium text-neutral-100"> טלפון</div>
          <input
            aria-label="phone"
            id="phone"
            name="phone"
            type="text "
            className="mt-2  h-10 w-60 rounded-xl border border-[#555FD9] bg-neutral-100 pr-1 text-end focus:outline-none"
            ref={phoneRef}
          />
          {errors?.phone && <p className="">{errors?.phone}</p>}
          <div className="text-xl font-medium text-neutral-100">
            דואר אלקטרוני
          </div>
          <input
            aria-label="phone"
            id="email"
            name="email"
            type="text "
            className="mt-2  h-10 w-60 rounded-xl border border-[#555FD9] bg-neutral-100 pr-1 text-end focus:outline-none"
            ref={emailRef}
          />
          {errors?.email && <p className="text-red">{errors?.email}</p>}
        </div>

        <div className=" relative bottom-20  order-3 w-full items-center  flex -rotate-90 scale-150 flex-col  justify-start md:top-40  md:order-2 md:rotate-0 md:scale-100">
       
          <div className="absolute  bottom-0  md:bottom-40 flex flex-col  justify-between items-center md:border-dotted md:border-white md:border-2 rounded-xl p-10">
          <h3 className=" pb-2 text-right text-xl  font-semibold text-orange-400">
            הגדל/י את הסיכוי שלך לזכות
          </h3>
        <div className="flex  flex-col  md:flex-row">
        <button
              dir="rtl"
              onClick={handleSendFriend}
              class=" mt-4 h-[40px] w-[191px] rounded-lg bg-[#555FD9] font-bold text-orange-400 shadow-[0_8px_20px_0px_rgba(0,0,0,0.19)]"
            >
              {isFirendSend ? " שלח/י שוב" : " שלח/י"}
            </button>
            <div className="flex flex-col text-right">
              <label className=" text-xl font-medium text-orange-100 ">
                שם חבר
              </label>
              <input
                aria-label="phone"
                id="phone"
                name="phone"
                type="text "
                className="ml-5  h-10 w-60 rounded-xl border border-[#555FD9] bg-neutral-100 pr-1 text-end focus:outline-none"
                onChange={(e) => setFriendName(e.target.value)}
                ref={friendNameRef}
                value={friendName}
              />
            </div>

            <div className="flex flex-col text-right">
              <label className="text-xl font-medium text-neutral-100">
                מספר טלפון
              </label>
              <input
                aria-label="phone"
                id="email"
                name="email"
                type="text "
                className="ml-5  h-10 w-60 rounded-xl border border-[#555FD9] bg-neutral-100 pr-1 text-end focus:outline-none"
                onChange={(e) => setFriendPhone(e.target.value)}
                ref={friendPhoneRef}
                value={friendPhone}
              />
            </div>
        </div>
           
          </div>
        </div>
      </div>
      <div className=" z-2 relative mt-72  flex w-full justify-center md:mt-4 ">
        <ArrowBtnLeft onClick={handleFormSubmit} />
        <div className="p-3"></div>
        <ArrowBtnRight onClick={handlePrevPage} disabled={true} />
      </div>
    </form>
  );
};

export default Form;

//   const sendEmail =(e) =>{
//     e.preventDefault()
// emailjs.sendForm("service_ouhaspm", "template_ino3nuf", e.target, "Q0KuceYtG9tHt_72N")
// console.log(e.target)
//  }
// useEffect(() => {
//   const getData = async () => {
//     const data = await getDocs(userInputRef);
//     console.log(data);
//   };
//   getData();
// }, []);
