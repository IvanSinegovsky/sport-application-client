import ExerciseInputItem from "./ExerciseInputItem";
import {useSelector} from "react-redux";

export default function ExerciseInputList() {
    const inputsCounter = useSelector(state => state.inputsCounter.counter)

    return (
        <div>
            {Array.from({length: inputsCounter}).map((_, idx) =>
            <div>
                <ExerciseInputItem />
            </div>)}
        </div>
    )
}
