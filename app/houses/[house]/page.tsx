"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { StudentsType } from "@/utils/types";
import { BASE_URL } from "@/utils/api";
import HouseCard from "@/components/HouseCard";

export default function HousePage() {
  const params = useParams();
  const houseName = params.house as string;

  const validHouses = ["gryffindor", "slytherin", "hufflepuff", "ravenclaw"];
  if (!validHouses.includes(houseName)) {
    return <p>Chose a house.</p>;
  }

  const [characters, setCharacters] = useState<StudentsType[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!houseName) return;

    const fetchCharacters = async () => {
      try {
        const res = await fetch(`${BASE_URL}characters/house/${houseName}`);
        if (!res.ok) throw new Error("Failed to fetch");

        const data: StudentsType[] = await res.json();
        setCharacters(data);
      } catch (error) {
        console.error("Error fetching characters:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCharacters();
  }, [houseName]);

  if (loading) return <p>Loading...</p>;

  return (
    <div className={`house house--${houseName}`}>
      {characters && <HouseCard characters={characters} />}
    </div>
  );
}
