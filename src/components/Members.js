import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { MemberCard } from "./MemberCard";
import colorSharp2 from "../assets/img/color-sharp2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";
// curr
import mem2024Img1 from "../assets/imgs/members/current/2024/1.png";
import mem2024Img2 from "../assets/imgs/members/current/2024/2.png";
import mem2024Img3 from "../assets/imgs/members/current/2024/3.png";
import mem2024Img4 from "../assets/imgs/members/current/2024/4.png";
import mem2024Img5 from "../assets/imgs/members/current/2024/5.png";
import mem2024Img6 from "../assets/imgs/members/current/2024/6.png";
import mem2024Img7 from "../assets/imgs/members/current/2024/7.png";
import mem2024Img8 from "../assets/imgs/members/current/2024/8.png";
import mem2024Img9 from "../assets/imgs/members/current/2024/9.png";
import mem2024Img10 from "../assets/imgs/members/current/2024/10.png";

import mem2025Img1 from "../assets/imgs/members/current/2025/1.png";
import mem2025Img2 from "../assets/imgs/members/current/2025/2.png";
import mem2025Img3 from "../assets/imgs/members/current/2025/3.png";
import mem2025Img4 from "../assets/imgs/members/current/2025/4.png";
import mem2025Img5 from "../assets/imgs/members/current/2025/5.png";
import mem2025Img6 from "../assets/imgs/members/current/2025/6.png";
import mem2025Img7 from "../assets/imgs/members/current/2025/7.png";
import mem2025Img8 from "../assets/imgs/members/current/2025/8.png";
// past
import mem2022Img1 from "../assets/imgs/members/past/2022/1.jpeg";
import mem2022Img2 from "../assets/imgs/members/past/2022/2.jpeg";
import mem2022Img3 from "../assets/imgs/members/past/2022/3.jpeg";
import mem2022Img4 from "../assets/imgs/members/past/2022/4.jpeg";
import mem2022Img5 from "../assets/imgs/members/past/2022/5.jpeg";

import mem2023Img1 from "../assets/imgs/members/past/2023/1.png";
import mem2023Img2 from "../assets/imgs/members/past/2023/2.png";
import mem2023Img3 from "../assets/imgs/members/past/2023/3.png";
import mem2023Img4 from "../assets/imgs/members/past/2023/4.png";
import mem2023Img5 from "../assets/imgs/members/past/2023/5.png";
import mem2023Img6 from "../assets/imgs/members/past/2023/6.png";
import mem2023Img7 from "../assets/imgs/members/past/2023/7.png";
import mem2023Img8 from "../assets/imgs/members/past/2023/8.png";

