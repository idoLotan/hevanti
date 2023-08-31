import React from "react";
import Card from "../common/Card";
import vip from "assets/images/vip.png";
import star from "assets/images/star-2.png";
import handShake from "assets/images/hand-shake.png";
import superIcon from "assets/images/super.png";

const vipBulletPoints = [
  "שיעור פרטי 45 דקות",
  "מורה אישי קבוע לתלמיד",
  "שיעור מועבר בזום או פרונטאלי",
  "השיעור מוקלט עבור התלמיד",
  "תמיכה יום יומית בשיעורי בין 08:00-22:00  ביוזמת המורה  מורה אקדמאי",
  "יועץ פדגוגי העומד בקשר עם בית הספר וההורים",
];

const personalBulletPoints = [
  "שיעור פרטי 45 דקות",
  "מורה אישי קבוע לתלמיד",
  "שיעור מועבר בזום או פרונטאלי",
  "מורה עם ניסיון של מעל 3 שנים",
  "תמיכה מחוץ לשעות השיעור בשיעורי בית",
];

const basicBulletPoints = [
  "שיעור פרטי 45 דקות",
  "מורה אישי קבוע לתלמיד",
  "השיעור עובר בתוכנת זום",
];

const supervisedBulletPoints = [
  "שיעור פרטי 45 דקות",
  "מורה אישי קבוע לתלמיד",
  "שיעור מועבר בזום או פרונטאלי",
  "השיעור מוקלט עבור התלמיד",
  "תמיכה שלוש פעמים בשבוע בשיעורי בית באמצעות וואטסאפ",
  "פיקוח של יועץ פדגוגי העוקב אחרי התפתחות הלימודים ומדווח להורים",
];

const LessonsSection = ({ setSubjects, subjects }) => {
  const handleSubjectChange = (subject) => {
    setSubjects((prevSubjects) => ({
      ...prevSubjects,
      [subject]: !prevSubjects[subject],
    }));
  };

  const scrollToSection = () => {
    const section = document.getElementById("contact");
    section.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="buget" herf="#buget" className="">
      <div className="  mt-5 flex w-[100%]  justify-end  2xl:pr-48">
        <svg
          role="presentation"
          xmlns="http://www.w3.org/2000/svg"
          className="pr-2"
          width="100"
          viewBox="0 0 84 38"
          fill="none"
        >
          <path
            d="M6.50391 10.8213V20.4746H2.54883V10.8213H6.50391ZM41.1182 17.9844V29H31.6406V25.4551H37.1631V18.7461C37.1631 17.4277 37.0752 16.4854 36.8994 15.9189C36.7236 15.3623 36.4307 14.9668 36.0205 14.7324C35.6104 14.4883 35.0098 14.3662 34.2188 14.3662H32.4756V10.8213H34.9658C36.6455 10.8213 37.9004 11.0459 38.7305 11.4951C39.5605 11.9443 40.166 12.6816 40.5469 13.707C40.9277 14.7324 41.1182 16.1582 41.1182 17.9844ZM80.6396 18.4678V29H76.6699V18.4385C76.6699 16.9443 76.3525 15.8945 75.7178 15.2891C75.083 14.6738 73.9795 14.3662 72.4072 14.3662H64.9805V10.8213H72.6562C74.5801 10.8213 76.123 11.0801 77.2852 11.5977C78.457 12.1152 79.3066 12.9355 79.834 14.0586C80.3711 15.1719 80.6396 16.6416 80.6396 18.4678ZM69.2285 17.9551V29H65.2734V17.9551H69.2285Z"
            fill="#555FD9"
          />
          <path
            d="M16.2744 26.0996C15.8838 27.1055 15.2832 27.8428 14.4727 28.3115C13.6621 28.7705 12.4854 29 10.9424 29H9.94629V25.4551H10.1953C10.8691 25.4551 11.4062 25.3281 11.8066 25.0742C12.1973 24.8203 12.4756 24.4346 12.6416 23.917C12.8076 23.3896 12.8906 22.5938 12.8906 21.5293V14.3662H10.1074V10.8213H20.3027C23.1152 10.8213 25.1318 11.417 26.3525 12.6084C27.583 13.79 28.1982 15.7529 28.1982 18.4971V29H24.2285V18.5557C24.2285 16.9932 23.9111 15.9043 23.2764 15.2891C22.6416 14.6738 21.5723 14.3662 20.0684 14.3662H16.8457V22.042C16.8457 23.7314 16.6553 25.084 16.2744 26.0996ZM61.6846 25.4551V29H44.7363V25.4551H55.7812V18.9805C55.7812 17.2715 55.459 16.0752 54.8145 15.3916C54.1797 14.708 53.0908 14.3662 51.5479 14.3662H45.4248V10.8213H51.6064C54.458 10.8213 56.5234 11.417 57.8027 12.6084C59.0918 13.7998 59.7363 15.7529 59.7363 18.4678V25.4551H61.6846Z"
            fill="#FF7848"
          />
          <circle cx="68.5" cy="32.5" r="1.5" fill="#FF7848" />
          <circle cx="36.5" cy="32.5" r="1.5" fill="#FF7848" />
          <circle cx="20.5" cy="19.5" r="1.5" fill="#555FD9" />
          <circle cx="20.5" cy="32.5" r="1.5" fill="#555FD9" />
          <circle cx="36.5" cy="36.5" r="1.5" fill="#FF7848" />
          <circle cx="70.5" cy="36.5" r="1.5" fill="#555FD9" />
          <circle cx="75.5" cy="36.5" r="1.5" fill="#555FD9" />
          <circle cx="72.5" cy="32.5" r="1.5" fill="#FF7848" />
          <circle cx="76.5" cy="32.5" r="1.5" fill="#FF7848" />
          <rect x="48" y="31" width="8" height="2" fill="#555FD9" />
        </svg>
        <h2 className=" text-center text-[32px] font-bold text-[#555FD9]">
          שיעורים עם
        </h2>
      </div>

      <div className="flex  w-full flex-col items-center justify-center 2xl:p-4 md:flex-row">
        <Card
          title={"שיעור VIP"}
          price={"₪250+"}
          icon={vip}
          bulletPoints={vipBulletPoints}
          handleSubjectChange={handleSubjectChange}
        ></Card>

        <Card
          popular={true}
          icon={superIcon}
          title={"שיעור מקצועי מפוקח"}
          price={"₪180-₪250"}
          bulletPoints={supervisedBulletPoints}
          handleSubjectChange={handleSubjectChange}
        ></Card>
        <Card
          icon={handShake}
          title={"שיעור מותאם אישית"}
          price={"₪150-₪200"}
          bulletPoints={personalBulletPoints}
          handleSubjectChange={handleSubjectChange}
        ></Card>
        <Card
          icon={star}
          title={"שיעור בסיסי"}
          price={"₪80"}
          bulletPoints={basicBulletPoints}
          handleSubjectChange={handleSubjectChange}
        ></Card>
      </div>
    </section>
  );
};

export default LessonsSection;
