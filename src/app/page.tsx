import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";

export default function Home() {
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
