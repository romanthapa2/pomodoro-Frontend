import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const ReportContent = () => {
  return (
    <Tabs defaultValue="account" className="w-full">
      <TabsList className="flex justify-evenly items-center">
        <TabsTrigger value="account">Account</TabsTrigger>
        <TabsTrigger value="password">Password</TabsTrigger>
      </TabsList>
      <TabsContent value="account">Make changes to your account here.</TabsContent>
      <TabsContent value="password">Change your password here.</TabsContent>
    </Tabs>
  );
};

export default ReportContent;
