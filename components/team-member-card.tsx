import Image from "next/image";

export default function TeamMemberCard({
  name,
  role,
  email,
  imageUrl,
}: {
  name: string;
  role: string;
  email: string;
  imageUrl?: string;
}) {
  return (
    <div className="bg-white rounded-lg shadow-md">
      <div className="w-full h-72 overflow-hidden mx-auto mb-4">
        <Image
          src={imageUrl || "/default-profile.jpg"}
          alt={name}
          width={256}
          height={288}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="px-4 pb-4">
        <h3 className="text-xl font-bold text-gray-800">{name}</h3>
        <p className="text-primary font-semibold">{role}</p>
        <a
          href={`mailto:${email}`}
          className="text-sm text-gray-600 mt-2 block"
        >
          {email}
        </a>
      </div>
    </div>
  );
}
