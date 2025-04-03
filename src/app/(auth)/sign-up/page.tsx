
import { getCurrent } from "@/features/auth/action";
import { SignUpCard } from "@/features/auth/components/sign-up-card";
import { redirect } from "next/navigation";

const SignUpPage = async() => {
  const user = await getCurrent();
    if (user) {
      redirect("/") // Redirect to dashboard or home page
    }
  return <SignUpCard />;
};

export default SignUpPage;
