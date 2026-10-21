"use client";

import { managementTeam } from "@/constant/aboutUs";
import TitleSection from "@/components/title";
import UnderLine from "@/components/common/underLine";
import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { GrLinkedinOption } from "react-icons/gr";
import { IoClose } from "react-icons/io5";
import { FiArrowUpRight } from "react-icons/fi";

type Member = (typeof managementTeam.members)[number];

const getInitials = (name: string) =>
  name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((word) => word[0].toUpperCase())
    .join("");

function MemberPhoto({
  member,
  className = "",
  initialsClassName = "text-6xl",
}: {
  member: Member;
  className?: string;
  initialsClassName?: string;
}) {
  return (
    <div
      className={`relative overflow-hidden ${
        member.image ? "bg-white" : "bg-primary"
      } ${className}`}
    >
      {member.image ? (
        <Image
          src={member.image}
          alt={member.name}
          fill
          className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
        />
      ) : (
        <div
          className={`grid h-full place-content-center font-bold tracking-tight text-secondary ${initialsClassName}`}
        >
          {getInitials(member.name)}
        </div>
      )}
    </div>
  );
}

function LinkedinLink({ member }: { member: Member }) {
  if (!member.linkedin) return null;
  return (
    <a
      href={member.linkedin}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${member.name} on LinkedIn`}
      className="inline-flex w-fit items-center gap-2 rounded-full border border-border px-4 py-2 text-sm font-semibold text-primary transition-colors hover:border-secondary hover:bg-secondary hover:text-white"
    >
      <GrLinkedinOption className="text-base" />
      LinkedIn
    </a>
  );
}

function MemberModal({
  member,
  onClose,
}: {
  member: Member;
  onClose: () => void;
}) {
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    closeRef.current?.focus();
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [onClose]);

  const hasBio = member.bio && member.bio.length > 0;

  return (
    <motion.div
      className="fixed inset-0 z-[70] grid place-items-center p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
    >
      <div
        className="absolute inset-0 bg-black/70"
        onClick={onClose}
        aria-hidden="true"
      />

      <motion.div
        role="dialog"
        aria-modal="true"
        aria-labelledby="member-modal-title"
        className="relative grid w-full max-w-3xl max-h-[90vh] overflow-hidden rounded-3xl bg-white shadow-2xl md:grid-cols-[2fr_3fr]"
        initial={{ opacity: 0, y: 24, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 24, scale: 0.97 }}
        transition={{ duration: 0.25, ease: "easeOut" }}
      >
        <MemberPhoto
          member={member}
          className="h-56 md:h-full md:min-h-[420px]"
          initialsClassName="text-7xl"
        />

        <div className="grid content-start gap-5 overflow-y-auto p-6 md:p-8">
          <div className="grid gap-1 pr-10">
            <h3
              id="member-modal-title"
              className="text-2xl md:text-3xl font-bold tracking-tight text-primary"
            >
              {member.name}
            </h3>
            <p className="font-semibold text-secondary">{member.position}</p>
            <span className="mt-3 h-1 w-12 rounded-full bg-secondary" />
          </div>

          {hasBio ? (
            <div className="grid gap-4">
              {member.bio!.map((paragraph, index) => (
                <p key={index} className="leading-relaxed text-gray">
                  {paragraph}
                </p>
              ))}
            </div>
          ) : (
            <p className="italic text-gray">Bio coming soon.</p>
          )}

          <LinkedinLink member={member} />
        </div>

        <button
          ref={closeRef}
          type="button"
          onClick={onClose}
          aria-label="Close"
          className="absolute right-4 top-4 grid size-10 cursor-pointer place-content-center rounded-full bg-white/90 text-xl text-primary shadow-md transition-colors hover:bg-secondary hover:text-white"
        >
          <IoClose />
        </button>
      </motion.div>
    </motion.div>
  );
}

export default function ManagementTeam() {
  const [selected, setSelected] = useState<Member | null>(null);

  return (
    <div className="container py-16 grid gap-12">
      <div className="grid gap-6 text-center place-items-center">
        <TitleSection>
          <UnderLine>{managementTeam.title}</UnderLine>
        </TitleSection>
        <p className="max-w-2xl text-lg leading-relaxed text-gray">
          {managementTeam.subtitle}
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-6 [&>*]:w-full sm:[&>*]:w-[calc((100%-1.5rem)/2)] lg:[&>*]:w-[calc((100%-4.5rem)/4)]">
        {managementTeam.members.map((member, index) => (
          <button
            key={index}
            type="button"
            onClick={() => setSelected(member)}
            aria-label={`Read more about ${member.name}`}
            className="group flex cursor-pointer flex-col overflow-hidden rounded-3xl border border-border bg-white text-left shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
          >
            <div className="relative w-full shrink-0">
              <MemberPhoto member={member} className="aspect-[4/5]" />
              <span className="absolute inset-x-0 bottom-0 h-1 bg-secondary scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100" />
            </div>

            <div className="flex w-full flex-1 items-start justify-between gap-3 p-5">
              <div className="grid gap-1">
                <h3 className="text-lg font-bold tracking-tight text-primary">
                  {member.name}
                </h3>
                <p className="text-sm font-medium text-secondary">
                  {member.position}
                </p>
              </div>
              <span className="grid size-10 shrink-0 place-content-center rounded-full border border-border text-lg text-primary transition-colors group-hover:border-secondary group-hover:bg-secondary group-hover:text-white">
                <FiArrowUpRight />
              </span>
            </div>
          </button>
        ))}
      </div>

      <AnimatePresence>
        {selected && (
          <MemberModal member={selected} onClose={() => setSelected(null)} />
        )}
      </AnimatePresence>
    </div>
  );
}
