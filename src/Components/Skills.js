import React, { useState } from 'react';
import './Skills.css';

const Skills = () => {
  const [selectedInterest, setSelectedInterest] = useState('Tümü');
const skills = [
  { name: 'React', level: 'intermediate', tags: ['Web', 'JS'] },
  { name: 'HTML & CSS', level: 'advanced', tags: ['Web'] },
  { name: 'JavaScript', level: 'intermediate', tags: ['JS'] },
  { name: 'Git & GitHub', level: 'beginner', tags: ['Versiyon'] },
  { name: 'Python', level: 'intermediate', tags: ['Yapay Zeka'] },
  { name: 'TensorFlow', level: 'beginner', tags: ['Yapay Zeka'] },
  { name: 'C++', level: 'intermediate', tags: ['C,C++'] },
  { name: 'C', level: 'intermediate', tags: ['C,C++'] }
];

  const interests = ['Tümü', 'Web', 'JS', 'Yapay Zeka', 'Versiyon', 'C,C++'];

  const filteredSkills = selectedInterest === 'Tümü'
    ? skills
    : skills.filter(skill => skill.tags.includes(selectedInterest));

  return (
    <section id="skills" className="skills-section">
      <h2 className="skills-title">Neler Yapıyorum ve de Neler Yapabilirim?</h2>
      <div className="skills-content">
       <div className="skills-intro card">
  <h3>Hakkımda</h3>
  <ul>
    <li>👩‍💻 Web arayüzleri geliştiriyorum ve modern tasarımlarla ilgileniyorum.</li><br></br>
    <li>⚛️ React.js ile component tabanlı projeler geliştirmeye çalışıyorum.</li><br></br>
    <li>🧠 Yapay zeka ve makine öğrenmesi konularına ilgi duyuyorum ve bu alanda araştırmalar yapıyorum.</li><br></br>
    <li>🧪 Python kullanarak veri işleme ve analiz süreçlerini öğreniyorum.</li><br></br>
    <li>📚 Sürekli öğrenmeye açık, araştırma yapmayı seven bir geliştiriciyim.</li><br></br>
    <li>👥 Takım çalışmalarına yatkınım ve yazılım projelerinde iletişimi önemsiyorum.</li><br></br>
    <li>🎯 Hedefim; yapay zekayı günlük problemleri çözen akıllı sistemlere entegre edebilmek.</li>

  </ul>
</div>
<div>
    <div className="hobbies">
  <h3>Hobilerim</h3>
  <ul>
    <li>🎨 Çizim ve kil yapmak.</li>
    <li>🎧 Müzik dinlemek.</li>
    <li>✈️ Seyahat etmek, yeni yerler keşfetmek.</li>
    <li>🤿 Spor yapmak.</li>
  </ul>
</div>

<div className="languages-cv">
  <div className="languages">
    <h3>Yabancı Diller</h3>
    <ul>
      <li><strong>🇬🇧  </strong> İngilizce ⭐ upp-intermediate</li>
      <li><strong>🇩🇪  </strong> Almanca ⭐ beginner</li>
    </ul>
  </div>

  <div className="cv-download">
    <h3>CV</h3>
    <a href="/images/Buse_Gultekin_CV.pdf" download className="cv-btn">📄 İndir</a>
  </div>
</div>
</div>
        <div className="skills-right">
          <div className="interests">
            <h3>Becerilerim</h3>
            <div className="tags">
              {interests.map((tag) => (
                <span
                  key={tag}
                  className={`tag ${selectedInterest === tag ? 'active' : ''}`}
                  onClick={() => setSelectedInterest(tag)}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="abilities">
            <h3>Seviyeye Göre Becerilerim</h3>
            <ul>
              {filteredSkills.map((skill) => (
                <li key={skill.name} className="skill-item">
                  <span className="skill-name">{skill.name}</span>
                   <span className={`skill-level ${skill.level.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "")}`}>
                    {skill.level}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;


