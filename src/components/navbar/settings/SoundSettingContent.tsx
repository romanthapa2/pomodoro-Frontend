import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import React from "react";


const SoundSettingContent = () => {
  const [sound, setSound] = React.useState(
    () => localStorage.getItem("sound") || "Telephone");
  const setSoundValue = (value: string) =>{
    setSound(value);
    localStorage.setItem("sound", value);
  }
  return (
    <>
      <div className="my-5 space-y-3">
        <h2 className="text-lg text-slate-500 font-bold">SOUND</h2>
        <div className="flex justify-between flex-row items-center">
          <h3 className="text-lg font-semibold"> Alarm Sound </h3>
          <Select value={sound} onValueChange={setSoundValue}>
            <SelectTrigger className="w-24 bg-slate-300">
              <SelectValue  placeholder="Select Sound"/>
            </SelectTrigger>
            <SelectContent>
              {/* <SelectItem value="light">Kitchen</SelectItem> */}
              <SelectItem value="Telephone">Telephone</SelectItem>
              <SelectItem value="Kitchen">Kitchen</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="flex justify-between flex-row items-center">
          <h3 className="text-lg font-semibold">Repeat</h3>
          <input
            className="bg-slate-300 p-2 rounded-md w-24"
            min="1"
            max="100"
            type="number"
            value="5"
            //       onChange={}
          ></input>
        </div>
      </div>
    </>
  );
};

export default SoundSettingContent;
