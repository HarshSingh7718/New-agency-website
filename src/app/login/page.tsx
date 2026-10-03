"use client";
import { useState } from "react";
import Link from "next/link";
import { Lock } from "lucide-react";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="login-layout">
      {/* Left side: Branding */}
      <div className="login-left">
        <div className="login-brand-circle">
          <h1 className="login-brand-title">
            <span>RAPIDGRODIGITAL</span>
            <span>CLIENT WORKSPACE</span>
          </h1>
        </div>

        <div className="login-socials">
          <a href="#" aria-label="Facebook">
            <iconify-icon icon="cib:facebook-f"></iconify-icon>
          </a>
          <a href="#" aria-label="Twitter">
            <iconify-icon icon="cib:twitter"></iconify-icon>
          </a>
          <a href="#" aria-label="LinkedIn">
            <iconify-icon icon="cib:linkedin-in"></iconify-icon>
          </a>
          <a href="#" aria-label="Pinterest">
            <iconify-icon icon="cib:pinterest-p"></iconify-icon>
          </a>
          <a href="#" aria-label="YouTube">
            <iconify-icon icon="cib:youtube"></iconify-icon>
          </a>
        </div>

        <div className="login-copyright">
          <p>© {new Date().getFullYear()} RapidGroDigital All rights reserved.</p>
          <p>RAPIDGRO DIGITAL™ is a registered trademark.</p>
        </div>
      </div>

      {/* Right side: Form */}
      <div className="login-right">
        <div className="login-form-container">
          <div className="login-field">
            <input 
              type="email" 
              placeholder="Email" 
              className="login-input" 
              autoComplete="email" 
            />
          </div>
          <div className="login-field">
            <input 
              type={showPassword ? "text" : "password"} 
              placeholder="Password" 
              className="login-input" 
              autoComplete="current-password" 
            />
          </div>

          <div className="login-options">
            <label className="login-toggle">
              Show Password
              <input 
                type="checkbox" 
                checked={showPassword} 
                onChange={(e) => setShowPassword(e.target.checked)} 
              />
              <div className="login-switch"></div>
            </label>

            <Link href="#" className="login-forgot">
              <Lock size={14} strokeWidth={2.5} /> Forgot Password?
            </Link>
          </div>

          <button className="login-btn">LOG IN</button>
        </div>

        <div className="login-footer-links">
          <Link href="#">Privacy</Link> | <Link href="#">Cookies</Link> | <Link href="#">Terms of Use</Link>
        </div>
      </div>
    </div>
  );
}
