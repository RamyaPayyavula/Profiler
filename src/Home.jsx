import React from "react";
import pic from "./assets/main_pic.jpg";
import DropDown from "../src/utils/DropDown";

export class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const dropDownList = [
      { label: "dropdown1", link: "dropDownLink1" },
      { label: "dropdown2", key: "dropDownLink2" },
    ];

    return (
      <div className="home-container">
        <DropDown dropDownList={dropDownList} header="Click me" />
      </div>
      //   <div className="home-container">
      //     <div className="photo-viewer">
      //       <img src={pic} className="profile-pic" />
      //     </div>
      //     <div className="photo-data-viewer">
      //       <h1>Hi, I am Sai Siva Kumar Pinnepalli</h1>
      //       <p>
      //         I am a first-generation student, born and brought up in a culturally
      //         and socio-economically diverse society. I pursued my doctoral
      //         program at University of Missouri-Kansas City (UMKC), far from my
      //         home, where I explored and experienced diverse cultures from global
      //         student population. I served an exuberant role of international
      //         student ambassador at UMKC for three years, during which, I came to
      //         know about different ideologies and cultures while interacting with
      //         international and domestic students. I strongly believe that a
      //         diverse academic campus is beneficial place for students to learn
      //         new perspectives and become open-minded in this continuously
      //         globalizing world.
      //       </p>
      //       <p>
      //         Diversity is multifaceted which means range different traits. Within
      //         the context of American education, race, gender, socioeconomic
      //         status and sexual orientation are the key defining factors of
      //         diversity. But it could exist at three different levels at an
      //         academic setting: individual diversity, organizational diversity and
      //         cultural pluralism (Faist, 2010). The meaning of having a diverse
      //         and inclusive campus is to consider the contributions of individuals
      //         (students, faculty and staff) and include them into organizational
      //         policies rather tolerating them (Andrea, Ashlee, 2018). My
      //         commitment to diversity, equity and inclusion is reinforced with my
      //         past academic experiences to engage students and advance their
      //         interests in sciences. As an international student, I related myself
      //         to bizarre experiences encountered on campus, empathize different
      //         student subpopulations as well as appreciate the diversity on
      //         campus. As a preparing future faculty scholar, I learnt about
      //         variety of underrepresented students, their hardships to make it to
      //         college and graduation – it was an eye-opener to realize that there
      //         is an inspiring story to behind of smile of every student.
      //       </p>
      //       <p>
      //         As a faculty member, I intend to serve as a mentor for diverse and
      //         underrepresented student populations and encourage them to pursue
      //         higher education and research in STEM fields. As a graduate student,
      //         I visited Kansas City’s high school science fair to judge student’s
      //         projects, and it was great to witness young talent and innovation.
      //         The students were also very excited to meet professors and college
      //         students. Likewise, I will organize lab visits and experimental
      //         demonstrations for high school students from critical socioeconomic
      //         areas to encourage their participation in STEM fields. I will also
      //         incorporate these aspects as part of my broader impacts in National
      //         Science Foundation research proposals. As an international student
      //         ambassador, I used to help international students to get
      //         acclimatized with the US culture and college routine. I would like
      //         to extend my services as an advisor and participate in summer bridge
      //         programs and student orientations.
      //       </p>
      //       <p>
      //         In the age of advanced and multidisciplinary scientific research,
      //         the students not only should learn the topics across disciplines but
      //         also gain hands-on experience. Chemistry stands as a fundamental
      //         course and a pre-requisite for many disciplines. Teaching students
      //         from diverse majors, could be beneficial to share/discuss knowledge
      //         across disciplines. In addition, I will extend opportunities to
      //         carry research work in my lab as per the availability. The diverse
      //         behavioral/cultural aspects of students could be made useful by
      //         assigning group projects to transform them as great team player with
      //         interpersonal skills and global thinkers. Every student has a unique
      //         learning curve that depend on pre-college education and other
      //         circumstances – and it’s not an appropriate way to imagine all at
      //         the same level. I wish to explore and understand the students’
      //         cognitive skills to tailor my teaching methodologies and support
      //         them to be successful. In many of my classes, whether I took a role
      //         of instructor or student, I observed that students of color and
      //         international students were passive in class due to inferiority
      //         complex or language constraints. I will include discussions in my
      //         lesson plan to encourage underrepresented students to voice out
      //         their thoughts.
      //       </p>
      //       <p>
      //         I hope to bring more diversity to campus, serve students and
      //         university with all of my capabilities to prepare future leaders and
      //         thus transforming society at large.
      //       </p>
      //     </div>
      //   </div>
    );
  }
}
export default Home;
