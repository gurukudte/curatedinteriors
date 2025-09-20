import { auth } from "@/auth";
import LeadsTable from "./LeadsTable"; 
import Unauthorized from "@/app/unauthorized/page";

export default async function DashboardPage() {
  const session = await auth();

  // If user is not logged in or not admin, show Unauthorized
  if (!session?.user || !["SUPERADMIN", "ADMIN"].includes(session.user.role)) {
    return (
      <div className="h-screen">
        <Unauthorized />
      </div>
    );
  }

  return <LeadsTable />;
}



