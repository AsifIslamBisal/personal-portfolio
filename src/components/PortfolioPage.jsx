import profileImage from "../../public/images/profile/Profile.jpg";

const AboutMe = () => {
  return (
    <section className="about-section bg-gradient-to-b from-[#020617] via-[#0a0f1f] to-[#000D1A]/90 text-white py-16 flex items-center justify-center">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-8 justify-center">
        <div className="content max-w-2xl pl-4">
          <h2 className="text-[#4ECCA3] text-2xl font-bold mb-6">WHO I AM?</h2>
          <p className="text-lg leading-relaxed">
            I’m Asif Islam Bisal, a motivated and self-taught web developer. Rather than simply following tutorials, I focus on writing real code and learning through active practice. I’ve built strong foundational skills in core technologies like HTML, CSS, JavaScript, React, Node.js, Express, and MongoDB.

While I don’t have formal job experience yet, I’ve gained team collaboration experience through course-based group projects. These helped me develop essential skills in version control using Git, teamwork, and solving practical problems.

I completed a full web development course from Programming Hero, earning a certificate that reflects my dedication and knowledge. I am now seeking a remote opportunity where I can apply my skills, learn new technologies, and grow as a developer.
          </p>
        </div>
        <div className="image-container">
          <img
            src={profileImage}
            alt="Profile"
            className="w-72 h-72 rounded-lg object-cover shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
