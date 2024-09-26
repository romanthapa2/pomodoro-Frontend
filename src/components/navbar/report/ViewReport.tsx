import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { TbReportAnalytics } from "react-icons/tb";
import ReportContent from "./ReportContent";

const viewReport = () => {
  return (
    <AlertDialog >
      <AlertDialogTrigger className="flex items-center justify-center bg-slate-600 p-1.5 rounded-md gap-1 h-16 w-16 md:h-fit md:w-fit" >
      <TbReportAnalytics className="text-2xl md:text-xl"/>
      <span className="hidden md:inline-block">Report</span>
        </AlertDialogTrigger>
      <AlertDialogContent className="">
          <ReportContent />
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction>Continue</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default viewReport;
