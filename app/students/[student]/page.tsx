"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { BASE_URL } from "@/utils/api";
import { StudentsType } from "@/utils/types";
import StudentsCard from "@/components/StudentsCard";
import Link from "next/link";

const fetchStudent = async (id: string): Promise<StudentsType | null> => {
  try {
    const res = await fetch(`${BASE_URL}characters`);
    if (!res.ok) throw new Error("Failed to fetch characters");

    const data: StudentsType[] = await res.json();

    const student = data.find((item) => item.id === id) || null;

    console.log("Fetched student:", student);
    return student;
  } catch (err) {
    console.log("Error fetching student:", err);
    return null;
  }
};

export default function StudentPage() {
  const { student: studentId } = useParams();
  const [student, setStudent] = useState<StudentsType | null>(null);

  console.log("Current student ID:", studentId);

  useEffect(() => {
    if (!studentId) return;

    const getStudentData = async () => {
      console.log("Fetching student with id:", studentId);
      const data = await fetchStudent(studentId as string);
      if (data) {
        setStudent(data);
      }
    };
    getStudentData();
  }, [studentId]);
  if (!student) return <p>Loading...</p>;

  return (
    <div>
      <Link href="/students">
        <button className="button">Go back</button>
      </Link>
      {student && <StudentsCard students={[student]} />}
    </div>
  );
}
