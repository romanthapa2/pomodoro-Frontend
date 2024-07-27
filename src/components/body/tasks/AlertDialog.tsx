import {
    AlertDialog,
    AlertDialogContent,
    AlertDialogTrigger,
  } from "@/components/ui/alert-dialog"
  import { Button } from "@/components/ui/button"
  import AlertContent from "./AlertDialogContent"
  
  export function AlertDialogDemo() {
    return (
      <AlertDialog>
        <AlertDialogTrigger asChild>
          <Button variant="outline" className="w-[40%] p-7 my-6">Add Task</Button>
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertContent/>
        </AlertDialogContent>
      </AlertDialog>
    )
  }
  