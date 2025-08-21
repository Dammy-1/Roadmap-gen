
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "../api/auth/[...nextauth]/route"; // adjust if your path differs

export default async function DashboardPage() {
  const session = await getServerSession(authOptions);

  if (!session) {
    // 🚫 Not signed in → kick back to /sign-in
    redirect("/sign-up");
  }

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold">Welcome to your Dashboard 🚀</h1>
      <p className="mt-4 text-lg">You’re logged in as {session.user?.email}</p>
    </div>
  );
}


// <div className="flex items-center gap-4">
//               <Button 
//                 size="lg" 
//                 className="bg-gradient-to-r from-[#5964FC] to-[#9134EA] hover:from-[#4f5df3] hover:to-[#882be1] text-xl transition-all duration-200 rounded-3xl px-8 py-9"
//                 onClick={() => setActiveTab("signup")}
//               >
//                 Start Learning Today
//                 <ChevronRight className="h-4 w-4" />
//               </Button>
//             </div>