const EducationCard = ({
    title,
    percentage,
    institution,
    year,
  }: {
    title: string;
    percentage: string;
    institution: string;
    year: string;
  }) => (
    <div className="flex flex-col items-center text-center p-7 rounded-md border border-text">
      <h3 className="text-lg md:text-xl font-bold mb-2 text-secondary">{title}</h3>
      <p>{percentage}</p>
      <p>{institution}</p>
      <p>{year}</p>
    </div>
  );

export default function Education() {
    return (
        <section className="flex items-center justify-center w-full py-10">
            <div className="flex flex-col items-center justify-center p-6 md:p-10 lg:w-10/12">
                <h2 className="text-2xl md:text-5xl font-bold mb-8 text-white">Education</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                    {[
                        { title: "Class X", percentage: "Percentage: 90.6%", institution: "Jawahar Navodaya Vidyalaya, Kokrajhar", year: "Year: 2020" },
                        { title: "Class XII", percentage: "Percentage: 81.6%", institution: "Jawahar Navodaya Vidyalaya, Kokrajhar", year: "Year: 2022" },
                        { title: "Current CGPA", percentage: "CGPA: 9.40", institution: "Central Institute of Technology, Kokrajhar", year: "Year: 3rd year" }
                    ].map((edu, index) => (
                        <EducationCard key={index} {...edu} />
                    ))}
                </div>
            </div>
        </section>
    )
}