export const Members = () => {
  const members2024 = [
    {
      title: "Ajit S",
      description: "Lead",
      imgUrl: mem2024Img1,
    },
    {
      title: "Asim Alam",
      description: "Core",
      imgUrl: mem2024Img2,
    },
    {
      title: "Aman Kumar",
      description: "Core",
      imgUrl: mem2024Img3,
    },
    {
      title: "Sinchana A C",
      description: "Core",
      imgUrl: mem2024Img4,
    },
    {
      title: "Sanskar Kumar Saraf",
      description: "Core",
      imgUrl: mem2024Img5,
    },
    {
      title: "Prahlad",
      description: "Core",
      imgUrl: mem2024Img6,
    },
    {
      title: "Ayush Raj",
      description: "Core",
      imgUrl: mem2024Img7,
    },
    {
      title: "Het Pandya",
      description: "Core",
      imgUrl: mem2024Img8,
    },
    {
      title: "Harshith P Athreya",
      description: "Core",
      imgUrl: mem2024Img9,
    },
    {
      title: "Rahul Singh",
      description: "Core",
      imgUrl: mem2024Img10,
    },
  ];
  const members2025 = [
    {
      title: "Adhvith U B",
      description: "Core",
      imgUrl: mem2025Img1,
    },
    {
      title: "Alan George Jimcy",
      description: "Core",
      imgUrl: mem2025Img2,
    },
    {
      title: "Nishant Kumar V",
      description: "Core",
      imgUrl: mem2025Img3,
    },
    {
      title: "Fatima Amani",
      description: "Core",
      imgUrl: mem2025Img4,
    },
    {
      title: "Thanmai G R",
      description: "Core",
      imgUrl: mem2025Img5,
    },
    {
      title: "Chandan S M",
      description: "Core",
      imgUrl: mem2025Img6,
    },
    {
      title: "Vaishnavi T P",
      description: "Non-Tech",
      imgUrl: mem2025Img7,
    },
    {
      title: "Aryan ",
      description: "Poster Designer",
      imgUrl: mem2025Img8,
    },
  ];
  const members2023 = [
    {
      title: "Himanshu Ranjan",
      description: "Former Lead",
      imgUrl: mem2023Img1,
    },
    {
      title: "Sachin Kumar",
      description: "Co-founder of BigO",
      imgUrl: mem2023Img2,
    },
    {
      title: "Simran",
      description: "Core",
      imgUrl: mem2023Img3,
    },
    {
      title: "Yashi Garg",
      description: "Core",
      imgUrl: mem2023Img4,
    },
    {
      title: "Rahul Yadav",
      description: "Core",
      imgUrl: mem2023Img5,
    },
    {
      title: "Hetvi Nilesh Netvarlal",
      description: "Non-Tech",
      imgUrl: mem2023Img6,
    },
    {
      title: "Reethu Raj Dubey",
      description: "Core",
      imgUrl: mem2023Img7,
    },
    {
      title: "Ashwin G",
      description: "Core",
      imgUrl: mem2023Img8,
    },
  ];
  const members2022 = [
    {
      title: "Mahima Mahendru",
      description: "Core",
      imgUrl: mem2022Img1,
    },
    {
      title: "Mehul Gupta",
      description: "Core",
      imgUrl: mem2022Img2,
    },
    {
      title: "Varnika Bagaria",
      description: "Core",
      imgUrl: mem2022Img3,
    },
    {
      title: "Kayak V G",
      description: "Core",
      imgUrl: mem2022Img4,
    },
    {
      title: "Varun Agarwal",
      description: "Core",
      imgUrl: mem2022Img5,
    },
  ];

  return (
    <section className="member" id="member">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Members</h2>
                  <p>
                    The strength of BigO lies in its exceptional members who
                    form a tight-knit community of passionate coders. As a
                    member of BigO, you become a part of a dynamic group of
                    individuals driven by a shared love for programming. Whether
                    you are a beginner looking for guidance or an experienced
                    coder willing to share your knowledge, BigO offers a
                    welcoming and supportive environment. Our members actively
                    engage in collaborative coding sessions, mentorship
                    programs, and knowledge-sharing initiatives, fostering a
                    culture of continuous learning and growth. By joining BigO,
                    you gain access to a vast network of like-minded
                    individuals, enabling you to connect, collaborate, and build
                    lasting friendships with fellow coding enthusiasts.
                    Together, we strive to inspire and empower each other,
                    unlocking the true potential within ourselves.
                  </p>
                  <Tab.Container id="members-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="first">Current</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Past</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible ? "animate__animated animate__slideInUp" : ""
                      }
                    >
                      <Tab.Pane eventKey="first">
                        <p>2024</p>
                        <Row className="justify-content-center">
                          {members2024.map((member, index) => {
                            return <MemberCard key={index} {...member} />;
                          })}
                        </Row>
                        <p>2025</p>
                        <Row className="justify-content-center">
                          {members2025.map((member, index) => {
                            return <MemberCard key={index} {...member} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <p>2023</p>
                        <Row className="justify-content-center">
                          {members2023.map((member, index) => {
                            return <MemberCard key={index} {...member} />;
                          })}
                        </Row>
                        <p>2022</p>
                        <Row className="justify-content-center">
                          {members2022.map((member, index) => {
                            return <MemberCard key={index} {...member} />;
                          })}
                        </Row>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>

      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  );
};
