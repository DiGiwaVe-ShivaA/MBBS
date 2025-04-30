import TopBar from "../../components/TopBar";
import Navbar from "../../components/Navbar";

export default function AnnouncementsPage() {
  return (
    <>
      <TopBar />
      <Navbar />

      <main className="max-w-3xl mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold text-[#8A05FF] mb-6">
          🌟 Important Update for NEET (UG) 2025 Aspirants!
        </h1>

        <p className="text-sm text-gray-500 mb-2">Issued on: 30th April 2025</p>
        <p className="text-base text-gray-700 mb-6">
          Issued by: <strong>National Testing Agency (NTA)</strong>
        </p>

        <div className="bg-[#00E5FF] text-black p-6 rounded-xl shadow-lg mb-8">
          <h2 className="text-xl font-semibold mb-2">
            📢 Release of Admit Cards for NEET (UG) – 2025
          </h2>
          <p className="mb-2">The NTA will conduct NEET (UG) 2025 on:</p>
          <ul className="list-disc list-inside mb-2">
            <li>
              <strong>Date:</strong> 4th May 2025 (Sunday)
            </li>
            <li>
              <strong>Time:</strong> 2:00 PM – 5:00 PM IST
            </li>
          </ul>
          <p>
            <strong>Admit Cards Released:</strong> 30th April 2025
          </p>
          <p>
            <strong>Download here:</strong>{" "}
            <a
              href="https://neet.nta.nic.in"
              target="_blank"
              className="underline text-[#8A05FF]"
            >
              https://neet.nta.nic.in
            </a>
          </p>
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-bold text-[#8A05FF]">
            ✅ Instructions for Candidates
          </h3>
          <ul className="list-disc list-inside text-gray-800">
            <li>
              Log in with your NEET 2025 credentials on the NTA website to
              download your Admit Card.
            </li>
            <li>
              Your admit card includes the exam center, timing, and critical
              instructions.
            </li>
            <li>
              Read all the information carefully as mentioned in the Admit Card
              and Information Bulletin.
            </li>
          </ul>

          <h3 className="text-lg font-bold text-[#8A05FF]">
            ❗ Having Trouble?
          </h3>
          <p>If you face difficulties while downloading:</p>
          <ul className="list-disc list-inside">
            <li>
              <strong>Call:</strong> 011-40759000 / 011-69227700
            </li>
            <li>
              <strong>Email:</strong>{" "}
              <a
                href="mailto:neet@nta.ac.in"
                className="underline text-[#8A05FF]"
              >
                neet@nta.ac.in
              </a>
            </li>
          </ul>

          <h3 className="text-lg font-bold text-[#8A05FF]">🌐 Stay Updated</h3>
          <p>Regularly check the official websites:</p>
          <ul className="list-disc list-inside">
            <li>
              <a
                href="https://neet.nta.nic.in"
                className="underline text-[#8A05FF]"
                target="_blank"
              >
                neet.nta.nic.in
              </a>
            </li>
            <li>
              <a
                href="https://nta.ac.in"
                className="underline text-[#8A05FF]"
                target="_blank"
              >
                nta.ac.in
              </a>
            </li>
          </ul>
        </div>

        <p className="mt-10 text-center font-semibold text-lg text-[#8A05FF]">
          ✨ Best wishes to all NEET (UG) 2025 aspirants! Stay focused and
          confident — your journey into medicine begins now.
        </p>
      </main>
    </>
  );
}
