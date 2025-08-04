"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { SyncLoader } from "react-spinners";
import Help from "@/components/help";
import client from "../../../lib/sanityClient";

// Define the TypeScript interface for release notes
interface ReleaseNote {
  _id: string;
  version: string;
  date: string;
  body: any[];
  slug: { current: string };
  category: "version" | "technical";
}

export default function Releasedetails() {
  const [loading, setLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);
  const [releaseNotes, setReleaseNotes] = useState<ReleaseNote[]>([]);

  const versionNotes = releaseNotes.filter(
    (note) => note.category === "version"
  );
  const technicalNotes = releaseNotes.filter(
    (note) => note.category === "technical"
  );

  useEffect(() => {
    const fetchReleaseNotes = async () => {
      try {
        const query = `*[_type == "sdms-release-notes"] | order(date desc) {
          _id,
          version,
          date,
          body,
          slug,
          category
        }`;
        const result: ReleaseNote[] = await client.fetch(query);
        setReleaseNotes(result);
      } catch (error) {
        console.error("Error fetching release notes:", error);
      } finally {
        setTimeout(() => {
          setFadeOut(true);
          setTimeout(() => setLoading(false), 500);
        }, 300);
      }
    };

    fetchReleaseNotes();
  }, []);

  // Format date as "MMM dd, yyyy" (e.g., Sep 27, 2024)
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat("en-US", {
      month: "short",
      day: "2-digit",
      year: "numeric",
    }).format(date);
  };

  if (loading) {
    return (
      <div className={`preloader ${fadeOut ? "fade-out" : ""}`}>
        <SyncLoader color="#1163ea" size={20} />
      </div>
    );
  }

  return (
    <div className="product">
      <div className="inner-page">
        <nav className="navbar">
          <ul className="list-unstyled row mb-0">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/release-product">Product Release Notes</Link>
            </li>
          </ul>
        </nav>
      </div>

      <div className="troble-article-list">
        <div className="container">
          <h1 className="text-center">SDMS Release Notes</h1>
          <div className="row">
            <div className="col-6 text-left">
              <h2>Version Release Notes</h2>
              <ul className="release-lists">
                {versionNotes.map((note) => (
                  <li key={note._id}>
                    <Link href={`/sdms-release-details/${note.slug.current}`}>
                      <span className="release-title">
                        Release Notes: Version {note.version}
                      </span>
                    </Link>
                    <span className="d-block release-date">
                      {formatDate(note.date)}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
{/* 
            <div className="col-6 text-left">
              <h2>Technical Release Notes</h2>
              <ul className="release-lists">
                {technicalNotes.map((note) => (
                  <li key={note._id}>
                    <Link href={`/sdms-release-details/${note.slug.current}`}>
                      <span className="release-title">
                        Release Notes: Version {note.version}
                      </span>
                    </Link>
                    <span className="d-block release-date">
                      {formatDate(note.date)}
                    </span>
                  </li>
                ))}
              </ul>
            </div> */}
          </div>
        </div>
      </div>
      <Help />
    </div>
  );
}
