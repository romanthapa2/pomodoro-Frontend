import { AlertDialog, AlertDialogContent, AlertDialogTrigger } from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import AlertContent from "./AlertDialogContent";

interface props {
  text: any;
  className: string;
}

export function AlertDialogDemo({ text, className }: props) {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="outline" className={className}>
          {text}
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertContent />
      </AlertDialogContent>
    </AlertDialog>
  );
}
