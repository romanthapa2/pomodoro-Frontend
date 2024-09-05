import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import AlertContent from "./AlertDialogContent";
import { ReactNode, useState } from "react";

interface Task {
  text: string;
  setTaskNo: number;
}

interface props {
  button: ReactNode;
  className: string;
  index?: number;
  initialTask?: Task;
}

export function AlertDialogDemo({
  button,
  className,
  index,
  initialTask,
}: props) {
  const [open, setOpen] = useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <AlertDialog open={open} onOpenChange={setOpen}>
      <AlertDialogTrigger asChild>
        <button className={`${className}`} onClick={() => setOpen(true)}>
          {button}
        </button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertContent
          button={button}
          index={index}
          initialTask={initialTask}
          onClose={handleClose}
        />
      </AlertDialogContent>
    </AlertDialog>
  );
}
