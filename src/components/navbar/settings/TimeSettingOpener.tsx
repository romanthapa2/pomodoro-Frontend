import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogFooter,
    AlertDialogTrigger,
  } from "@/components/ui/alert-dialog";
  import SettingContent from "./TimeSettingContent";
  import { IoSettingsOutline } from "react-icons/io5";

const TimeSettings:React.FC = ()=>{
    return (
        <AlertDialog>
      <AlertDialogTrigger className="flex items-center justify-center bg-slate-600 p-1.5 rounded-md gap-1 h-16 w-16 md:h-fit md:w-fit" >
      <IoSettingsOutline className="text-2xl md:text-xl"/>
      <span className="hidden md:inline-block">Settings</span>
        </AlertDialogTrigger>
      <AlertDialogContent>
          <SettingContent/>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction>Continue</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
    )
}

export default TimeSettings