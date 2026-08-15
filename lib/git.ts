import { execSync } from "node:child_process";

function gitDate(args: string): string | null {
  try {
    const iso = execSync(`git log -1 --format=%cI ${args}`, {
      encoding: "utf8",
      stdio: ["ignore", "pipe", "ignore"],
    }).trim();
    const d = new Date(iso);
    return Number.isNaN(d.getTime()) ? null : iso;
  } catch {
    return null;
  }
}

export function gitLastCommitDate(): string | null {
  return gitDate("");
}

export function gitFirstCommitDate(): string | null {
  try {
    const root = execSync("git rev-list --max-parents=0 HEAD", {
      encoding: "utf8",
      stdio: ["ignore", "pipe", "ignore"],
    })
      .trim()
      .split("\n")[0];
    if (!root) return null;
    return gitDate(root);
  } catch {
    return null;
  }
}
