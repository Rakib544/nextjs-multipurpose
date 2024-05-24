import { Container } from "@/components/container";
import { StatList, StatListItem } from "@/components/stat-list";

export default function Fact4() {
  return (
    <Container className="mt-20 md:mt-32">
      <StatList>
        <StatListItem label="Loyal Customers" value="200K+" />
        <StatListItem label="Capital Raised" value="500M+" />
        <StatListItem label="Tracked Leads" value="2B+" />
        <StatListItem label="Active Users" value="450K+" />
      </StatList>
    </Container>
  );
}
