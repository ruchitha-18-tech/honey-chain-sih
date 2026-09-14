"use client";

import { useState, useEffect } from "react";
import QRCodeCard from "./QRCodeCard";

export default function TraceabilityPage() {
  const [showDetails, setShowDetails] = useState(false);
const [batchId, setBatchId] = useState("HC-2026-001");

useEffect(() => {
  const params = new URLSearchParams(window.location.search);
  const batch = params.get("batch");

  if (batch) {
    setBatchId(batch);
  }
}, []);
  return (
    <main className="tracePage">
      {/* NAVBAR */}
      <nav className="traceNav">
        <div className="traceLogo">
          <div className="traceLogoIcon">🍯</div>
          <div>
            <h1>Honey Chain</h1>
            <p>Trusted honey. Verified journey.</p>
          </div>
        </div>

        <div className="verifiedBadge">
          ✓ Verified Batch
        </div>
      </nav>

      {/* MAIN CONTENT */}
      <section className="traceContainer">

        <div className="batchHeader">
          <div>
            <span className="publicTag">PUBLIC TRACEABILITY</span>

            <h2>Honey Batch <span>#{batchId}</span></h2>

            <p>
              Complete journey of this honey batch from hive to consumer.
            </p>
          </div>

          <div className="certificate">
            <div className="certificateIcon">✓</div>
            <div>
              <strong>Authenticity Certified</strong>
              <small>Blockchain verified</small>
            </div>
          </div>
        </div>

        {/* JOURNEY */}
        <div className="journeyCard">
          <div className="journeyHeader">
            <div>
              <h3>Journey of this honey</h3>
              <p>Every important step is recorded and verified.</p>
            </div>

            <div className="batchStatus">
              ● VERIFIED
            </div>
          </div>

          <div className="timeline">

            {/* STEP 1 */}
            <div className="timelineItem completed">
              <div className="timelineIcon">🐝</div>

              <div className="timelineContent">
                <div className="timelineTop">
                  <div>
                    <h4>Harvested</h4>
                    <span>Beekeeper</span>
                  </div>

                  <strong>Completed</strong>
                </div>

                <div className="infoGrid">
                  <div>
                    <label>Harvest Date</label>
                    <p>12 September 2026</p>
                  </div>

                  <div>
                    <label>Honey Volume</label>
                    <p>25 KG</p>
                  </div>

                  <div>
                    <label>Flora Source</label>
                    <p>Acacia</p>
                  </div>

                  <div>
                    <label>GPS Location</label>
                    <p>12.9716, 77.5946</p>
                  </div>
                </div>
              </div>
            </div>

            {/* STEP 2 */}
            <div className="timelineItem completed">
              <div className="timelineIcon">🧪</div>

              <div className="timelineContent">
                <div className="timelineTop">
                  <div>
                    <h4>Lab Tested</h4>
                    <span>Testing Laboratory</span>
                  </div>

                  <strong>Passed</strong>
                </div>

                <div className="testGrid">
                  <div>
                    <label>Moisture</label>
                    <p>17.8%</p>
                  </div>

                  <div>
                    <label>C4 Sugar Ratio</label>
                    <p>Within Limit</p>
                  </div>

                  <div>
                    <label>Purity</label>
                    <p>Authentic</p>
                  </div>
                </div>
              </div>
            </div>

            {/* STEP 3 */}
            <div className="timelineItem completed">
              <div className="timelineIcon">⛓️</div>

              <div className="timelineContent">
                <div className="timelineTop">
                  <div>
                    <h4>On-Chain Verified</h4>
                    <span>Smart Contract</span>
                  </div>

                  <strong>Verified</strong>
                </div>

                <div className="hashBox">
                  <label>Blockchain Record</label>
                  <p>
                    0x8f3a...7c21
                  </p>
                </div>
              </div>
            </div>

            {/* STEP 4 */}
            <div className="timelineItem completed">
              <div className="timelineIcon">📦</div>

              <div className="timelineContent">
                <div className="timelineTop">
                  <div>
                    <h4>Packaged</h4>
                    <span>Honey Processor</span>
                  </div>

                  <strong>Ready for Consumer</strong>
                </div>

                <div className="packageInfo">
                  <p>✓ Batch approved for packaging and sale.</p>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* DETAILS BUTTON */}
        <button
          className="detailsButton"
          onClick={() => setShowDetails(!showDetails)}
        >
          {showDetails ? "Hide Batch Details ↑" : "View Batch Details ↓"}
        </button>

        {showDetails && (
          <div className="detailsCard">
            <h3>Batch Information</h3>

            <div className="detailsGrid">
              <div>
                <label>Batch ID</label>
                <p>{batchId}</p>
              </div>

              <div>
                <label>Status</label>
                <p>Authenticity Certified</p>
              </div>

              <div>
                <label>Flower Source</label>
                <p>Acacia</p>
              </div>

              <div>
                <label>Total Volume</label>
                <p>25 KG</p>
              </div>
            </div>
          </div>
        )}
        <QRCodeCard batchId={batchId} />
        <div className="trustMessage">
          🔒 This information is provided through the Honey Chain
          traceability system.
        </div>

      </section>

      <footer className="traceFooter">
        <span>🍯 Honey Chain</span>
        <span>From hive to consumer — every step verified.</span>
      </footer>
    </main>
  );
}