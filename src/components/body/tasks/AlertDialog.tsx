import { AlertDialog, AlertDialogContent, AlertDialogTrigger } from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import AlertContent from "./AlertDialogContent";
import { ReactNode } from "react";

interface props {
  button: ReactNode;
  className: string;
  index?: number;
}

export function AlertDialogDemo({ button, className, index }: props) {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="outline" className={className}>
          {button}
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertContent button={button} index={index} />
      </AlertDialogContent>
    </AlertDialog>
  );
}
