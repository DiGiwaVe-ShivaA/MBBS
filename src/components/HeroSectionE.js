export default function ResumeAssistanceSection() {
  return (
    <section className="flex flex-col lg:flex-row items-center justify-between px-8 py-12 bg-white">
      {/* Left side illustration */}
      <div className="w-full lg:w-1/2 mb-10 lg:mb-0 flex justify-center">
        <img
          src="/images/solvingherosectione.jpg"
          alt="Resume Builder Illustration"
          className="max-w-md w-full"
        />
      </div>

      {/* Right side content */}
      <div className="w-full lg:w-1/2 max-w-xl space-y-6">
        <h2 className="text-4xl font-semibold leading-tight">
          Placement at the Best Colleges <br />
          <span className="text-purple-600 font-bold">
            Placement Assistance
          </span>{" "}
          in One Place
        </h2>

        <div className="bg-white rounded-3xl shadow-xl p-6 space-y-4 border border-gray-100">
          {[
            {
              icon: "📝",
              text: "Professional Team for Personalized Councelling",
            },
            { icon: "📤", text: "Easy Course & College Selection" },
            { icon: "💼", text: "Application Assistance" },
            { icon: "🎯", text: "Entrance Exam Prepration" },
          ].map((item, idx) => (
            <div
              key={idx}
              className="flex items-center gap-4 p-3 rounded-xl bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-400 text-white shadow-md"
            >
              <div className="text-2xl">{item.icon}</div>
              <div className="text-base font-medium">{item.text}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
