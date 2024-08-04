import { AlertDialog, AlertDialogContent, AlertDialogTrigger } from "@/components/ui/alert-dialog";
import AlertContent from "./AlertDialogContent";
import { ReactNode } from "react";


interface Task {
  text: string;
  no: number;
}

interface props {
  button: ReactNode;
  className: string;
  index?: number;
  initialTask?: Task;
}

export function AlertDialogDemo({ button, className, index, initialTask }: props) {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <button className={`${className}`}>
        {button}
        </button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertContent button={button} index={index} initialTask={initialTask} />
      </AlertDialogContent>
    </AlertDialog>
  );
}
