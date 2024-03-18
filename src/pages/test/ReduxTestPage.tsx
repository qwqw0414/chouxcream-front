import ContentsWrapper from "@/components/layout/ContentsWrapper"
import { useAppDispatch, useAppSelector } from "@/store"
import { decrement, decrementByAmount, increment, incrementByAmount } from "@/store/features/testSlice";
import { Button, Input, Typography } from "@material-tailwind/react"
import { useState } from "react";





export const ReduxTestPage: React.FC = () => {

    // useDispatch를 사용하여 dispatch 함수를 가져옴
    const dispatch = useAppDispatch();

    // redux store에서 count 상태를 가져옴 "@/store/features/testSlice"
    const count = useAppSelector((state) => state.testReducer.count);

    const [amount, setAmount] = useState(5);

    return (
        <ContentsWrapper title="CODE EXAMPLE" tabType="test">
            <div className="container flex flex-col mt-[200px]">
                <div className="flex flex-col gap-4">
                    <Typography variant="h3">
                        1. Count test : count=[{count}]
                    </Typography>
                    <div className="flex gap-2">
                        <Button onClick={() => dispatch(increment())} color="green" variant="gradient">Increment</Button>
                        <Button onClick={() => dispatch(decrement())} color="red" variant="gradient">Decrement</Button>
                    </div>
                    <hr />
                    <div className="flex gap-2">
                        <Button onClick={() => dispatch(incrementByAmount(amount))} color="green" variant="gradient">Increment [{amount}]</Button>
                        <Button onClick={() => dispatch(decrementByAmount(amount))} color="red" variant="gradient">Decrement {amount}</Button>
                        <Input type="number" value={amount} onChange={(e) => setAmount(Number(e.target.value))} label="Amount" crossOrigin={undefined} />
                    </div>
                </div>
            </div>
        </ContentsWrapper>
    )
}