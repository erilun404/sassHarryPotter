import { StudentsType } from "@/utils/types";

export default function HouseCard({
  characters,
}: {
  characters: StudentsType[];
}) {
  return (
    <ul className="house-card__list">
      {characters.length > 0 ? (
        characters.map((student) => (
          <li key={student.id} className="house-card">
            {student.image ? (
              <img
                className="house-card__image"
                src={student.image}
                alt={student.name}
                width={100}
                height={150}
              />
            ) : (
              <p className="house-card__no-image">No picture available</p>
            )}
            <h2 className="house-card__name">{student.name}</h2>
            <div className="house-card__info">
              <p>Gender: {student.gender}</p>
              <p>Actor: {student.actor}</p>
            </div>
          </li>
        ))
      ) : (
        <p>No students for this house.</p>
      )}
    </ul>
  );
}
