import { AlertDialog, AlertDialogContent, AlertDialogTrigger } from "@/components/ui/alert-dialog";
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
        <button className={`${className}`}>
        {button}
        </button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertContent button={button} index={index} />
      </AlertDialogContent>
    </AlertDialog>
  );
}
