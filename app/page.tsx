"use client";

import { motion, type Variants } from "motion/react";
import Link from "next/link";
import { type FormEvent, type ReactNode, useState } from "react";

const primary600 = "#2563eb";
const accent500 = "#f97316";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 24, scale: 0.97 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.45, ease: EASE },
  },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: EASE },
  },
};

type IconProps = { size?: number; className?: string };

function Icon({
  children,
  size = 24,
  className,
}: {
  children: ReactNode;
  size?: number;
  className?: string;
}) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {children}
    </svg>
  );
}

function ExpandMore({ size, className }: IconProps) {
  return (
    <Icon size={size} className={className}>
      <path d="m6 9 6 6 6-6" />
    </Icon>
  );
}

function TrendingUp({ size, className }: IconProps) {
  return (
    <Icon size={size} className={className}>
      <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
      <polyline points="16 7 22 7 22 13" />
    </Icon>
  );
}

function FileEdit({ size, className }: IconProps) {
  return (
    <Icon size={size} className={className}>
      <path d="M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4" />
      <path d="M14 2v4a2 2 0 0 0 2 2h4" />
      <path d="M10.4 12.6a2.1 2.1 0 0 1 3 3L9 20l-4 1 1-4Z" />
    </Icon>
  );
}

function AlarmClock({ size, className }: IconProps) {
  return (
    <Icon size={size} className={className}>
      <circle cx="12" cy="13" r="8" />
      <path d="M12 9v4l2 2" />
      <path d="M5 3 2 6" />
      <path d="m22 6-3-3" />
    </Icon>
  );
}

function Trophy({ size, className }: IconProps) {
  return (
    <Icon size={size} className={className}>
      <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
      <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
      <path d="M4 22h16" />
      <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" />
      <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" />
      <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" />
    </Icon>
  );
}

function MusicNote({ size, className }: IconProps) {
  return (
    <Icon size={size} className={className}>
      <circle cx="6" cy="18" r="3" />
      <circle cx="18" cy="16" r="3" />
      <path d="M9 18V5l12-2v13" />
    </Icon>
  );
}

function HeartPulse({ size, className }: IconProps) {
  return (
    <Icon size={size} className={className}>
      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
      <path d="M3.22 12H9.5l.5-1 2 4.5 2-7 1.5 3.5h5.27" />
    </Icon>
  );
}

function Shield({ size, className }: IconProps) {
  return (
    <Icon size={size} className={className}>
      <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1Z" />
    </Icon>
  );
}

function AlertTriangle({ size, className }: IconProps) {
  return (
    <Icon size={size} className={className}>
      <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" />
      <path d="M12 9v4" />
      <path d="M12 17h.01" />
    </Icon>
  );
}

function GraduationCap({ size, className }: IconProps) {
  return (
    <Icon size={size} className={className}>
      <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
      <path d="M6 12v5c3 3 9 3 12 0v-5" />
    </Icon>
  );
}

function Music({ size, className }: IconProps) {
  return (
    <Icon size={size} className={className}>
      <path d="M9 18V5l12-2v13" />
      <circle cx="6" cy="18" r="3" />
      <circle cx="18" cy="16" r="3" />
    </Icon>
  );
}

function Stethoscope({ size, className }: IconProps) {
  return (
    <Icon size={size} className={className}>
      <path d="M4.8 2.3A.3.3 0 1 0 5 2H4a2 2 0 0 0-2 2v5a6 6 0 0 0 6 6 6 6 0 0 0 6-6V4a2 2 0 0 0-2-2h-1a.2.2 0 1 0 .3.3" />
      <path d="M8 15v1a6 6 0 0 0 6 6 6 6 0 0 0 6-6v-4" />
      <circle cx="20" cy="10" r="2" />
    </Icon>
  );
}

function Users({ size, className }: IconProps) {
  return (
    <Icon size={size} className={className}>
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </Icon>
  );
}

