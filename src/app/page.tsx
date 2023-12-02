import Login from "@/features/users/login/login";
import {redirect} from "next/navigation"
// import Accueil from "@features/users/index"
export default function Page() {

  return (
    redirect("/login")
  );
}