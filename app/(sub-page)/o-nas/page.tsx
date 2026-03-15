import TeamMemberCard from "@/components/team-member-card";

export default function About() {
  const teamMembers = [
    {
      name: "Jan Kowalski",
      role: "Prezes zarządu",
      email: "jan.kowalski@040basket.pl",
    },
    {
      name: "Anna Nowak",
      role: "Trenerka główna",
      email: "anna.nowak@040basket.pl",
    },
    {
      name: "Piotr Wiśniewski",
      role: "Koordynator ds. wydarzeń",
      email: "piotr.wisniewski@040basket.pl",
    },
    {
      name: "Katarzyna Zielińska",
      role: "Koordynator ds. wydarzeń",
      email: "katarzyna.zielinska@040basket.pl",
    },
  ];

  return (
    <main>
      <section className="w-full container mx-auto min-h-100">
        <h1 className="text-4xl font-bold text-center mt-10">O Nas</h1>
        <p className="text-center text-lg mt-4">
          Jesteśmy pasjonatami koszykówki, którzy postanowili stworzyć miejsce,
          gdzie każdy, niezależnie od wieku i poziomu zaawansowania, może
          rozwijać swoje umiejętności i cieszyć się grą.
        </p>
      </section>
      <section className="w-full container mx-auto min-h-100 mt-10">
        <h2 className="text-3xl font-bold text-center mb-6">Nasz Zespół</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {teamMembers.map((member) => (
            <TeamMemberCard
              key={member.name}
              name={member.name}
              role={member.role}
              email={member.email}
            />
          ))}
        </div>
      </section>
    </main>
  );
}
