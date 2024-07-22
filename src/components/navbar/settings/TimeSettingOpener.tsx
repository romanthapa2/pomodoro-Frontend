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
      <AlertDialogTrigger className="flex items-center bg-slate-600 p-1.5 rounded-md" >
      <IoSettingsOutline />
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