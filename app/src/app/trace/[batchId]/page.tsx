import Link from "next/link";

export default async function TracePage({
  params,
}: {
  params: Promise<{ batchId: string }>;
}) {
  const { batchId } = await params;

  // Mock data (replace with API later)
  const batch = {
    location: "Coorg, Karnataka",
    flora: "Wildflower",
    harvestDate: "14 Sept 2026",
    moisture: "18.2%",
    c4: "4.1%",
    purity: "Verified",
    txHash: "0x8a72...91bc",
  };

  return (
    <main className="min-h-screen bg-amber-50 p-6">
      <div className="max-w-md mx-auto">

        <h1 className="text-3xl font-bold text-amber-900">
          Honey Journey
        </h1>

        <p className="text-gray-600 mt-1">
          Batch ID: {batchId}
        </p>

        <div className="mt-8 space-y-6 border-l-4 border-amber-400 pl-5">

          <div>
            <h2 className="font-semibold text-lg">🌼 Harvest Origin</h2>
            <p>📍 {batch.location}</p>
            <p>🌸 {batch.flora}</p>
            <p>📅 {batch.harvestDate}</p>
          </div>

          <div>
            <h2 className="font-semibold text-lg">
              🧪 Quality Certificate
            </h2>

            <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">
              {batch.purity}
            </span>

            <p className="mt-2">Moisture: {batch.moisture}</p>
            <p>C4 Sugar Ratio: {batch.c4}</p>
          </div>

          <div>
            <h2 className="font-semibold text-lg">
              ⛓ Blockchain Record
            </h2>

            <p className="text-sm break-all text-gray-700">
              {batch.txHash}
            </p>

            <Link
              href="#"
              className="inline-block mt-3 bg-amber-500 text-white px-4 py-2 rounded-xl"
            >
              View Polygon Transaction
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}