import { StudentsType } from "@/utils/types";

export default function StudentsCard({
  students,
}: {
  students: StudentsType[];
}) {
  return (
    <ul className="students-card">
      {students.length > 0 ? (
        students.map((student) => (
          <li key={student.id} className="students-card__item">
            <div className="students-card__image-container">
              {student.image ? (
                <img
                  src={student.image}
                  alt={student.name}
                  width={100}
                  height={150}
                />
              ) : (
                <p>No picture available</p>
              )}
            </div>

            <div className="students-card__info">
              <h2>{student.name}</h2>
              <p>House: {student.house || null}</p>

              <p>Date of birth: {student.dateOfBirth || "No record"}</p>
              <p>Gender: {student.gender || "No record"}</p>
              <p>Eye color: {student.eyeColour || "No record"}</p>
              <p>Hair color: {student.hairColour || "No record"}</p>
              <div>
                <h4>Wand</h4>
                <p>Core: {student.wand.core || "No data"}</p>
                <p>Length: {student.wand.length || "No data"}</p>
                <p>Wood: {student.wand.wood || "No data"}</p>
              </div>
              <p>Actor: {student.actor || "No record"}</p>
            </div>
          </li>
        ))
      ) : (
        <p>No students for this house.</p>
      )}
    </ul>
  );
}
