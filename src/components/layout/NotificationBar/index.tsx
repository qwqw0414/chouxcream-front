import { useAppDispatch, useAppSelector } from "@/store"
import { Drawer, IconButton, Typography } from "@material-tailwind/react"
import React from "react"
import { closeNotificationBar } from "@/store/features/layoutSlice"



export const NotificationBar: React.FC = () => {

    // redux store에서 notificationBar 상태를 가져옴
    const open = useAppSelector((state) => state.layoutReducer.notificationBar) || false;

    const dispatch = useAppDispatch();

    return (
        <Drawer
            open={open}
            onClose={() => dispatch(closeNotificationBar())}
            className="p-4"
            size={420}
            placement="right">
            <div>
                <div className="mb-6 flex items-center">
                    <IconButton variant="text" color="gray" onClick={() => dispatch(closeNotificationBar())}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1}
                            stroke="currentColor"
                            className="h-7 w-7"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M6 18L18 6M6 6l12 12"
                            />
                        </svg>
                    </IconButton>
                    <Typography variant="h5">
                        알림
                    </Typography>
                </div>
            </div>
        </Drawer>
    )
}