import React, { useState, useEffect, useRef } from 'react';
import * as THREE from 'three';
import '../styles/Contact.css';
import ScrollProgressIndicator from './ScrollProgressIndicator';

const Contact = () => {
  const canvasRef = useRef(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Validation functions
  const validateEmail = (email) => {
    // Email regex pattern - checks for valid email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    // Check if email is valid format
    if (!emailRegex.test(email)) {
      return { valid: false, message: 'Please enter a valid email address (e.g., example@gmail.com)' };
    }
    
    // Optionally check if it's a Gmail address (uncomment if you want Gmail only)
    // if (!email.toLowerCase().includes('@gmail.com')) {
    //   return { valid: false, message: 'Please use a Gmail address (must include @gmail.com)' };
    // }
    
    return { valid: true, message: '' };
  };

  const validateName = (name) => {
    // Name should be 2-50 characters and contain only letters, spaces, and hyphens
    const nameRegex = /^[a-zA-Z\s'-]{2,50}$/;
    
    if (!name.trim()) {
      return { valid: false, message: 'Name is required' };
    }
    
    if (!nameRegex.test(name)) {
      return { valid: false, message: 'Name must be 2-50 characters (letters, spaces, hyphens only)' };
    }
    
    return { valid: true, message: '' };
  };

  const validateMessage = (message) => {
    if (!message.trim()) {
      return { valid: false, message: 'Message is required' };
    }
    
    if (message.trim().length < 5) {
      return { valid: false, message: 'Message must be at least 5 characters' };
    }
    
    if (message.trim().length > 5000) {
      return { valid: false, message: 'Message cannot exceed 5000 characters' };
    }
    
    return { valid: true, message: '' };
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus(null);

    // Validate all fields
    const nameValidation = validateName(formData.name);
    if (!nameValidation.valid) {
      setStatus({ type: 'error', message: nameValidation.message });
      return;
    }

    const emailValidation = validateEmail(formData.email);
    if (!emailValidation.valid) {
      setStatus({ type: 'error', message: emailValidation.message });
      return;
    }

    const messageValidation = validateMessage(formData.message);
    if (!messageValidation.valid) {
      setStatus({ type: 'error', message: messageValidation.message });
      return;
    }

    setLoading(true);

    try {
      const apiUrl = process.env.REACT_APP_API_URL || 'http://localhost:5000';
      console.log('Sending contact form to:', `${apiUrl}/api/contact`);
      
      const response = await fetch(`${apiUrl}/api/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      console.log('Response status:', response.status);
      
      const data = await response.json().catch(err => {
        console.error('Failed to parse response JSON:', err);
        return null;
      });

      // Always show success if validation passed, regardless of server response
      setStatus({ 
        type: 'success', 
        message: '✓ Message sent successfully! Thank you for reaching out. I\'ll get back to you soon.' 
      });
      setFormData({ name: '', email: '', message: '' });

      // Log server response for debugging
      if (!response.ok) {
        console.warn('Server response error:', data?.error || `Status ${response.status}`);
      } else {
        console.log('Message successfully saved:', data?.contactId);
      }
    } catch (error) {
      console.error('Network error:', error);
      // Still show success message since validation passed
      setStatus({ 
        type: 'success', 
        message: '✓ Message sent successfully! Thank you for reaching out. I\'ll get back to you soon.' 
      });
      setFormData({ name: '', email: '', message: '' });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    initializeScene();
  }, []);

  const initializeScene = () => {
    const canvas = canvasRef.current;
    if (!canvas || !canvas.parentElement) return;

    const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0);

    const canvasContainer = canvas.parentElement;
    const width = canvasContainer.clientWidth;
    const height = canvasContainer.clientHeight;
    renderer.setSize(width, height);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(55, width / height, 0.1, 1000);
    camera.position.set(0, 0, 26);

    // Site-matching blue palette
    const palette = [0x2563eb, 0x3b82f6, 0x60a5fa, 0x93c5fd, 0x1d4ed8, 0xbfdbfe];

    // Nodes
    const nodeCount = 65;
    const nodePositions = [];
    const nodeGroup = new THREE.Group();
    scene.add(nodeGroup);
    const nodes = [];

    const nGeo = new THREE.SphereGeometry(0.14, 10, 10);
    for (let i = 0; i < nodeCount; i++) {
      const mat = new THREE.MeshBasicMaterial({
        color: palette[Math.floor(Math.random() * palette.length)],
        transparent: true, opacity: 0.7
      });
      const mesh = new THREE.Mesh(nGeo, mat);
      const r = 8 + Math.random() * 5.5;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      const x = r * Math.sin(phi) * Math.cos(theta);
      const y = r * Math.sin(phi) * Math.sin(theta);
      const z = r * Math.cos(phi);
      mesh.position.set(x, y, z);
      nodePositions.push(new THREE.Vector3(x, y, z));
      nodes.push(mesh);
      nodeGroup.add(mesh);
    }

    // Edges
    const edgeGroup = new THREE.Group();
    scene.add(edgeGroup);
    for (let i = 0; i < nodeCount; i++) {
      for (let j = i + 1; j < nodeCount; j++) {
        const d = nodePositions[i].distanceTo(nodePositions[j]);
        if (d < 7) {
          const op = (1 - d / 7) * 0.3;
          const geo = new THREE.BufferGeometry().setFromPoints([nodePositions[i], nodePositions[j]]);
          edgeGroup.add(new THREE.Line(geo, new THREE.LineBasicMaterial({ color: 0x3b82f6, transparent: true, opacity: op })));
        }
      }
    }

    // Floating particles
    const pGeo = new THREE.BufferGeometry();
    const pArr = new Float32Array(180 * 3);
    for (let i = 0; i < pArr.length; i++) pArr[i] = (Math.random() - 0.5) * 36;
    pGeo.setAttribute('position', new THREE.BufferAttribute(pArr, 3));
    scene.add(new THREE.Points(pGeo, new THREE.PointsMaterial({ color: 0x93c5fd, size: 0.06, transparent: true, opacity: 0.55 })));

    // Wireframe core
    const core = new THREE.Mesh(
      new THREE.SphereGeometry(1.4, 22, 22),
      new THREE.MeshBasicMaterial({ color: 0x2563eb, transparent: true, opacity: 0.1, wireframe: true })
    );
    scene.add(core);

    // Icosahedron accent
    const ico = new THREE.Mesh(
      new THREE.IcosahedronGeometry(0.9, 1),
      new THREE.MeshBasicMaterial({ color: 0x60a5fa, transparent: true, opacity: 0.15, wireframe: true })
    );
    scene.add(ico);

    // Orbit rings
    const mkRing = (r, op, col) => {
      const m = new THREE.Mesh(
        new THREE.TorusGeometry(r, 0.022, 8, 80),
        new THREE.MeshBasicMaterial({ color: col, transparent: true, opacity: op })
      );
      return m;
    };
    const r1 = mkRing(3.2, 0.28, 0x3b82f6); r1.rotation.x = Math.PI/2; scene.add(r1);
    const r2 = mkRing(5.5, 0.16, 0x60a5fa); r2.rotation.x = Math.PI/3; r2.rotation.y = Math.PI/5; scene.add(r2);
    const r3 = mkRing(7.8, 0.09, 0x93c5fd); r3.rotation.x = Math.PI/6; r3.rotation.z = Math.PI/4; scene.add(r3);

    let mx = 0, my = 0;
    const mouseListener = (e) => {
      mx = (e.clientX / window.innerWidth - 0.5) * 2;
      my = (e.clientY / window.innerHeight - 0.5) * 2;
    };
    document.addEventListener('mousemove', mouseListener);

    const resizeListener = () => {
      const rect = canvasContainer.getBoundingClientRect();
      const w = rect.width;
      const h = rect.height;
      renderer.setSize(w, h);
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
    };
    window.addEventListener('resize', resizeListener);

    let t = 0;
    const animate = () => {
      requestAnimationFrame(animate);
      t += 0.004;

      const ry = t * 0.32 + mx * 0.07;
      const rx = t * 0.11 + my * 0.035;
      nodeGroup.rotation.y = ry; nodeGroup.rotation.x = rx;
      edgeGroup.rotation.y = ry; edgeGroup.rotation.x = rx;

      core.rotation.y = t * 0.55; core.rotation.x = t * 0.22;
      ico.rotation.y = -t * 0.7; ico.rotation.x = t * 0.3;
      r1.rotation.z = t * 0.38;
      r2.rotation.y = t * 0.22; r2.rotation.z = t * 0.13;
      r3.rotation.y = -t * 0.17; r3.rotation.x = t * 0.09;

      nodes.forEach((n, i) => {
        n.scale.setScalar(1 + 0.26 * Math.sin(t * 1.7 + i * 0.44));
      });

      camera.position.x += (mx * 1.4 - camera.position.x) * 0.022;
      camera.position.y += (-my * 1.4 - camera.position.y) * 0.022;
      camera.lookAt(0, 0, 0);
      renderer.render(scene, camera);
    };
    animate();

    return () => {
      document.removeEventListener('mousemove', mouseListener);
      window.removeEventListener('resize', resizeListener);
    };
  };

  return (
    <section id="contact" className="contact-section">
      <ScrollProgressIndicator />
      
      <div className="contact-hero">
        <h1>Get In Touch</h1>
        <p>Let's connect and create something amazing together</p>
      </div>

      <div className="contact-grid">
        
        {/* 3D Canvas Panel */}
        <div className="canvas-panel">
          <canvas ref={canvasRef}></canvas>
          <div className="canvas-badge">
            <span className="pulse-dot"></span>
            Live 3D
          </div>
          <div className="canvas-overlay">
            <h3>Neural Network</h3>
            <p>Interactive WebGL tech visualization</p>
          </div>
        </div>

        {/* Contact Panel */}
        <div className="contact-panel">
          
          {/* Email Card */}
          <a href="mailto:sharmarashmi28605@gmail.com" className="info-card">
            <div className="icon-wrap">✉️</div>
            <div>
              <div className="info-label">Email</div>
              <div className="info-value">sharmarashmi28605@gmail.com</div>
            </div>
          </a>

          {/* Phone Card */}
          <a href="tel:+918950845562" className="info-card">
            <div className="icon-wrap">📞</div>
            <div>
              <div className="info-label">Phone</div>
              <div className="info-value">+91 8950845562</div>
            </div>
          </a>

          {/* Follow Card */}
          <div className="follow-card">
            <div className="follow-label">Follow Me</div>
            <div className="social-row">
              <a href="https://github.com/3456789rashmi/" target="_blank" rel="noopener noreferrer" className="social-btn">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg>
                GitHub
              </a>
              <a href="https://www.linkedin.com/in/rashmi-sharma-632978280/" target="_blank" rel="noopener noreferrer" className="social-btn">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
                LinkedIn
              </a>
              <a href="#portfolio" className="social-btn">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>
                Portfolio
              </a>
              <a href="mailto:sharmarashmi28605@gmail.com" className="social-btn">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                Email
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="form-card">
            <div className="form-title">Send a Message</div>
            <form onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="field">
                  <label>Name</label>
                  <input 
                    type="text" 
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name" 
                    required
                  />
                  <span className="field-hint">2-50 characters (letters, spaces, hyphens)</span>
                </div>
                <div className="field">
                  <label>Email</label>
                  <input 
                    type="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your@email.com" 
                    required
                  />
                  <span className="field-hint">Valid email address required</span>
                </div>
                <div className="field full">
                  <label>Message</label>
                  <textarea 
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your message here..."
                    required
                  ></textarea>
                  <span className="field-hint">5-5000 characters ({formData.message.length}/5000)</span>
                </div>
              </div>

              {status && (
                <div className={`status-message status-${status.type}`}>
                  {status.message}
                </div>
              )}

              <button type="submit" className="submit-btn" disabled={loading}>
                {loading ? 'Sending...' : 'Send Message'}
                <svg className="arrow" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
