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
    <section className="flex w-full justify-center p-10" herf="#buget">
      <Card
        title={"שיעור VIP"}
        price={"₪250+"}
        icon={vip}
        bulletPoints={vipBulletPoints}
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
        icon={superIcon}
        title={"שיעור מקצועי מפוקח"}
        price={"₪180-₪250"}
        bulletPoints={basicBulletPoints}
        handleSubjectChange={handleSubjectChange}
      ></Card>
      <Card
        icon={star}
        title={"שיעור בסיסי"}
        price={"₪130-₪180"}
        bulletPoints={supervisedBulletPoints}
        handleSubjectChange={handleSubjectChange}
      ></Card>
    </section>
  );
};

export default LessonsSection;
