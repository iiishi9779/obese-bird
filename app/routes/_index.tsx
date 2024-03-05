import type { MetaFunction } from "@remix-run/node";
import { PlusIcon } from "@radix-ui/react-icons"
import { Input } from '~/components/ui/input'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "~/components/ui/card"
import { Button } from "~/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "~/components/ui/dialog";
import { Outlet } from "@remix-run/react";

export const meta: MetaFunction = () => {
  return [
    { title: "Obese Birds" },
    { name: "description", content: "fullstack template" },
  ];
};

export default function Index() {
  return (
    <div className="h-screen flex justify-center items-center bg-slate-100">
      <Card className="w-[380px]">
        <CardHeader className="flex-row justify-between items-center">
          <CardTitle>Users</CardTitle>

          <Dialog>
            <DialogTrigger asChild>
              <Button variant="outline">
                <PlusIcon />
              </Button>
            </DialogTrigger>
            <DialogContent>
              <Outlet />
              <DialogHeader>
                <DialogTitle>Add User</DialogTitle>
              </DialogHeader>
            </DialogContent>
          </Dialog>

        </CardHeader>
        <CardContent>
          <Input placeholder="search for username" className="bg-slate-100" />

        </CardContent>
      </Card>
    </div>

  );
}
