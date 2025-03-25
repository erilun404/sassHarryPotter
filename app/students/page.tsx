"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { BASE_URL } from "@/utils/api";
import { StudentsType } from "@/utils/types";

const fetchStudents = async (): Promise<StudentsType[]> => {
  try {
    const res = await fetch(`${BASE_URL}characters/students`);
    if (!res.ok) throw new Error("Failed to fetch students");
    return await res.json();
  } catch (err) {
    console.error("Error fetching students:", err);
    return [];
  }
};

export default function Students() {
  const [students, setStudents] = useState<StudentsType[]>([]);

  useEffect(() => {
    const getData = async () => {
      const data = await fetchStudents();
      setStudents(data);
    };
    getData();
  }, []);

  return (
    <ul className="students-container">
      {students.map((student) => (
        <li key={student.id} className="students-container__item">
          <Link
            href={`/students/${student.id}`}
            className="students-container__link"
          >
            {student.name}
          </Link>
        </li>
      ))}
    </ul>
  );
}