type Category = "Academics" | "Sports" | "Music" | "Health" | "Student";

const CATEGORIES: { label: Category; icon: typeof GraduationCap }[] = [
  { label: "Academics", icon: GraduationCap },
  { label: "Sports", icon: Trophy },
  { label: "Music", icon: Music },
  { label: "Health", icon: Stethoscope },
  { label: "Student", icon: Users },
];

async function submitWaitlist(email: string): Promise<void> {
  await new Promise((resolve) => setTimeout(resolve, 900));
  if (!email.includes("@")) {
    throw new Error("valid_email");
  }
}

function Logo({ className }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2 ${className ?? ""}`}>
      <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-primary-600 to-accent-500 text-sm font-bold text-white shadow-md shadow-primary-600/30">
        K
      </span>
      <span className="text-lg font-extrabold tracking-tight text-foreground">
        Kover<span className="text-primary-600">360</span>
      </span>
    </span>
  );
}

export default function Home() {
  const [active, setActive] = useState<Category>("Academics");
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "done" | "error">(
    "idle",
  );

  async function onJoin(e: FormEvent) {
    e.preventDefault();
    if (!email.trim()) return;
    setStatus("loading");
    try {
      await submitWaitlist(email.trim());
      setStatus("done");
    } catch {
      setStatus("error");
    }
  }

  return (
    <main className="flex min-h-screen flex-col overflow-x-hidden">
      <NavBar />

      <Hero
        active={active}
        setActive={setActive}
        onScrollTo={() => document.getElementById("waitlist")?.scrollIntoView()}
      />

      {/* Comparison sections */}
      <FeatureSection
        eyebrow="Login & Security"
        icon={Shield}
        title="Every person belongs in the right room."
        description="Multi-factor authentication and a distinct, permissioned login for every role — so a parent can never see what only a counsellor should."
        problemTitle="Most ERPs"
        problemCopy="Everyone shares the same login screen, and often the same single password, on whatever device is closest."
        solutionTitle="Kover360"
        solutionCopy="Multi-factor authentication and a distinct, permissioned login for every role, so a parent can never see what only a counsellor should."
        problemIcon={ExpandMore}
        solutionIcon={Shield}
        chips={["MFA everywhere", "Role permissions"]}
      />

      <FeatureSection
        eyebrow="Academics"
        icon={TrendingUp}
        title="A dip is caught the week it starts."
        description="Marks go in continuously, and a trend line is watched. A drop in performance is flagged the moment it begins — not at the term report."
        problemTitle="Most ERPs"
        problemCopy="Marks go in, and a report card comes out at the end of the term. That's where it ends."
        solutionTitle="Kover360"
        solutionCopy="Marks go in continuously, and the trend line is watched, flagging a dip the week it starts, not the term it ends."
        problemIcon={FileEdit}
        solutionIcon={TrendingUp}
        chips={["Continuous tracking", "Early dip flags"]}
        reverse
      />

      <FeatureSection
        eyebrow="Homework & Assignments"
        icon={AlarmClock}
        title="From a chapter to a question paper in minutes."
        description="A teacher uploads a chapter or their own notes, and a full question paper or assignment comes back in minutes."
        problemTitle="Most ERPs"
        problemCopy="Every question paper and worksheet is written by hand, one teacher at a time."
        solutionTitle="Kover360"
        solutionCopy="A teacher uploads a chapter or their own notes, and a question paper or assignment comes back in minutes."
        problemIcon={FileEdit}
        solutionIcon={AlarmClock}
        chips={["Upload anything", "Instant papers"]}
      />

      <FeatureSection
        eyebrow="Sports"
        icon={Trophy}
        title="Sport gets a real record, not a pinned schedule."
        description="Attendance, performance and improvement in sport are tracked with the same rigor as any subject."
        problemTitle="Most ERPs"
        problemCopy="Sport is a schedule pinned to a noticeboard, not a record kept anywhere in the system."
        solutionTitle="Kover360"
        solutionCopy="Attendance, performance and improvement in sport are tracked with the same rigor as a subject."
        problemIcon={FileEdit}
        solutionIcon={Trophy}
        chips={["Attendance", "Performance", "Improvement"]}
        reverse
      />

      <FeatureSection
        eyebrow="Music & the Arts"
        icon={MusicNote}
        title="Growth that lives in the official record."
        description="Every rehearsal, recital and grade is tracked as part of a student's growth — not filed away as extracurricular noise."
        problemTitle="Most ERPs"
        problemCopy="Music, art and drama rarely appear anywhere in a student's official record."
        solutionTitle="Kover360"
        solutionCopy="Every rehearsal, recital and grade is tracked as part of a student's growth, not filed away as extracurricular noise."
        problemIcon={FileEdit}
        solutionIcon={MusicNote}
        chips={["Rehearsals", "Recitals", "Grades"]}
      />

      <FeatureSection
        eyebrow="Health"
        icon={HeartPulse}
        title="A digital health card, visible only to those meant to see it."
        description="Checkups, fitness and history live in one digital card — permissioned to the people who should see it."
        problemTitle="Most ERPs"
        problemCopy="Health records live in a paper file in the school office, if they exist at all."
        solutionTitle="Kover360"
        solutionCopy="A digital health card holds checkups, fitness and history, visible only to the people who are meant to see it."
        problemIcon={FileEdit}
        solutionIcon={HeartPulse}
        chips={["Checkups", "Fitness", "History"]}
        reverse
      />

      <FeatureSection
        eyebrow="Catching a student falling behind"
        icon={Users}
        title="Flagged automatically. Supported immediately."
        description="A student who hasn't improved in months is flagged automatically, and a teacher and counsellor are brought into the same conversation."
        problemTitle="Most ERPs"
        problemCopy="A struggling student is usually noticed at the next report card, by which time months have passed."
        solutionTitle="Kover360"
        solutionCopy="A student who hasn't improved in months is flagged automatically, and a teacher and counsellor are brought into the same conversation."
        problemIcon={TrendingUp}
        solutionIcon={Users}
        chips={["Auto flagging", "Teacher + counsellor"]}
      />

      <SosSection
        onJoin={() => document.getElementById("waitlist")?.scrollIntoView()}
      />

      <WaitlistSection
        email={email}
        setEmail={setEmail}
        onSubmit={onJoin}
        status={status}
      />

      <Footer />
    </main>
  );
}

function NavBar() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/70 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link href="#" aria-label="Kover360 home">
          <Logo />
        </Link>
        <nav
          aria-label="Main"
          className="hidden items-center gap-8 text-sm font-medium text-muted-foreground md:flex"
        >
          <Link
            className="transition-colors hover:text-foreground"
            href="#features"
          >
            Features
          </Link>
          <Link className="transition-colors hover:text-foreground" href="#sos">
            Safety
          </Link>
          <Link
            className="transition-colors hover:text-foreground"
            href="#waitlist"
          >
            Waitlist
          </Link>
        </nav>
        <button
          type="button"
          onClick={() => document.getElementById("waitlist")?.scrollIntoView()}
          className="inline-flex h-10 cursor-pointer items-center gap-2 rounded-full bg-foreground px-4 py-2 text-sm font-semibold text-background transition-colors duration-200 hover:bg-primary-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
        >
          Join the waitlist
        </button>
      </div>
    </header>
  );
}

function Hero({
  active,
  setActive,
  onScrollTo,
}: {
  active: Category;
  setActive: (c: Category) => void;
  onScrollTo: () => void;
}) {
  return (
    <section
      id="top"
      className="relative overflow-hidden"
      style={{
        backgroundImage: `radial-gradient(1100px circle at 15% 0%, ${primary600}33, transparent 60%), radial-gradient(900px circle at 85% 15%, ${accent500}2e, transparent 55%), radial-gradient(1200px circle at 50% 120%, ${primary600}33, transparent 60%)`,
      }}
    >
      <div className="mx-auto flex max-w-6xl flex-col items-center px-4 pb-24 pt-16 text-center sm:px-6 sm:pt-24">
        <motion.div variants={container} initial="hidden" animate="show">
          <motion.div variants={cardVariants}>
            <span className="inline-flex items-center gap-2 rounded-full border border-border/70 bg-background/70 px-4 py-1.5 text-sm font-medium text-muted-foreground backdrop-blur">
              <span className="inline-block h-2 w-2 rounded-full bg-accent-500" />
              Built for schools. Built for every student.
            </span>
          </motion.div>

          <motion.h1
            variants={cardVariants}
            className="mt-8 text-5xl font-extrabold leading-[0.98] tracking-tight text-foreground sm:text-7xl md:text-8xl"
          >
            No one is
            <br />
            <span className="bg-gradient-to-r from-primary-600 via-primary-400 to-accent-500 bg-clip-text text-transparent">
              left behind.
            </span>
          </motion.h1>

          <motion.p
            variants={cardVariants}
            className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground sm:text-xl"
          >
            One platform for a student&apos;s whole school life — academics,
            sports, music, health, and the moments that don&apos;t show up on a
            report card.
          </motion.p>

          <motion.button
            variants={cardVariants}
            onClick={onScrollTo}
            className="mt-10 inline-flex h-14 cursor-pointer items-center justify-center gap-2 rounded-full bg-accent-500 px-8 text-base font-semibold text-accent-foreground shadow-xl shadow-accent-500/30 transition-all duration-200 hover:bg-accent-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
          >
            Join the waitlist
            <TrendingUp size={18} className="inline-block" />
          </motion.button>

          {/* Category tabs */}
          <motion.div
            variants={container}
            className="mt-16 flex flex-wrap items-center justify-center gap-3"
          >
            {CATEGORIES.map(({ label, icon: IconComp }) => (
              <motion.button
                key={label}
                variants={cardVariants}
                type="button"
                aria-pressed={active === label}
                onClick={() => setActive(label)}
                className={`inline-flex cursor-pointer items-center gap-2 rounded-full border px-5 py-2.5 text-sm font-semibold backdrop-blur transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring ${
                  active === label
                    ? "border-lime-400/60 bg-primary-600/10 text-primary-600 shadow-inner"
                    : "border-border/70 bg-background/70 text-muted-foreground hover:border-primary-400 hover:text-primary-600"
                }`}
              >
                <IconComp size={16} className="inline-block" />
                {label}
              </motion.button>
            ))}
          </motion.div>

          <motion.p
            variants={cardVariants}
            className="mt-14 text-xs font-semibold uppercase tracking-[0.25em] text-muted-foreground"
          >
            Everything an ERP tracks.
            <span className="mx-2 text-accent-500">/</span>
            Everything it doesn&apos;t.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}

function FeatureSection({
  eyebrow,
  icon: EyebrowIcon,
  title,
  description,
  problemTitle,
  problemCopy,
  solutionTitle,
  solutionCopy,
  problemIcon: ProblemIcon,
  solutionIcon: SolutionIcon,
  chips = [],
  reverse = false,
}: {
  eyebrow: string;
  icon: typeof Shield;
  title: string;
  description: string;
  problemTitle: string;
  problemCopy: string;
  solutionTitle: string;
  solutionCopy: string;
  problemIcon: typeof Shield;
  solutionIcon: typeof Shield;
  chips?: string[];
  reverse?: boolean;
}) {
  return (
    <section
      id="features"
      className="border-b border-border/60 bg-background py-24 sm:py-32"
    >
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className={reverse ? "lg:order-2" : ""}
        >
          <motion.span
            variants={fadeUp}
            className="inline-flex items-center gap-2 rounded-full border border-border/70 bg-muted px-4 py-1.5 text-sm font-semibold text-primary-600"
          >
            <EyebrowIcon size={14} className="inline-block" />
            {eyebrow}
          </motion.span>
          <motion.h2
            variants={fadeUp}
            className="mt-6 text-3xl font-bold tracking-tight text-foreground sm:text-4xl"
          >
            {title}
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="mt-4 max-w-lg text-base leading-relaxed text-muted-foreground sm:text-lg"
          >
            {description}
          </motion.p>
          <motion.ul variants={container} className="mt-8 flex flex-wrap gap-3">
            {chips.map((chip) => (
              <motion.li
                key={chip}
                variants={cardVariants}
                className="rounded-full border border-border/70 bg-background/70 px-4 py-2 text-sm font-medium text-foreground backdrop-blur"
              >
                {chip}
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className={`grid gap-5 ${reverse ? "lg:order-1" : ""}`}
        >
          <motion.div
            variants={cardVariants}
            className="rounded-3xl border border-border/70 bg-muted/50 p-7 text-background"
          >
            <div className="flex items-center gap-3">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-foreground text-xs font-extrabold uppercase tracking-widest">
                ERP
              </span>
              <h3 className="text-base font-bold uppercase tracking-wide text-muted-foreground">
                {problemTitle}
              </h3>
              <ProblemIcon
                size={18}
                className="ml-auto text-muted-foreground"
              />
            </div>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              {problemCopy}
            </p>
          </motion.div>

          <motion.div
            variants={cardVariants}
            className="rounded-3xl border border-transparent bg-gradient-to-br from-primary-600 to-primary-400 p-7 text-white shadow-xl shadow-primary-600/20"
          >
            <div className="flex items-center gap-3">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/15 text-white">
                <SolutionIcon size={18} />
              </span>
              <h3 className="text-base font-bold text-white">
                {solutionTitle}
              </h3>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-primary-100">
              {solutionCopy}
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

function SosSection({ onJoin }: { onJoin: () => void }) {
  return (
    <section
      id="sos"
      className="relative overflow-hidden py-24 sm:py-32"
      style={{
        backgroundImage: `linear-gradient(120deg, #dc2626 0%, #ef4444 55%, #ea580c 100%)`,
      }}
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-black/20" />
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        className="mx-auto flex max-w-6xl flex-col items-center px-4 text-center sm:px-6"
      >
        <motion.div
          variants={cardVariants}
          className="relative flex h-40 w-40 items-center justify-center"
        >
          <motion.span
            aria-hidden
            className="absolute inset-0 rounded-full bg-white/30"
            animate={{ scale: [1, 1.3], opacity: [0.7, 0] }}
            transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2 }}
          />
          <span className="relative inline-flex h-24 w-24 items-center justify-center rounded-full bg-white text-4xl font-black tracking-widest text-destructive shadow-2xl">
            SOS
          </span>
        </motion.div>

        <motion.h2
          variants={fadeUp}
          className="mt-8 max-w-2xl text-3xl font-bold tracking-tight text-white sm:text-5xl"
        >
          Help is a single tap&nbsp;away.
        </motion.h2>
        <motion.p
          variants={fadeUp}
          className="mt-4 max-w-2xl text-base leading-relaxed text-white/85 sm:text-lg"
        >
          A persistent SOS button connects a student straight to a real
          counsellor or a crisis helpline — anonymously if that&apos;s what it
          takes.
        </motion.p>

        <motion.div variants={container} className="mt-10 flex flex-wrap gap-4">
          <button
            type="button"
            onClick={onJoin}
            className="inline-flex h-13 cursor-pointer items-center gap-2 rounded-full bg-white px-7 py-3.5 text-base font-bold text-rose-600 shadow-xl shadow-black/20 transition-transform duration-200 hover:scale-105 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            <AlertTriangle size={18} />
            Get early access
          </button>
          <span className="inline-flex items-center gap-2 rounded-full border border-white/40 bg-white/10 px-5 py-3.5 text-sm font-semibold text-white backdrop-blur">
            <Shield size={16} />
            Anonymity is guaranteed
          </span>
        </motion.div>

        <motion.p
          variants={fadeUp}
          className="mt-10 text-sm font-semibold uppercase tracking-[0.25em] text-white/70"
        >
          Bullying & crises · No one is left behind
        </motion.p>
      </motion.div>
    </section>
  );
}

