import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import "./About.css";

// Image Imports
import aboutHeroImg from "../assets/about-hero.jpg";
import founderImg from "../assets/founder.jpg";
import teamImg from "../assets/team.jpg";
import valuesImg from "../assets/values.jpeg";
import sustainabilityImg from "../assets/Sustainability.avif";

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="about-hero-content">
          <h1>OUR STORY</h1>
          <p>Driven by performance, built for athletes</p>
        </div>
        <div className="about-hero-image">
          <img src={aboutHeroImg} alt="Maximus Gear athletes" />
        </div>
      </section>

      {/* Mission Section */}
      <section className="about-mission">
        <div className="container">
          <div className="mission-content">
            <h2>Empowering Your Performance</h2>
            <p className="mission-statement">
              At Maximus Gear, we believe that what you wear should never limit your potential. 
              Founded in 2015 by former professional athlete Marcus Reed, our mission is to 
              engineer premium fitness apparel that enhances performance, withstands the most 
              intense workouts, and helps athletes at every level push beyond their limits.
            </p>
            <div className="mission-stats">
              <div className="stat-item">
                <span className="stat-number">250,000+</span>
                <span className="stat-label">Athletes Empowered</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">5</span>
                <span className="stat-label">Professional Teams</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">100%</span>
                <span className="stat-label">Satisfaction Guarantee</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="about-founder">
        <div className="container">
          <div className="founder-grid">
            <div className="founder-image">
              <img src={founderImg} alt="Marcus Reed, Founder of Maximus Gear" />
            </div>
            <div className="founder-content">
              <h2>Meet Our Founder</h2>
              <p className="founder-quote">
                "As an athlete, I was frustrated by gear that couldn't keep up with my training. 
                Either it lacked performance features or fell apart after a few sessions. 
                I created Maximus Gear to solve these problems for athletes everywhere."
              </p>
              <p className="founder-name">— Marcus Reed, Founder & CEO</p>
              <div className="founder-bio">
                <p>
                  Marcus competed as a professional decathlete for 8 years before launching Maximus Gear. 
                  His firsthand experience with the demands of elite training informs every product we create.
                </p>
                <p>
                  Under his leadership, Maximus Gear has grown from a garage startup to a recognized leader 
                  in performance athletic wear, while maintaining our commitment to quality and innovation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="about-values">
        <div className="container">
          <h2>Our Core Values</h2>
          <div className="values-grid">
            <div className="value-card">
              <div className="value-icon">🏋️</div>
              <h3>Performance First</h3>
              <p>
                Every design decision starts with how it will enhance athletic performance. 
                We test our gear with professional athletes to ensure it meets the highest standards.
              </p>
            </div>
            <div className="value-card">
              <div className="value-icon">🔬</div>
              <h3>Innovation Driven</h3>
              <p>
                We invest heavily in research and development to bring cutting-edge fabrics 
                and technologies to our customers before anyone else.
              </p>
            </div>
            <div className="value-card">
              <div className="value-icon">♻️</div>
              <h3>Sustainable Practices</h3>
              <p>
                From eco-friendly packaging to responsibly sourced materials, we're committed 
                to reducing our environmental impact at every step.
              </p>
            </div>
            <div className="value-card">
              <div className="value-icon">🤝</div>
              <h3>Community Focused</h3>
              <p>
                We support fitness initiatives in underserved communities and sponsor 
                athletes at all levels who embody our values.
              </p>
            </div>
          </div>
          <div className="values-image">
            <img src={valuesImg} alt="Maximus Gear team values" />
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="about-team">
        <div className="container">
          <div className="team-content">
            <h2>The Team Behind the Gear</h2>
            <p>
              Our team combines decades of experience in athletic wear design, textile engineering, 
              and professional sports. We're athletes serving athletes, united by our passion for 
              helping you perform at your best.
            </p>
            <div className="team-image">
              <img src={teamImg} alt="Maximus Gear team" />
            </div>
            <div className="team-stats">
              <div className="team-stat">
                <span>15</span>
                <span>Professional Athletes</span>
              </div>
              <div className="team-stat">
                <span>42</span>
                <span>Team Members</span>
              </div>
              <div className="team-stat">
                <span>7</span>
                <span>Countries Represented</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sustainability Section */}
      <section className="about-sustainability">
        <div className="container">
          <div className="sustainability-grid">
            <div className="sustainability-content">
              <h2>Sustainability Commitment</h2>
              <p>
                We recognize our responsibility to protect the environments where athletes train and compete. 
                That's why we've implemented comprehensive sustainability initiatives across our operations.
              </p>
              <ul className="sustainability-list">
                <li>
                  <strong>Eco-friendly materials:</strong> 65% of our fabrics now come from recycled sources
                </li>
                <li>
                  <strong>Carbon neutral shipping:</strong> All orders are shipped with carbon offsets
                </li>
                <li>
                  <strong>Zero-waste packaging:</strong> 100% recyclable and biodegradable materials
                </li>
                <li>
                  <strong>Ethical manufacturing:</strong> Fair wages and safe conditions at all partner facilities
                </li>
              </ul>
              <Link to="/sustainability" className="btn btn-primary">
                Learn More About Our Efforts
              </Link>
            </div>
            <div className="sustainability-image">
              <img src={sustainabilityImg} alt="Maximus Gear sustainability efforts" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="about-cta">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Experience the Difference?</h2>
            <p>
              Join thousands of athletes who trust Maximus Gear to support their training and performance.
            </p>
            <div className="cta-buttons">
              <Link to="/shop" className="btn btn-primary">
                Shop Performance Gear
              </Link>
              <Link to="/contact" className="btn btn-secondary">
                Contact Our Team
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;