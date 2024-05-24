import { StatList, StatListItem } from "@/components/stat-list";

export default function Fact2() {
  return (
    <StatList>
      <StatListItem label="years of experience" value="10+" />
      <StatListItem label="satisfied clients" value="5k+" />
      <StatListItem label="successful campaigns" value="10K+" />
      <StatListItem label="fund raised by our clients" value="$350mn" />
    </StatList>
  );
}
