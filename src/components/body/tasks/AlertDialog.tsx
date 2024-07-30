import {
    AlertDialog,
    AlertDialogContent,
    AlertDialogTrigger,
  } from "@/components/ui/alert-dialog"
  import { Button } from "@/components/ui/button"
  import AlertContent from "./AlertDialogContent"
  import { PiDotsThreeOutlineVerticalThin } from "react-icons/pi";
  
  export function AlertDialogDemo() {
    return (
      <AlertDialog>
        <AlertDialogTrigger asChild>
          <>
          <Button variant="outline" className="w-[40%] p-7 my-6">Add Task</Button>
          {/* <Button variant="outline" className="w-[40%] p-7 my-6">Add Task</Button> */}
          <PiDotsThreeOutlineVerticalThin/>
          </>
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertContent/>
        </AlertDialogContent>
      </AlertDialog>
    )
  }
  