function WaitlistSection({
  email,
  setEmail,
  onSubmit,
  status,
}: {
  email: string;
  setEmail: (v: string) => void;
  onSubmit: (e: FormEvent) => void;
  status: "idle" | "loading" | "done" | "error";
}) {
  return (
    <section
      id="waitlist"
      className="relative overflow-hidden py-24 sm:py-32"
      style={{
        backgroundImage: `radial-gradient(900px circle at 50% 0%, ${primary600}26, transparent 60%), radial-gradient(700px circle at 15% 100%, ${accent500}1f, transparent 50%)`,
      }}
    >
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.4 }}
        className="mx-auto flex max-w-2xl flex-col items-center px-4 text-center sm:px-6"
      >
        <motion.h2
          variants={fadeUp}
          className="text-3xl font-bold tracking-tight text-foreground sm:text-5xl"
        >
          We&apos;re building this for the first schools who want&nbsp;it.
        </motion.h2>
        <motion.p
          variants={fadeUp}
          className="mt-4 text-base text-muted-foreground sm:text-lg"
        >
          Join the waitlist and be the first school in your city to run on
          Kover360.
        </motion.p>

        {status === "done" ? (
          <motion.div
            variants={cardVariants}
            className="mt-10 rounded-3xl border border-primary-400/40 bg-primary-600/10 px-8 py-6 text-lg font-semibold text-primary-600"
          >
            You&apos;re on the list. We&apos;ll be in touch soon.
          </motion.div>
        ) : (
          <motion.form
            variants={fadeUp}
            onSubmit={onSubmit}
            className="mt-10 flex w-full max-w-md flex-col gap-3 sm:flex-row"
          >
            <label htmlFor="waitlist-email" className="sr-only">
              Your email
            </label>
            <input
              id="waitlist-email"
              type="email"
              required
              autoComplete="email"
              placeholder="Your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              aria-describedby={status === "error" ? "email-error" : undefined}
              className="h-13 flex-1 rounded-full border border-border bg-background px-5 py-3.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary-600 focus:outline-2 focus:outline-offset-2 focus:outline-ring"
            />
            <button
              type="submit"
              disabled={status === "loading"}
              className="inline-flex h-13 cursor-pointer items-center justify-center gap-2 rounded-full bg-primary-600 px-7 py-3.5 text-sm font-bold text-primary-foreground shadow-lg shadow-primary-600/25 transition-all duration-200 hover:bg-primary-700 hover:shadow-xl hover:shadow-primary-600/30 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring disabled:cursor-not-allowed disabled:opacity-60"
            >
              {status === "loading" ? "Joining…" : "Join the waitlist"}
            </button>
          </motion.form>
        )}

        {status === "error" && (
          <motion.p
            variants={fadeUp}
            id="email-error"
            className="mt-3 text-sm font-semibold text-destructive"
          >
            Please enter a valid email address.
          </motion.p>
        )}
      </motion.div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border/70 bg-background py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-4 sm:flex-row sm:px-6">
        <Link href="#top" aria-label="Back to top">
          <Logo />
        </Link>
        <p className="text-sm font-medium text-muted-foreground">
          Kover360 · built in Hyderabad
        </p>
        <Link
          href="#waitlist"
          className="text-sm font-semibold text-primary-600 transition-colors hover:text-primary-700"
        >
          Join the waitlist
        </Link>
      </div>
    </footer>
  );
}
