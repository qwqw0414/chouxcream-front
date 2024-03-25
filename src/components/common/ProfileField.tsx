import { Button } from "@material-tailwind/react";
import React from "react";

interface ProfileFeildProps {
  label: string;
  value: string;
  onEdit: () => void;
}

const ProfileField: React.FC<ProfileFeildProps> = ({ label, value, onEdit,
}) => {
  return (
    <div className="pt-[10px] pb-[14px] border-b-[1px] border-[#ebebeb]">
      <div className="text-gray-500 text-[13px]">{label}</div>
      <div className="relative items-center flex w-full pt-1">
        <p className="flex-1 pr-[58px] h-[34px]">{value}</p>
        <Button
          type="button"
          onClick={onEdit}
          ripple={false}
          className="h-[34px] w-[50px] flex items-center justify-center rounded-xl bg-white text-gray-500 border-[1px] border-[#D3D3D3] text-[12px] py-0 px-0 hover:shadow-none active:bg-[#F4F4F4] shadow-none cursor-pointer"
        >
          변경
        </Button>
      </div>
    </div>
  );
};

export default ProfileField;
