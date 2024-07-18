import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { TbReportAnalytics } from "react-icons/tb";
import ReportContent from "./ReportContent";

const viewReport = () => {
  return (
    <AlertDialog>
      <AlertDialogTrigger className="flex items-center bg-slate-600 p-1.5 rounded-md" >
      <TbReportAnalytics />
      <span className="hidden md:inline-block">Report</span>
        </AlertDialogTrigger>
      <AlertDialogContent>
          <ReportContent/>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction>Continue</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default viewReport;
