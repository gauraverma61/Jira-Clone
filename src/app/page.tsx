import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { getCurrent } from "@/features/auth/action";
import { redirect } from "next/navigation";

export default async function Home() {
  const user = await getCurrent();

  if (!user) {
    redirect("/sign-in")
  }

  return (
    <div className=" p-10 flex gap-6">
      <Input/>
      <Button variant="primary">Default</Button>
      <Button variant="secondary">Click me</Button>
      <Button variant="destructive">Click me</Button>
      <Button variant="ghost">ghost</Button>
      <Button variant="muted">Click me</Button>
      <Button variant="teritary">TClick me</Button>
    </div>
  );
}
