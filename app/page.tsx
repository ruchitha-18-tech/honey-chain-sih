"use client";

import { useState } from "react";

export default function Home() {
  const [volume, setVolume] = useState("");
  const [flora, setFlora] = useState("");
  const [location, setLocation] = useState("");
  const [loading, setLoading] = useState(false);

  const getLocation = () => {
    setLoading(true);

    if (!navigator.geolocation) {
      setLocation("GPS not supported");
      setLoading(false);
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const lat = position.coords.latitude.toFixed(4);
        const lng = position.coords.longitude.toFixed(4);

        setLocation(`${lat}, ${lng}`);
        setLoading(false);
      },
      () => {
        // Demo fallback location
        setLocation("12.9716, 77.5946");
        setLoading(false);
      }
    );
  };

  const submitBatch = () => {
    if (!volume || !flora || !location) {
      alert("Please fill all fields and capture the GPS location.");
      return;
    }

    // Demo navigation to the public traceability page
    window.location.href = "/traceability";
  };

  return (
    <main className="page">
      <nav className="navbar">
        <div className="logo">
          <span className="logoIcon">🍯</span>
          <div>
            <h1>Honey Chain</h1>
            <p>Trusted honey. Verified journey.</p>
          </div>
        </div>

        <div className="navBadge">
          <span>●</span> Blockchain Traceability
        </div>
      </nav>

      <section className="hero">
        <div className="heroText">
          <span className="tag">🐝 BEEKEEPER PORTAL</span>

          <h2>
            Record your
            <br />
            <span>honey harvest.</span>
          </h2>

          <p>
            Register your honey batch with harvest details and GPS location
            to begin its trusted journey through the Honey Chain.
          </p>

          <div className="steps">
            <div className="miniStep active">
              <div>1</div>
              <span>Harvest</span>
            </div>

            <div className="line"></div>

            <div className="miniStep">
              <div>2</div>
              <span>Lab Test</span>
            </div>

            <div className="line"></div>

            <div className="miniStep">
              <div>3</div>
              <span>Verify</span>
            </div>

            <div className="line"></div>

            <div className="miniStep">
              <div>4</div>
              <span>Package</span>
            </div>
          </div>
        </div>

        <div className="formCard">
          <div className="cardHeader">
            <div className="beeCircle">🐝</div>

            <div>
              <h3>New Harvest Batch</h3>
              <p>Enter your harvest information</p>
            </div>
          </div>

          <div className="formGroup">
            <label>Honey Volume</label>

            <div className="inputWithUnit">
              <input
                type="number"
                placeholder="Enter volume"
                value={volume}
                onChange={(e) => setVolume(e.target.value)}
              />
              <span>KG</span>
            </div>
          </div>

          <div className="formGroup">
            <label>Flora Source</label>

            <select
              value={flora}
              onChange={(e) => setFlora(e.target.value)}
            >
              <option value="">Select flower / flora source</option>
              <option value="Acacia">Acacia</option>
              <option value="Eucalyptus">Eucalyptus</option>
              <option value="Sunflower">Sunflower</option>
              <option value="Mustard">Mustard</option>
              <option value="Clover">Clover</option>
              <option value="Mixed Flora">Mixed Flora</option>
            </select>
          </div>

          <div className="formGroup">
            <label>Harvest Location</label>

            <div className="gpsBox">
              <div className="locationIcon">📍</div>

              <div className="locationText">
                {location ? (
                  <>
                    <strong>GPS Captured</strong>
                    <small>{location}</small>
                  </>
                ) : (
                  <>
                    <strong>Location not captured</strong>
                    <small>GPS coordinates required</small>
                  </>
                )}
              </div>

              <button className="gpsButton" onClick={getLocation}>
                {loading ? "..." : "Get GPS"}
              </button>
            </div>
          </div>

          <button className="submitButton" onClick={submitBatch}>
            <span>Submit Batch</span>
            <span>→</span>
          </button>

          <div className="secureNote">
            🔒 Your harvest information is securely recorded for traceability.
          </div>
        </div>
      </section>

      <footer>
        <span>🍯 Honey Chain</span>
        <span>From hive to consumer — every step verified.</span>
      </footer>
    </main>
  );
}