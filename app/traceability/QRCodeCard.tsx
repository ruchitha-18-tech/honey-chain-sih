"use client";

import { QRCodeSVG } from "qrcode.react";

interface QRCodeCardProps {
  batchId: string;
}

export default function QRCodeCard({ batchId }: QRCodeCardProps) {
  const traceUrl = `https://honey-chain-sih-ge8l.vercel.app/traceability?batch=${batchId}`;

  return (
    <div className="qrCard">
      <div className="qrInfo">
        <span className="qrTag">CONSUMER VERIFICATION</span>

        <h3>Scan to Verify Honey</h3>

        <p>
          Scan this QR code to view the complete journey of this honey batch.
        </p>

        <small>Batch ID: {batchId}</small>
      </div>

      <div className="qrCodeBox">
        <QRCodeSVG
          value={traceUrl}
          size={180}
          bgColor="#ffffff"
          fgColor="#2b2118"
          includeMargin={true}
        />
      </div>
    </div>
  );
}